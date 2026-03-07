// ============================================================
// SERVICES - 13 categories, 46 services
// ============================================================

export interface Service {
  id: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax: number;
  deliveryDays: string;
  notes?: string;
}

export interface ServiceCategory {
  id: string;
  key: string;
  icon: string;
  services: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-automation",
    key: "ai_automation",
    icon: "Cpu",
    services: [
      {
        id: "workflow-automation",
        name: "Workflow Automation (n8n)",
        description: "Automazione flussi di lavoro con n8n, integrazioni API, trigger e routing intelligente",
        priceMin: 500,
        priceMax: 3000,
        deliveryDays: "5-15",
        notes: "Include setup, testing e documentazione",
      },
      {
        id: "data-sync",
        name: "Data Sync & Integration",
        description: "Sincronizzazione dati tra CRM, database e tool di marketing in tempo reale",
        priceMin: 400,
        priceMax: 2000,
        deliveryDays: "3-10",
      },
      {
        id: "notification-system",
        name: "Smart Notification System",
        description: "Sistema di notifiche intelligenti via email, Slack, WhatsApp basato su eventi",
        priceMin: 300,
        priceMax: 1500,
        deliveryDays: "3-7",
      },
      {
        id: "document-automation",
        name: "Document Automation",
        description: "Generazione automatica di documenti, contratti, report con dati dinamici",
        priceMin: 600,
        priceMax: 2500,
        deliveryDays: "5-12",
      },
    ],
  },
  {
    id: "ai-agents",
    key: "ai_agents",
    icon: "Bot",
    services: [
      {
        id: "chatbot-ai",
        name: "Chatbot AI Personalizzato",
        description: "Chatbot conversazionale con RAG, addestrato sui tuoi dati aziendali",
        priceMin: 1500,
        priceMax: 5000,
        deliveryDays: "10-20",
        notes: "Include training, knowledge base e fine-tuning",
      },
      {
        id: "ai-assistant",
        name: "AI Assistant Interno",
        description: "Assistente AI per il team: risponde a domande, cerca documenti, genera report",
        priceMin: 2000,
        priceMax: 6000,
        deliveryDays: "15-25",
      },
      {
        id: "ai-voice-agent",
        name: "AI Voice Agent",
        description: "Agente vocale AI per call center, prenotazioni e customer service automatizzato",
        priceMin: 3000,
        priceMax: 8000,
        deliveryDays: "15-30",
      },
    ],
  },
  {
    id: "lead-generation",
    key: "lead_generation",
    icon: "Target",
    services: [
      {
        id: "lead-scraping",
        name: "Lead Scraping & Enrichment",
        description: "Estrazione e arricchimento lead da directory, social e database pubblici",
        priceMin: 300,
        priceMax: 1500,
        deliveryDays: "3-7",
        notes: "Include Clay enrichment e data validation",
      },
      {
        id: "lead-qualification",
        name: "AI Lead Qualification",
        description: "Qualificazione automatica lead con scoring AI e routing al team di vendita",
        priceMin: 500,
        priceMax: 2000,
        deliveryDays: "5-10",
      },
      {
        id: "linkedin-automation",
        name: "LinkedIn Automation",
        description: "Automazione outreach LinkedIn: connection requests, messaggi, follow-up",
        priceMin: 400,
        priceMax: 1500,
        deliveryDays: "5-10",
      },
    ],
  },
  {
    id: "cold-email",
    key: "cold_email",
    icon: "Mail",
    services: [
      {
        id: "cold-email-setup",
        name: "Cold Email Infrastructure",
        description: "Setup completo: domini, mailbox, warm-up, DNS (SPF, DKIM, DMARC)",
        priceMin: 500,
        priceMax: 2000,
        deliveryDays: "5-14",
        notes: "Include Instantly setup e monitoring",
      },
      {
        id: "cold-email-campaign",
        name: "Cold Email Campaign",
        description: "Creazione e gestione campagne cold email: copywriting, sequenze, A/B test",
        priceMin: 400,
        priceMax: 1500,
        deliveryDays: "5-10",
      },
      {
        id: "email-deliverability",
        name: "Email Deliverability Audit",
        description: "Audit completo deliverability: reputazione domini, blacklist, spam score",
        priceMin: 200,
        priceMax: 800,
        deliveryDays: "2-5",
      },
    ],
  },
  {
    id: "crm",
    key: "crm",
    icon: "Users",
    services: [
      {
        id: "ghl-setup",
        name: "GoHighLevel Setup",
        description: "Setup completo GHL: pipeline, automazioni, calendari, form, landing page",
        priceMin: 800,
        priceMax: 3000,
        deliveryDays: "7-15",
      },
      {
        id: "crm-migration",
        name: "CRM Migration",
        description: "Migrazione dati e processi da CRM esistente a GoHighLevel",
        priceMin: 500,
        priceMax: 2500,
        deliveryDays: "7-14",
      },
      {
        id: "pipeline-automation",
        name: "Pipeline Automation",
        description: "Automazione pipeline di vendita: stage transitions, follow-up, task assignment",
        priceMin: 400,
        priceMax: 1500,
        deliveryDays: "5-10",
      },
    ],
  },
  {
    id: "social-media",
    key: "social_media",
    icon: "Share2",
    services: [
      {
        id: "social-management",
        name: "Social Media Management",
        description: "Gestione completa social: strategia, piano editoriale, pubblicazione, engagement",
        priceMin: 500,
        priceMax: 2000,
        deliveryDays: "Mensile",
      },
      {
        id: "social-automation",
        name: "Social Media Automation",
        description: "Automazione pubblicazione cross-platform con AI content repurposing",
        priceMin: 400,
        priceMax: 1500,
        deliveryDays: "5-10",
      },
      {
        id: "social-ads",
        name: "Social Ads Management",
        description: "Gestione campagne Meta Ads, LinkedIn Ads con ottimizzazione AI",
        priceMin: 500,
        priceMax: 3000,
        deliveryDays: "Mensile",
        notes: "Budget ads escluso",
      },
    ],
  },
  {
    id: "content",
    key: "content",
    icon: "FileText",
    services: [
      {
        id: "ai-copywriting",
        name: "AI Copywriting",
        description: "Copywriting assistito da AI: landing page, email, ads, social post",
        priceMin: 200,
        priceMax: 1000,
        deliveryDays: "2-5",
      },
      {
        id: "content-strategy",
        name: "Content Strategy",
        description: "Strategia contenuti: keyword research, piano editoriale, content calendar",
        priceMin: 500,
        priceMax: 2000,
        deliveryDays: "5-10",
      },
      {
        id: "blog-automation",
        name: "Blog Automation",
        description: "Pipeline automatizzata: ricerca, scrittura AI, review, pubblicazione SEO",
        priceMin: 600,
        priceMax: 2500,
        deliveryDays: "7-14",
      },
    ],
  },
  {
    id: "web-dev",
    key: "web_dev",
    icon: "Globe",
    services: [
      {
        id: "landing-page",
        name: "Landing Page",
        description: "Landing page ad alta conversione con A/B testing e analytics integrati",
        priceMin: 500,
        priceMax: 2500,
        deliveryDays: "5-10",
      },
      {
        id: "website",
        name: "Sito Web Completo",
        description: "Sito web professionale multi-pagina con CMS, SEO e integrazioni",
        priceMin: 2000,
        priceMax: 8000,
        deliveryDays: "15-30",
      },
      {
        id: "webapp",
        name: "Web Application",
        description: "Applicazione web custom con dashboard, autenticazione e API",
        priceMin: 3000,
        priceMax: 15000,
        deliveryDays: "20-45",
      },
      {
        id: "framer-site",
        name: "Framer Website",
        description: "Sito web animato con Framer: design premium, interazioni fluide, CMS",
        priceMin: 1500,
        priceMax: 5000,
        deliveryDays: "10-20",
      },
    ],
  },
  {
    id: "analytics",
    key: "analytics",
    icon: "BarChart3",
    services: [
      {
        id: "dashboard",
        name: "Custom Dashboard",
        description: "Dashboard personalizzata con KPI real-time, grafici e alert automatici",
        priceMin: 800,
        priceMax: 3000,
        deliveryDays: "7-15",
      },
      {
        id: "reporting-automation",
        name: "Reporting Automation",
        description: "Report automatici: raccolta dati, analisi, generazione e invio schedulato",
        priceMin: 400,
        priceMax: 1500,
        deliveryDays: "5-10",
      },
      {
        id: "tracking-setup",
        name: "Tracking & Analytics Setup",
        description: "Setup completo GA4, GTM, conversion tracking, event tracking",
        priceMin: 300,
        priceMax: 1200,
        deliveryDays: "3-7",
      },
    ],
  },
  {
    id: "consulting",
    key: "consulting",
    icon: "Lightbulb",
    services: [
      {
        id: "ai-strategy",
        name: "AI Strategy Consulting",
        description: "Consulenza strategica AI: audit processi, roadmap automazione, ROI analysis",
        priceMin: 1000,
        priceMax: 5000,
        deliveryDays: "5-10",
      },
      {
        id: "process-audit",
        name: "Process Automation Audit",
        description: "Audit completo dei processi aziendali con prioritizzazione automazioni",
        priceMin: 500,
        priceMax: 2000,
        deliveryDays: "3-7",
      },
      {
        id: "tech-stack-consulting",
        name: "Tech Stack Consulting",
        description: "Consulenza sulla scelta e integrazione del tech stack ottimale",
        priceMin: 300,
        priceMax: 1500,
        deliveryDays: "2-5",
      },
    ],
  },
  {
    id: "training",
    key: "training",
    icon: "GraduationCap",
    services: [
      {
        id: "ai-training",
        name: "AI Tools Training",
        description: "Formazione team sull'uso di strumenti AI: ChatGPT, Claude, Midjourney, n8n",
        priceMin: 500,
        priceMax: 2000,
        deliveryDays: "1-3",
        notes: "Sessioni da 2-4 ore, max 10 persone",
      },
      {
        id: "n8n-training",
        name: "n8n Automation Training",
        description: "Corso pratico su n8n: dai workflow base alle automazioni avanzate",
        priceMin: 800,
        priceMax: 3000,
        deliveryDays: "2-5",
      },
    ],
  },
  {
    id: "video",
    key: "video",
    icon: "Video",
    services: [
      {
        id: "video-outreach",
        name: "Video Outreach (SendSpark)",
        description: "Video personalizzati per outreach: script AI, recording, distribuzione automatizzata",
        priceMin: 400,
        priceMax: 1500,
        deliveryDays: "5-10",
      },
      {
        id: "video-testimonials",
        name: "Video Testimonials",
        description: "Raccolta e produzione video testimonial clienti con workflow automatizzato",
        priceMin: 300,
        priceMax: 1200,
        deliveryDays: "5-10",
      },
    ],
  },
  {
    id: "seo",
    key: "seo",
    icon: "Search",
    services: [
      {
        id: "seo-audit",
        name: "SEO Audit Completo",
        description: "Audit tecnico e contenutistico: site health, keyword gap, competitor analysis",
        priceMin: 500,
        priceMax: 2000,
        deliveryDays: "5-10",
      },
      {
        id: "local-seo",
        name: "Local SEO",
        description: "Ottimizzazione SEO locale: Google Business, citazioni, review management",
        priceMin: 300,
        priceMax: 1200,
        deliveryDays: "5-10",
      },
      {
        id: "seo-monthly",
        name: "SEO Management Mensile",
        description: "Gestione SEO continua: contenuti, link building, monitoring, reporting",
        priceMin: 800,
        priceMax: 3000,
        deliveryDays: "Mensile",
      },
    ],
  },
];

