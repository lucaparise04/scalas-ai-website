import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: `${t("title")} | ScalasAi`,
    description: t("subtitle"),
  };
}

export default function ServiziPage() {
  return <ServicesPageClient />;
}
