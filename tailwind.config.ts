// tailwind.config.ts
// Konfigurasi Tailwind CSS dengan design system Fiorella

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================
      // COLORS - Dari COLORS constant di design.ts
      // ============================================
      colors: {
        primary: {
          dark: "#121E42",    // dark.primary
          "dark-alt": "#364A8C", // dark.secondary
          light: "#6590C2",   // light.primary
          "light-alt": "#A8C4D4", // light.secondary
        },
        neutral: {
          "light-bg": "#EDECE6",
        },
        semantic: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
      },

      // ============================================
      // TYPOGRAPHY - Font families
      // ============================================
      fontFamily: {
        serif: ["var(--font-castoro)", "serif"],      // Headlines
        sans: ["var(--font-figtree)", "sans-serif"],  // Body text
        display: ["var(--font-castoro)", "serif"],    // Display/Hero
      },

      // ============================================
      // FONT SIZES - Dari TYPOGRAPHY.sizes
      // ============================================
      fontSize: {
        xs: "0.75rem",      // 12px
        sm: "0.875rem",     // 14px
        base: "1rem",       // 16px
        lg: "1.125rem",     // 18px
        xl: "1.25rem",      // 20px
        "2xl": "1.5rem",    // 24px
        "3xl": "1.875rem",  // 30px
        "4xl": "2.25rem",   // 36px
        "5xl": "3rem",      // 48px
        "6xl": "3.75rem",   // 60px
      },

      // ============================================
      // LINE HEIGHT
      // ============================================
      lineHeight: {
        tight: "1.2",      // Headlines
        normal: "1.5",     // Body text
        relaxed: "1.75",   // Reading comfort
        loose: "2",        // Extra spacing
      },

      // ============================================
      // LETTER SPACING
      // ============================================
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0em",
        wide: "0.01em",
      },

      // ============================================
      // SPACING - Kelipatan 8px, minimal 4px
      // ============================================
      spacing: {
        1: "0.25rem",   // 4px
        2: "0.5rem",    // 8px
        3: "0.75rem",   // 12px
        4: "1rem",      // 16px
        5: "1.25rem",   // 20px
        6: "1.5rem",    // 24px
        7: "1.75rem",   // 28px
        8: "2rem",      // 32px
        9: "2.25rem",   // 36px
        10: "2.5rem",   // 40px
        12: "3rem",     // 48px
        14: "3.5rem",   // 56px
        16: "4rem",     // 64px
        20: "5rem",     // 80px
        24: "6rem",     // 96px
        28: "7rem",     // 112px
        32: "8rem",     // 128px
        36: "9rem",     // 144px
        40: "10rem",    // 160px
        44: "11rem",    // 176px
        48: "12rem",    // 192px
        52: "13rem",    // 208px
        56: "14rem",    // 224px
        60: "15rem",    // 240px
        64: "16rem",    // 256px
        72: "18rem",    // 288px
        80: "20rem",    // 320px
        96: "24rem",    // 384px
      },

      // ============================================
      // GAP - Untuk flexbox/grid
      // ============================================
      gap: {
        1: "0.25rem",   // 4px
        2: "0.5rem",    // 8px
        3: "0.75rem",   // 12px
        4: "1rem",      // 16px
        5: "1.25rem",   // 20px
        6: "1.5rem",    // 24px
        8: "2rem",      // 32px
        12: "3rem",     // 48px
        16: "4rem",     // 64px
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        none: "0",
        sm: "0.125rem",   // 2px
        base: "0.25rem",  // 4px
        md: "0.375rem",   // 6px
        lg: "0.5rem",     // 8px
        xl: "0.75rem",    // 12px
        "2xl": "1rem",    // 16px
        "3xl": "1.5rem",  // 24px
        full: "9999px",
      },

      // ============================================
      // SHADOWS - Drop shadow system
      // ============================================
      boxShadow: {
        none: "none",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        // Watermark shadow (dari GSM)
        watermark: "0 7px 9px rgba(0, 0, 0, 0.35)",
      },

      // ============================================
      // TRANSITIONS & ANIMATIONS
      // ============================================
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
        slower: "500ms",
      },
      transitionTimingFunction: {
        linear: "linear",
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // ============================================
      // CUSTOM UTILITIES
      // ============================================
      maxWidth: {
        "7xl": "80rem",  // Standard section max-width
      },
    },
  },

  plugins: [],
};

export default config;
