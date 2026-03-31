import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ── Rate limiting (in-memory, single-instance) ──────────────────────────────
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600_000 }); // 1h window
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

// ── Turnstile verification ───────────────────────────────────────────────────
async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) return true; // skip if not configured

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

// ── Input schema (Zod) ───────────────────────────────────────────────────────
const sanitize = (s: string) =>
  s
    .replace(/<[^>]*>/g, "") // strip HTML
    .trim()
    .slice(0, 2000);

const applicationSchema = z.object({
  company: z.string().min(1).max(200).transform(sanitize),
  website: z
    .string()
    .max(200)
    .optional()
    .transform((v) => (v ? sanitize(v) : "")),
  serviceInterest: z.enum([
    "automation",
    "chatbot",
    "lead-generation",
    "crm-pipeline",
    "strategic-consulting",
    "other",
  ]),
  projectDescription: z
    .string()
    .min(10)
    .max(2000)
    .transform(sanitize),
  name: z.string().min(1).max(200).transform(sanitize),
  email: z.string().email().max(254).transform(sanitize),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]{7,25}$/, "Invalid phone format")
    .transform(sanitize),
  role: z.string().min(1).max(200).transform(sanitize),
  fatturato: z.enum(["less-1M", "1M-5M", "5M-10M", "20M+"]),
  employees: z.enum(["solo", "2-10", "11-50", "51-200", "200+"]),
  timeline: z.enum(["info-only", "3-months", "1-month", "immediately"]),
  privacy: z.boolean().refine((v) => v === true, "Privacy must be accepted"),
  turnstileToken: z.string().optional().default(""),
  locale: z.enum(["it", "en", "es"]).default("it"),
});

type ValidatedData = z.infer<typeof applicationSchema>;

// ── Scoring (server-side only — never exposed to client) ─────────────────────
const SCORE_MAP = {
  fatturato: { "less-1M": 1, "1M-5M": 5, "5M-10M": 8, "20M+": 10 },
  employees: { solo: 1, "2-10": 3, "11-50": 5, "51-200": 7, "200+": 10 },
  timeline: { "info-only": 0, "3-months": 3, "1-month": 7, immediately: 10 },
} as const;

function calculateScore(data: ValidatedData): number {
  let score = 0;
  score +=
    SCORE_MAP.fatturato[data.fatturato as keyof typeof SCORE_MAP.fatturato] ||
    0;
  score +=
    SCORE_MAP.employees[data.employees as keyof typeof SCORE_MAP.employees] ||
    0;
  score +=
    SCORE_MAP.timeline[data.timeline as keyof typeof SCORE_MAP.timeline] || 0;
  return score; // max 30
}

function classifyLead(
  score: number
): "hot" | "warm" | "cold" | "unqualified" {
  if (score >= 20) return "hot";
  if (score >= 14) return "warm";
  if (score >= 7) return "cold";
  return "unqualified";
}

function getRedirect(locale: string, qualified: boolean): string {
  if (qualified) return `/${locale}/prenotazione`;
  return `/${locale}/accesso-negato`;
}

// ── Webhook URL ──────────────────────────────────────────────────────────────
const N8N_WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ||
  "https://appn8n.scalasai.com/webhook/apply";

const ALLOWED_ORIGINS = [
  "https://scalasai.com",
  "https://www.scalasai.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Origin check
  const origin = request.headers.get("origin") || "";
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev && !ALLOWED_ORIGINS.some((o) => origin === o)) {
    return NextResponse.json(
      { success: false, error: "Forbidden" },
      { status: 403 }
    );
  }

  // Body size check (~10KB limit)
  const contentLength = parseInt(
    request.headers.get("content-length") || "0",
    10
  );
  if (contentLength > 10_240) {
    return NextResponse.json(
      { success: false, error: "Payload too large" },
      { status: 413 }
    );
  }

  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests" },
      { status: 429 }
    );
  }

  // Parse body
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  // Validate with Zod
  const parsed = applicationSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Validation failed" },
      { status: 400 }
    );
  }
  const data = parsed.data;

  // Turnstile verification
  if (data.turnstileToken) {
    const turnstileOk = await verifyTurnstile(data.turnstileToken);
    if (!turnstileOk) {
      return NextResponse.json(
        { success: false, error: "Bot verification failed" },
        { status: 403 }
      );
    }
  }

  // Calculate score (server-side only)
  const score = calculateScore(data);
  const classification = classifyLead(score);
  const qualified = classification === "hot" || classification === "warm";

  // Build webhook payload (n8n)
  const payload = {
    firstName: data.name.split(" ")[0] || "",
    lastName: data.name.split(" ").slice(1).join(" ") || "",
    email: data.email,
    phone: data.phone,
    companyName: data.company,
    website: data.website || "",
    role: data.role,
    serviceInterest: data.serviceInterest,
    projectDescription: data.projectDescription,
    fatturato: data.fatturato,
    employees: data.employees,
    timeline: data.timeline,
    locale: data.locale,
    leadScore: score,
    leadClassification: classification,
    qualified,
    source: "scalasai.com",
    submittedAt: new Date().toISOString(),
  };

  // Send to n8n (fire-and-forget style — don't block on failure)
  try {
    const webhookHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET;
    if (webhookSecret) {
      webhookHeaders["X-Webhook-Secret"] = webhookSecret;
    }
    await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: webhookHeaders,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    // Log but don't fail — redirect still works even if webhook times out
    console.error("[apply] n8n webhook failed");
  }

  // Return redirect — score is NEVER returned to the client
  return NextResponse.json({
    success: true,
    redirect: getRedirect(data.locale, qualified),
  });
}
