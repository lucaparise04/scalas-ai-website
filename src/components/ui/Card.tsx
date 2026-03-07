"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Card({ className, children, onClick }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative bg-gradient-card border border-white/5 rounded-2xl p-6",
        "hover:border-purple/30 transition-all duration-300",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        boxShadow: isHovered
          ? "0 0 40px rgba(91, 88, 235, 0.15), 0 0 80px rgba(91, 88, 235, 0.05)"
          : "none",
      }}
    >
      {/* Mouse-follow spotlight effect */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(91, 88, 235, 0.08), transparent 40%)`,
          }}
        />
      )}

      {/* Mouse-follow gradient border highlight */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-0"
          style={{
            background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(91, 88, 235, 0.25), transparent 40%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
