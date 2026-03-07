"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function TeamPreview() {
  const t = useTranslations();

  return (
    <section className="relative py-20 lg:py-32">
      <Container>
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gradient-brand">
            {t("about.teamTitle")}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TEAM_MEMBERS.slice(0, 3).map((member, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-cta mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-heading text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-cyan mt-1">{member.role}</p>
                <p className="text-sm text-white/50 mt-3">
                  {member.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
