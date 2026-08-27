import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Reveal } from "@/components/reveal";
import { Container, Section } from "@/components/ui/layout";
import { cities, getCity, services, faqs } from "@/lib/content";
import { placeholderImage } from "@/lib/site";
import { JsonLd, cityJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  return {
    title: `Pest Control in ${city.name}, CA`,
    description: `Local pest, termite and rodent control in ${city.name}, ${city.county}. Free inspections from a locally owned Southern California team.`,
    alternates: { canonical: `/service-areas/${city.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <JsonLd data={cityJsonLd(city.name)} />

      <PageHero
        eyebrow={city.county}
        title={`Pest control in ${city.name}, CA`}
        intro={city.blurb}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
        ]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="max-w-[20ch] font-display text-[1.875rem] leading-tight font-semibold tracking-tight text-ink sm:text-[2.25rem]">
                The climate here, and what it means
              </h2>
              <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-2">
                {city.climate}
              </p>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-card bg-sunken shadow-card">
              <Image
                /* PLACEHOLDER PHOTO: replace before launch. */
                src={placeholderImage(city.imageSeed, 800, 600)}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-sunken">
        <Container>
          <h2 className="max-w-[22ch] font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-[2.4rem]">
            {`What we see most in ${city.name}`}
          </h2>

          <div className="mt-12 flex flex-col divide-y divide-line border-y border-line">
            {city.pressures.map((pressure, i) => (
              <Reveal key={pressure.pest} delay={i * 0.07}>
                <div className="grid gap-3 py-7 sm:grid-cols-[0.32fr_1fr] sm:gap-8">
                  <h3 className="font-display text-[1.1875rem] font-semibold tracking-tight text-accent">
                    {pressure.pest}
                  </h3>
                  <p className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-2">
                    {pressure.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg">
        <Container>
          <h2 className="font-display text-[1.5rem] font-semibold tracking-tight text-ink">
            {`Services available in ${city.name}`}
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between gap-3 rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent"
              >
                <span className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
                  {service.name}
                </span>
                <ArrowRightIcon
                  size={17}
                  weight="bold"
                  className="shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection items={faqs.slice(2, 6)} />
      <CtaBand
        title={`Book a free inspection in ${city.name}`}
        intro="Tell us what you are seeing and where. A licensed technician will confirm what it is and what it costs to fix, at no charge."
      />
    </>
  );
}
