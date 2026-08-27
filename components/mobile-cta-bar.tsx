import { PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { primaryCta, site } from "@/lib/site";

/**
 * This category converts heavily on mobile click-to-call, so neither contact
 * path should depend on the visitor scrolling back to a CTA.
 *
 * "Call" is a different contact modality, not a competing label for the
 * inspection action, so this does not duplicate CTA intent.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5 px-4 py-3">
        <a
          href={site.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-pill border border-line-strong text-[0.9375rem] font-semibold text-ink"
        >
          <PhoneIcon size={17} weight="fill" className="text-accent" />
          Call
        </a>
        <Link
          href={primaryCta.href}
          className="inline-flex h-12 items-center justify-center rounded-pill bg-accent text-[0.9375rem] font-semibold text-on-accent"
        >
          {primaryCta.label}
        </Link>
      </div>
    </div>
  );
}
