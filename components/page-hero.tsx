import Link from "next/link";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/layout";

/** Compact header for interior pages. Same type scale rules as the home hero. */
export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs = [],
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="border-b border-line bg-sunken">
      <Container>
        <div className="flex flex-col gap-5 pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          {breadcrumbs.length > 0 ? (
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-ink-3">
                {breadcrumbs.map((crumb) => (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    <Link
                      href={crumb.href}
                      className="transition-colors duration-200 hover:text-accent"
                    >
                      {crumb.label}
                    </Link>
                    <CaretRightIcon size={11} weight="bold" />
                  </li>
                ))}
                <li className="text-ink-2">{title}</li>
              </ol>
            </nav>
          ) : null}

          {eyebrow ? (
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </span>
          ) : null}

          <h1 className="max-w-[20ch] font-display text-[2.25rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-[2.9rem] lg:text-[3.15rem]">
            {title}
          </h1>

          {intro ? (
            <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink-2 sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
