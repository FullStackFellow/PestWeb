import Link from "next/link";
import { MapPinIcon, PhoneIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Brand } from "@/components/brand";
import { Container } from "@/components/ui/layout";
import { cities } from "@/lib/content";
import { footerNav, site } from "@/lib/site";

/**
 * NAP (name, address, phone) is rendered here in exactly the same format used
 * in the header, the contact page and the LocalBusiness schema. Local search
 * ranking depends on that consistency, so change all four together.
 */
export function SiteFooter() {
  return (
    <footer className="bg-band text-on-band-2">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
          <div className="flex flex-col gap-6">
            <Brand onBand />
            <p className="max-w-[34ch] text-[0.9375rem] leading-relaxed">
              Locally owned pest control for {site.region}. Free inspections for
              homes and businesses.
            </p>

            <address className="flex flex-col gap-3 not-italic text-[0.9375rem]">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2.5 font-semibold text-on-band transition-colors duration-200 hover:text-accent-on-band"
              >
                <PhoneIcon size={17} weight="fill" className="text-accent-on-band" />
                {site.phoneDisplay}
              </a>
              <span className="inline-flex items-start gap-2.5">
                <MapPinIcon
                  size={17}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-accent-on-band"
                />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </span>
              </span>
              <span className="inline-flex items-center gap-2.5">
                <EnvelopeSimpleIcon
                  size={17}
                  weight="fill"
                  className="text-accent-on-band"
                />
                {site.email}
              </span>
            </address>
          </div>

          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Company" links={footerNav.company} />

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-[0.9375rem] font-semibold text-on-band">
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2.5 text-[0.9375rem]">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="transition-colors duration-200 hover:text-on-band"
                  >
                    {city.name}, CA
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="font-medium text-accent-on-band transition-colors duration-200 hover:brightness-110"
                >
                  View coverage
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-on-band-2/20 py-8 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {site.legalName}. California
            structural pest control license {site.license}.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-on-band"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="transition-colors duration-200 hover:text-on-band"
            >
              FAQ
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-display text-[0.9375rem] font-semibold text-on-band">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5 text-[0.9375rem]">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors duration-200 hover:text-on-band"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
