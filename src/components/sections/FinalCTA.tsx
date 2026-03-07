"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientGlow from "@/components/ui/GradientGlow";
import { fadeInUp } from "@/lib/animations";
import { BOOKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  const t = useTranslations();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <GradientGlow variant="purple" size="lg" className="top-0 left-1/4" />
      <GradientGlow variant="cyan" size="md" className="bottom-0 right-1/4" />

      <Container>
        <motion.div
          className="relative max-w-3xl mx-auto text-center glass rounded-3xl p-10 lg:p-16 glow-purple-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gradient-brand">
            {t("cta.title")}
          </h2>
          <p className="mt-6 text-white/50 text-lg leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="mt-10">
            <Button href={BOOKING_URL} size="lg">
              {t("cta.button")}
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/30">{t("cta.noCommitment")}</p>
        </motion.div>
      </Container>
    </section>
  );
}
