"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientGlow from "@/components/ui/GradientGlow";
import Badge from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";

export default function VideoSection() {
  const t = useTranslations();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <GradientGlow variant="purple" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container>
        <SectionHeading
          title={t("services.title")}
          subtitle="Scopri come trasformiamo i business con l'AI"
          className="mb-16"
        />

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Gradient border wrapper */}
          <div className="gradient-border rounded-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden glow-purple-lg">
              {/* Glass background */}
              <div className="absolute inset-0 glass-strong flex items-center justify-center">
                <div className="text-center relative z-10">
                  {/* Play button */}
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-cta flex items-center justify-center mx-auto mb-6 cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>

                  {/* Coming soon badge */}
                  <Badge variant="purple">
                    Video content coming soon
                  </Badge>
                </div>

                {/* Floating glow effects behind play button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple/15 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan/10 rounded-full blur-[60px] pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
