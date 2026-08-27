import Link from "next/link";
import { Faq } from "@/components/ui/accordion";
import { Container, Section } from "@/components/ui/layout";
import { faqs } from "@/lib/content";

/**
 * Sticky heading beside the accordion. The right column carries a real
 * interactive component, which is the case where a split section header is
 * legitimate rather than the banned floating-explainer pattern.
 */
export function FaqSection({ items = faqs.slice(0, 6) }: { items?: typeof faqs }) {
  return (
    <Section className="border-t border-line bg-bg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="max-w-[14ch] font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-[2.4rem]">
              Questions people ask before booking
            </h2>
            <p className="mt-4 max-w-[44ch] text-[0.9375rem] leading-relaxed text-ink-2">
              If yours is not here, ask on the call. There is no charge for the
              inspection either way.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-block text-[0.9375rem] font-semibold text-accent transition-opacity duration-200 hover:opacity-80"
            >
              All questions
            </Link>
          </div>

          <div>
            <Faq items={items} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
