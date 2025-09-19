"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Video Editing",
    description: "Professional post-production services that bring your vision to life with expert editing, color correction, and sound design.",
    image: "/assets/images/editing-image.jpg",
    features: ["Color Correction", "Sound Design", "Motion Graphics", "Visual Effects"]
  },
  {
    title: "Filming",
    description: "Complete filming services with professional equipment and experienced crew to capture your story perfectly.",
    image: "/assets/images/filming-image.jpg",
    features: ["Multi-Camera Setup", "Professional Lighting", "4K Recording", "Drone Footage"]
  },
  {
    title: "Full Production",
    description: "End-to-end video production from concept development to final delivery, handling every aspect of your project.",
    image: "/assets/images/full-production-image.jpg",
    features: ["Concept Development", "Script Writing", "Production Management", "Post-Production"]
  },
  {
    title: "Social Media",
    description: "Optimized video content for social platforms that engages audiences and drives conversions.",
    image: "/assets/images/editing-image.jpg",
    features: ["Platform Optimization", "Short-Form Content", "Story Templates", "Engagement Analytics"]
  },
  {
    title: "UGC",
    description: "User-generated content strategies that build authentic connections with your audience.",
    image: "/assets/images/filming-image.jpg",
    features: ["Content Strategy", "Influencer Collaboration", "Community Building", "Brand Advocacy"]
  },
  {
    title: "Live Events",
    description: "Professional live event coverage and streaming services for conferences, launches, and special occasions.",
    image: "/assets/images/full-production-image.jpg",
    features: ["Live Streaming", "Event Documentation", "Multi-Angle Coverage", "Real-Time Editing"]
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-midnight to-midnight-light rounded-t-[32px] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
            Services
          </h2>
          <p className="text-white/72 text-lg max-w-2xl mx-auto">
            Comprehensive video production services tailored to your business needs and marketing objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-midnight-light border border-white/8 hover:border-brand/24 rounded-[24px] p-6 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/10 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-brand/20 to-brand-light/20 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-brand/30 to-brand-light/30"></div>
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-white/72 text-sm mb-4 leading-relaxed max-w-[60ch]">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1 h-1 rounded-full bg-brand"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-brand hover:text-brand-light hover:bg-brand/10 p-0 h-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}