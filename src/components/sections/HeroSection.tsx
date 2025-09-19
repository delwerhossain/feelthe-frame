"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/Showreel Thumbnail/showreel-poster.jpg"
        >
          <source
            src="https://dodevs.com/wp-content/uploads/2025/08/ssvid.net-NS-Feel-The-Frame-Showreel-2025_1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay A - Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/15"></div>

        {/* Overlay B - Brand Wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-brand-light/10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-end pb-20 pl-8 md:pl-16 lg:pl-24">
        <div className="max-w-4xl">
          <h1 className="font-display font-bold text-white/92 mb-6 text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Optimize your marketing with
            <span className="text-gradient block">video</span>
          </h1>
          <p className="text-white/72 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Experience premium video production services. From concept to
            creation, we optimize your marketing with video content that drives
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-cta-glow bg-brand hover:bg-brand-light text-white rounded-full"
              onClick={() => onScrollToSection("contact")}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Showreel
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-8 md:left-16 lg:left-24 bottom-8 flex flex-col items-center gap-2 text-white/56 hover:text-white/92 transition-colors cursor-pointer">
        <span className="text-sm font-medium tracking-wide rotate-90 origin-center transform">
          SCROLL
        </span>
        <div className="w-px h-6 bg-current"></div>
      </div>
    </section>
  );
}
