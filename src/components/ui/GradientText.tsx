"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
}

export default function GradientText({
  as: Tag = "span",
  className,
  children,
}: GradientTextProps) {
  return (
    <Tag className={cn("text-gradient-brand", className)}>{children}</Tag>
  );
}
