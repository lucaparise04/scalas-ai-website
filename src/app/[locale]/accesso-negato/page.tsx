import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "ScalasAI",
    robots: { index: false },
  };
}

export default async function AccessoNegatoPage() {
  const t = await getTranslations("form");

  return (
    <main className="min-h-screen bg-black py-20 flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center glass rounded-2xl p-12">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-purple/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-purple"
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
          <h1 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
            {t("successQualified").split("!")[0]}!
          </h1>
          <p className="text-white/50 text-lg mb-8">
            {t("successUnqualified")}
          </p>
          <Button href="mailto:info@scalasai.com" variant="secondary" size="lg">
            info@scalasai.com
          </Button>
        </div>
      </Container>
    </main>
  );
}
