import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero, Section } from "@/components/PageHero";
import { FinalCta } from "@/components/sections/HomeSections";
import { faqs } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about Mart Shopping Help: what the paid service includes, how pricing works, what we can't do, and how we protect your information.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions">
        <p>Everything you should know before you call.</p>
      </PageHero>
      <Section>
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqs} headingLevel={2} />
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
