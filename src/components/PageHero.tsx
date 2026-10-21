import type { ReactNode } from "react";
import { disclosures } from "@/config/site";
import { CallButton } from "./CallButton";

type Props = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  showCall?: boolean;
};

export function PageHero({ eyebrow, title, children, showCall = true }: Props) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-page py-12 sm:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>}
        {showCall && (
          <div className="mt-7 flex flex-col items-start gap-3">
            <CallButton size="lg" showNumber placement="page-hero" />
            <p className="text-sm text-muted">{disclosures.short}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "white",
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface";
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tone === "surface" ? "bg-surface" : "bg-white"} py-14 sm:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ id, eyebrow, title, intro, center = false }: { id: string; eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">{eyebrow}</p>}
      <h2 id={id} className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
