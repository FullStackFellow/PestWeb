"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  CircleNotchIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { contactReasons } from "@/lib/content";
import { site } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  email: string;
  zip: string;
  reason: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  zip: "",
  reason: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Enter your name so we know who to ask for.";

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) errors.phone = "We need a phone number to confirm the visit.";
  else if (digits.length < 10) errors.phone = "Enter a 10 digit phone number.";

  if (!values.email.trim()) errors.email = "Enter an email so we can send the written estimate.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Check the email address, it does not look complete.";

  if (!values.zip.trim()) errors.zip = "Enter a ZIP code so we can confirm you are in the service area.";
  else if (!/^\d{5}$/.test(values.zip.trim())) errors.zip = "Enter a 5 digit ZIP code.";

  if (!values.reason) errors.reason = "Pick the closest match so the right technician is assigned.";

  return errors;
}

/**
 * Labels sit ABOVE inputs, helper text is present in markup, errors render
 * BELOW the input (skill 4.6). No placeholder-as-label anywhere.
 *
 * SUBMISSION IS NOT WIRED TO A DESTINATION. The form validates fully and then
 * says so plainly rather than pretending a lead was delivered. Connect this to
 * the real CRM or inbox before launch, see PLACEHOLDERS.md.
 */
export function InspectionForm({ onBand = false }: { onBand?: boolean }) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "submitting" | "done">("idle");

  function update(field: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }

    setState("submitting");
    await new Promise((r) => setTimeout(r, 500));
    setState("done");
  }

  const labelClass = onBand
    ? "text-[0.875rem] font-medium text-on-band"
    : "text-[0.875rem] font-medium text-ink";
  const helpClass = onBand
    ? "text-[0.8125rem] text-on-band-2"
    : "text-[0.8125rem] text-ink-3";
  const fieldClass = onBand
    ? "h-12 w-full rounded-field border border-on-band-2/35 bg-band-2 px-4 text-[0.9375rem] text-on-band placeholder:text-on-band-2/70 transition-colors duration-200 focus:border-accent-on-band focus:outline-none"
    : "h-12 w-full rounded-field border border-line-strong bg-surface px-4 text-[0.9375rem] text-ink placeholder:text-ink-3 transition-colors duration-200 focus:border-accent focus:outline-none";

  if (state === "done") {
    return (
      <div
        role="status"
        className={
          onBand
            ? "flex flex-col gap-4 rounded-card border border-on-band-2/30 bg-band-2 p-8"
            : "flex flex-col gap-4 rounded-card border border-line bg-surface p-8 shadow-card"
        }
      >
        <CheckCircleIcon
          size={30}
          weight="fill"
          className={onBand ? "text-accent-on-band" : "text-accent"}
        />
        <h3
          className={
            onBand
              ? "font-display text-[1.375rem] font-semibold tracking-tight text-on-band"
              : "font-display text-[1.375rem] font-semibold tracking-tight text-ink"
          }
        >
          Your details passed validation
        </h3>
        <p className={onBand ? "text-[0.9375rem] leading-relaxed text-on-band-2" : "text-[0.9375rem] leading-relaxed text-ink-2"}>
          This form is not connected to a destination yet, so nothing was sent.
          Call {site.phoneDisplay} to book the inspection, and wire this form to
          the real inbox before the site goes live.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setState("idle");
          }}
          className={
            onBand
              ? "w-fit text-[0.9375rem] font-semibold text-accent-on-band"
              : "w-fit text-[0.9375rem] font-semibold text-accent"
          }
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          help="So we know who to ask for at the door."
          error={errors.name}
          labelClass={labelClass}
          helpClass={helpClass}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            data-invalid={Boolean(errors.name)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby="name-help"
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field
          id="phone"
          label="Phone number"
          help="The fastest way to confirm a time."
          error={errors.phone}
          labelClass={labelClass}
          helpClass={helpClass}
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            data-invalid={Boolean(errors.phone)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="phone-help"
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field
          id="email"
          label="Email"
          help="Where the written estimate goes."
          error={errors.email}
          labelClass={labelClass}
          helpClass={helpClass}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            data-invalid={Boolean(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby="email-help"
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
          />
        </Field>

        <Field
          id="zip"
          label="ZIP code"
          help="Confirms you are inside the service area."
          error={errors.zip}
          labelClass={labelClass}
          helpClass={helpClass}
        >
          <input
            id="zip"
            name="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            value={values.zip}
            data-invalid={Boolean(errors.zip)}
            aria-invalid={Boolean(errors.zip)}
            aria-describedby="zip-help"
            onChange={(e) => update("zip", e.target.value)}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field
        id="reason"
        label="What are you dealing with"
        help="A rough match is fine, the inspection confirms it."
        error={errors.reason}
        labelClass={labelClass}
        helpClass={helpClass}
      >
        <select
          id="reason"
          name="reason"
          value={values.reason}
          data-invalid={Boolean(errors.reason)}
          aria-invalid={Boolean(errors.reason)}
          aria-describedby="reason-help"
          onChange={(e) => update("reason", e.target.value)}
          className={fieldClass}
        >
          <option value="">Select one</option>
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label="Anything else worth knowing"
        help="Optional. Pets in the home, access notes, when you first noticed it."
        labelClass={labelClass}
        helpClass={helpClass}
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          aria-describedby="message-help"
          onChange={(e) => update("message", e.target.value)}
          className={`${fieldClass} h-auto py-3 leading-relaxed`}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        variant={onBand ? "onBand" : "solid"}
        disabled={state === "submitting"}
        className="w-full sm:w-fit"
      >
        {state === "submitting" ? (
          <>
            <CircleNotchIcon size={18} weight="bold" className="animate-spin" />
            Sending
          </>
        ) : (
          "Request my free inspection"
        )}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  help,
  error,
  children,
  labelClass,
  helpClass,
}: {
  id: string;
  label: string;
  help: string;
  error?: string;
  children: React.ReactNode;
  labelClass: string;
  helpClass: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="flex items-center gap-1.5 text-[0.8125rem] font-medium text-accent">
          <WarningCircleIcon size={15} weight="fill" />
          {error}
        </p>
      ) : (
        <p id={`${id}-help`} className={helpClass}>
          {help}
        </p>
      )}
    </div>
  );
}
