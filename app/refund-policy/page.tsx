import { PolicyLayout } from "@/components/ui/PolicyLayout";

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy" lastUpdated="06/03/2026">
      <p className="text-lg">
        At Kayal Meal Box, meals are freshly prepared daily. Due to the nature of food services, refunds are limited.
      </p>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Refund Eligibility</h2>
        <p>Refunds may be considered only in the following cases:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Order was not delivered due to our operational issue</li>
          <li>Duplicate payment made</li>
        </ul>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Non-Refundable Situations</h2>
        <p>Refunds will not be issued for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Change of personal preference</li>
          <li>Missed delivery due to incorrect address</li>
          <li>Customer unavailable at delivery time</li>
          <li>Meals already prepared or delivered</li>
        </ul>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Refund Processing</h2>
        <p>
          Approved refunds will be processed within 5–7 business days through the original payment method.
        </p>
      </section>
    </PolicyLayout>
  );
}
