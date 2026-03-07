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
      {/* Floating gradient orbs */}
      <GradientGlow variant="purple" size="lg" className="top-0 left-1/4 animate-pulse" />
      <GradientGlow variant="cyan" size="md" className="bottom-0 right-1/4 animate-pulse" />

      <Container>
        <motion.div
          className="relative rounded-3xl overflow-hidden noise"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Gradient border */}
          <div className="gradient-border rounded-3xl">
            <div className="bg-gradient-brand rounded-3xl p-10 md:p-16 lg:p-20 text-center relative overflow-hidden">
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
                  <Button href={BOOKING_URL} size="lg" className="bg-white text-navy hover:bg-cream">
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
