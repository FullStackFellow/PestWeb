import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui/layout";
import { sampleReviews } from "@/lib/content";

/**
 * Horizontal scroll-snap row (skill 4.9 recommends this over a long list for
 * breadth-heavy content) and a distinct layout family from every other section.
 *
 * EVERY CARD HERE IS PLACEHOLDER CONTENT and is labelled as such on the page.
 * Do not swap the labels for realistic invented names, that would present a
 * fabricated endorsement as a genuine one.
 */
export function Reviews() {
  return (
    <Section className="overflow-hidden bg-bg">
      <Container>
        <SectionHeading
          title="What customers say"
          intro="Real reviews go here once they have been collected and permission has been given to publish them. The cards below are layout placeholders."
        />
      </Container>

      <div className="mt-12">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:thin]">
          {sampleReviews.map((review, i) => (
            <figure
              key={i}
              className="flex w-[19rem] shrink-0 snap-start flex-col gap-4 rounded-card border border-line bg-surface p-7 shadow-sm sm:w-[22rem]"
            >
              <span className="w-fit rounded-pill bg-accent-soft px-3 py-1 text-[0.75rem] font-semibold text-accent">
                Sample
              </span>
              <blockquote className="font-display text-[1.0625rem] leading-snug font-medium tracking-tight text-ink">
                {review.headline}
              </blockquote>
              <p className="flex-1 text-[0.875rem] leading-relaxed text-ink-3">
                {review.body}
              </p>
              <figcaption className="border-t border-line pt-4 text-[0.8125rem] font-medium text-ink-3">
                {review.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Container>
        <Link
          href="/reviews"
          className="text-[0.9375rem] font-semibold text-accent transition-opacity duration-200 hover:opacity-80"
        >
          More about reviews
        </Link>
      </Container>
    </Section>
  );
}
