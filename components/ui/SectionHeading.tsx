import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "text-center items-center mx-auto" : "items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </span>
      <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
