import type { Metadata, Viewport } from "next";
import { CallPopup } from "@/components/CallPopup";
import { MobileCallBar } from "@/components/MobileCallBar";
import { PrelaunchBanner } from "@/components/PrelaunchBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Independent Shopping Assistance by Phone`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { siteName: site.name, type: "website", locale: "en_US", url: "/" },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  // Keep preview builds out of search results until real details are in place.
  robots: site.prelaunch ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#173D7A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="min-h-screen pb-24 font-sans antialiased md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-navy focus:shadow-lg"
        >
          Skip to content
        </a>
        <PrelaunchBanner />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileCallBar />
        <CallPopup />
      </body>
    </html>
  );
}
