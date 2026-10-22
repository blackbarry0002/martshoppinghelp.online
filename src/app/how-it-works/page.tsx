import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CheckIcon } from "@/components/icons";
import { FinalCta, steps } from "@/components/sections/HomeSections";
import { disclosures } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "Call, explain what you're shopping for, hear the scope and price, then get the guidance you agreed to. Here's what to expect from Mart Shopping Help.",
  path: "/how-it-works",
});

const details = [
  "Have the product type, budget, and any must-have features in mind.",
  "If you're comparing specific items, keep their names or model numbers handy.",
  "You don't need to share any account logins, passwords, or verification codes, and we will never ask for them.",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="Clear expectations, from the first minute.">
        <p>Here&apos;s exactly what happens when you call, so you know what you&apos;re agreeing to before you agree to anything.</p>
      </PageHero>

      <Section labelledBy="steps-title">
        <SectionHeading id="steps-title" title="Step by step" />
        <ol className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-2xl border border-line p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-2xl bg-action-50 p-5 font-semibold text-navy">
          {disclosures.paid} If the service isn&apos;t right for you, you can simply end the call before agreeing to proceed.
        </p>
      </Section>

      <Section tone="surface" labelledBy="prepare-title">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading id="prepare-title" title="Before you call" />
            <ul className="mt-6 space-y-3">
              {details.map((d) => (
                <li key={d} className="flex gap-3 text-ink">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <h2 className="text-xl font-bold text-navy">What this service isn&apos;t</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {disclosures.independence} {disclosures.limits}
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              For help with an existing order, contact the retailer directly through its official website or app.
            </p>
            <Link href="/faq" className="mt-4 inline-block font-semibold text-action hover:underline">
              Read the FAQ
            </Link>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
