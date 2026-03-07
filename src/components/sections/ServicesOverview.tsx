"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GradientGlow from "@/components/ui/GradientGlow";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { formatPriceRange } from "@/lib/utils";

export default function ServicesOverview() {
  const t = useTranslations();

  const featured = SERVICE_CATEGORIES.slice(0, 6);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <GradientGlow variant="mixed" size="lg" className="-right-40 top-40" />

      <Container>
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gradient-brand">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featured.map((category) => (
            <motion.div key={category.id} variants={staggerItem}>
              <Card className="h-full">
                <div className="mb-4">
                  <span className="text-3xl">{getCategoryEmoji(category.key)}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {t(`services.categories.${category.key}`)}
                </h3>
                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 3).map((service) => (
                    <li
                      key={service.id}
                      className="text-sm text-white/50 flex items-start gap-2"
                    >
                      <span className="text-cyan mt-1 flex-shrink-0">&#8226;</span>
                      <span>{service.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-sm text-white/30">
                    {t("services.from")}{" "}
                    <span className="text-cyan font-bold">
                      {formatPriceRange(
                        Math.min(...category.services.map((s) => s.priceMin)),
                        Math.min(...category.services.map((s) => s.priceMin))
                      )}
                    </span>
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button href="/servizi" variant="secondary" size="lg">
            {t("services.viewAll")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

function getCategoryEmoji(key: string): string {
  const map: Record<string, string> = {
    ai_automation: "\u2699\ufe0f",
    ai_agents: "\u{1F916}",
    lead_generation: "\u{1F3AF}",
    cold_email: "\u{1F4E7}",
    crm: "\u{1F4CA}",
    social_media: "\u{1F4F1}",
    content: "\u270D\ufe0f",
    web_dev: "\u{1F310}",
    analytics: "\u{1F4CA}",
    consulting: "\u{1F4A1}",
    training: "\u{1F393}",
    video: "\u{1F3AC}",
    seo: "\u{1F50D}",
  };
  return map[key] || "\u26A1";
}
