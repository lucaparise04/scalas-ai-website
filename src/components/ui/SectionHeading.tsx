"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  tag?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  tag,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(centered && "text-center", className)}
    >
      {/* Gradient accent line */}
      <div
        className={cn(
          "w-10 h-[2px] mb-6 rounded-full bg-gradient-cta",
          centered && "mx-auto"
        )}
      />

      {/* Optional tag badge */}
      {tag && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-widest uppercase rounded-full border border-purple/30 bg-purple/10 text-purple-light">
          {tag}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-gradient-brand">
        {title}
      </h2>

      {subtitle && (
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
