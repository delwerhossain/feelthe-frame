"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface StorySectionProps {
  onScrollToSection: (id: string) => void;
}

const storyContent = [
  {
    id: "story",
    title: "Our Story",
    content: "Born from a passion for visual storytelling, Feel The Frame transforms brands through the power of video. We believe every business has a unique story worth telling, and we're here to help you tell it in the most compelling way possible.",
    image: "/assets/images/ourstorylow.jpg"
  },
  {
    id: "mission",
    title: "Our Mission",
    content: "To empower businesses with video content that not only captures attention but drives meaningful engagement and measurable results. We're committed to delivering exceptional quality while making the video production process seamless and enjoyable.",
    image: "/assets/images/ourmissionlow2.jpg"
  },
  {
    id: "promise",
    title: "Our Promise",
    content: "Every project receives our full creative attention and technical expertise. We promise transparent communication, on-time delivery, and content that exceeds your expectations. Your success is our success, and we're invested in your story from start to finish.",
    image: "/assets/images/ourpromiselow.jpg"
  }
]

export default function StorySection({ onScrollToSection }: StorySectionProps) {
  return (
    <section id="story" className="py-24 bg-gradient-to-b from-midnight to-midnight-light rounded-t-[32px] relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="mx-auto mb-16 bg-glass border border-brand rounded-full p-1">
            {storyContent.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="rounded-full px-6 py-3 data-[state=active]:bg-brand data-[state=active]:text-white"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {storyContent.map((item) => (
            <TabsContent key={item.id} value={item.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6 leading-tight">
                  {item.title}
                </h2>
                <p className="text-white/72 text-lg leading-relaxed mb-8 max-w-[60ch]">
                  {item.content}
                </p>
                <Button
                  variant="outline"
                  className="border-brand text-white hover:bg-brand hover:text-white rounded-full"
                  onClick={() => onScrollToSection('contact')}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-[24px] w-full h-auto shadow-lg"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}