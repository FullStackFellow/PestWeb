import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { cities } from "@/lib/content";
import { placeholderImage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Orange County, Riverside and the Inland Empire",
  description:
    "Pest Eliminators serves the Orange County, Riverside and Inland Empire corridor in Southern California. See local pest conditions by city.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Where we work"
        intro="We cover the Orange County, Riverside and Inland Empire corridor. Conditions change across that stretch, so the schedule that works near the coast is not the one that works inland."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <SectionHeading
            title="Local pest conditions by city"
            intro="Each page below covers the climate, the pests that come with it and the timing that matters for that specific area."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <Reveal key={city.slug} delay={i * 0.08}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-sm transition-shadow duration-300 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sunken">
                    <Image
                      /* PLACEHOLDER PHOTO: replace before launch. */
                      src={placeholderImage(city.imageSeed, 600, 375)}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-6">
                    <h3 className="font-display text-[1.25rem] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
                      {city.name}, CA
                    </h3>
                    <p className="flex-1 text-[0.875rem] leading-relaxed text-ink-3">
                      {city.blurb}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-accent">
                      Local conditions
                      <ArrowRightIcon
                        size={14}
                        weight="bold"
                        className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 rounded-card border border-line bg-sunken p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-ink-2">
              Not sure whether your address falls inside the service area? Call
              before you book and we will tell you straight away.
            </p>
            <a
              href={site.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-semibold text-accent"
            >
              <PhoneIcon size={17} weight="fill" />
              {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
