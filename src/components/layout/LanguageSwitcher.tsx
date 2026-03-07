"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const LOCALES = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: LocaleCode) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  const currentLabel =
    LOCALES.find((l) => l.code === locale)?.label ?? "IT";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium",
          "text-gray-300 hover:text-white transition-colors cursor-pointer",
          "glass border border-white/10 hover:border-purple/30"
        )}
      >
        {currentLabel}
        <svg
          className="w-3.5 h-3.5 ml-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 glass-strong rounded-lg overflow-hidden min-w-[72px] shadow-lg shadow-black/30"
          >
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={cn(
                  "block w-full px-4 py-2 text-sm text-left transition-colors cursor-pointer",
                  l.code === locale
                    ? "bg-purple/20 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
