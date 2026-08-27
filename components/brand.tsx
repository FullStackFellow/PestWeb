import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * PROPOSED IDENTITY, NOT AN EXISTING BRAND ASSET.
 *
 * No logo was supplied by the business. This is a typographic monogram lockup
 * (accent tile + two-letter monogram + wordmark) rather than a hand-drawn SVG
 * illustration. Replace with the real mark once one exists.
 */
export function Brand({
  onBand = false,
  className,
  href = "/",
}: {
  onBand?: boolean;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`Pest Eliminators home`}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-[10px] font-display",
          "text-[0.9375rem] font-bold leading-none tracking-tight",
          "transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-px",
          onBand
            ? "bg-accent-on-band text-band"
            : "bg-accent text-on-accent",
        )}
      >
        PE
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-semibold tracking-tight",
            onBand ? "text-on-band" : "text-ink",
          )}
        >
          Pest Eliminators
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6875rem] font-medium tracking-wide",
            onBand ? "text-on-band-2" : "text-ink-3",
          )}
        >
          Southern California
        </span>
      </span>
    </Link>
  );
}
