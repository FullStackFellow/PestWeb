import type { Metadata } from "next";
import {
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { InspectionForm } from "@/components/inspection-form";
import { Container, Section } from "@/components/ui/layout";
import { cities } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Book a Free Pest Inspection",
  description:
    "Request a free pest, termite or rodent inspection in Orange County, Riverside or the Inland Empire. Call or send your details and we will confirm a time.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Book a free inspection"
        intro="Send the details and we will confirm a time. If it is urgent, calling is faster than the form."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="rounded-card border border-line bg-surface p-7 shadow-card sm:p-9">
              <InspectionForm />
            </div>

            <aside className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-[1.375rem] font-semibold tracking-tight text-ink">
                  Reach us directly
                </h2>

                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3.5 text-ink transition-colors duration-200 hover:text-accent"
                >
                  <PhoneIcon
                    size={20}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[1.0625rem] font-semibold">
                      {site.phoneDisplay}
                    </span>
                    <span className="text-[0.875rem] text-ink-3">
                      Fastest way to get on the schedule
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3.5">
                  <EnvelopeSimpleIcon
                    size={20}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[1.0625rem] font-semibold text-ink">
                      {site.email}
                    </span>
                    <span className="text-[0.875rem] text-ink-3">
                      For billing and existing accounts
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPinIcon
                    size={20}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <address className="flex flex-col gap-0.5 not-italic">
                    <span className="text-[1.0625rem] font-semibold text-ink">
                      {site.address.street}
                    </span>
                    <span className="text-[0.875rem] text-ink-3">
                      {site.address.city}, {site.address.region}{" "}
                      {site.address.postalCode}
                    </span>
                  </address>
                </div>

                <div className="flex items-start gap-3.5">
                  <ClockIcon
                    size={20}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[1.0625rem] font-semibold text-ink">
                      {site.hours}
                    </span>
                    <span className="text-[0.875rem] text-ink-3">
                      Office hours
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-card border border-line bg-sunken p-6">
                <h3 className="font-display text-[1rem] font-semibold tracking-tight text-ink">
                  Service area
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                  {site.region}, including {cities.map((c) => c.name).join(", ")}{" "}
                  and the surrounding communities. Call if you are not sure
                  whether your address is covered.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
