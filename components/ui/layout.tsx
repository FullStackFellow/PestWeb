import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** VISUAL_DENSITY 4: generous but not art-gallery. py-20 to py-28. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

/**
 * Vertically stacked heading. Deliberately NOT the banned split-header pattern
 * (big headline left, small floating explainer right).
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onBand = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onBand?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-[0.6875rem] font-semibold uppercase tracking-[0.16em]",
            onBand ? "text-accent-on-band" : "text-accent",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display text-[2rem] leading-[1.12] font-semibold tracking-tight sm:text-[2.6rem]",
          onBand ? "text-on-band" : "text-ink",
          align === "center" ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "max-w-[62ch] text-base leading-relaxed sm:text-[1.0625rem]",
            onBand ? "text-on-band-2" : "text-ink-2",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
