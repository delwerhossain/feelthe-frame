import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-syne)", "ui-serif", "Georgia"],
      },
      colors: {
        // Feel The Frame Brand Colors
        brand: {
          DEFAULT: "#6320EE",
          light: "#8B5CF6",
          dark: "#4C1D95",
          darker: "#3B1A78",
        },
        midnight: {
          DEFAULT: "#211A1D",
          light: "#2A2128",
        },
        text: {
          strong: "rgba(255, 255, 255, 0.92)",
          muted: "rgba(255, 255, 255, 0.72)",
          subtle: "rgba(255, 255, 255, 0.56)",
        },
        dividers: "rgba(255, 255, 255, 0.08)",

        // Semantic Colors (shadcn/ui compatible)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #6320EE 0%, #8B5CF6 100%)",
        "gradient-section": "linear-gradient(180deg, #111827 0%, #211A1D 100%)",
        "gradient-cta-glow":
          "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
        "gradient-text": "linear-gradient(135deg, #6320EE 0%, #8B5CF6 100%)",
        "gradient-vignette": `
          radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
        `,
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "glow-pulse": {
          "0%": {
            filter: "blur(8px)",
            opacity: "0.6",
          },
          "100%": {
            filter: "blur(12px)",
            opacity: "0.8",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
