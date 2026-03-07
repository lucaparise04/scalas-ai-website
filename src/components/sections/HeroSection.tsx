"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
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
    <div className="w-full h-full rounded-2xl bg-gradient-card relative overflow-hidden flex items-center justify-center animate-float">
      {/* Animated gradient orbs with staggered pulse */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-purple/30 blur-[60px] top-1/4 left-1/4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-cyan/30 blur-[60px] bottom-1/4 right-1/4"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-purple-light/20 blur-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

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

// Floating particle component
function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-purple/30 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
      }}
      animate={{
        y: [0, -30, -15, -40, 0],
        x: [0, 10, -10, 5, 0],
        opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// Beam line component
function BeamLine({ left, delay }: { left: string; delay: number }) {
  return (
    <motion.div
      className="absolute top-0 w-px pointer-events-none"
      style={{ left, height: "100px" }}
      animate={{
        y: ["-100%", "100vh"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan/50 to-transparent" />
    </motion.div>
  );
}

export default function HeroSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: `${x}px`, y: `${y}px` });
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero noise"
    >
      {/* Mouse-follow spotlight overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x} ${mousePos.y}, rgba(91, 88, 235, 0.07), transparent 40%)`,
        }}
      />

      {/* Dot grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Animated beam lines */}
      <BeamLine left="20%" delay={0} />
      <BeamLine left="50%" delay={1.5} />
      <BeamLine left="80%" delay={3} />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={4} />
      <FloatingParticle delay={1.2} x="25%" y="60%" size={3} />
      <FloatingParticle delay={0.8} x="70%" y="30%" size={5} />
      <FloatingParticle delay={2} x="85%" y="70%" size={3} />
      <FloatingParticle delay={1.5} x="45%" y="80%" size={4} />
      <FloatingParticle delay={0.5} x="60%" y="15%" size={3} />
      <FloatingParticle delay={2.5} x="90%" y="45%" size={4} />
      <FloatingParticle delay={1.8} x="15%" y="75%" size={3} />

      {/* Floating gradient orbs with staggered pulse animations */}
      <motion.div
        className="absolute top-10 -left-60"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <GradientGlow variant="purple" size="lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 -right-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <GradientGlow variant="cyan" size="md" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/3"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <GradientGlow variant="mixed" size="sm" />
      </motion.div>

      <Container className="relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge with shimmer/pulse border */}
            <motion.div variants={staggerItem} className="mb-6">
              <Badge variant="cyan" className="relative overflow-hidden">
                <span className="flex items-center gap-2 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  {t("hero.badge")}
                </span>
                {/* Badge shimmer overlay */}
                <motion.span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: "linear-gradient(110deg, transparent 30%, rgba(86, 225, 233, 0.15) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </Badge>
            </motion.div>

            {/* Headline - larger with shimmer on gradient text */}
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[0.95] tracking-tight"
            >
              <span className="text-gradient-brand relative inline-block">
                {t("hero.title")}
                {/* Shimmer overlay on text */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.12) 50%, transparent 75%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                  aria-hidden
                >
                  {t("hero.title")}
                </motion.span>
              </span>
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

          {/* Right side - 3D Visual with floating animation */}
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
            <motion.div
              className="absolute -inset-8 bg-purple/10 rounded-full blur-[100px] -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.18, 0.1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Stats row with hover glow effect */}
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
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(91, 88, 235, 0.2), 0 0 60px rgba(91, 88, 235, 0.05)",
              }}
              className="text-center glass rounded-xl py-6 px-4 transition-all duration-300 hover:border-purple/30 cursor-default"
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

      {/* Scroll indicator at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ transform: "translateX(-50%)" }}
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <motion.svg
          className="w-5 h-5 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
