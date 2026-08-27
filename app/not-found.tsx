import { ButtonLink } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { primaryCta } from "@/lib/site";

export default function NotFound() {
  return (
    <Section className="bg-bg">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-16 text-center">
          <h1 className="font-display text-[2.25rem] leading-tight font-semibold tracking-tight text-ink sm:text-[2.75rem]">
            That page is not here
          </h1>
          <p className="text-[1.0625rem] leading-relaxed text-ink-2">
            The link may be out of date. Start from the services overview, or
            book an inspection and tell us what you are dealing with.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              See services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
