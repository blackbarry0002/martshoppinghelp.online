import Link from "next/link";
import { categories } from "@/content/categories";
import { faqs } from "@/content/faq";
import { disclosures, site, telHref } from "@/config/site";
import { CallButton, PhoneLink } from "../CallButton";
import { FaqAccordion } from "../FaqAccordion";
import { Section, SectionHeading } from "../PageHero";
import { ArrowRightIcon, ChatIcon, CheckIcon, CompareIcon, HelpIcon, LockIcon, SearchIcon, TagIcon, UserIcon, XIcon } from "../icons";

export function CategoryGrid() {
  return (
    <Section labelledBy="categories-title">
      <SectionHeading
        id="categories-title"
        eyebrow="Shopping topics"
        title="What can we help you shop for?"
        intro="Tell us what you're looking for. These are the everyday categories our assistants help with most."
      />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {categories.map(({ slug, name, blurb, Icon, tint }) => (
          <li key={slug}>
            <Link
              href={`/services#${slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-4 transition-shadow hover:shadow-lg hover:shadow-navy/10 sm:p-5"
            >
              <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${tint}`}>
                <Icon className="size-7" />
              </span>
              <span className="mt-4 font-bold text-navy group-hover:text-action">{name}</span>
              <span className="mt-1 hidden text-sm leading-relaxed text-muted sm:block">{blurb}</span>
            </Link>
          </li>
        ))}
        <li>
          <a
            href={telHref}
            data-cta="call"
            data-placement="category-grid"
            className="flex h-full flex-col justify-between rounded-2xl bg-action p-4 text-white transition-colors hover:bg-action-700 sm:p-5"
          >
            <span className="font-bold">Something else?</span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
              Call and ask <ArrowRightIcon className="size-4" />
            </span>
          </a>
        </li>
      </ul>
      <p className="mt-6 text-sm text-muted">
        Categories describe the kinds of shopping guidance we offer. They do not indicate any partnership with a retailer or brand.
      </p>
    </Section>
  );
}

const painPoints = [
  { q: "Too many options?", a: "We help you narrow a long list down to a few that fit your needs and budget.", Icon: SearchIcon },
  { q: "Can't find the right item?", a: "Describe what you need and we'll help you figure out what to look for and where.", Icon: HelpIcon },
  { q: "Need help comparing features?", a: "We explain specs and differences in plain language so you can weigh real trade-offs.", Icon: CompareIcon },
  { q: "Prefer talking to a person?", a: "Skip the endless scrolling. Talk it through with a real human assistant.", Icon: ChatIcon },
];

