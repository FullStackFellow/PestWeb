import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { localPillars } from "@/lib/content";

/**
 * The section that carries the positioning: locally owned, not a national
 * branch. Asymmetric 12-column pillar grid (5 / 4 / 3) so this does not read as
 * three identical feature cards. Grouped with top hairlines, no card boxes.
 */
export function LocalDifference() {
  return (
    <Section className="bg-bg">
      <Container>
        <SectionHeading
          title="What you get from a company that is actually local"
          intro="Pest Eliminators is owned and run here. That is not a marketing line, it changes who shows up at your door and who picks up when you call back."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-12">
          {localPillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              className={
                i === 0
                  ? "lg:col-span-5"
                  : i === 1
                    ? "lg:col-span-4"
                    : "lg:col-span-3"
              }
            >
              <div className="flex h-full flex-col gap-4 border-t-2 border-accent pt-6">
                <h3 className="font-display text-[1.25rem] leading-snug font-semibold tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
