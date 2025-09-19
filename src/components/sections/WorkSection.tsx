"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const workProjects = [
  {
    title: "Brand Storytelling",
    description: "Authentic narratives that connect with your audience",
    image: "/assets/Portfolio Video Thumbnails/brand-story.jpg",
  },
  {
    title: "Product Showcase",
    description: "Dynamic product demonstrations that convert",
    image: "/assets/Portfolio Video Thumbnails/product-demo.jpg",
  },
  {
    title: "Corporate Content",
    description: "Professional videos that build trust and authority",
    image: "/assets/Portfolio Video Thumbnails/corporate.jpg",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-24 bg-gradient-to-b from-white/5 to-brand/5 rounded-t-[32px]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Our Work
          </h2>
          <p className="text-white/72 text-lg max-w-2xl mx-auto">
            Discover our portfolio of compelling video content that drives
            results for businesses across industries.
          </p>
        </div>

        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="gap-6">
            {workProjects.map((project, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="group relative overflow-hidden rounded-[28px] bg-midnight-light border border-white/8 hover:border-brand/24 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/20">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-brand to-brand-light"></div>

                    {/* Caption Panel */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gradient-to-br from-brand to-brand-light/80 backdrop-blur-sm rounded-[20px] p-6 border border-white/16 text-center max-w-xs group-hover:translate-y-[-8px] transition-transform duration-300">
                        <h3 className="font-display font-semibold text-white text-xl mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                          {project.description}
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 rounded-full"
                        >
                          Watch Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-brand hover:bg-brand-light text-white border-0 shadow-lg shadow-brand/30 -left-6" />
          <CarouselNext className="bg-brand hover:bg-brand-light text-white border-0 shadow-lg shadow-brand/30 -right-6" />
        </Carousel>
      </div>
    </section>
  );
}
