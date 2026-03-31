import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const GHL_CALENDAR_ID = process.env.NEXT_PUBLIC_GHL_CALENDAR_ID || "";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "form" });
  return {
    title: `${t("successQualified")} | ScalasAI`,
    robots: { index: false },
  };
}

export default async function PrenotazionePage() {
  const t = await getTranslations("form");

  return (
    <main className="min-h-screen bg-black py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Success header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-3">
              {t("successQualified")}
            </h1>
            <p className="text-white/50 text-lg">{t("bookCallPrompt")}</p>
          </div>

          {/* Calendar widget or fallback */}
          {GHL_CALENDAR_ID ? (
            <div className="glass rounded-2xl p-4 overflow-hidden">
              <iframe
                src={`https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`}
                style={{ width: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
                className="min-h-[600px] rounded-xl"
                title="Book a call"
              />
            </div>
          ) : (
            <div className="glass rounded-2xl p-12 text-center">
              <p className="text-white/50 mb-6">{t("bookCallPrompt")}</p>
              <Button href="mailto:info@scalasai.com" size="lg">
                info@scalasai.com
              </Button>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
