/**
 * Central site configuration.
 *
 * Every phone CTA, disclosure, and contact detail on the site reads from this
 * file. Before deploying, replace each placeholder with verified business
 * details and set `prelaunch` to false.
 */

export const site = {
  name: "Mart Shopping Help",
  url: "https://martshoppinghelp.online",
  tagline: "Independent shopping assistance",
  description:
    "Independent, paid shopping assistance. Talk to a real person for help comparing products, finding the right items, and understanding your shopping options.",

  /**
   * While true, a visible notice tells visitors the site is in preview and the
   * phone number is a placeholder. Set to false only after every value below
   * has been replaced and verified.
   */
  prelaunch: false,

  phone: {
    display: "+1 (888) 620-2103",
    tel: "+18886202103",
    isPlaceholder: false,
  },

  // Optional details. Leave as null to hide them from the site.
  email: null as string | null, // e.g. "help@martshoppinghelp.online"
  hours: null as string | null, // e.g. "Mon–Fri, 9 a.m.–6 p.m. ET"
  legalName: null as string | null, // registered business name
  mailingAddress: null as string | null,

  pricing: {
    // A short, accurate statement of your fees, e.g. "$__ per 30-minute call".
    // When null, the site explains that the price is quoted before you commit.
    summary: null as string | null,
  },

  /** Google Ads tag (gtag.js). Set to null to remove the tag from every page. */
  googleAdsId: "AW-18430161458" as string | null,

  lastUpdated: "2026-10-21",
} as const;

export const disclosures = {
  paid: "Personalized shopping assistance is a paid service. Ask about the scope and applicable price before agreeing to proceed.",
  independence:
    "Mart Shopping Help is independent and is not affiliated with or endorsed by Walmart or any other retailer.",
  short: "Independent paid service · No retailer affiliation",
  limits:
    "We cannot access retailer accounts, place or change orders, process returns or refunds, or handle payments on a retailer's behalf.",
} as const;

export const telHref = `tel:${site.phone.tel}`;
