import { PolicyLayout } from "@/components/ui/PolicyLayout";

export default function AboutUs() {
  return (
    <PolicyLayout title="About Us" lastUpdated="July 2026">
      <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
        <p className="font-semibold text-xl text-[#2F6B45]">
          Welcome to Kayal Meal Box!
        </p>
        
        <p>
          Kayal Meal Box is a Kerala home-style meal service based in Hyderabad, backed by over 6 years of experience in the catering and restaurant industry. We are dedicated to bringing the authentic taste of Kerala to students, working professionals, and families through freshly prepared, hygienic, and affordable meals.
        </p>
        
        <p>
          Whether you choose our weekly or monthly meal subscription, dine-in facility, or home delivery, every meal is prepared with quality ingredients, traditional recipes, and the warmth of home.
        </p>
        
        <p>
          We proudly serve Nallagandla, Gopanpalle, financial district, and nearby areas, with free home delivery within a 3 km radius and a comfortable dine-in experience at our restaurant.
        </p>
        
        <p className="font-medium bg-[#FFFBF0] p-6 rounded-2xl border border-[#FFC503]/20 mt-8">
          At Kayal Meal Box, our mission is simple—to make authentic Kerala home-style food convenient, affordable, and enjoyable every day.
        </p>
      </div>
    </PolicyLayout>
  );
}
