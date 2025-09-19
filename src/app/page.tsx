"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Play, ChevronDown, Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 72
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-midnight text-foreground dark">
      {/* Glass Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'h-16 opacity-90' : 'h-18 opacity-100'
      }`}>
        <div className="bg-glass backdrop-blur-xl border border-brand rounded-full px-8 py-4 flex items-center gap-8 shadow-lg shadow-brand/20">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/Feel The Frame logos/Logo-01.png"
              alt="Feel The Frame Logo"
              width={32}
              height={32}
              className="w-auto h-8"
            />
            
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('story')}
              className="text-white/72 hover:text-white/92 transition-colors text-sm font-medium"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-white/72 hover:text-white/92 transition-colors text-sm font-medium"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/72 hover:text-white/92 transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-white/72 hover:text-white/92 transition-colors text-sm font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/72 hover:text-white/92 transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="border-brand text-white hover:bg-brand hover:text-white rounded-full"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
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
            <source src="https://dodevs.com/wp-content/uploads/2025/08/ssvid.net-NS-Feel-The-Frame-Showreel-2025_1080p.mp4" type="video/mp4" />
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
              Experience premium video production services. From concept to creation, we optimize your marketing with video content that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-cta-glow bg-brand hover:bg-brand-light text-white rounded-full">
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
          <span className="text-sm font-medium tracking-wide rotate-90 origin-center transform">SCROLL</span>
          <div className="w-px h-6 bg-current"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 bg-gradient-to-b from-midnight to-midnight-light rounded-t-[32px] relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="mx-auto mb-16 bg-glass border border-brand rounded-full p-1">
              <TabsTrigger
                value="story"
                className="rounded-full px-6 py-3 data-[state=active]:bg-brand data-[state=active]:text-white"
              >
                Our Story
              </TabsTrigger>
              <TabsTrigger
                value="mission"
                className="rounded-full px-6 py-3 data-[state=active]:bg-brand data-[state=active]:text-white"
              >
                Our Mission
              </TabsTrigger>
              <TabsTrigger
                value="promise"
                className="rounded-full px-6 py-3 data-[state=active]:bg-brand data-[state=active]:text-white"
              >
                Our Promise
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6 leading-tight">
                  Our Story
                </h2>
                <p className="text-white/72 text-lg leading-relaxed mb-8 max-w-[60ch]">
                  Born from a passion for visual storytelling, Feel The Frame transforms brands through the power of video. We believe every business has a unique story worth telling, and we're here to help you tell it in the most compelling way possible.
                </p>
                <Button
                  variant="outline"
                  className="border-brand text-white hover:bg-brand hover:text-white rounded-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/ourstorylow.jpg"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="rounded-[24px] w-full h-auto shadow-lg"
                />
              </div>
            </TabsContent>

            <TabsContent value="mission" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6 leading-tight">
                  Our Mission
                </h2>
                <p className="text-white/72 text-lg leading-relaxed mb-8 max-w-[60ch]">
                  To empower businesses with video content that not only captures attention but drives meaningful engagement and measurable results. We're committed to delivering exceptional quality while making the video production process seamless and enjoyable.
                </p>
                <Button
                  variant="outline"
                  className="border-brand text-white hover:bg-brand hover:text-white rounded-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/ourmissionlow2.jpg"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="rounded-[24px] w-full h-auto shadow-lg"
                />
              </div>
            </TabsContent>

            <TabsContent value="promise" className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6 leading-tight">
                  Our Promise
                </h2>
                <p className="text-white/72 text-lg leading-relaxed mb-8 max-w-[60ch]">
                  Every project receives our full creative attention and technical expertise. We promise transparent communication, on-time delivery, and content that exceeds your expectations. Your success is our success, and we're invested in your story from start to finish.
                </p>
                <Button
                  variant="outline"
                  className="border-brand text-white hover:bg-brand hover:text-white rounded-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/ourpromiselow.jpg"
                  alt="Our Promise"
                  width={600}
                  height={400}
                  className="rounded-[24px] w-full h-auto shadow-lg"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-24 bg-gradient-to-b from-white/5 to-brand/5 rounded-t-[32px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
              Our Work
            </h2>
            <p className="text-white/72 text-lg max-w-2xl mx-auto">
              Discover our portfolio of compelling video content that drives results for businesses across industries.
            </p>
          </div>

          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="gap-6">
              {[
                {
                  title: "Brand Storytelling",
                  description: "Authentic narratives that connect with your audience",
                  image: "/assets/Portfolio Video Thumbnails/brand-story.jpg"
                },
                {
                  title: "Product Showcase",
                  description: "Dynamic product demonstrations that convert",
                  image: "/assets/Portfolio Video Thumbnails/product-demo.jpg"
                },
                {
                  title: "Corporate Content",
                  description: "Professional videos that build trust and authority",
                  image: "/assets/Portfolio Video Thumbnails/corporate.jpg"
                }
              ].map((project, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
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

      {/* Services Section */}
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
            {[
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
            ].map((service, index) => (
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

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-gray-50/5 to-white/5 rounded-t-[32px]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
              Our Process
            </h2>
            <p className="text-white/72 text-lg max-w-2xl mx-auto">
              A streamlined approach that ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Spine */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand"></div>

            {[
              {
                step: "1",
                title: "Pre-Production",
                description: "We start with understanding your goals, audience, and vision. Our team develops concepts, creates scripts, and plans every detail.",
                features: ["Strategy Development", "Script Writing", "Storyboarding", "Location Scouting"],
                image: "/assets/images/Rectangle2.jpg",
                side: "left"
              },
              {
                step: "2",
                title: "Production",
                description: "Our experienced crew brings your vision to life with professional equipment and creative expertise.",
                features: ["Professional Filming", "Direction & Guidance", "Quality Assurance", "Collaborative Approach"],
                image: "/assets/images/Rectangle2.jpg",
                side: "right"
              },
              {
                step: "3",
                title: "Post-Production",
                description: "Expert editing, color correction, sound design, and final touches that make your video shine.",
                features: ["Professional Editing", "Color Grading", "Sound Design", "Revisions & Delivery"],
                image: "/assets/images/Rectangle2.jpg",
                side: "left"
              }
            ].map((process, index) => (
              <div key={index} className={`relative mb-16 last:mb-0 ${process.side === 'right' ? 'flex-row-reverse' : ''} flex items-center gap-8`}>
                {/* Step Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-11 h-11 bg-brand rounded-full flex items-center justify-center text-white font-bold border-2 border-white/24 z-10">
                  {process.step}
                </div>

                {/* Content */}
                <div className={`flex-1 ${process.side === 'right' ? 'text-right pl-16' : 'pr-16'}`}>
                  <div className={`bg-midnight-light rounded-[20px] p-6 border border-white/8 ${process.side === 'right' ? 'ml-auto' : ''} max-w-md`}>
                    <h3 className="font-display font-semibold text-white text-2xl mb-3">
                      {process.title}
                    </h3>
                    <p className="text-white/72 text-sm mb-4 leading-relaxed">
                      {process.description}
                    </p>
                    <div className="space-y-2">
                      {process.features.map((feature, idx) => (
                        <div key={idx} className={`flex items-center gap-2 text-sm text-white/60 ${process.side === 'right' ? 'justify-end' : ''}`}>
                          <div className="w-1 h-1 rounded-full bg-brand"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`flex-1 ${process.side === 'right' ? 'pr-16' : 'pl-16'}`}>
                  <div className="w-48 h-32 bg-gradient-to-br from-brand/30 to-brand-light/30 rounded-[20px] shadow-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="gradient-cta-glow bg-midnight-light border border-brand rounded-[32px] p-12 text-center max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
                Creative Ideas Deserve The Right Team
              </h2>
              <p className="text-white/72 text-lg mb-8 max-w-2xl mx-auto">
                Ready to transform your vision into compelling video content? Let's create something amazing together.
              </p>
              <Button
                size="lg"
                className="gradient-cta-glow bg-brand hover:bg-brand-light text-white rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <Card className="bg-midnight-light border border-white/8 rounded-[16px] p-6">
              <CardContent className="p-0">
                <h3 className="font-display font-semibold text-white text-lg mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/72">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">hello@feeltheframe.ca</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/72">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/72">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Toronto, ON</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-midnight-light border border-white/8 rounded-[16px] p-6">
              <CardContent className="p-0">
                <h3 className="font-display font-semibold text-white text-lg mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {['Our Story', 'Our Work', 'Services', 'Process'].map((link) => (
                    <button
                      key={link}
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                      className="block text-white/72 hover:text-brand transition-colors text-sm"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-midnight-light border border-white/8 rounded-[16px] p-6">
              <CardContent className="p-0">
                <h3 className="font-display font-semibold text-white text-lg mb-4">Services</h3>
                <div className="space-y-3">
                  {['Video Editing', 'Filming', 'Full Production', 'Social Media'].map((service) => (
                    <div key={service} className="text-white/72 text-sm">
                      {service}
                    </div>
                  ))}
                </div>

                <Separator className="my-4 bg-white/8" />

                <div className="flex gap-4">
                  <a href="#" className="text-white/72 hover:text-brand transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-white/72 hover:text-brand transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-white/72 hover:text-brand transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-8 bg-white/8" />

          <div className="text-center text-white/60 text-sm">
            <p>&copy; 2024 Feel The Frame. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}