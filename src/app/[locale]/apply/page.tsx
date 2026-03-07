import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import QualificationForm from "@/components/forms/QualificationForm";
import Container from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "form" });
  return {
    title: `${t("title")} | ScalasAi`,
    description: t("subtitle"),
  };
}

export default function ApplyPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <QualificationForm />
      </Container>
    </section>
  );
}
