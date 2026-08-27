import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { process } from "@/lib/content";

/**
 * Process narrative. The verb IS the label, there are no "Step 1 / Stage 2"
 * prefixes (skill 9.F). Separated by hairlines rather than card containers.
 */
export function Process() {
  return (
    <Section className="bg-bg">
      <Container>
        <SectionHeading
          title="How a job actually runs"
          intro="No treatment gets recommended before someone has looked at the property and told you what they found."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {process.map((step, i) => (
            <Reveal key={step.verb} delay={i * 0.1}>
              <div className="flex flex-col gap-4 border-t border-line-strong pt-7">
                <h3 className="font-display text-[1.75rem] leading-none font-semibold tracking-tight text-accent">
                  {step.verb}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
