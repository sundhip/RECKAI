/**
 * RECKAI DESIGN SYSTEM TOKENS
 * Single source of truth for colors, typography, spacing, radii, shadows, and layout.
 */

export const tokens = {
  colors: {
    canvas: {
      default: "#FFFFFF",
      subtle: "#FBFBFD",
      muted: "#F3F4F6",
      border: "rgba(0, 0, 0, 0.08)",
      borderSubtle: "rgba(0, 0, 0, 0.04)",
    },
    dark: {
      canvas: "#0A0A0C",
      surface: "#121218",
      elevated: "#1A1A24",
      border: "rgba(255, 255, 255, 0.08)",
      borderSubtle: "rgba(255, 255, 255, 0.04)",
    },
    charcoal: {
      900: "#111827",
      800: "#1F2937",
      700: "#374151",
      600: "#4B5563",
      500: "#6B7280",
      400: "#9CA3AF",
    },
    violet: {
      primary: "#7C3AED",
      light: "#8B5CF6",
      dark: "#6D28D9",
      subtle: "rgba(124, 58, 237, 0.08)",
      glow: "rgba(139, 92, 246, 0.25)",
      border: "rgba(124, 58, 237, 0.20)",
    },
  },

  typography: {
    fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scale: {
      display: {
        fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
        lineHeight: "1.04",
        letterSpacing: "-0.035em",
        fontWeight: "700",
      },
      h1: {
        fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
        lineHeight: "1.08",
        letterSpacing: "-0.03em",
        fontWeight: "700",
      },
      h2: {
        fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
        lineHeight: "1.15",
        letterSpacing: "-0.025em",
        fontWeight: "600",
      },
      h3: {
        fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
        lineHeight: "1.25",
        letterSpacing: "-0.02em",
        fontWeight: "600",
      },
      h4: {
        fontSize: "1.25rem",
        lineHeight: "1.4",
        letterSpacing: "-0.015em",
        fontWeight: "600",
      },
      bodyLarge: {
        fontSize: "1.125rem",
        lineHeight: "1.65",
        letterSpacing: "-0.01em",
        fontWeight: "400",
      },
      body: {
        fontSize: "0.9375rem",
        lineHeight: "1.6",
        letterSpacing: "0em",
        fontWeight: "400",
      },
      bodySmall: {
        fontSize: "0.8125rem",
        lineHeight: "1.5",
        letterSpacing: "0em",
        fontWeight: "400",
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: "1.4",
        letterSpacing: "0.02em",
        fontWeight: "500",
      },
      label: {
        fontSize: "0.6875rem",
        lineHeight: "1.3",
        letterSpacing: "0.08em",
        fontWeight: "600",
        textTransform: "uppercase" as const,
      },
    },
  },

  radius: {
    none: "0px",
    sm: "0.375rem", // 6px
    md: "0.625rem", // 10px
    lg: "1rem",     // 16px
    xl: "1.5rem",   // 24px
    pill: "9999px",
  },

  shadows: {
    none: "none",
    subtle: "0 2px 12px -2px rgba(0, 0, 0, 0.04)",
    medium: "0 8px 24px -4px rgba(0, 0, 0, 0.06)",
    floating: "0 20px 48px -8px rgba(0, 0, 0, 0.12)",
    violetGlow: "0 0 32px -4px rgba(124, 58, 237, 0.28)",
  },

  containers: {
    narrow: "56rem",   // 896px
    standard: "80rem", // 1280px
    wide: "90rem",     // 1440px
    full: "100%",
  },

  transitions: {
    fast: "150ms cubic-bezier(0.16, 1, 0.3, 1)",
    standard: "250ms cubic-bezier(0.16, 1, 0.3, 1)",
    smooth: "400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};
