import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/sections/process";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/reveal";
import { Container, Section } from "@/components/ui/layout";
import { services } from "@/lib/content";
import { placeholderImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Control Services in Orange County and Riverside, CA",
  description:
    "General pest control, termite inspection and treatment, and rodent removal with exclusion work. Serving homes and businesses across Southern California.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Pest control, termite and rodent services"
        intro="Three services that cover what actually shows up in this region. Each one starts with a free inspection so the recommendation matches the property rather than a template."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                  }`}
                >
                  <figure className="relative aspect-[4/3] overflow-hidden rounded-card bg-sunken shadow-card">
                    <Image
                      /* PLACEHOLDER PHOTO: replace before launch. */
                      src={placeholderImage(service.imageSeed, 900, 675)}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </figure>

                  <div className="flex flex-col items-start gap-5">
                    <h2 className="font-display text-[1.875rem] leading-tight font-semibold tracking-tight text-ink sm:text-[2.25rem]">
                      {service.name}
                    </h2>
                    <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-2">
                      {service.summary}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.pests.slice(0, 6).map((pest) => (
                        <li
                          key={pest}
                          className="rounded-pill bg-accent-soft px-3.5 py-1.5 text-[0.8125rem] font-medium text-accent"
                        >
                          {pest}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group mt-1 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-accent"
                    >
                      See what it covers
                      <ArrowRightIcon
                        size={16}
                        weight="bold"
                        className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Process />
      <CtaBand />
    </>
  );
}
