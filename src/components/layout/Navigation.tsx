"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

interface NavigationProps {
  onScrollToSection: (id: string) => void;
}

export default function Navigation({ onScrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Our Story', id: 'story' },
    { label: 'Our Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'scale-98 opacity-95' : 'scale-100 opacity-100'
    }`}>
      <div className={`bg-midnight-light/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20 transition-all duration-500 ${
        isScrolled
          ? 'px-8 py-3'
          : 'px-12 py-4'
      }`}>
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Logo Section - Logo Only */}
          <div className="flex items-center min-w-fit">
            <div className="relative group">
              <Image
                src="/assets/Feel The Frame logos/Logo-01.png"
                alt="Feel The Frame Logo"
                width={44}
                height={44}
                className={`transition-all duration-300 group-hover:scale-110 ${
                  isScrolled ? 'w-9 h-9' : 'w-11 h-11'
                }`}
              />
              <div className="absolute inset-0 bg-brand/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
            </div>
          </div>

          {/* Navigation Items - Centered */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onScrollToSection('hero')}
              className="relative px-6 py-2.5 text-white/80 hover:text-white/95 transition-all duration-300 text-sm font-medium rounded-full group overflow-hidden"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand/15 to-brand-light/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
              <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-full"></div>
            </button>
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className="relative px-6 py-2.5 text-white/80 hover:text-white/95 transition-all duration-300 text-sm font-medium rounded-full group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand/15 to-brand-light/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-full"></div>
              </button>
            ))}
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className="relative px-6 py-2.5 text-white/80 hover:text-white/95 transition-all duration-300 text-sm font-medium rounded-full group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand/15 to-brand-light/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-full"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="min-w-fit">
            <Button
              variant="outline"
              size="sm"
              className="relative border-brand/40 text-white bg-brand/15 hover:bg-brand/80 hover:border-brand-light/60 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/30 backdrop-blur-sm px-6 py-2.5"
              onClick={() => onScrollToSection('contact')}
            >
              <span className="relative z-10 font-medium">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-light opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}