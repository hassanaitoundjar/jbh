import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { LogoSection } from "@/components/sections/LogoSection";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import FunctionsSection from "@/components/sections/FunctionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BlogSection } from "@/components/sections/BlogSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PrinciplesSection />
      <StatsSection />
      <FunctionsSection />
      <ProcessSection />
      <PortfolioGallery />
      <TestimonialsSection />
      <LogoSection />
      <BlogSection />
    </>
  );
}
