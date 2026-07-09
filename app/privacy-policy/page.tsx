import { PolicyLayout } from "@/components/ui/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="06/03/2026">
      <p className="text-lg">
        Kayal Meal Box respects your privacy and is committed to protecting your personal information.
      </p>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name</li>
          <li>Phone number</li>
          <li>Delivery address</li>
          <li>Email address</li>
          <li>Payment information</li>
        </ul>
        <p className="mt-3">This information is collected when you:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Place an order</li>
          <li>Subscribe to a plan</li>
          <li>Contact us</li>
        </ul>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Process orders</li>
          <li>Deliver meals</li>
          <li>Provide customer support</li>
          <li>Improve our services</li>
        </ul>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Data Protection</h2>
        <p>
          We do not sell or share your personal information with third parties except when required for payment processing or delivery operations.
        </p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Cookies</h2>
        <p>Our website may use cookies to improve browsing experience.</p>
      </section>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Contact</h2>
        <p>If you have any privacy related concerns, contact:</p>
        <p>
          <a href="mailto:kayalkeralarestaurant@gmail.com" className="text-[#2F6B45] hover:underline font-semibold">
            kayalkeralarestaurant@gmail.com
          </a>
        </p>
      </section>
    </PolicyLayout>
  );
}
