import {
  BuildingsIcon,
  HouseLineIcon,
  MagnifyingGlassIcon,
  SealCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/layout";
import { trustPoints } from "@/lib/content";

const icons = [SealCheckIcon, HouseLineIcon, MagnifyingGlassIcon, BuildingsIcon];

/**
 * Trust row. Lives directly UNDER the hero, never inside it (skill 4.7).
 * Grouped with hairlines rather than card containers (skill 4.4).
 */
export function TrustBar() {
  return (
    <section className="border-b border-line bg-sunken">
      <Container>
        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <li
                key={point.label}
                className="flex items-start gap-3.5 border-b border-line py-6 last:border-b-0 sm:border-b-0 sm:py-7 lg:border-l lg:border-b-0 lg:pl-7 lg:first:border-l-0 lg:first:pl-0"
              >
                <Icon
                  size={22}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-display text-[0.9375rem] font-semibold tracking-tight text-ink">
                    {point.label}
                  </span>
                  <span className="text-[0.875rem] leading-relaxed text-ink-3">
                    {point.detail}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
