import Image from "next/image";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { placeholderImage, primaryCta, site } from "@/lib/site";

/**
 * Asymmetric split hero (DESIGN_VARIANCE 6, so not centred).
 *
 * Hero stack discipline: exactly three text elements (headline, subtext, CTA
 * row). No eyebrow, no trust micro-strip, no tagline under the buttons. The
 * trust row lives in its own section directly below.
 *
 * Top padding stays under the pt-24 cap so the content does not float.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg">
      <Container>
        <div className="grid items-center gap-12 pt-16 pb-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-24">
          <div className="flex flex-col items-start gap-7">
            <h1 className="max-w-[24ch] font-display text-[2.25rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-[2.65rem] lg:text-[2.9rem]">
              Local pest control, same technician every visit.
            </h1>

            <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-2 sm:text-lg">
              Ants, termites and rodents across Orange County and Riverside,
              handled by a team that works these neighborhoods year round.
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={primaryCta.href} size="lg">
                {primaryCta.label}
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-pill border border-line-strong px-7 text-base font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <PhoneIcon size={18} weight="fill" className="text-accent" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-sunken shadow-lift lg:aspect-[4/4.4]">
              <Image
                /* PLACEHOLDER PHOTO: replace with real Pest Eliminators imagery. */
                src={placeholderImage("pest-eliminators-hero-technician-socal", 1200, 1320)}
                alt="Pest control technician inspecting the exterior of a Southern California home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
