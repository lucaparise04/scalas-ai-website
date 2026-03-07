"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
          className="mb-16"
        />

        <motion.div
          className="max-w-3xl mx-auto glass rounded-2xl p-6 md:p-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div key={i} variants={staggerItem}>
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
