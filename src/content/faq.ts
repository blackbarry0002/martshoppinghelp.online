import { disclosures } from "@/config/site";

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is Mart Shopping Help?",
    a: "Mart Shopping Help is an independent, paid shopping-assistance service. You talk with a real person who helps you compare products, narrow down options, and think through what to consider before you buy. You make every purchase yourself.",
  },
  {
    q: "Are you Walmart or part of any retailer's customer service?",
    a: `No. ${disclosures.independence} We are not an official support department for any store, brand, or marketplace.`,
  },
  {
    q: "Is the service free?",
    a: "No. Personalized shopping assistance is a paid service. When you call, ask about the scope of help and the applicable price. You decide whether to proceed after you have heard both.",
  },
  {
    q: "How much does it cost?",
    a: "The price depends on the kind of help you need. We explain the price and what it covers on the call, before you agree to anything. See our Pricing page for how fees are disclosed.",
  },
  {
    q: "Can you help with an order I already placed, a refund, or my account?",
    a: `No. ${disclosures.limits} For anything involving an existing order, a return, a refund, or account access, contact the retailer directly through its official website or app.`,
  },
  {
    q: "Will you buy products for me?",
    a: "No. We give guidance; you stay in control. You choose what to buy, where to buy it, and you complete the purchase yourself.",
  },
  {
    q: "Will you ask for my passwords or verification codes?",
    a: "Never. We will never ask for a retailer account password, a one-time verification code, or remote access to your device. If anyone claiming to be us asks for these, hang up.",
  },
  {
    q: "Do you guarantee prices, stock, or product performance?",
    a: "No. Prices, availability, and product details are set by sellers and can change at any time. We help you understand your options, but always confirm details with the seller before you buy.",
  },
  {
    q: "What kinds of products can you help with?",
    a: "Everyday categories such as home essentials, electronics, appliances, clothing, personal-care products, toys, and home improvement. If you're not sure whether we can help, call and ask — we'll tell you honestly.",
  },
  {
    q: "What happens to the information I share on the call?",
    a: "We use what you tell us to provide the guidance you asked for. Our Privacy Policy explains what we collect, how we use it, and the choices you have.",
  },
];
