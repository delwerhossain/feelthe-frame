"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react"

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const quickLinks = ['Our Story', 'Our Work', 'Services', 'Process']
  const services = ['Video Editing', 'Filming', 'Full Production', 'Social Media']
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" }
  ]

  return (
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
                {quickLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => onScrollToSection(link.toLowerCase().replace(' ', ''))}
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
                {services.map((service) => (
                  <div key={service} className="text-white/72 text-sm">
                    {service}
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-white/8" />

              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a key={index} href={href} className="text-white/72 hover:text-brand transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
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
  )
}