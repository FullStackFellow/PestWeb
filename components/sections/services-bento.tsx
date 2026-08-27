import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { services } from "@/lib/content";
import { placeholderImage } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Bento grid with EXACTLY three cells for three services (skill 4.7 cell-count
 * rule). Deliberately not three identical cards in a row: the first tile is a
 * tall feature spanning two rows, the other two stack beside it.
 *
 * Every cell carries real photography, so this is not a white-on-white text
 * grid (skill 4.7 bento background diversity).
 */
export function ServicesBento() {
  return (
    <Section className="border-y border-line bg-sunken">
      <Container>
        <SectionHeading
          title="Three services, built around what actually shows up here"
          intro="Southern California pest pressure is year round and it changes by season. Each of these runs on its own schedule rather than a single generic plan."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-5 lg:grid-rows-2">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 0.08}
              className={cn(
                i === 0 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-3",
              )}
            >
              <Link
                href={`/services/${service.slug}`}
                className={cn(
                  "group relative flex h-full min-h-[19rem] flex-col justify-end overflow-hidden rounded-card",
                  "shadow-card transition-shadow duration-300 hover:shadow-lift",
                  i === 0 && "lg:min-h-[34rem]",
                )}
              >
                <Image
                  /* PLACEHOLDER PHOTO: replace before launch. */
                  src={placeholderImage(service.imageSeed, 900, 900)}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                {/* Scrim: keeps title and body text above WCAG AA on any photo. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0d1015] via-[#0d1015]/80 to-[#0d1015]/10"
                />

                <div className="relative flex flex-col gap-3 p-7">
                  <h3 className="font-display text-[1.5rem] leading-tight font-semibold tracking-tight text-[#f2f0ec]">
                    {service.name}
                  </h3>
                  <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-[#c9ccd2]">
                    {service.summary}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#f08d5c]">
                    See what it covers
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
        </div>
      </Container>
    </Section>
  );
}
