import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/ui/accordion";
import { Container, Section } from "@/components/ui/layout";
import { faqs } from "@/lib/content";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pest Control FAQ",
  description:
    "Answers to common questions about pest control cost, pet and child safety, service frequency, inspections and service areas in Southern California.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero
        title="Questions and answers"
        intro="What people ask most often before booking. If yours is not covered here, ask during the inspection, it costs nothing either way."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Faq items={faqs} />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
