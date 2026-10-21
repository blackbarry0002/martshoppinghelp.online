import Link from "next/link";
import { categories } from "@/content/categories";
import { disclosures } from "@/config/site";
import { CallButton } from "../CallButton";
import { CompareIcon, ListIcon, SearchIcon, ShieldIcon } from "../icons";

const quickHelp = [
  { title: "Find a Product", text: "Narrow down your options.", Icon: SearchIcon },
  { title: "Compare Choices", text: "Understand features and value.", Icon: CompareIcon },
  { title: "Plan a List", text: "Organize what you need to buy.", Icon: ListIcon },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-action/60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/3 size-[22rem] rounded-full bg-teal/40 blur-3xl" />

      <div className="container-page relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-sun ring-1 ring-white/20">
            <ShieldIcon className="size-4" />
            Independent shopping assistance
          </p>
          <h1 id="hero-title" className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Shopping questions? Get help from a{" "}
            <span className="underline decoration-sun decoration-[0.12em] underline-offset-[0.14em]">real person.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Shopping choices can get confusing. Get personalized, human guidance to compare options, find suitable items, and
            understand what to consider before you buy.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3">
            <CallButton variant="accent" size="lg" showNumber placement="hero" />
            <p className="max-w-md text-sm text-white/80">{disclosures.paid}</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 text-ink shadow-2xl shadow-navy-900/40 sm:p-7">
          <p className="text-lg font-extrabold text-navy">What can we help you with today?</p>
          <ul className="mt-4 grid gap-3">
            {quickHelp.map(({ title, text, Icon }) => (
              <li key={title} className="flex items-center gap-4 rounded-2xl border border-line p-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-action-50 text-action">
                  <Icon className="size-6" />
                </span>
                <span>
                  <span className="block font-bold text-navy">{title}</span>
                  <span className="block text-sm text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">Popular topics</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services#${c.slug}`}
                  className="inline-block rounded-full bg-surface px-3 py-1.5 text-sm font-semibold text-navy hover:bg-action-50"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">{disclosures.independence}</p>
        </div>
      </div>
    </section>
  );
}
