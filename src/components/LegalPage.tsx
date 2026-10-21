import type { ReactNode } from "react";
import { site } from "@/config/site";
import { PageHero } from "./PageHero";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} showCall={false}>
        <p>Last updated {new Date(`${site.lastUpdated}T12:00:00Z`).toLocaleDateString("en-US", { dateStyle: "long" })}</p>
      </PageHero>
      <section className="py-12 sm:py-16">
        <div className="container-page">
          {site.prelaunch && (
            <p role="note" className="mb-8 max-w-3xl rounded-xl bg-amber-100 p-4 text-sm text-amber-950">
              <strong>Template notice:</strong> this policy is a starting draft. Have it reviewed by qualified counsel and updated with
              your business&apos;s legal name, contact details, and actual practices before launch.
            </p>
          )}
          <div className="prose-legal max-w-3xl">{children}</div>
        </div>
      </section>
    </>
  );
}

/** The business identity line used throughout legal pages. */
export const businessName = site.legalName ?? site.name;
