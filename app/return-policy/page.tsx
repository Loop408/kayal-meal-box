import { PolicyLayout } from "@/components/ui/PolicyLayout";

export default function ReturnPolicy() {
  return (
    <PolicyLayout title="Return Policy" lastUpdated="06/03/2026">
      <p className="text-lg">
        Due to hygiene and food safety reasons, food items cannot be returned once delivered.
      </p>

      <section className="space-y-3 mt-6">
        <h2 className="text-xl font-bold text-[#2F6B45]">Quality or Packaging Issues</h2>
        <p>
          If you face any issues with a meal (quality or packaging), please contact us within 2 hours of delivery so we can review and assist you.
        </p>
      </section>
    </PolicyLayout>
  );
}
