import Link from "next/link";
import { companyNav, legalNav, primaryNav, type Route } from "@/config/routes";
import { disclosures, site } from "@/config/site";
import { PhoneLink } from "./CallButton";
import { Logo } from "./Logo";

function FooterColumn({ title, links }: { title: string; links: Route[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">{title}</h2>
      <ul className="mt-3 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-block py-1 text-white/80 hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">{disclosures.independence}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">{disclosures.paid}</p>
          <p className="mt-4 text-sm">
            <span className="text-white/70">Call: </span>
            <PhoneLink placement="footer" className="text-white" />
          </p>
          {site.hours && <p className="mt-1 text-sm text-white/70">{site.hours}</p>}
        </div>
        <FooterColumn title="Services" links={[...primaryNav.slice(0, 3)]} />
        <FooterColumn title="Company" links={companyNav} />
        <FooterColumn title="Legal" links={legalNav} />
      </div>
      <div className="border-t border-white/15">
        <div className="container-page space-y-2 py-6 text-xs leading-relaxed text-white/65">
          <p>{disclosures.limits} For help with an existing order, contact the retailer directly through its official website or app.</p>
          <p>
            Product names, brands, and retailer names mentioned on this site belong to their respective owners and are used for
            identification only.
          </p>
          <p>
            © {new Date().getFullYear()} {site.legalName ?? site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
