import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { placeholderImage } from "@/lib/site";

const panels = [
  {
    href: "/residential",
    title: "For your home",
    body: "Recurring protection for houses, condos and rentals, with the same technician handling your property each visit.",
    cta: "Residential services",
    seed: "pest-eliminators-residential-home-socal",
  },
  {
    href: "/commercial",
    title: "For your business",
    body: "Service records for health inspections, scheduling around your hours and discretion in customer-facing areas.",
    cta: "Commercial services",
    seed: "pest-eliminators-commercial-property-storefront",
  },
];

/**
 * Full-bleed two-panel split so a homeowner and a business owner each see
 * their own path immediately, without a shared generic entry point.
 */
export function AudienceSplit() {
  return (
    <section className="grid sm:grid-cols-2">
      {panels.map((panel, i) => (
        <Reveal key={panel.href} delay={i * 0.1}>
          <Link
            href={panel.href}
            className="group relative flex min-h-[24rem] w-full flex-col justify-end overflow-hidden lg:min-h-[30rem]"
          >
            <Image
              /* PLACEHOLDER PHOTO: replace before launch. */
              src={placeholderImage(panel.seed, 1000, 900)}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0d1015] via-[#0d1015]/75 to-[#0d1015]/15"
            />

            <div className="relative flex flex-col gap-3.5 p-8 lg:p-12">
              <h3 className="font-display text-[1.875rem] leading-tight font-semibold tracking-tight text-[#f2f0ec] lg:text-[2.25rem]">
                {panel.title}
              </h3>
              <p className="max-w-[40ch] text-[0.9375rem] leading-relaxed text-[#c9ccd2] lg:text-base">
                {panel.body}
              </p>
              <span className="mt-1 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#f08d5c]">
                {panel.cta}
                <ArrowRightIcon
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </section>
  );
}