// ============================================================
// TEAM MEMBERS
// ============================================================

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  linkedin?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Anik Sasar Dashantovar",
    role: "CEO & AI Architect",
    description: "Esperto in architetture AI e automazione aziendale. Guida la visione tecnica e strategica di ScalasAi.",
  },
  {
    name: "Marco Rossi",
    role: "CTO & Full-Stack Developer",
    description: "Sviluppatore senior con 8+ anni di esperienza in applicazioni web e integrazioni AI.",
  },
  {
    name: "Sofia Martinez",
    role: "Head of Growth",
    description: "Specialista in lead generation, cold email e strategie di crescita B2B per mercati europei.",
  },
  {
    name: "Alessandro Bianchi",
    role: "AI Engineer",
    description: "Ingegnere AI specializzato in RAG, LLM fine-tuning e agenti conversazionali.",
  },
  {
    name: "Lucia Fernandez",
    role: "Marketing Strategist",
    description: "Stratega di marketing digitale con focus su performance marketing e content strategy.",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  result?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Giovanni Conti",
    role: "Direttore",
    company: "Studio Dentistico Conti - Milano",
    content: "ScalasAi ha trasformato la gestione dei nostri pazienti. Le automazioni ci fanno risparmiare 30 ore a settimana e il sistema di prenotazione AI ha aumentato gli appuntamenti del 40%.",
    rating: 5,
    result: "+40% appuntamenti",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Managing Director",
    company: "Prestige Properties - Dubai",
    content: "The lead generation and CRM automation system built by ScalasAi completely changed our sales process. We went from managing 50 leads/month to 500+ with the same team.",
    rating: 5,
    result: "10x leads generated",
  },
  {
    name: "Francesca De Luca",
    role: "CEO",
    company: "BeautyTech Clinic - Roma",
    content: "Il chatbot AI gestisce il 70% delle richieste dei clienti in autonomia, 24/7. Il team puo finalmente concentrarsi sulla cura dei pazienti.",
    rating: 5,
    result: "70% richieste automatizzate",
  },
  {
    name: "Marco Bergamini",
    role: "Founder",
    company: "Digital Agency Pro - Bologna",
    content: "Le automazioni n8n hanno ridotto i costi operativi del 60%. Il reporting automatico ci ha dato visibilita in real-time su tutti i KPI dei clienti.",
    rating: 5,
    result: "-60% costi operativi",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Sales",
    company: "PropTech Solutions - London",
    content: "The cold email infrastructure ScalasAi built generates 200+ qualified leads per month on autopilot. The ROI was visible within the first 30 days.",
    rating: 5,
    result: "200+ leads/mese",
  },
];

