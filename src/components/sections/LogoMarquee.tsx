"use client";

import { CLIENT_LOGOS } from "@/lib/constants";

export default function LogoMarquee() {
  // Triple the logos for seamless wrapping
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative py-10 overflow-hidden bg-gradient-to-b from-[rgba(10,35,83,0.3)] via-transparent to-[rgba(10,35,83,0.3)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 gradient-line" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <p className="text-center text-xs text-white/40 uppercase tracking-[0.2em] mb-8 font-medium">
        Powered by
      </p>

      <div className="relative marquee-mask">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-16 items-center">
          {logos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 text-lg font-heading whitespace-nowrap text-white/40 hover:text-white transition-colors duration-300 cursor-default select-none"
              style={{ minWidth: logo.width }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
