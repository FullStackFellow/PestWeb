"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * FAQ accordion. Progressive disclosure keeps the long-form trust and SEO copy
 * on the page without pushing VISUAL_DENSITY past 4.
 */
export function Faq({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-line"
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-accent">
              <span className="font-display text-[1.0625rem] font-medium tracking-tight text-ink group-hover:text-accent sm:text-[1.1875rem]">
                {item.q}
              </span>
              <PlusIcon
                size={20}
                weight="bold"
                className="mt-1 shrink-0 text-ink-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-45 group-hover:text-accent"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-acc-up data-[state=open]:animate-acc-down">
            <p className="max-w-[68ch] pb-6 text-[0.9375rem] leading-relaxed text-ink-2 sm:text-base">
              {item.a}
            </p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
