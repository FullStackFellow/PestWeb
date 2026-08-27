import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { InspectionForm } from "@/components/inspection-form";
import { Container, Section } from "@/components/ui/layout";
import { site } from "@/lib/site";

/**
 * Closing conversion moment. Centred single column, because the form is the
 * content here rather than a supporting element in a split layout.
 */
export function CtaBand({
  title = "Book a free inspection",
  intro = "Tell us what you are seeing and where. A licensed technician will confirm what it is, what is causing it and what it costs to fix, at no charge.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <Section id="inspection" className="border-t border-line bg-sunken">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-[2.5rem]">
              {title}
            </h2>
            <p className="max-w-[56ch] text-[1.0625rem] leading-relaxed text-ink-2">
              {intro}
            </p>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-accent transition-opacity duration-200 hover:opacity-80"
            >
              <PhoneIcon size={17} weight="fill" />
              Or call {site.phoneDisplay}
            </a>
          </div>

          <div className="rounded-card border border-line bg-surface p-7 shadow-card sm:p-9">
            <InspectionForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
