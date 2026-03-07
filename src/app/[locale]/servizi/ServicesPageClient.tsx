"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const ICONS: Record<string, string> = {
  Cpu: "\u2699\ufe0f",
  Bot: "\ud83e\udd16",
  Target: "\ud83c\udfaf",
  Mail: "\u2709\ufe0f",
  Users: "\ud83d\udc65",
  Share2: "\ud83d\udcf1",
  FileText: "\ud83d\udcdd",
  Globe: "\ud83c\udf10",
  BarChart3: "\ud83d\udcca",
  Lightbulb: "\ud83d\udca1",
  GraduationCap: "\ud83c\udf93",
  Video: "\ud83c\udfa5",
  Search: "\ud83d\udd0d",
};

export default function ServicesPageClient() {
  const t = useTranslations("services");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-16 space-y-16">
          {SERVICE_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="text-3xl">
                  {ICONS[category.icon] || "\u26a1"}
                </span>
                <h2 className="text-2xl font-heading md:text-3xl text-white">
                  {t(`categories.${category.key}`)}
                </h2>
                <span className="ml-auto text-sm text-gray-500">
                  {category.services.length}{" "}
                  {category.services.length === 1 ? "servizio" : "servizi"}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={staggerItem}
                    className="group relative rounded-2xl bg-gradient-card border border-white/5 p-6 transition-all duration-300 hover:border-[var(--color-purple)]/30 hover:shadow-[0_0_40px_rgba(91,88,235,0.15)]"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {t("delivery")}: {service.deliveryDays}{" "}
                        {service.deliveryDays !== "Mensile" ? t("days") : ""}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="primary" size="lg" href="/apply">
            {t("requestQuote")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
