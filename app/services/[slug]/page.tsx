import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Reveal } from "@/components/reveal";
import { Container, Section } from "@/components/ui/layout";
import { getService, services, faqs } from "@/lib/content";
import { placeholderImage } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.name} in Orange County and Riverside, CA`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        title={service.name}
        intro={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <p className="max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink-2">
                {service.intro}
              </p>

              <div className="flex flex-col gap-3 border-t border-line pt-6">
                <h2 className="font-display text-[1.125rem] font-semibold tracking-tight text-ink">
                  What we treat
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {service.pests.map((pest) => (
                    <li
                      key={pest}
                      className="rounded-pill bg-accent-soft px-3.5 py-1.5 text-[0.875rem] font-medium text-accent"
                    >
                      {pest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-card bg-sunken shadow-card lg:aspect-[4/4.6]">
              <Image
                /* PLACEHOLDER PHOTO: replace before launch. */
                src={placeholderImage(service.imageSeed, 800, 920)}
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
          <h2 className="max-w-[18ch] font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-[2.4rem]">
            What the service includes
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {service.covers.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-accent text-on-accent">
                    <CheckIcon size={15} weight="bold" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-[1.125rem] font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-2">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg">
        <Container>
          <h2 className="font-display text-[1.5rem] font-semibold tracking-tight text-ink">
            Other services
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex items-center justify-between gap-4 rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent"
              >
                <span className="flex flex-col gap-1.5">
                  <span className="font-display text-[1.125rem] font-semibold tracking-tight text-ink">
                    {other.name}
                  </span>
                  <span className="text-[0.875rem] leading-relaxed text-ink-3">
                    {other.summary}
                  </span>
                </span>
                <ArrowRightIcon
                  size={18}
                  weight="bold"
                  className="shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection items={faqs.slice(1, 5)} />
      <CtaBand />
    </>
  );
}
