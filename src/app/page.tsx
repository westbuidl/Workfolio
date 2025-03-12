import Hero from "@/components/common/Hero";
import Footer from "@/components/sections/Footer";
import RemittancesSection from "@/components/sections/RemittancesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhySection from "@/components/sections/WhySection";
import CompetitiveRatesSection from "@/components/sections/CompetitiveRatesSection";
import TokenSection from "@/components/sections/TokenSection";
import RoadMapSection from "@/components/sections/CompetitiveRatesSection";

export default function Home() {
  return (
    <div>
      <Hero />
     <WhySection/>
     <HowItWorksSection/>
     <RemittancesSection/>
     <CompetitiveRatesSection/>
     <Footer/>
    </div>
  );
}
