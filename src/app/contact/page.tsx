import { CallButton, PhoneLink } from "@/components/CallButton";
import { PageHero, Section } from "@/components/PageHero";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { disclosures, site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Mart Shopping Assist, an independent paid shopping-assistance service. Call to talk with a real person.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to a shopping assistant." showCall={false}>
        <p>The quickest way to reach us is by phone.</p>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-line p-6 sm:p-8">
            <dl className="space-y-6">
              <div className="flex gap-4">
                <PhoneIcon className="mt-1 size-6 shrink-0 text-action" />
                <div>
                  <dt className="font-bold text-navy">Phone</dt>
                  <dd className="mt-1 text-lg">
                    <PhoneLink placement="contact" className="text-action" />
                  </dd>
                </div>
              </div>
              {site.hours && (
                <div className="flex gap-4">
                  <ClockIcon className="mt-1 size-6 shrink-0 text-action" />
                  <div>
                    <dt className="font-bold text-navy">Hours</dt>
                    <dd className="mt-1 text-muted">{site.hours}</dd>
                  </div>
                </div>
              )}
              {site.email && (
                <div className="flex gap-4">
                  <MailIcon className="mt-1 size-6 shrink-0 text-action" />
                  <div>
                    <dt className="font-bold text-navy">Email</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${site.email}`} className="text-action underline">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
              )}
              {site.mailingAddress && (
                <div className="flex gap-4">
                  <MailIcon className="mt-1 size-6 shrink-0 text-action" />
                  <div>
                    <dt className="font-bold text-navy">Mailing address</dt>
                    <dd className="mt-1 whitespace-pre-line text-muted">{site.mailingAddress}</dd>
                  </div>
                </div>
              )}
            </dl>
            <div className="mt-8">
              <CallButton size="lg" placement="contact-card" />
            </div>
          </div>

          <aside className="rounded-3xl bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Before you get in touch</h2>
            <p className="mt-3 leading-relaxed text-muted">{disclosures.paid}</p>
            <p className="mt-3 leading-relaxed text-muted">{disclosures.independence}</p>
            <p className="mt-3 leading-relaxed text-muted">
              {disclosures.limits} For an existing order, contact the retailer directly through its official website or app.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