// ============================================================
// FAQ
// ============================================================

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  { questionKey: "faq.items.q1", answerKey: "faq.items.a1" },
  { questionKey: "faq.items.q2", answerKey: "faq.items.a2" },
  { questionKey: "faq.items.q3", answerKey: "faq.items.a3" },
  { questionKey: "faq.items.q4", answerKey: "faq.items.a4" },
  { questionKey: "faq.items.q5", answerKey: "faq.items.a5" },
];

// ============================================================
// CLIENT LOGOS
// ============================================================

export const CLIENT_LOGOS = [
  { name: "GoHighLevel", width: 140 },
  { name: "Instantly", width: 120 },
  { name: "Clay", width: 80 },
  { name: "NocoDB", width: 110 },
  { name: "Supabase", width: 120 },
  { name: "n8n", width: 60 },
  { name: "ClickUp", width: 110 },
  { name: "OpenAI", width: 100 },
  { name: "Anthropic", width: 120 },
  { name: "Meta", width: 80 },
];

// ============================================================
// STATS
// ============================================================

export const STATS = [
  { value: 150, suffix: "+", key: "automations" },
  { value: 2400, suffix: "+", key: "hours" },
  { value: 300, suffix: "%", key: "roi" },
  { value: 35, suffix: "+", key: "clients" },
];

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/servizi", labelKey: "nav.services" },
  { href: "/chi-siamo", labelKey: "nav.about" },
  { href: "/apply", labelKey: "nav.apply" },
];

// ============================================================
// EXTERNAL LINKS
// ============================================================

export const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID";
export const WHATSAPP_URL = "https://wa.me/393XXXXXXXXX";
export const CHATWOOT_URL = "https://chatwoot.scalasai.com";
