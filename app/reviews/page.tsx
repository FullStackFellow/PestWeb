import type { Metadata } from "next";
import { InfoIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container, Section } from "@/components/ui/layout";
import { sampleReviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Reviews from Pest Eliminators customers across Orange County, Riverside and the Inland Empire.",
  alternates: { canonical: "/reviews" },
  robots: { index: false, follow: true },
};

/**
 * This page is intentionally noindex until real reviews replace the
 * placeholders. Publishing an empty or fabricated review page is worse for
 * trust and for search than not publishing one at all.
 */
export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Customer reviews"
        intro="This page is built and ready. It is waiting on real, permissioned customer reviews before it goes live."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      <Section className="bg-bg">
        <Container>
          <div className="mb-10 flex gap-4 rounded-card border border-accent/30 bg-accent-soft p-6">
            <InfoIcon
              size={22}
              weight="fill"
              className="mt-0.5 shrink-0 text-accent"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
                Placeholder content, not real reviews
              </h2>
              <p className="max-w-[64ch] text-[0.9375rem] leading-relaxed text-ink-2">
                The cards below show the layout only. Replace them with genuine
                reviews collected from customers who have given permission to
                publish, then remove the noindex flag on this page.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sampleReviews.map((review, i) => (
              <figure
                key={i}
                className="flex flex-col gap-4 rounded-card border border-line bg-surface p-7 shadow-sm"
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
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