export function PainPoints() {
  return (
    <Section tone="surface" labelledBy="pain-title">
      <SectionHeading id="pain-title" eyebrow="Sound familiar?" title="Shopping shouldn't feel like homework." center />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.map(({ q, a, Icon }) => (
          <li key={q} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
            <Icon className="size-8 text-action" />
            <h3 className="mt-4 text-lg font-bold text-navy">{q}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted">{a}</p>
            <a
              href={telHref}
              data-cta="call"
              data-placement="pain-point"
              className="mt-4 inline-flex items-center gap-1 font-semibold text-action hover:underline"
            >
              Talk it through <ArrowRightIcon className="size-4" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function HumanDifference() {
  const points = [
    { title: "Describe your needs", text: "Tell us what you're shopping for, how you'll use it, and what matters most to you.", Icon: UserIcon },
    { title: "Discuss options with a person", text: "Talk through features, sizes, and trade-offs with a human assistant who listens.", Icon: ChatIcon },
    { title: "Make your own decision", text: "You choose what to buy and where. We never purchase on your behalf or push a product.", Icon: CheckIcon },
  ];
  return (
    <Section labelledBy="difference-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            id="difference-title"
            eyebrow="The human-help difference"
            title="Real conversation. Practical guidance."
            intro="Reviews and filters only go so far. Sometimes the fastest way to the right choice is talking it through with someone."
          />
          <div className="mt-7">
            <CallButton placement="difference" />
          </div>
        </div>
        <ol className="grid gap-4">
          {points.map(({ title, text, Icon }) => (
            <li key={title} className="flex gap-4 rounded-2xl border border-line p-5">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal">
                <Icon className="size-6" />
              </span>
              <span>
                <span className="block text-lg font-bold text-navy">{title}</span>
                <span className="mt-1 block leading-relaxed text-muted">{text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export const steps = [
  { title: "Call us", text: "Call the number on this page to reach a shopping assistant." },
  { title: "Explain your shopping need", text: "Share what you're looking for, your budget, and any must-haves." },
  { title: "Review the service and price", text: "We explain what help we can provide and what it costs. You decide whether to proceed." },
  { title: "Receive the agreed guidance", text: "Get the comparisons and recommendations you agreed to, then buy on your own terms." },
];

export function HowItWorks() {
  return (
    <Section tone="surface" labelledBy="how-title">
      <SectionHeading id="how-title" eyebrow="How it works" title="Four simple steps" center />
      <ol className="mt-10 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-sun text-lg font-extrabold text-navy-900">{i + 1}</span>
            <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 text-center">
        <Link href="/how-it-works" className="inline-flex items-center gap-1 font-semibold text-action hover:underline">
          More about how it works <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </Section>
  );
}

export function PaidDisclosure() {
  return (
    <Section labelledBy="paid-title">
      <div className="grid gap-8 rounded-3xl border-2 border-action/20 bg-action-50 p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-10">
        <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-action text-white">
          <TagIcon className="size-8" />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-action-700">Transparent pricing</p>
          <h2 id="paid-title" className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Personalized assistance is a paid service.
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            We tell you what&apos;s included and what it costs before you commit. Ask any questions you have about scope and price
            first. There&apos;s no obligation to continue.
          </p>
          {site.pricing.summary && <p className="mt-3 text-lg font-bold text-navy">{site.pricing.summary}</p>}
          <ul className="mt-5 grid gap-2 sm:grid-cols-3">
            {["Price explained up front", "Scope agreed before you proceed", "You decide whether to continue"].map((t) => (
              <li key={t} className="flex items-start gap-2 font-semibold text-navy">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                {t}
              </li>
            ))}
          </ul>
          <Link href="/pricing" className="mt-6 inline-flex items-center gap-1 font-semibold text-action hover:underline">
            How our pricing works <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export const weDo = [
  "Help you research and compare products",
  "Explain features, specs, and trade-offs in plain language",
  "Help you build a shopping list for a project or occasion",
  "Point you to a retailer's official support channels when you need them",
];

export const weDont = [
  "Represent Walmart or any other retailer",
  "Access or recover retailer accounts",
  "Place, change, cancel, or track orders",
  "Process returns, refunds, or payments for a retailer",
  "Ask for your account passwords or verification codes",
];

export function Independence() {
  return (
    <Section tone="surface" labelledBy="independence-title">
      <SectionHeading
        id="independence-title"
        eyebrow="Independence & trust"
        title="An independent service, not a store's support line."
        intro={disclosures.independence}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
          <h3 className="text-lg font-bold text-navy">What we do</h3>
          <ul className="mt-4 space-y-3">
            {weDo.map((t) => (
              <li key={t} className="flex gap-3 text-ink">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
          <h3 className="text-lg font-bold text-navy">What we don&apos;t do</h3>
          <ul className="mt-4 space-y-3">
            {weDont.map((t) => (
              <li key={t} className="flex gap-3 text-ink">
                <XIcon className="mt-0.5 size-5 shrink-0 text-red-700" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 flex items-start gap-2 text-sm text-muted">
        <LockIcon className="mt-0.5 size-4 shrink-0" />
        Need help with an existing order, refund, or account? Contact the retailer directly through its official website or app.
      </p>
    </Section>
  );
}

export function FaqPreview() {
  return (
    <Section labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading id="faq-title" eyebrow="Questions" title="Before you call" intro="Quick answers to what people ask most." />
          <Link href="/faq" className="mt-6 inline-flex items-center gap-1 font-semibold text-action hover:underline">
            See all FAQs <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <FaqAccordion items={faqs.slice(1, 7)} />
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-navy text-white">
      <div className="container-page py-14 text-center sm:py-20">
        <h2 id="final-cta-title" className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Let&apos;s make your next shopping decision easier.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">Talk to a real person about what you need.</p>
        <div className="mt-8 flex justify-center">
          <CallButton variant="accent" size="lg" placement="final-cta" />
        </div>
        <p className="mt-4 text-lg">
          <PhoneLink placement="final-cta-number" className="text-white" />
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/75">
          {disclosures.paid} {disclosures.independence}
        </p>
      </div>
    </section>
  );
}
