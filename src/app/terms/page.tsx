import Link from "next/link";
import { PhoneLink } from "@/components/CallButton";
import { businessName, LegalPage } from "@/components/LegalPage";
import { disclosures } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that govern Mart Shopping Assist's independent, paid shopping-assistance service, including its scope and limitations.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms of Service govern your use of this website and the shopping-assistance service provided by {businessName}. By
        using the website or agreeing to receive paid assistance, you accept these terms.
      </p>

      <h2>1. Who we are</h2>
      <p>{disclosures.independence} We are not a retailer, marketplace, manufacturer, or official customer-support provider for any of them.</p>

      <h2>2. The service</h2>
      <p>
        We provide general shopping guidance by phone, such as help researching products, comparing options, and planning purchases.
        The specific scope of help and its price are explained to you before you agree to proceed.
      </p>

      <h2>3. What the service does not include</h2>
      <ul>
        <li>Accessing, managing, or recovering any retailer or third-party account.</li>
        <li>Placing, changing, cancelling, or tracking orders.</li>
        <li>Processing returns, exchanges, refunds, or payments on behalf of any retailer.</li>
        <li>Purchasing products on your behalf.</li>
        <li>Professional advice of any kind, including medical, legal, financial, electrical, or safety advice.</li>
      </ul>

      <h2>4. Your decisions</h2>
      <p>
        All purchase decisions are yours. You are responsible for confirming product details, prices, availability, compatibility,
        warranties, and seller policies directly with the seller before you buy.
      </p>

      <h2>5. No guarantees about third parties</h2>
      <p>
        Product information, prices, and availability are controlled by sellers and manufacturers and may change at any time. We do
        not guarantee the accuracy of third-party information or the performance, safety, or suitability of any product.
      </p>

      <h2>6. Fees and payment</h2>
      <p>
        {disclosures.paid} Payment terms are explained before you agree to receive paid assistance. See our{" "}
        <Link href="/pricing">Pricing</Link> page and <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
      </p>

      <h2>7. Acceptable use</h2>
      <p>
        Please do not share account passwords, verification codes, or full payment-card details for third-party accounts with us. We
        may end a call that is abusive or that requests help outside the scope of our service.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, our total liability for any claim relating to the service is limited to the amount you
        paid us for the assistance giving rise to the claim. We are not liable for indirect or consequential losses, or for products
        you purchase from third parties.
      </p>

      <h2>9. Trademarks</h2>
      <p>
        Retailer names, brand names, and product names mentioned on this website belong to their respective owners and are used for
        identification only. Their use does not imply affiliation or endorsement.
      </p>

      <h2>10. Changes and contact</h2>
      <p>
        We may update these terms from time to time; the version posted here applies. Questions? Call <PhoneLink placement="terms" />.
      </p>
    </LegalPage>
  );
}
