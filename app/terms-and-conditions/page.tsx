import { PolicyLayout } from "@/components/ui/PolicyLayout";

export default function TermsAndConditions() {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="July 2026">
      <p className="text-lg">
        Welcome to Kayal Meal Box. By accessing our website and using our services, you agree to the following Terms & Conditions.
      </p>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">1. Our Services</h2>
        <p>
          Kayal Meal Box offers authentic Kerala home-style meals through weekly and monthly subscription plans, along with dine-in and home delivery services in selected areas of Hyderabad.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">2. Subscription Plans</h2>
        <p className="font-semibold">We currently offer:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Weekly Meal Plan (7-day plan, valid for up to 10 days)</li>
          <li>Monthly Meal Plan (30-day plan, valid for up to 45 days)</li>
        </ul>
        <p className="font-semibold mt-4">Customers can choose from:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full Meal Plan</li>
          <li>Lunch & Dinner Plan</li>
          <li>Lunch Only</li>
          <li>Dinner Only</li>
        </ul>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">3. Meal Timings</h2>
        <ul className="list-none space-y-1">
          <li><strong>Lunch:</strong> 12:00 PM – 3:00 PM</li>
          <li><strong>Tea & Snacks:</strong> 4:30 PM – 6:30 PM</li>
          <li><strong>Dinner:</strong> 7:00 PM – 9:00 PM</li>
        </ul>
        <p>Delivery and dine-in are available during the above timings.</p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">4. Delivery</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Free home delivery is available within a 3 km radius of our restaurant.</li>
          <li>A small parcel charge applies for takeaway and home delivery.</li>
          <li>Delivery timings may vary due to traffic, weather, or other operational reasons.</li>
        </ul>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">5. Dine-In</h2>
        <p>
          Customers are welcome to enjoy freshly prepared meals at our restaurant during business hours. No additional charges apply for dine-in.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">6. Payments</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Subscription payments must be made in advance.</li>
          <li>Payments can be completed using the payment options available on our website.</li>
          <li>Orders will be confirmed only after successful payment verification.</li>
        </ul>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">7. Menu</h2>
        <p>
          Our menu is prepared fresh daily. Menu items may change based on ingredient availability, seasonal produce, or operational requirements while maintaining the quality and authenticity of Kerala cuisine.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">8. Subscription Validity</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>The 30-day Monthly Plan is valid for up to 45 days.</li>
          <li>The 7-day Weekly Plan is valid for up to 10 days.</li>
        </ul>
        <p>Unused validity beyond these periods will expire.</p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">9. Service Availability</h2>
        <p>
          Our services are currently available in Nallagandla, Gopanpalle, Kokapet, Tellapur, and nearby areas in Hyderabad. Delivery availability is subject to location.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">10. Changes to Services</h2>
        <p>
          Kayal Meal Box reserves the right to modify meal plans, pricing, menus, delivery areas, or these Terms & Conditions at any time without prior notice.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">11. Contact Us</h2>
        <p>For enquiries or support, please contact us:</p>
        <ul className="list-none pl-0 space-y-2 mt-2">
          <li>📍 Kayal Meal Box, Hyderabad</li>
          <li>📞 +91 9121538113</li>
          <li>📞 +91 9000999223</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
