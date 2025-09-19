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
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'h-16 opacity-90' : 'h-18 opacity-100'
    }`}>
      <div className="bg-glass backdrop-blur-xl border border-brand rounded-full px-8 py-4 flex items-center gap-8 shadow-lg shadow-brand/20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/Feel The Frame logos/Logo-01.png"
            alt="Feel The Frame Logo"
            width={32}
            height={32}
            className="w-auto h-8"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className="text-white/72 hover:text-white/92 transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          size="sm"
          className="border-brand text-white hover:bg-brand hover:text-white rounded-full"
          onClick={() => onScrollToSection('contact')}
        >
          Let's Talk
        </Button>
      </div>
    </nav>
  )
}