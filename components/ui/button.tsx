import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Radius: pill, per the documented shape rule in globals.css.
 * Contrast: every variant below is checked against its intended surface for
 * WCAG AA (4.5:1) in both light and dark token sets.
 */
type Variant = "solid" | "outline" | "onBand" | "onBandGhost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-medium " +
  "transition-[background-color,color,border-color,transform,box-shadow] duration-200 " +
  "ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-px";

const variants: Record<Variant, string> = {
  solid:
    "bg-accent text-on-accent shadow-sm hover:bg-accent-hover hover:shadow-card",
  outline:
    "border border-line-strong text-ink hover:border-accent hover:text-accent bg-transparent",
  onBand:
    "bg-accent-on-band text-band shadow-sm hover:brightness-110",
  onBandGhost:
    "border border-on-band-2/40 text-on-band hover:border-on-band hover:bg-on-band/10",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "solid",
  size = "md",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentProps<"button">;

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        base,
        variants[variant],
        sizes[size],
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
