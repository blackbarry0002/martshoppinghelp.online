import Link from "next/link";
import { PhoneLink } from "@/components/CallButton";
import { businessName, LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Mart Shopping Assist collects, uses, and protects personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how {businessName} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) handles personal information when you visit{" "}
        {site.url.replace("https://", "")} or use our independent shopping-assistance service.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us on a call</strong>, such as your name, phone number, the products or needs you describe, and
          your preferences or budget.
        </li>
        <li>
          <strong>Payment information</strong> needed to pay for our service, handled as described to you before you agree to proceed.
        </li>
        <li>
          <strong>Website usage information</strong>, such as pages visited, device and browser type, and approximate location derived
          from IP address, collected through standard server logs and any analytics or advertising tools we use.
        </li>
        <li>
          <strong>Call records</strong>, such as the time and duration of calls. If calls are recorded, we will tell you at the start
          of the call.
        </li>
      </ul>

      <h2>What we never ask for</h2>
      <p>
        We never ask for passwords to retailer or other online accounts, one-time verification codes, or remote access to your
        device. Please do not share these with us.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To provide the shopping guidance you requested and to follow up on it.</li>
        <li>To process payment for our service and keep business records.</li>
        <li>To operate, secure, and improve our website and service.</li>
        <li>To measure the performance of our advertising.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with service providers that help us run our business (for example,
        phone, payment, hosting, and analytics providers), when required by law, or to protect our rights and the safety of others.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        Our website may use cookies and similar technologies to understand how visitors use the site and to measure advertising.
        You can control cookies through your browser settings.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We keep personal information only as long as needed for the purposes above or as required by law, and we use reasonable
        safeguards to protect it. No method of transmission or storage is completely secure.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, or delete your personal information, or to opt out of
        certain uses. To make a request, contact us using the details below.
      </p>

      <h2>Children</h2>
      <p>Our service is intended for adults. We do not knowingly collect personal information from children under 13.</p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. The &ldquo;last updated&rdquo; date above shows when it last changed.</p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Call <PhoneLink placement="privacy" />
        {site.email && (
          <>
            {" "}or email <a href={`mailto:${site.email}`}>{site.email}</a>
          </>
        )}
        . See also our <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
