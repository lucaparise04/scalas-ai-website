"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function QualificationForm() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 lg:py-32">
        <Container>
          <motion.div
            className="max-w-2xl mx-auto text-center glass rounded-2xl p-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="text-5xl mb-4">&#10003;</div>
            <h2 className="text-2xl font-heading font-bold text-white">
              {t("form.success")}
            </h2>
          </motion.div>
        </Container>
      </section>
    );
  }

  const industries = [
    "dental",
    "realestate",
    "ecommerce",
    "saas",
    "agency",
    "consulting",
    "other",
  ];

  return (
    <section className="py-20 lg:py-32">
      <Container>
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-gradient-brand">
              {t("form.title")}
            </h1>
            <p className="mt-4 text-white/50 text-lg">{t("form.subtitle")}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-purple focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-purple focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Company + Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  {t("form.company")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-purple focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  {t("form.website")}
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-purple focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm text-white/70 mb-2">
                {t("form.industry")}
              </label>
              <select
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple focus:outline-none transition-colors"
              >
                <option value="" className="bg-navy">
                  --
                </option>
                {industries.map((ind) => (
                  <option key={ind} value={ind} className="bg-navy">
                    {t(`form.industries.${ind}`)}
                  </option>
                ))}
              </select>
            </div>

            {/* Employees + Revenue */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  {t("form.employees")}
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple focus:outline-none transition-colors"
                >
                  <option value="" className="bg-navy">--</option>
                  <option value="1-5" className="bg-navy">1-5</option>
                  <option value="6-20" className="bg-navy">6-20</option>
                  <option value="21-50" className="bg-navy">21-50</option>
                  <option value="51-200" className="bg-navy">51-200</option>
                  <option value="200+" className="bg-navy">200+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  {t("form.budget")}
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple focus:outline-none transition-colors"
                >
                  <option value="" className="bg-navy">--</option>
                  <option value="500-1000" className="bg-navy">500 - 1.000 EUR</option>
                  <option value="1000-3000" className="bg-navy">1.000 - 3.000 EUR</option>
                  <option value="3000-5000" className="bg-navy">3.000 - 5.000 EUR</option>
                  <option value="5000+" className="bg-navy">5.000+ EUR</option>
                </select>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <label className="block text-sm text-white/70 mb-2">
                {t("form.challenge")}
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-purple focus:outline-none transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {t("form.submit")}
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
