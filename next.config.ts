import type { NextConfig } from "next";
import { site } from "./src/config/site";

if (site.prelaunch || site.phone.isPlaceholder) {
  console.warn(
    "\n⚠  Mart Shopping Help is in prelaunch mode. Replace the placeholder phone number and " +
      "business details in src/config/site.ts and set `prelaunch: false` before deploying.\n",
  );
}

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (see .github/workflows/deploy.yml).
  // Pages can't set response headers, so security headers must come from a CDN if needed.
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
