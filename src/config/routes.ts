export type Route = { href: string; label: string };

export const primaryNav: Route[] = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export const companyNav: Route[] = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export const legalNav: Route[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
];

/** Every indexable page, used by the sitemap. */
export const allRoutes = [
  "/",
  "/services",
  "/how-it-works",
  "/pricing",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/refund-policy",
];
