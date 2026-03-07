"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const t = useTranslations();

  return (
    <section className="relative py-20 lg:py-32">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gradient-brand">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TESTIMONIALS.map((item, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  &ldquo;{item.content}&rdquo;
                </p>

                {/* Result badge */}
                {item.result && (
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium">
                      {item.result}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-white/40">
                    {item.role}, {item.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
