import { PolicyLayout } from "@/components/ui/PolicyLayout";

export default function TermsAndConditions() {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="06/03/2026">
      <p className="text-lg">
        Welcome to Kayal Meal Box. By accessing our website{" "}
        <a href="https://evermeals.in" className="text-[#2F6B45] underline font-semibold">
          evermeals.in
        </a>{" "}
        and subscribing to our meal services, you agree to the following terms and conditions.
      </p>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">1. Service</h2>
        <p>
          Kayal Meal Box provides home-style meal subscriptions for lunch and dinner delivered in reusable steel tiffin containers across selected areas of Hyderabad.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">2. Subscription Plans</h2>
        <p>
          Our services are offered through subscription plans (weekly or monthly). Meals are prepared fresh daily and delivered at scheduled times.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">3. Delivery</h2>
        <p>
          Delivery is available only in selected service areas including but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nallagandla</li>
          <li>Gopanpalle</li>
          <li>Nearby neighbourhoods in Hyderabad</li>
        </ul>
        <p>
          Delivery timing may vary due to traffic, weather, or operational factors.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">4. Payment</h2>
        <p>
          All subscriptions must be paid in advance. Payments can be made through the payment methods available on our website.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">5. Steel Tiffin Containers</h2>
        <p>
          Meals are delivered in reusable stainless steel tiffin containers.
        </p>
        <p className="font-semibold">Customers are expected to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Return the containers in good condition</li>
          <li>Avoid loss or damage</li>
        </ul>
        <p>
          Kayal Meal Box reserves the right to charge a replacement fee for lost or damaged containers.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">6. Menu</h2>
        <p>
          Menus may change based on ingredient availability and operational requirements.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">7. Service Changes</h2>
        <p>
          Kayal Meal Box reserves the right to modify or discontinue services, menus, or pricing at any time.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">8. Contact</h2>
        <p>For any questions or support:</p>
        <ul className="list-none pl-0 space-y-1">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@evermeals.in" className="text-[#2F6B45] hover:underline">
              info@evermeals.in
            </a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://evermeals.in" className="text-[#2F6B45] hover:underline">
              evermeals.in
            </a>
          </li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
