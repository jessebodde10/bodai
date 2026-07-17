import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const variants = {
    primary:
      "bg-accent-fill text-black hover:brightness-110 hover:shadow-[0_0_32px_rgba(184,255,61,0.35)] active:scale-[0.98]",
    secondary:
      "border border-line-strong text-fg hover:border-accent/60 hover:bg-tile active:scale-[0.98]",
    ghost: "text-fg-muted hover:text-fg",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </Link>
  );
}
