import type { ComponentType, SVGProps } from "react";
import { ApplianceIcon, BlocksIcon, BottleIcon, HomeIcon, ScreenIcon, ShirtIcon, ToolIcon } from "@/components/icons";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  examples: string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tint: string;
};

/** Shopping-guidance categories. These are topics we help with, not retailer partnerships. */
export const categories: Category[] = [
  {
    slug: "home-essentials",
    name: "Home Essentials",
    blurb: "Cleaning supplies, storage, kitchenware, and everyday household basics.",
    examples: ["Choosing cookware or storage", "Comparing cleaning products", "Planning a move-in list"],
    Icon: HomeIcon,
    tint: "bg-action-50 text-action-700",
  },
  {
    slug: "electronics",
    name: "Electronics",
    blurb: "TVs, laptops, tablets, headphones, and the specs that actually matter.",
    examples: ["Decoding screen sizes and resolutions", "Laptop specs for your use", "Compatibility questions"],
    Icon: ScreenIcon,
    tint: "bg-teal-50 text-teal",
  },
  {
    slug: "appliances",
    name: "Appliances",
    blurb: "Washers, refrigerators, microwaves, vacuums, and small kitchen appliances.",
    examples: ["Measuring and fit checks", "Energy and capacity features", "Comparing similar models"],
    Icon: ApplianceIcon,
    tint: "bg-action-50 text-action-700",
  },
  {
    slug: "clothing",
    name: "Clothing & Shoes",
    blurb: "Sizing, materials, and finding items for an occasion or a season.",
    examples: ["Understanding size charts", "Fabric and care basics", "Building a list for school or work"],
    Icon: ShirtIcon,
    tint: "bg-teal-50 text-teal",
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    blurb: "Everyday personal products, grooming tools, and household health basics.",
    examples: ["Reading product labels", "Comparing sizes and unit prices", "Finding alternatives"],
    Icon: BottleIcon,
    tint: "bg-action-50 text-action-700",
  },
  {
    slug: "toys",
    name: "Toys & Games",
    blurb: "Age-appropriate gift ideas, games, and toys within a budget.",
    examples: ["Gift ideas by age", "Checking age labels and parts", "Staying within a budget"],
    Icon: BlocksIcon,
    tint: "bg-teal-50 text-teal",
  },
  {
    slug: "home-improvement",
    name: "Home Improvement",
    blurb: "Tools, hardware, paint, lighting, and supplies for projects around the house.",
    examples: ["Making a project shopping list", "Choosing the right tool", "Comparing materials"],
    Icon: ToolIcon,
    tint: "bg-action-50 text-action-700",
  },
];
