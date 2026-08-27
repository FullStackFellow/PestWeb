import { site } from "./site";

/**
 * LocalBusiness structured data.
 *
 * NOTE: address, phone and license are placeholders. The schema shape is
 * correct and wired up now so that filling in real values is a one-file edit,
 * but do not submit this to search engines until those values are real.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: site.name,
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Orange County, California" },
      { "@type": "AdministrativeArea", name: "Riverside County, California" },
      { "@type": "AdministrativeArea", name: "Inland Empire, California" },
    ],
    priceRange: "$$",
  };
}

export function cityJsonLd(cityName: string) {
  return {
    ...localBusinessJsonLd(),
    areaServed: {
      "@type": "City",
      name: `${cityName}, California`,
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
