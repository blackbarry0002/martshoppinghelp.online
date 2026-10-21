import type { NextConfig } from "next";
import { site } from "./src/config/site";

if (site.prelaunch || site.phone.isPlaceholder) {
  console.warn(
    "\n⚠  Mart Shopping Help is in prelaunch mode. Replace the placeholder phone number and " +
      "business details in src/config/site.ts and set `prelaunch: false` before deploying.\n",
  );
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
