"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientGlow from "@/components/ui/GradientGlow";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function TeamPreview() {
  const t = useTranslations();

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden glow-line-top"
      style={{
        background:
          "linear-gradient(180deg, rgba(10, 35, 83, 0.15) 0%, transparent 30%, transparent 70%, rgba(10, 35, 83, 0.15) 100%)",
      }}
    >
      {/* Centered gradient glow behind the grid */}
      <GradientGlow
        variant="mixed"
        size="lg"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <Container className="relative z-10">
        <SectionHeading title={t("about.teamTitle")} className="mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              <Card className="text-center group">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-cta mx-auto mb-5 flex items-center justify-center group-hover:glow-purple transition-shadow duration-300">
                  <span className="text-2xl font-heading text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-heading text-white group-hover:text-gradient-brand transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-cyan mt-1">{member.role}</p>

                {/* Description */}
                <p className="text-sm text-white/50 mt-3 leading-relaxed">
                  {member.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="/chi-siamo" variant="secondary" size="lg">
            {t("about.title")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
