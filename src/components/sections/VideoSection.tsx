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
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <GradientGlow variant="purple" size="lg" className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute -left-20 top-1/3 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-64 h-64 rounded-full bg-purple/10 blur-[100px]" />
      </motion.div>
      <motion.div
        className="absolute -right-20 bottom-1/4 pointer-events-none"
        animate={{
          y: [0, 15, 0],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-48 h-48 rounded-full bg-cyan/10 blur-[80px]" />
      </motion.div>

      <Container className="relative z-10">
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
          {/* Animated gradient border wrapper */}
          <div className="relative rounded-2xl p-[1px] overflow-hidden">
            {/* Spinning gradient border */}
            <motion.div
              className="absolute -inset-[1px] rounded-2xl pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, #5b58eb, #bb63ff, #56e1e9, #5b58eb)",
                opacity: 0.6,
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative aspect-video rounded-2xl overflow-hidden glow-purple-lg bg-[rgba(10,35,83,0.95)]">
              {/* Glass background */}
              <div className="absolute inset-0 glass-strong flex items-center justify-center">
                {/* Grid pattern inside */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                <div className="text-center relative z-10">
                  {/* Play button with pulsing rings */}
                  <div className="relative mx-auto mb-6" style={{ width: 96, height: 96 }}>
                    {/* Pulse ring 1 */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple/40 pointer-events-none"
                      animate={{
                        scale: [1, 1.6],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    {/* Pulse ring 2 */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-cyan/30 pointer-events-none"
                      animate={{
                        scale: [1, 1.8],
                        opacity: [0.4, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                    />
                    {/* Pulse ring 3 */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-purple-light/20 pointer-events-none"
                      animate={{
                        scale: [1, 2],
                        opacity: [0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1.2,
                      }}
                    />

                    {/* Actual play button */}
                    <motion.div
                      className="relative w-24 h-24 rounded-full bg-gradient-cta flex items-center justify-center cursor-pointer shadow-lg"
                      whileHover={{
                        scale: 1.15,
                        boxShadow: "0 0 40px rgba(91, 88, 235, 0.5), 0 0 80px rgba(187, 99, 255, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Coming soon badge */}
                  <Badge variant="purple">
                    Video content coming soon
                  </Badge>
                </div>

                {/* Floating glow effects behind play button */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple/15 rounded-full blur-[80px] pointer-events-none"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan/10 rounded-full blur-[60px] pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
