"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/config/routes";
import { disclosures, site, telHref } from "@/config/site";
import { CallButton } from "./CallButton";
import { Logo } from "./Logo";
import { MenuIcon, PhoneIcon, XIcon } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="bg-navy-900 text-white">
        <div className="container-page flex min-h-9 items-center justify-between gap-4 py-1.5 text-xs sm:text-sm">
          <p className="font-medium">{disclosures.short}</p>
          <a href={telHref} data-cta="call" data-placement="utility-bar" className="hidden shrink-0 font-semibold hover:underline sm:inline">
            Call {site.phone.display}
          </a>
        </div>
      </div>

      <div className="container-page flex min-h-16 items-center justify-between gap-4 py-2">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[0.95rem] font-semibold xl:px-3.5 transition-colors hover:bg-surface ${
                    isActive(item.href) ? "bg-action-50 text-action-700" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden shrink-0 sm:block">
            <CallButton label="Call for Assistance" placement="header" className="whitespace-nowrap" />
          </div>
          <a
            href={telHref}
            data-cta="call"
            data-placement="header-mobile"
            aria-label={`Call for assistance, ${site.phone.display}`}
            className="inline-flex size-11 items-center justify-center rounded-full bg-action text-white sm:hidden"
          >
            <PhoneIcon className="size-5" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-line bg-white lg:hidden">
        <ul className="container-page grid gap-1 py-3">
          {[...primaryNav, { href: "/contact", label: "Contact" }].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                  isActive(item.href) ? "bg-action-50 text-action-700" : "text-ink hover:bg-surface"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
