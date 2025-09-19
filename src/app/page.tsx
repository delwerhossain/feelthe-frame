"use client";

import { useCallback } from "react";
import Navigation from "@/components/Navigation";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StorySection from "@/components/sections/StorySection";
import WorkSection from "@/components/sections/WorkSection";

export default function HomePage() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-midnight text-foreground dark">
      <Navigation onScrollToSection={scrollToSection} />
      <HeroSection onScrollToSection={scrollToSection} />
      <StorySection onScrollToSection={scrollToSection} />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection onScrollToSection={scrollToSection} />
      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
}