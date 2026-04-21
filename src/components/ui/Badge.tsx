"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "glow";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-200",
        {
          "bg-white/10 text-white/80 backdrop-blur-sm border border-white/15 hover:bg-white/15":
            variant === "default",
          "border border-indigo-500/50 text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20":
            variant === "outline",
          "bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_12px_0_rgba(99,102,241,0.25)] hover:shadow-[0_0_18px_0_rgba(99,102,241,0.4)]":
            variant === "glow",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
