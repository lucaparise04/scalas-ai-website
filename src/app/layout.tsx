import type { Metadata, Viewport } from "next";
import { Righteous, Rubik } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScalasAi - Acceleriamo la tua crescita con l'IA",
  description:
    "AI Automation Agency. Automatizziamo i tuoi processi aziendali con intelligenza artificiale, eliminando il lavoro manuale e moltiplicando i risultati.",
  keywords: [
    "AI automation",
    "intelligenza artificiale",
    "automazione aziendale",
    "n8n",
    "lead generation",
    "CRM",
  ],
  authors: [{ name: "ScalasAi" }],
  openGraph: {
    title: "ScalasAi - Acceleriamo la tua crescita con l'IA",
    description:
      "AI Automation Agency specializzata in automazione aziendale e intelligenza artificiale.",
    type: "website",
    locale: "it_IT",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${righteous.variable} ${rubik.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
