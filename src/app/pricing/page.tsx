import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CheckIcon } from "@/components/icons";
import { FinalCta } from "@/components/sections/HomeSections";
import { disclosures, site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pricing & Service Fees",
  description:
    "Mart Shopping Assist is a paid service. Learn how fees are explained before you commit, what's included, and how to ask about scope and price.",
  path: "/pricing",
});

const commitments = [
  { title: "Price before commitment", text: "We tell you the applicable price for your request before you agree to proceed." },
  { title: "Scope in plain language", text: "We explain what the agreed help includes, and what it doesn't, so there are no surprises." },
  { title: "Your choice to continue", text: "Ask as many questions about scope and price as you like first. You decide whether to go ahead." },
  { title: "No invented deals", text: "We don't advertise fake discounts, countdown offers, or “free” help that turns out not to be." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing & service fees" title="A paid service, explained up front.">
        <p>{disclosures.paid}</p>
      </PageHero>

      <Section labelledBy="fees-title">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading id="fees-title" title="How our fees work" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              {site.pricing.summary ? (
                <p className="rounded-2xl bg-action-50 p-5 text-xl font-bold text-navy">{site.pricing.summary}</p>
              ) : (
                <p>
                  Fees depend on the kind of help you need. When you call, an assistant listens to your request and quotes the applicable
                  price before any paid assistance begins.
                </p>
              )}
              <p>
                The fee covers the guidance we provide. It does not include the cost of any product you decide to buy. You pay sellers
                directly, on your own, for anything you purchase.
              </p>
              <p>
                How and when payment is collected is explained on the call before you agree. Refunds and cancellations are covered in
                our <Link href="/refund-policy" className="font-semibold text-action underline">Refund &amp; Cancellation Policy</Link>.
              </p>
            </div>
          </div>
          <ul className="grid gap-3">
            {commitments.map((c) => (
              <li key={c.title} className="flex gap-3 rounded-2xl border border-line p-5">
                <CheckIcon className="mt-0.5 size-6 shrink-0 text-teal" />
                <span>
                  <span className="block font-bold text-navy">{c.title}</span>
                  <span className="mt-1 block text-muted">{c.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface" labelledBy="ask-title">
        <SectionHeading id="ask-title" title="Questions worth asking before you agree" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "What exactly will the help include?",
            "What is the total price for my request?",
            "How and when will I be asked to pay?",
            "What happens if I want to stop partway through?",
          ].map((q) => (
            <li key={q} className="rounded-2xl bg-white p-5 font-semibold text-navy ring-1 ring-line">
              “{q}”
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
