"use client";

import { AnimateIn } from "./AnimateIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <AnimateIn className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          id={id}
          className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {eyebrow}
        </p>
      )}
      {!eyebrow && id && <span id={id} className="sr-only" />}
      <h2 className="text-3xl font-bold leading-tight text-text md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </AnimateIn>
  );
}
