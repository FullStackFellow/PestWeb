import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { cities } from "@/lib/content";

const counties = [
  {
    name: "Orange County",
    note: "Coastal-influenced, mild year round, heavy drywood termite and ant pressure in older neighborhoods.",
  },
  {
    name: "Riverside County",
    note: "Hotter and drier inland, with subterranean termite activity around irrigation and rodents moving in each fall.",
  },
  {
    name: "Inland Empire",
    note: "Valley and wildland edge conditions, where properties backing open space see steady rodent and spider pressure.",
  },
];

/**
 * Contained panel layout, distinct from every other section family on the page.
 * Written with local specifics rather than a dumped list of city names.
 */
export function Coverage() {
  return (
    <Section className="bg-sunken">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-center gap-6 border-b border-line p-8 sm:p-10 lg:border-r lg:border-b-0 lg:p-12">
                <h2 className="max-w-[16ch] font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-[2.4rem]">
                  Where we work, and what it means for your property
                </h2>
                <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-2 sm:text-base">
                  Pest pressure changes across this region. A house near the
                  coast and a house backing a canyon in the Inland Empire have
                  different problems, and they need different schedules.
                </p>
                <div>
                  <ButtonLink href="/service-areas" variant="outline">
                    See coverage
                  </ButtonLink>
                </div>
              </div>

              <div className="flex flex-col divide-y divide-line">
                {counties.map((county) => (
                  <div key={county.name} className="flex gap-4 p-8 sm:p-10">
                    <MapPinIcon
                      size={20}
                      weight="duotone"
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-[1.125rem] font-semibold tracking-tight text-ink">
                        {county.name}
                      </h3>
                      <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-3">
                        {county.note}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex flex-wrap items-center gap-2.5 p-8 sm:p-10">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="group inline-flex items-center gap-1.5 rounded-pill border border-line-strong px-4 py-2 text-[0.875rem] font-medium text-ink-2 transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {city.name}
                      <ArrowRightIcon
                        size={13}
                        weight="bold"
                        className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
