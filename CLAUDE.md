# Feel The Frame - Project Documentation

## Project Overview
Professional video production company website built with modern web technologies and a custom dark neo-purple design system.

## Technology Stack
- **Framework**: Next.js 15.5.3 with TypeScript
- **Styling**: Tailwind CSS 4.0 with custom utilities
- **UI Components**: Radix UI and shadcn/ui v4
- **Fonts**: Syne (display), Poppins (body text)
- **Development**: pnpm, Turbopack
- **Linting**: Biome

## Project Structure

### Route Organization (Following ROUTE_ORGANIZATION.md)
```
src/app/
├── (main)/                    # Public route group
│   ├── layout.tsx            # Main layout wrapper
│   └── page.tsx              # Home page
├── components/
│   ├── layout/
│   │   └── Navigation.tsx    # Glass navigation component
│   ├── sections/             # Modular page sections
│   │   ├── HeroSection.tsx   # Video hero with CTAs
│   │   ├── StorySection.tsx  # Tabbed story/mission/promise
│   │   ├── WorkSection.tsx   # Portfolio carousel
│   │   ├── ServicesSection.tsx # Services grid
│   │   ├── ProcessSection.tsx  # Timeline visualization
│   │   ├── CTASection.tsx    # Call-to-action banner
│   │   └── Footer.tsx        # Contact footer
│   └── ui/                   # shadcn/ui components
├── layout.tsx                # Root layout with fonts
└── globals.css               # Global styles + custom utilities
```

## Feel The Frame Design System

### Brand Colors
- **Primary Purple**: `#6320EE`
- **Purple Light**: `#8B5CF6` (hover states, accents)
- **Purple Dark**: `#4C1D95` (pressed states)
- **Purple Darker**: `#3B1A78` (deep accents)

### Surface Colors
- **Midnight**: `#211A1D` (background base)
- **Midnight Light**: `#2A2128` (elevated surfaces, cards)

### Text System
- **Strong**: `rgba(255, 255, 255, 0.92)` (headings, primary text)
- **Muted**: `rgba(255, 255, 255, 0.72)` (secondary text)
- **Subtle**: `rgba(255, 255, 255, 0.56)` (tertiary text)

### Border System
- **Standard**: `rgba(255, 255, 255, 0.08)` (card borders, dividers)
- **Brand**: `rgba(99, 32, 238, 0.24)` (focus states, brand outlines)

### Signature Gradients
```css
/* Hero Gradient - 135° Purple Sweep */
.gradient-hero {
  background: linear-gradient(135deg, #6320EE 0%, #8B5CF6 100%);
}

/* Section Background - Vertical with Purple Vignette */
.gradient-section {
  background: linear-gradient(180deg, #111827 0%, #211A1D 100%);
  /* + radial vignette overlays */
}

/* CTA Glow - Radial Purple Glow */
.gradient-cta-glow {
  /* Radial glow effect with blur and animation */
}
```

### Glass Morphism Effects
- **Background**: `rgba(255, 255, 255, 0.02)`
- **Backdrop Filter**: `blur(12px)`
- **Border**: `1px solid rgba(255, 255, 255, 0.08)`

## Component Architecture

### Navigation (`components/layout/Navigation.tsx`)
- Fixed glass navigation bar
- Smooth scroll to sections
- Responsive design with logo and CTA
- Opacity changes on scroll

### Hero Section (`components/sections/HeroSection.tsx`)
- Full-screen video background from provided URL
- Dual overlay system (readability + brand wash)
- Left-aligned content with gradient text
- Primary and secondary CTAs
- Scroll indicator

### Story Section (`components/sections/StorySection.tsx`)
- Tabbed interface (Our Story, Mission, Promise)
- Two-column layout with images
- Consistent CTA buttons
- Brand-colored tab styling

### Work Section (`components/sections/WorkSection.tsx`)
- Interactive carousel with Embla
- Purple-themed navigation arrows
- Gradient project cards with hover animations
- Caption panels with CTAs

### Services Section (`components/sections/ServicesSection.tsx`)
- 3×2 responsive grid (1 column on mobile)
- Six service cards with hover effects
- Feature lists with bullet points
- Gradient placeholder images

### Process Section (`components/sections/ProcessSection.tsx`)
- Vertical timeline with central spine
- Alternating left/right content layout
- Three production stages
- Numbered step markers

### CTA Section (`components/sections/CTASection.tsx`)
- Centered content with signature glow
- Purple gradient background
- Strong call-to-action messaging

### Footer (`components/sections/Footer.tsx`)
- Three-column layout
- Contact information with icons
- Quick navigation links
- Social media icons

## Custom CSS Utilities

### Animations
```css
.animate-fade-in { animation: fadeIn 0.6s ease-out; }
.animate-slide-up { animation: slideUp 0.7s ease-out; }
.animate-scale-in { animation: scaleIn 0.4s ease-out; }
```

### Smooth Scrolling
- Custom scroll behavior with 600ms duration
- 72px offset for fixed navigation
- Custom purple-themed scrollbar

### Typography
- **Headings**: Syne font (--font-display)
- **Body**: Poppins font (--font-sans)
- **Weights**: 300-800 range available

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format
```

## shadcn/ui Components Installed
- Button
- Card
- Tabs
- Carousel
- Separator

## Key Features
1. **Glass Navigation** - Fixed position with glassmorphism effects
2. **Video Hero** - Full-screen background video with overlays
3. **Tabbed Content** - Interactive story/mission/promise sections
4. **Portfolio Carousel** - Smooth carousel with custom navigation
5. **Services Grid** - Responsive grid with hover animations
6. **Process Timeline** - Visual timeline with alternating layout
7. **Signature Gradients** - Custom purple gradients throughout
8. **Smooth Animations** - Custom keyframe animations
9. **Responsive Design** - Mobile-first approach
10. **Type Safety** - Full TypeScript implementation

## Assets Structure
```
public/assets/
├── Feel The Frame logos/     # Logo variations (PNG, SVG)
├── images/                   # Service and story images
├── Portfolio Video Thumbnails/ # Project thumbnails
└── Showreel Thumbnail/       # Hero video poster
```

## External Dependencies
- **Hero Video**: https://dodevs.com/wp-content/uploads/2025/08/ssvid.net-NS-Feel-The-Frame-Showreel-2025_1080p.mp4
- **Fonts**: Google Fonts (Syne, Poppins)
- **Icons**: Lucide React

## Performance Optimizations
- **Route Groups**: Clean separation of public/protected routes
- **Component Splitting**: Modular section components
- **useCallback**: Optimized scroll functions
- **Turbopack**: Fast development builds
- **Font Loading**: Optimized Google Fonts integration

## Development Notes
- Website runs successfully at `http://localhost:3000`
- 404 errors for portfolio images are expected (placeholder paths)
- All components are fully responsive
- Dark mode is enforced with custom midnight theme
- Smooth scroll behavior with custom offset for navigation

## Future Enhancements
- Add actual portfolio images
- Implement contact form functionality
- Add loading states and skeleton components
- Create dashboard route group for admin features
- Add animation library (Framer Motion) for advanced animations

---

*Last Updated: September 19, 2025*
*Project Status: ✅ Complete and Running*