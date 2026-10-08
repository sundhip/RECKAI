import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutral: {
          750: "#2B2B30",
          850: "#1C1C21",
          925: "#131317",
        },
        reckai: {
          canvas: "#FFFFFF",
          "canvas-subtle": "#FBFBFD",
          "canvas-muted": "#F3F4F6",
          dark: "#0A0A0C",
          "dark-surface": "#121218",
          "dark-elevated": "#1A1A24",
          violet: {
            DEFAULT: "#7C3AED",
            light: "#8B5CF6",
            dark: "#6D28D9",
            subtle: "rgba(124, 58, 237, 0.08)",
            glow: "rgba(139, 92, 246, 0.25)",
            border: "rgba(124, 58, 237, 0.20)",
          },
          charcoal: {
            DEFAULT: "#111827",
            800: "#1F2937",
            700: "#374151",
            600: "#4B5563",
            500: "#6B7280",
            400: "#9CA3AF",
            hairline: "rgba(0, 0, 0, 0.08)",
            "hairline-subtle": "rgba(0, 0, 0, 0.04)",
            "dark-hairline": "rgba(255, 255, 255, 0.08)",
            "dark-hairline-subtle": "rgba(255, 255, 255, 0.04)",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        editorial: "-0.025em",
        tightest: "-0.035em",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.625rem",
        lg: "1rem",
        xl: "1.5rem",
        pill: "9999px",
        card: "1.25rem",
      },
      boxShadow: {
        none: "none",
        subtle: "0 2px 12px -2px rgba(0, 0, 0, 0.04)",
        medium: "0 8px 24px -4px rgba(0, 0, 0, 0.06)",
        floating: "0 20px 48px -8px rgba(0, 0, 0, 0.12)",
        "violet-glow": "0 0 32px -4px rgba(124, 58, 237, 0.28)",
      },
      maxWidth: {
        narrow: "56rem",   // 896px
        standard: "80rem", // 1280px
        wide: "90rem",     // 1440px
      },
    },
  },
  plugins: [],
};

export default config;
