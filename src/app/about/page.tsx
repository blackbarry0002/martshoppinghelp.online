import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { ChatIcon, CheckIcon, LockIcon, TagIcon } from "@/components/icons";
import { FinalCta } from "@/components/sections/HomeSections";
import { disclosures } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Mart Shopping Help is an independent shopping-assistance service. We are not a retailer and are not affiliated with Walmart or any other store.",
  path: "/about",
});

const principles = [
  { title: "Honest guidance", text: "We tell you what we can and can't help with, including when the retailer is the right place to go.", Icon: ChatIcon },
  { title: "Your decision", text: "We share options and trade-offs. You decide what to buy, where, and whether to buy at all.", Icon: CheckIcon },
  { title: "Transparent fees", text: "Our help is paid, and we explain the scope and price before you commit.", Icon: TagIcon },
  { title: "Respect for your privacy", text: "We never ask for account passwords, verification codes, or remote access to your device.", Icon: LockIcon },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Independent help for everyday shopping decisions.">
        <p>
          Mart Shopping Help exists for people who would rather talk a purchase through with someone than sort through endless
          listings alone.
        </p>
      </PageHero>

      <Section labelledBy="who-title">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          <SectionHeading id="who-title" title="Who we are" />
          <p>
            We are an independent shopping-assistance service. Our assistants help you research products, compare choices, and plan
            purchases across everyday categories, by phone and in plain language.
          </p>
          <p>
            We are not a store and we don&apos;t sell products. {disclosures.independence} {disclosures.limits}
          </p>
        </div>
      </Section>

      <Section tone="surface" labelledBy="principles-title">
        <SectionHeading id="principles-title" title="How we work" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {principles.map(({ title, text, Icon }) => (
            <li key={title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <Icon className="size-8 text-action" />
              <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
