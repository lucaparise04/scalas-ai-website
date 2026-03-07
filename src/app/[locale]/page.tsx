import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import VideoSection from "@/components/sections/VideoSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Testimonials from "@/components/sections/Testimonials";
import TeamPreview from "@/components/sections/TeamPreview";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <VideoSection />
      <ServicesOverview />
      <Testimonials />
      <TeamPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
