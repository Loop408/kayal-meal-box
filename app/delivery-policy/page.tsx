import { PolicyLayout } from "@/components/ui/PolicyLayout";

export default function DeliveryPolicy() {
  return (
    <PolicyLayout title="Delivery Policy" lastUpdated="06/03/2026">
      <p className="text-lg">
        Our Delivery Policy is currently being updated to better serve you.
      </p>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Coming Soon</h2>
        <p>
          We are finalizing our detailed delivery terms and schedules. Please check back soon or contact us directly if you have any immediate delivery-related queries.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Support Contacts</h2>
        <p>
          For delivery queries, reach us at:{" "}
          <a href="mailto:info@evermeals.in" className="text-[#2F6B45] hover:underline font-semibold">
            info@evermeals.in
          </a>
        </p>
      </section>
    </PolicyLayout>
  );
}
