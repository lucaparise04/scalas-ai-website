"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientGlow from "@/components/ui/GradientGlow";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { STATS, BOOKING_URL } from "@/lib/constants";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-2xl bg-gradient-card animate-pulse flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-cta opacity-30 animate-ping" />
    </div>
  ),
});

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero noise">
      {/* Floating gradient orbs */}
      <GradientGlow variant="purple" size="lg" className="top-10 -left-60 animate-pulse" />
      <GradientGlow variant="cyan" size="md" className="bottom-40 -right-40 animate-pulse" />
      <GradientGlow variant="mixed" size="sm" className="top-1/2 left-1/3 animate-pulse" />

      <Container className="relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <Badge variant="cyan">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  {t("hero.badge")}
                </span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-heading leading-tight"
            >
              <span className="text-gradient-brand">{t("hero.title")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button href={BOOKING_URL} size="lg">
                {t("hero.cta")}
              </Button>
              <Button href="/servizi" variant="secondary" size="lg">
                {t("hero.ctaSecondary")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Spline 3D */}
          <motion.div
            className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] xl:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Suspense
                fallback={
                  <div className="w-full h-full rounded-2xl bg-gradient-card animate-pulse flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-cta opacity-30 animate-ping" />
                  </div>
                }
              >
                <Spline scene="https://prod.spline.design/placeholder/scene.splinecode" />
              </Suspense>
            </div>
            {/* Glow behind 3D scene */}
            <div className="absolute -inset-8 bg-purple/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.key}
              variants={staggerItem}
              className="text-center glass rounded-xl py-6 px-4"
            >
              <div className="text-3xl lg:text-4xl font-heading text-gradient-brand">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/50">
                {t(`hero.stats.${stat.key}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
