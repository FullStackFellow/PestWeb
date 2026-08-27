import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Guarantee } from "@/components/sections/guarantee";
import { FaqSection } from "@/components/sections/faq-section";
import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { services, faqs, localPillars } from "@/lib/content";
import { placeholderImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Pest Control for Southern California Homes",
  description:
    "Pest, termite and rodent control for houses, condos and rentals across Orange County, Riverside and the Inland Empire. Free inspections, same technician every visit.",
  alternates: { canonical: "/residential" },
};

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="For homeowners"
        title="Pest control for your home, not a generic plan"
        intro="Most homes here do better on a recurring schedule than on one-off treatments, because the pressure does not stop in winter. What that schedule looks like depends on your property."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-card bg-sunken shadow-card">
              <Image
                /* PLACEHOLDER PHOTO: replace before launch. */
                src={placeholderImage("pest-eliminators-residential-interior-service", 900, 675)}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </figure>

            <div className="flex flex-col gap-6">
              <h2 className="max-w-[18ch] font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-[2.4rem]">
                What a home service actually covers
              </h2>
              <p className="max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-2">
                Treatment inside where there is active traffic, a barrier around
                the foundation and entry points outside, and attention to the
                harborage close to the structure. The exterior work is what
                keeps the interior quiet.
              </p>
              <ul className="flex flex-col divide-y divide-line border-y border-line">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-4 py-5"
                    >
                      <span className="flex flex-col gap-1">
                        <span className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
                          {service.name}
                        </span>
                        <span className="max-w-[46ch] text-[0.875rem] leading-relaxed text-ink-3">
                          {service.summary}
                        </span>
                      </span>
                      <ArrowRightIcon
                        size={17}
                        weight="bold"
                        className="shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-sunken">
        <Container>
          <SectionHeading
            title="Why homeowners stay with a local company"
            intro="The difference shows up after the first visit, when you find out whether the same person comes back."
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-3">
            {localPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="flex flex-col gap-3 border-t-2 border-accent pt-6">
                  <h3 className="font-display text-[1.1875rem] leading-snug font-semibold tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Guarantee />
      <FaqSection items={faqs.slice(0, 5)} />
      <CtaBand
        title="Book a free home inspection"
        intro="A licensed technician will walk the property, tell you what is active and what is drawing it in, and give you a price before you commit to anything."
      />
    </>
  );
}
