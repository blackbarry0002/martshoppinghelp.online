import { CallButton } from "@/components/CallButton";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CheckIcon, CompareIcon, ListIcon, SearchIcon } from "@/components/icons";
import { FinalCta, Independence } from "@/components/sections/HomeSections";
import { categories } from "@/content/categories";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Shopping Services",
  description:
    "Independent, paid shopping help by phone: product research, side-by-side comparisons, and shopping lists for home, electronics, appliances, clothing, toys, and more.",
  path: "/services",
});

const services = [
  {
    title: "Product finding",
    text: "Describe what you need and how you'll use it. We'll help you work out which types of products fit, what features to look for, and how to search for them.",
    Icon: SearchIcon,
  },
  {
    title: "Side-by-side comparisons",
    text: "Weighing two or three options? We walk through specs, sizes, and features in plain language so you can see the real differences.",
    Icon: CompareIcon,
  },
  {
    title: "Shopping lists & planning",
    text: "Moving, starting a project, or preparing for a season? We help you put together a practical list so nothing important is missed.",
    Icon: ListIcon,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Shopping services" title="Need help finding the right product?">
        <p>
          Our assistants help you research, compare, and plan purchases across everyday shopping categories. You get guidance from a
          real person, and you make the final call.
        </p>
      </PageHero>

      <Section labelledBy="types-title">
        <SectionHeading id="types-title" title="Types of assistance" />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map(({ title, text, Icon }) => (
            <li key={title} className="rounded-2xl border border-line p-6">
              <Icon className="size-8 text-action" />
              <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" labelledBy="categories-title">
        <SectionHeading id="categories-title" title="Categories we help with" intro="Common questions we can help you think through in each area." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {categories.map(({ slug, name, blurb, examples, Icon, tint }) => (
            <article key={slug} id={slug} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <div className="flex items-center gap-4">
                <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl ${tint}`}>
                  <Icon className="size-7" />
                </span>
                <h3 className="text-xl font-bold text-navy">{name}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{blurb}</p>
              <ul className="mt-4 space-y-2">
                {examples.map((e) => (
                  <li key={e} className="flex gap-2 text-ink">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                    {e}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          These categories describe the guidance we offer and do not indicate a partnership with any retailer or brand. Prices,
          availability, and product details are set by sellers, so always confirm them before you buy.
        </p>
        <div className="mt-8">
          <CallButton size="lg" showNumber placement="services-categories" />
        </div>
      </Section>

      <Independence />
      <FinalCta />
    </>
  );
}
