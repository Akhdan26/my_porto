import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "default";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        variant === "accent"
          ? "bg-accent/10 text-accent border border-accent/20"
          : "bg-surface-raised text-text-secondary border border-border"
      }`}
    >
      {children}
    </span>
  );
}
