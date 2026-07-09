import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WeeklyMenu } from "@/components/sections/WeeklyMenu";
import { PlanValidity } from "@/components/sections/PlanValidity";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <WhyChooseUs />
        <WeeklyMenu />
        <PlanValidity />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
