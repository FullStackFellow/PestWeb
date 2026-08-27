"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { nav, primaryCta, site } from "@/lib/site";
import { cn } from "@/lib/cn";

/** Navigation renders on ONE line at desktop and stays under the 80px cap. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <Brand />

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[0.9375rem] font-medium transition-colors duration-200",
                    active ? "text-accent" : "text-ink-2 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-[0.9375rem] font-semibold text-ink transition-colors duration-200 hover:text-accent xl:inline-flex"
            >
              <PhoneIcon size={17} weight="fill" className="text-accent" />
              {site.phoneDisplay}
            </a>

            <ThemeToggle />

            <ButtonLink href={primaryCta.href} className="hidden sm:inline-flex">
              {primaryCta.label}
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-pill border border-line text-ink transition-colors duration-200 hover:border-line-strong lg:hidden"
            >
              <ListIcon size={20} weight="bold" />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 bg-bg lg:hidden">
          <Container>
            <div className="flex h-18 items-center justify-between">
              <Brand />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-pill border border-line text-ink"
              >
                <XIcon size={20} weight="bold" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-4 flex flex-col">
              {[...nav, { label: "Reviews", href: "/reviews" }, { label: "FAQ", href: "/faq" }].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line py-4 font-display text-[1.375rem] font-medium tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink
                href={primaryCta.href}
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-pill border border-line-strong text-base font-medium text-ink"
              >
                <PhoneIcon size={18} weight="fill" className="text-accent" />
                {site.phoneDisplay}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
