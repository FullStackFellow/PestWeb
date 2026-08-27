/**
 * Central site configuration.
 *
 * IMPORTANT: every value marked PLACEHOLDER is unconfirmed business data.
 * These are deliberately non-functional tokens so nothing fake can be mistaken
 * for real, verified information. See PLACEHOLDERS.md at the project root.
 */

export const site = {
  name: "Pest Eliminators",
  legalName: "Pest Eliminators",

  /** PLACEHOLDER: reserved .example TLD so no real domain is implied. */
  url: "https://www.pesteliminators.example",

  /** PLACEHOLDER: not a dialable number. */
  phoneDisplay: "(XXX) XXX-XXXX",
  phoneHref: "tel:XXXXXXXXXX",

  /** PLACEHOLDER */
  email: "[EMAIL ADDRESS]",

  /** PLACEHOLDER */
  address: {
    street: "[STREET ADDRESS]",
    city: "[CITY]",
    region: "CA",
    postalCode: "[ZIP]",
    country: "US",
  },

  /** PLACEHOLDER: a California structural pest control license maps to a real regulatory record. */
  license: "[LICENSE #]",

  /** PLACEHOLDER */
  foundedYear: "[YEAR]",
  yearsInBusiness: "[YEARS]",

  /** PLACEHOLDER: hours are unconfirmed. */
  hours: "[BUSINESS HOURS]",

  region: "Orange County, Riverside and the Inland Empire",
  regionShort: "Southern California",
} as const;

export const primaryCta = {
  /**
   * CANONICAL CONVERSION LABEL. One label per intent (design skill 4.5).
   * Do not introduce "Book an inspection", "Schedule now", "Get started" or
   * any other wording for this same action anywhere on the site.
   */
  label: "Free Inspection",
  href: "/contact",
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = {
  services: [
    { label: "General Pest Control", href: "/services/general-pest" },
    { label: "Termite Control", href: "/services/termite" },
    { label: "Rodent Control", href: "/services/rodent" },
    { label: "All Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  audiences: [
    { label: "For Homeowners", href: "/residential" },
    { label: "For Businesses", href: "/commercial" },
  ],
} as const;

/** Picsum placeholder image helper. Every use needs a real photo before launch. */
export function placeholderImage(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
