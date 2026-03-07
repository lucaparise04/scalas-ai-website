"use client";

import { CLIENT_LOGOS } from "@/lib/constants";

export default function LogoMarquee() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-8 border-y border-white/5 overflow-hidden glass">
      <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-6">
        Powered by
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-16 items-center">
          {logos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 text-lg font-heading whitespace-nowrap text-white/20 hover:text-white transition-colors duration-300 cursor-default select-none"
              style={{ minWidth: logo.width }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
