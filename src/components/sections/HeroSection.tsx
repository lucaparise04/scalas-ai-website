"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientGlow from "@/components/ui/GradientGlow";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { STATS, BOOKING_URL } from "@/lib/constants";

// Animated 3D placeholder - replace with Spline when scene is ready:
// import dynamic from "next/dynamic";
// const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });
// Then use: <Spline scene="YOUR_SPLINE_URL" />

function Hero3DPlaceholder() {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-card relative overflow-hidden flex items-center justify-center">
      {/* Animated gradient orbs */}
      <div className="absolute w-40 h-40 rounded-full bg-purple/30 blur-[60px] animate-pulse top-1/4 left-1/4" />
      <div className="absolute w-32 h-32 rounded-full bg-cyan/30 blur-[60px] animate-pulse bottom-1/4 right-1/4" style={{ animationDelay: "1s" }} />
      <div className="absolute w-24 h-24 rounded-full bg-purple-light/20 blur-[40px] animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "0.5s" }} />

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Center icon */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-cta flex items-center justify-center glow-purple">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </div>
        <p className="text-sm text-white/40 font-medium">AI-Powered</p>
      </motion.div>
    </div>
  );
}

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

          {/* Right side - 3D Visual */}
          <motion.div
            className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] xl:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Hero3DPlaceholder />
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
