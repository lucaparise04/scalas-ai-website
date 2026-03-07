"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientGlow from "@/components/ui/GradientGlow";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { STATS, BOOKING_URL } from "@/lib/constants";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      <GradientGlow variant="purple" size="lg" className="top-20 -left-40" />
      <GradientGlow variant="cyan" size="md" className="bottom-20 -right-20" />

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight"
          >
            <span className="text-gradient-brand">{t("hero.title")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href={BOOKING_URL} size="lg">
              {t("hero.cta")}
            </Button>
            <Button href="/servizi" variant="secondary" size="lg">
              {t("hero.ctaSecondary")}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STATS.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-gradient-brand">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/50">
                  {t(`hero.stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
