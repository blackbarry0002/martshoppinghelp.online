import type { Metadata } from "next";
import { site } from "@/config/site";

export const ogImage = { url: "/og.png", width: 1200, height: 630, alt: `${site.name}: independent shopping assistance` };

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, siteName: site.name, type: "website", locale: "en_US", images: [ogImage] },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [ogImage.url] },
  };
}
