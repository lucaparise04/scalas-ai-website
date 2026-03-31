"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Turnstile } from "@marsidev/react-turnstile";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { SparklesCore } from "@/components/ui/aceternity/sparkles-core";
import { fadeInUp } from "@/lib/animations";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

interface FormData {
  company: string;
  website: string;
  serviceInterest: string;
  projectDescription: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  fatturato: string;
  employees: string;
  timeline: string;
  privacy: boolean;
  turnstileToken: string;
}

export default function QualificationForm() {
  const t = useTranslations();
  const locale = useLocale();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    company: "",
    website: "",
    serviceInterest: "",
    projectDescription: "",
    name: "",
    email: "",
    phone: "",
    role: "",
    fatturato: "",
    employees: "",
    timeline: "",
    privacy: false,
    turnstileToken: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.privacy) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data = await res.json();

      if (data.success && data.redirect) {
        window.location.href = data.redirect;
      } else {
        setError(t("form.error"));
        setSubmitting(false);
      }
    } catch {
      setError(t("form.error"));
      setSubmitting(false);
    }
  };

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass =
    "w-full px-5 py-4 bg-white/[0.07] border border-white/15 rounded-xl text-white placeholder-white/30 focus:border-purple focus:ring-1 focus:ring-purple/30 focus:outline-none transition-all text-base";

  const isStep1Valid =
    formData.company.trim() &&
    formData.serviceInterest &&
    formData.projectDescription.trim().length >= 10;

  const isTurnstileReady = !TURNSTILE_SITE_KEY || !!formData.turnstileToken;

  return (
    <section
      id="contattaci"
      className="relative py-20 lg:py-32 overflow-hidden bg-black glow-line-top"
    >
      {/* CSS gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(91,88,235,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(187,99,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(86,225,233,0.04) 0%, transparent 40%)",
        }}
      />

      {/* Neural network dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(187,99,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated radial gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 30%, rgba(91,88,235,0.10) 0%, transparent 60%)",
            "radial-gradient(ellipse at 70% 60%, rgba(187,99,255,0.10) 0%, transparent 60%)",
            "radial-gradient(ellipse at 40% 70%, rgba(86,225,233,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse at 30% 30%, rgba(91,88,235,0.10) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D data streams background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [-20, 20, -20], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/cta-data-streams.webp"
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </motion.div>

      {/* Background beams */}
      <BackgroundBeams />

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore particleCount={70} minSize={1.0} maxSize={3.0} />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-12">
            <p className="text-sm text-cyan font-medium mb-3 tracking-wide uppercase">
              {t("form.socialProof")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gradient-brand">
              {t("form.title")}
            </h2>
            <p className="mt-4 text-white/50 text-lg">{t("form.subtitle")}</p>
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm text-amber-300/90">
                {t("form.urgency")}
              </span>
            </div>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div
              className={`flex items-center gap-2.5 ${step === 1 ? "text-white" : "text-white/30"}`}
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step === 1 ? "bg-purple text-white" : "bg-purple/30 text-white/60"}`}
              >
                {step > 1 ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  "1"
                )}
              </span>
              <span className="text-sm font-medium">
                {t("form.step1Label")}
              </span>
            </div>
            <div className="w-12 h-px bg-white/20" />
            <div
              className={`flex items-center gap-2.5 ${step === 2 ? "text-white" : "text-white/30"}`}
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step === 2 ? "bg-purple text-white" : "bg-white/10 text-white/50"}`}
              >
                2
              </span>
              <span className="text-sm font-medium">
                {t("form.step2Label")}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: Project info */}
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
              >
                {/* Company + Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.company")} <span className="text-purple">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className={inputClass}
                      placeholder="Acme S.r.l."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.website")}{" "}
                      <span className="text-white/30">
                        ({t("form.optional")})
                      </span>
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => updateField("website", e.target.value)}
                      className={inputClass}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    {t("form.serviceInterest")}{" "}
                    <span className="text-purple">*</span>
                  </label>
                  <select
                    required
                    value={formData.serviceInterest}
                    onChange={(e) =>
                      updateField("serviceInterest", e.target.value)
                    }
                    className={inputClass}
                  >
                    <option value="" className="bg-navy">
                      --
                    </option>
                    <option value="automation" className="bg-navy">
                      {t("form.serviceOptions.automation")}
                    </option>
                    <option value="chatbot" className="bg-navy">
                      {t("form.serviceOptions.chatbot")}
                    </option>
                    <option value="lead-generation" className="bg-navy">
                      {t("form.serviceOptions.leadGeneration")}
                    </option>
                    <option value="crm-pipeline" className="bg-navy">
                      {t("form.serviceOptions.crmPipeline")}
                    </option>
                    <option value="strategic-consulting" className="bg-navy">
                      {t("form.serviceOptions.strategicConsulting")}
                    </option>
                    <option value="other" className="bg-navy">
                      {t("form.serviceOptions.other")}
                    </option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    {t("form.projectDescription")}{" "}
                    <span className="text-purple">*</span>
                  </label>
                  <textarea
                    required
                    minLength={10}
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) =>
                      updateField("projectDescription", e.target.value)
                    }
                    className={`${inputClass} resize-none`}
                    placeholder={t("form.projectDescriptionPlaceholder")}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={!isStep1Valid}
                >
                  {t("form.next")} →
                </Button>
              </motion.form>
            )}

            {/* STEP 2: Contact + Qualification */}
            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.name")} <span className="text-purple">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={inputClass}
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.email")} <span className="text-purple">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.phone")} <span className="text-purple">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputClass}
                      placeholder="+39 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.role")} <span className="text-purple">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => updateField("role", e.target.value)}
                      className={inputClass}
                      placeholder="CEO, Direttore Marketing..."
                    />
                  </div>
                </div>

                {/* Fatturato + Employees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.fatturato")}{" "}
                      <span className="text-purple">*</span>
                    </label>
                    <select
                      required
                      value={formData.fatturato}
                      onChange={(e) =>
                        updateField("fatturato", e.target.value)
                      }
                      className={inputClass}
                    >
                      <option value="" className="bg-navy">
                        --
                      </option>
                      <option value="less-1M" className="bg-navy">
                        {t("form.fatturatoOptions.less1M")}
                      </option>
                      <option value="1M-5M" className="bg-navy">
                        {t("form.fatturatoOptions.1M5M")}
                      </option>
                      <option value="5M-10M" className="bg-navy">
                        {t("form.fatturatoOptions.5M10M")}
                      </option>
                      <option value="20M+" className="bg-navy">
                        {t("form.fatturatoOptions.20Mplus")}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      {t("form.employees")}{" "}
                      <span className="text-purple">*</span>
                    </label>
                    <select
                      required
                      value={formData.employees}
                      onChange={(e) =>
                        updateField("employees", e.target.value)
                      }
                      className={inputClass}
                    >
                      <option value="" className="bg-navy">
                        --
                      </option>
                      <option value="solo" className="bg-navy">
                        {t("form.employeeOptions.solo")}
                      </option>
                      <option value="2-10" className="bg-navy">
                        2–10
                      </option>
                      <option value="11-50" className="bg-navy">
                        11–50
                      </option>
                      <option value="51-200" className="bg-navy">
                        51–200
                      </option>
                      <option value="200+" className="bg-navy">
                        200+
                      </option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    {t("form.timeline")} <span className="text-purple">*</span>
                  </label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => updateField("timeline", e.target.value)}
                    className={inputClass}
                  >
                    <option value="" className="bg-navy">
                      --
                    </option>
                    <option value="info-only" className="bg-navy">
                      {t("form.timelineOptions.infoOnly")}
                    </option>
                    <option value="3-months" className="bg-navy">
                      {t("form.timelineOptions.threeMonths")}
                    </option>
                    <option value="1-month" className="bg-navy">
                      {t("form.timelineOptions.oneMonth")}
                    </option>
                    <option value="immediately" className="bg-navy">
                      {t("form.timelineOptions.immediately")}
                    </option>
                  </select>
                </div>

                {/* Turnstile widget */}
                {TURNSTILE_SITE_KEY && (
                  <div className="flex justify-center">
                    <Turnstile
                      siteKey={TURNSTILE_SITE_KEY}
                      onSuccess={(token) =>
                        updateField("turnstileToken", token)
                      }
                      onError={() => updateField("turnstileToken", "")}
                      onExpire={() => updateField("turnstileToken", "")}
                    />
                  </div>
                )}

                {/* Privacy checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacy}
                      onChange={(e) => updateField("privacy", e.target.checked)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        formData.privacy
                          ? "border-purple bg-purple"
                          : "border-white/30 bg-white/5"
                      }`}
                    >
                      {formData.privacy && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                  <span className="text-sm text-white/50">
                    {t("form.privacyLabel")}{" "}
                    <a
                      href="/privacy-policy"
                      className="text-purple hover:underline"
                      target="_blank"
                    >
                      {t("form.privacyLink")}
                    </a>
                  </span>
                </label>

                {/* Error message */}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(1)}
                    disabled={submitting}
                  >
                    {t("form.back")}
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1"
                    disabled={submitting || !formData.privacy || !isTurnstileReady}
                    loading={submitting}
                  >
                    {t("form.submit")}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
