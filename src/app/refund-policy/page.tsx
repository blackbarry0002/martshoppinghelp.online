import { PhoneLink } from "@/components/CallButton";
import { businessName, LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Refund & Cancellation Policy",
  description: "How cancellations and refunds work for fees paid to Mart Shopping Assist for shopping assistance.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy">
      <p>
        This policy covers fees paid to {businessName} for shopping assistance. It does not cover products you buy from any retailer
        or seller.
      </p>

      <h2>Before you agree</h2>
      <p>
        We explain the scope and price of the assistance before you agree to proceed. If you decide not to continue at that point,
        you are not charged for paid assistance.
      </p>

      <h2>Cancelling</h2>
      <p>
        You may ask to stop the assistance at any time. How any fee is handled when you stop partway through is explained when the
        price is quoted, before you agree.
      </p>

      <h2>Refund requests</h2>
      <p>
        If you believe the assistance you received was not what was agreed, contact us and describe the issue. We will review your
        request and respond with our decision and, where a refund is approved, how and when it will be issued.
      </p>

      <h2>Products from retailers</h2>
      <p>
        We do not sell products and cannot process returns, exchanges, or refunds for items bought from any retailer. For those,
        please contact the retailer directly through its official website or app.
      </p>

      <h2>Contact</h2>
      <p>
        To request a cancellation or refund, call <PhoneLink placement="refund-policy" />.
      </p>
    </LegalPage>
  );
}
