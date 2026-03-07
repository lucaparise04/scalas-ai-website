"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "cyan" | "purple";
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = "purple",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block glass text-xs font-medium rounded-full px-3 py-1",
        variant === "cyan" && "text-cyan border-cyan/20",
        variant === "purple" && "text-purple-light border-purple/20",
        className
      )}
    >
      {children}
    </span>
  );
}
