import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Guarantee } from "@/components/sections/guarantee";
import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { localPillars } from "@/lib/content";
import { placeholderImage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Pest Eliminators | Locally Owned Southern California Pest Control",
  description:
    "Pest Eliminators is a locally owned pest control company serving Orange County, Riverside and the Inland Empire with licensed technicians who live in the areas they service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A local company, run by the people doing the work"
        intro="Pest Eliminators is owned and operated in Southern California. There is no national parent company, no franchise agreement and no dispatch center in another state."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="max-w-[20ch] font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-[2.4rem]">
                Why the local part matters more than it sounds
              </h2>
              <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-2">
                Pest control is not a single transaction. The problems here come
                back on a seasonal cycle, which means the value of the service is
                almost entirely in whether the person who shows up knows the
                history of your property.
              </p>
              <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-2">
                That is the part a large operation cannot really promise. When
                scheduling is handled at national scale, you get whoever is
                available, and the knowledge about your property lives in a
                database instead of in someone who has stood in your side yard.
              </p>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-card bg-sunken shadow-card">
              <Image
                /* PLACEHOLDER PHOTO: replace with a real team or vehicle photo. */
                src={placeholderImage("pest-eliminators-team-service-vehicle", 900, 675)}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-sunken">
        <Container>
          <SectionHeading
            title="How we work"
            intro="These are the operating commitments behind the service, not slogans."
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

      <Section className="bg-bg">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 rounded-card border border-line bg-surface p-8 shadow-card sm:p-10">
            <h2 className="font-display text-[1.5rem] font-semibold tracking-tight text-ink">
              Licensing and credentials
            </h2>
            <dl className="flex flex-col divide-y divide-line">
              <div className="flex flex-wrap justify-between gap-3 py-4">
                <dt className="text-[0.9375rem] text-ink-3">
                  California structural pest control license
                </dt>
                <dd className="text-[0.9375rem] font-semibold text-ink">
                  {site.license}
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 py-4">
                <dt className="text-[0.9375rem] text-ink-3">Serving the area since</dt>
                <dd className="text-[0.9375rem] font-semibold text-ink">
                  {site.foundedYear}
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-3 py-4">
                <dt className="text-[0.9375rem] text-ink-3">Service area</dt>
                <dd className="max-w-[22ch] text-right text-[0.9375rem] font-semibold text-ink">
                  {site.region}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </Section>

      <Guarantee />
      <CtaBand />
    </>
  );
}
