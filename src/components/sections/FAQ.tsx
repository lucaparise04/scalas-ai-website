"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientGlow from "@/components/ui/GradientGlow";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden glow-line-top"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(91, 88, 235, 0.08), transparent)",
      }}
    >
      {/* Glow behind the FAQ container */}
      <GradientGlow
        variant="purple"
        size="md"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <Container className="relative z-10">
        <SectionHeading
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
          className="mb-16"
        />

        <motion.div
          className="max-w-3xl mx-auto glass rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            >
              <Accordion
                question={t(item.questionKey)}
                answer={t(item.answerKey)}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
