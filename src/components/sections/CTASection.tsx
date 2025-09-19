"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  onScrollToSection: (id: string) => void;
}

export default function CTASection({ onScrollToSection }: CTASectionProps) {
  return (
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
              onClick={() => onScrollToSection('contact')}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}