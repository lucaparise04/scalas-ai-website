import { cn } from "@/lib/utils";

interface GradientGlowProps {
  className?: string;
  variant?: "purple" | "cyan" | "mixed";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-96 h-96",
  lg: "w-[600px] h-[600px]",
};

const colorMap = {
  purple: "bg-purple/20",
  cyan: "bg-cyan/20",
  mixed: "bg-gradient-to-r from-purple/20 to-cyan/20",
};

export default function GradientGlow({
  className,
  variant = "purple",
  size = "md",
}: GradientGlowProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[120px] pointer-events-none",
        sizeMap[size],
        colorMap[variant],
        className
      )}
      aria-hidden
    />
  );
}
