import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: `${t("title")} | ScalasAi`,
    description: t("subtitle"),
  };
}

export default function ChiSiamoPage() {
  return <AboutPageClient />;
}
