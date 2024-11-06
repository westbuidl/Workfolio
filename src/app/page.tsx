import Hero from "@/components/common/Hero";
import Footer from "@/components/sections/Footer";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhySection from "@/components/sections/WhySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TokenSection from "@/components/sections/TokenSection";
import RoadMapSection from "@/components/sections/RoadMapSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <HowItWorksSection />
      <WhySection />
      <ExperienceSection />
      <TokenSection />
      <RoadMapSection />
      <Footer />
     
    </div>
  );
}
