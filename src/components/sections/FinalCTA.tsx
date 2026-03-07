"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientGlow from "@/components/ui/GradientGlow";
import { BOOKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  const t = useTranslations();

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden glow-line-top"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(91, 88, 235, 0.12), transparent)",
      }}
    >
      {/* Floating gradient orbs */}
      <GradientGlow
        variant="purple"
        size="lg"
        className="top-0 left-1/4 animate-pulse"
      />
      <GradientGlow
        variant="cyan"
        size="md"
        className="bottom-0 right-1/4 animate-pulse"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {([
          { top: "15%", left: "10%", right: undefined, delay: "0s", size: "3px" },
          { top: "25%", left: undefined, right: "15%", delay: "0.5s", size: "2px" },
          { top: "60%", left: "20%", right: undefined, delay: "1s", size: "2px" },
          { top: "75%", left: undefined, right: "25%", delay: "1.5s", size: "3px" },
          { top: "40%", left: "80%", right: undefined, delay: "2s", size: "2px" },
          { top: "85%", left: "40%", right: undefined, delay: "2.5s", size: "2px" },
        ] as const).map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-light/40"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              width: p.size,
              height: p.size,
              animation: `particle-float 4s ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated gradient border wrapper */}
          <div className="gradient-border-animated rounded-3xl">
            <div className="bg-gradient-brand rounded-3xl p-10 md:p-16 lg:p-20 text-center relative overflow-hidden noise">
              {/* Inner glow effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-light/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-tight">
                  {t("cta.title")}
                </h2>

                <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
                  {t("cta.subtitle")}
                </p>

                <div className="mt-10">
                  <Button
                    href={BOOKING_URL}
                    size="lg"
                    className="bg-white! text-navy! hover:bg-cream! font-semibold shadow-lg shadow-white/10"
                  >
                    {t("cta.button")}
                  </Button>
                </div>

                <p className="mt-4 text-sm text-white/40">
                  {t("cta.noCommitment")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
