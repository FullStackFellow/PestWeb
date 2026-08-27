import { Reveal } from "@/components/reveal";
import { Container, Section } from "@/components/ui/layout";

/**
 * The single deliberate colour block on the page (skill 4.11 allows one
 * intentional block, this is it, and the footer shares the same token).
 *
 * Centred is correct here: this section is a statement, not a layout.
 *
 * TERMS ARE A PLACEHOLDER. The guarantee concept is category-standard and the
 * name is a proposal, but length of coverage and what it covers are a real
 * commercial commitment only the business owner can set.
 */
export function Guarantee() {
  return (
    <Section className="bg-band">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="font-display text-[2rem] leading-[1.12] font-semibold tracking-tight text-on-band sm:text-[2.6rem]">
              The Pest Eliminators Promise
            </h2>
            <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-on-band-2">
              If pests come back between scheduled visits, so do we, at no extra
              charge. You do not need to argue about it and you do not need to
              start a new ticket.
            </p>

            <p className="mt-2 max-w-[52ch] rounded-card border border-on-band-2/25 px-5 py-4 text-[0.8125rem] leading-relaxed text-on-band-2">
              Placeholder terms. Coverage length, included pests and exclusions
              need to be set by the business before this page goes live.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
