"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function TeamPreview() {
  const t = useTranslations();

  return (
    <section className="relative py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t("about.teamTitle")}
          className="mb-16"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div key={i} variants={staggerItem}>
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
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button href="/chi-siamo" variant="secondary" size="lg">
            {t("about.title")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
