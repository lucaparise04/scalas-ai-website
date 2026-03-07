"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientGlow from "@/components/ui/GradientGlow";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, j) => (
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
  );
}

function TestimonialCard({ item, index }: { item: (typeof TESTIMONIALS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Card className="flex flex-col">
        {/* Quote icon */}
        <svg
          className="w-8 h-8 text-purple/40 mb-4 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
        </svg>

        <StarRating rating={item.rating} />

        {/* Content */}
        <p className="text-white/70 text-sm leading-relaxed mt-4 flex-1">
          &ldquo;{item.content}&rdquo;
        </p>

        {/* Result badge */}
        {item.result && (
          <div className="mt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-medium border border-cyan/20">
              {item.result}
            </span>
          </div>
        )}

        {/* Author */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-heading text-white">
              {item.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">{item.name}</p>
            <p className="text-xs text-white/40">
              {item.role}, {item.company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function SocialProof() {
  const t = useTranslations();

  // Masonry layout: distribute items into 3 columns
  const columns: (typeof TESTIMONIALS)[] = [[], [], []];
  TESTIMONIALS.forEach((item, i) => {
    columns[i % 3].push(item);
  });

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden glow-line-top"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(17, 44, 112, 0.2), transparent)",
      }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Floating gradient orbs */}
      <GradientGlow
        variant="purple"
        size="lg"
        className="top-0 left-0 -translate-x-1/3 -translate-y-1/4"
      />
      <GradientGlow
        variant="cyan"
        size="md"
        className="bottom-0 right-0 translate-x-1/4 translate-y-1/4"
      />

      <Container className="relative z-10">
        <SectionHeading
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
          className="mb-16"
        />

        {/* Desktop: masonry 3-column layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6">
              {column.map((item, i) => (
                <TestimonialCard
                  key={`${colIdx}-${i}`}
                  item={item}
                  index={colIdx + i * 3}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: flat list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={i} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
