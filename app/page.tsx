import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { LocalDifference } from "@/components/sections/local-difference";
import { ServicesBento } from "@/components/sections/services-bento";
import { Process } from "@/components/sections/process";
import { AudienceSplit } from "@/components/sections/audience-split";
import { Coverage } from "@/components/sections/coverage";
import { Reviews } from "@/components/sections/reviews";
import { Guarantee } from "@/components/sections/guarantee";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pest Control in Orange County and Riverside, CA | Pest Eliminators",
  description:
    "Locally owned pest, termite and rodent control for homes and businesses across Orange County, Riverside and the Inland Empire. Free inspections, same technician every visit.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs.slice(0, 6))} />
      <Hero />
      <TrustBar />
      <LocalDifference />
      <ServicesBento />
      <Process />
      <AudienceSplit />
      <Coverage />
      <Reviews />
      <Guarantee />
      <FaqSection />
      <CtaBand />
    </>
  );
}
