// src/data/design.ts

/**
 * FIORELLA DESIGN SYSTEM
 * Berdasarkan Graphic Standard Manual (GSM) Fiorella
 * Panduan komprehensif untuk memastikan konsistensi visual di seluruh project
 */

// ============================================
// COLOR PALETTE
// ============================================
export const COLORS = {
  // Primary Dark - Digunakan untuk background utama, text gelap, dan elemen dominan
  dark: {
    primary: "#121E42",    // Warna gelap utama - background
    secondary: "#364A8C",  // Warna gelap sekunder - elemen penting
  },

  // Primary Light - Digunakan untuk teks pada latar gelap, elemen sekunder
  light: {
    primary: "#6590C2",    // Teks terang pada dark background
    secondary: "#A8C4D4",  // Background terang/secondary
  },

  // Neutral - Digunakan untuk background terang, heading, teks
  neutral: {
    white: "#FFFFFF",
    light: "#EDECE6",      // Heading berwarna terang, background alternatif
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },

  // Semantic - untuk keperluan khusus
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================
export const TYPOGRAPHY = {
  // Font families
  fonts: {
    // Headline: serif, elegant, attention-grabbing
    headline: "Castoro, serif",
    // Body: sans-serif, readable, clean
    body: "Figtree, sans-serif",
    // Fallback
    fallback: "system-ui, -apple-system, sans-serif",
  },

  // Font sizes (berbasis skala harmonis)
  sizes: {
    xs: "0.75rem",   // 12px
    sm: "0.875rem",  // 14px
    base: "1rem",    // 16px
    lg: "1.125rem",  // 18px
    xl: "1.25rem",   // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
  },

  // Line heights
  lineHeight: {
    tight: 1.2,      // untuk headline
    normal: 1.5,     // untuk body text
    relaxed: 1.75,   // untuk reading comfort
    loose: 2,        // untuk spacing
  },

  // Font weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Predefined text styles
  styles: {
    // Hero/Main title
    h1: {
      fontFamily: "Castoro, serif",
      fontSize: "3.75rem",   // 60px
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    // Section title
    h2: {
      fontFamily: "Castoro, serif",
      fontSize: "2.25rem",   // 36px
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    // Subsection title
    h3: {
      fontFamily: "Castoro, serif",
      fontSize: "1.875rem",  // 30px
      lineHeight: 1.3,
      fontWeight: 700,
    },
    // Card title / Medium heading
    h4: {
      fontFamily: "Castoro, serif",
      fontSize: "1.5rem",    // 24px
      lineHeight: 1.4,
      fontWeight: 600,
    },
    // Small heading
    h5: {
      fontFamily: "Figtree, sans-serif",
      fontSize: "1.25rem",   // 20px
      lineHeight: 1.4,
      fontWeight: 600,
    },
    // Label/Tag heading
    h6: {
      fontFamily: "Figtree, sans-serif",
      fontSize: "1.125rem",  // 18px
      lineHeight: 1.5,
      fontWeight: 600,
    },
    // Regular body text
    body: {
      fontFamily: "Figtree, sans-serif",
      fontSize: "1rem",      // 16px
      lineHeight: 1.5,
      fontWeight: 400,
    },
    // Small body text / Caption
    small: {
      fontFamily: "Figtree, sans-serif",
      fontSize: "0.875rem",  // 14px
      lineHeight: 1.5,
      fontWeight: 400,
    },
    // Extra small text / Tag
    xs: {
      fontFamily: "Figtree, sans-serif",
      fontSize: "0.75rem",   // 12px
      lineHeight: 1.5,
      fontWeight: 500,
    },
  },
} as const;

// ============================================
// SPACING SYSTEM
// Berbasis kelipatan 8px (base 4px sebagai minimum)
// ============================================
export const SPACING = {
  0: "0",
  1: "0.25rem",   // 4px  - minimal spacing
  2: "0.5rem",    // 8px
  3: "0.75rem",   // 12px
  4: "1rem",      // 16px - base unit
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
} as const;

// ============================================
// SHADOW SYSTEM
// ============================================
export const SHADOWS = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
} as const;

// ============================================
// BORDER RADIUS
// ============================================
export const BORDER_RADIUS = {
  none: "0",
  sm: "0.125rem",   // 2px
  base: "0.25rem",  // 4px
  md: "0.375rem",   // 6px
  lg: "0.5rem",     // 8px
  xl: "0.75rem",    // 12px
  "2xl": "1rem",    // 16px
  "3xl": "1.5rem",  // 24px
  full: "9999px",
} as const;

// ============================================
// BREAKPOINTS (Responsive Design)
// ============================================
export const BREAKPOINTS = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================
// Z-INDEX SCALE
// ============================================
export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  cursor: 9999,
} as const;

// ============================================
// TRANSITION & ANIMATION
// ============================================
export const TRANSITIONS = {
  duration: {
    fast: "150ms",
    base: "200ms",
    slow: "300ms",
    slower: "500ms",
  },
  timing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;