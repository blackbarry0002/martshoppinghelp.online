import type { MetadataRoute } from "next";
import { allRoutes } from "@/config/routes";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: site.lastUpdated,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
