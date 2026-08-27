import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll reveal, implemented with CSS scroll-driven animation
 * (`animation-timeline: view()`), which design skill 5.D lists as an allowed
 * technique alongside Motion.
 *
 * Why CSS rather than Motion's whileInView here: the JS approach ships
 * `opacity: 0` in the server-rendered HTML, so if the observer never runs the
 * content is permanently invisible. On a lead-generating site that failure mode
 * is not acceptable. This version is inverted and fails safe: content is
 * visible by default and the animation is added ONLY where the browser
 * explicitly supports the feature and the visitor has not asked for reduced
 * motion. No JavaScript, no scroll listener, compositor driven.
 *
 * `delay` staggers items that enter together by offsetting the entry range.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={
        delay
          ? ({ "--reveal-start": `${Math.round(delay * 100)}%` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
