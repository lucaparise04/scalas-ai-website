"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TEAM_MEMBERS, STATS, BOOKING_URL } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const VALUES = [
  {
    key: "innovation",
    icon: "\ud83d\ude80",
    color: "var(--color-purple)",
  },
  {
    key: "results",
    icon: "\ud83c\udfaf",
    color: "var(--color-cyan)",
  },
  {
    key: "transparency",
    icon: "\ud83d\udd0d",
    color: "var(--color-purple-light)",
  },
  {
    key: "speed",
    icon: "\u26a1",
    color: "var(--color-cyan)",
  },
];

export default function AboutPageClient() {
  const t = useTranslations("about");
  const tHero = useTranslations("hero");

  return (
    <div className="py-24 md:py-32">
      {/* Mission */}
      <section className="mb-24">
        <Container>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 mx-auto max-w-3xl text-center text-lg text-gray-300 leading-relaxed"
          >
            {t("mission")}
          </motion.p>
        </Container>
      </section>

      {/* Stats */}
      <section className="mb-24 py-16 border-y border-white/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-gradient-brand">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  {tHero(`stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="mb-24">
        <Container>
          <SectionHeading
            title={t("values.title")}
            subtitle=""
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VALUES.map((value) => (
              <motion.div
                key={value.key}
                variants={staggerItem}
                className="rounded-2xl bg-gradient-card border border-white/5 p-6 text-center transition-all duration-300 hover:border-[var(--color-purple)]/30"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-4 text-lg font-heading text-white">
                  {t(`values.${value.key}`)}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {t(`values.${value.key}Desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Team */}
      <section className="mb-24">
        <Container>
          <SectionHeading title={t("teamTitle")} subtitle="" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="group rounded-2xl bg-gradient-card border border-white/5 p-6 text-center transition-all duration-300 hover:border-[var(--color-purple)]/30 hover:shadow-[0_0_40px_rgba(91,88,235,0.15)]"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-purple)] to-[var(--color-cyan)]">
                  <span className="text-2xl font-heading text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-cyan)] font-medium">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-gray-400">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button variant="primary" size="lg" href="/apply">
              {t("title") === "Chi Siamo" ? "Lavora con Noi" : "Work With Us"}
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
