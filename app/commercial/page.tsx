import type { Metadata } from "next";
import Image from "next/image";
import {
  ClipboardTextIcon,
  ClockIcon,
  EyeSlashIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { industries } from "@/lib/content";
import { placeholderImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Pest Control for Southern California Businesses",
  description:
    "Commercial pest, termite and rodent control with documented service records, scheduling around your operating hours and discreet service in customer-facing areas.",
  alternates: { canonical: "/commercial" },
};

const differences = [
  {
    icon: ClipboardTextIcon,
    title: "Documented service records",
    body: "Every visit is logged with what was found, what was applied and where, so the paperwork is ready when a health inspector asks for it.",
  },
  {
    icon: ClockIcon,
    title: "Scheduled around your hours",
    body: "Service happens before open, after close or during a shift change, whichever keeps your operation running without a gap.",
  },
  {
    icon: EyeSlashIcon,
    title: "Discreet in customer areas",
    body: "Unmarked service where it matters, and technicians who understand that a dining room is not a warehouse dock.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="For businesses"
        title="Commercial pest control that fits how you operate"
        intro="A pest problem in a business is a compliance problem, a reputation problem and an operations problem at the same time. Commercial work runs differently from residential for that reason."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="flex flex-col gap-10">
              {differences.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="flex gap-5">
                      <Icon
                        size={26}
                        weight="duotone"
                        className="mt-1 shrink-0 text-accent"
                      />
                      <div className="flex flex-col gap-2">
                        <h2 className="font-display text-[1.25rem] font-semibold tracking-tight text-ink">
                          {item.title}
                        </h2>
                        <p className="max-w-[54ch] text-[0.9375rem] leading-relaxed text-ink-2">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-card bg-sunken shadow-card lg:aspect-auto lg:min-h-[26rem]">
              <Image
                /* PLACEHOLDER PHOTO: replace before launch. */
                src={placeholderImage("pest-eliminators-commercial-kitchen-service", 800, 900)}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-sunken">
        <Container>
          <SectionHeading
            title="Properties we work in"
            intro="Different buildings fail in different places. A restaurant and a warehouse need the same diligence applied to completely different problems."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col gap-2 bg-surface p-7"
              >
                <h3 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
                  {industry.name}
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-ink-3">
                  {industry.note}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Request a commercial site assessment"
        intro="Tell us the property type and what you are dealing with. We will walk the site, identify the pressure points and put together a service schedule that fits your hours."
      />
    </>
  );
}
