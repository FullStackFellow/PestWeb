"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

/**
 * Holds no React state on purpose. Both icons render and CSS shows the one
 * matching the active theme, which avoids a server/client hydration mismatch
 * and a setState-in-effect on every mount.
 */
export function ThemeToggle({ onBand = false }: { onBand?: boolean }) {
  function toggle() {
    const root = document.documentElement;
    const attr = root.getAttribute("data-theme");
    const isDark =
      attr === "dark" ||
      (attr !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("pe-theme", next);
    } catch {
      // Private mode or blocked storage. The choice still applies this session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
      className={cn(
        "grid h-10 w-10 place-items-center rounded-pill border transition-colors duration-200",
        onBand
          ? "border-on-band-2/40 text-on-band-2 hover:border-on-band hover:text-on-band"
          : "border-line text-ink-3 hover:border-line-strong hover:text-ink",
      )}
    >
      <MoonIcon size={18} weight="bold" className="theme-icon-light" />
      <SunIcon size={18} weight="bold" className="theme-icon-dark" />
    </button>
  );
}
