// src/lib/spacing.ts

import { SPACING } from "@/data/design";

/**
 * SPACING UTILITY FUNCTIONS
 * Helper functions untuk memudahkan penggunaan spacing system yang konsisten
 * Semua nilai berbasis kelipatan 8px (minimal 4px)
 */

// Type untuk spacing values
export type SpacingKey = keyof typeof SPACING;

// Helper untuk single spacing value
export function space(key: SpacingKey): string {
  return SPACING[key];
}

// Helper untuk shorthand padding (top, right, bottom, left)
export function padding(
  vertical?: SpacingKey,
  horizontal?: SpacingKey
): { paddingTop: string; paddingRight: string; paddingBottom: string; paddingLeft: string } {
  return {
    paddingTop: space(vertical || 0),
    paddingRight: space(horizontal || 0),
    paddingBottom: space(vertical || 0),
    paddingLeft: space(horizontal || 0),
  };
}

// Helper untuk shorthand margin
export function margin(
  vertical?: SpacingKey,
  horizontal?: SpacingKey
): { marginTop: string; marginRight: string; marginBottom: string; marginLeft: string } {
  return {
    marginTop: space(vertical || 0),
    marginRight: space(horizontal || 0),
    marginBottom: space(vertical || 0),
    marginLeft: space(horizontal || 0),
  };
}

// Helper untuk gap (flexbox/grid)
export function gap(value: SpacingKey): { gap: string } {
  return { gap: space(value) };
}

// ============================================
// COMMON SPACING PATTERNS (Tailwind classes)
// ============================================
export const SPACING_PATTERNS = {
  // Section padding - untuk main content area
  sectionPadding: "py-16 md:py-24",
  
  // Container horizontal padding - responsive
  containerPadding: "px-4 sm:px-6 lg:px-8",
  
  // Card padding - untuk card components
  cardPadding: "p-6",
  
  // Stack spacing - untuk vertical stacks
  stackGapNormal: "gap-4",
  stackGapLarge: "gap-6",
  stackGapSmall: "gap-2",
  
  // Grid spacing
  gridGapNormal: "gap-6",
  gridGapCozy: "gap-4",
  
  // Button spacing
  buttonPadding: "px-4 py-2",
  buttonPaddingLarge: "px-6 py-3",
  
  // Text spacing
  textSpacingNormal: "space-y-4",
  textSpacingLoose: "space-y-6",
  textSpacingTight: "space-y-2",
} as const;

// ============================================
// SPACING SCALES untuk berbagai komponen
// ============================================

/**
 * PADDING SCALES
 * Rekomendasi padding untuk berbagai komponen
 */
export const PADDING_SCALES = {
  // Compact - untuk elemen kecil/badge
  compact: {
    vertical: 1,    // 4px
    horizontal: 2,  // 8px
  },
  
  // Small - untuk button kecil, label
  small: {
    vertical: 2,    // 8px
    horizontal: 3,  // 12px
  },
  
  // Base - standard padding
  base: {
    vertical: 3,    // 12px
    horizontal: 4,  // 16px
  },
  
  // Medium - untuk card, section
  medium: {
    vertical: 4,    // 16px
    horizontal: 6,  // 24px
  },
  
  // Large - untuk hero, major sections
  large: {
    vertical: 6,    // 24px
    horizontal: 8,  // 32px
  },
  
  // Xlarge - untuk page-level sections
  xlarge: {
    vertical: 8,    // 32px
    horizontal: 12, // 48px
  },
} as const;

/**
 * MARGIN SCALES
 * Rekomendasi margin untuk spacing antar elemen
 */
export const MARGIN_SCALES = {
  // Tight spacing
  tight: {
    vertical: 1,    // 4px
    horizontal: 1,  // 4px
  },
  
  // Cozy spacing
  cozy: {
    vertical: 2,    // 8px
    horizontal: 2,  // 8px
  },
  
  // Normal spacing (default)
  normal: {
    vertical: 3,    // 12px
    horizontal: 3,  // 12px
  },
  
  // Relaxed spacing
  relaxed: {
    vertical: 4,    // 16px
    horizontal: 4,  // 16px
  },
  
  // Spacious spacing
  spacious: {
    vertical: 6,    // 24px
    horizontal: 6,  // 24px
  },
  
  // Large spacing (between sections)
  large: {
    vertical: 8,    // 32px
    horizontal: 8,  // 32px
  },
} as const;

/**
 * GAP SCALES
 * Untuk flexbox dan grid layouts
 */
export const GAP_SCALES = {
  tight: 1,   // 4px
  cozy: 2,    // 8px
  normal: 3,  // 12px
  relaxed: 4, // 16px
  spacious: 6, // 24px
  large: 8,   // 32px
} as const;

/**
 * Component-specific spacing recommendations
 * Gunakan constants ini untuk konsistensi
 */
export const COMPONENT_SPACING = {
  // Button
  button: {
    padding: "px-4 py-2",
    paddingLarge: "px-6 py-3",
    gap: "gap-2", // spacing antara icon dan text
  },
  
  // Card
  card: {
    padding: "p-6",
    gap: "gap-4",
  },
  
  // Section
  section: {
    paddingY: "py-16 md:py-24",
    containerPadding: "px-4 sm:px-6 lg:px-8",
    maxWidth: "max-w-7xl",
    gap: "gap-8",
  },
  
  // Header/Navigation
  header: {
    padding: "px-6 py-4",
    gap: "gap-4",
  },
  
  // Input/Form
  input: {
    padding: "px-3 py-2",
    gap: "gap-2", // spacing antar form fields
  },
  
  // List
  list: {
    itemGap: "gap-2",
    sectionGap: "gap-4",
  },
  
  // Grid
  grid: {
    gap: "gap-6",
    gapMobile: "gap-4",
  },
} as const;

// ============================================
// RESPONSIVE SPACING CLASSES
// Digunakan langsung di Tailwind className
// ============================================

/**
 * Contoh penggunaan responsive spacing:
 * className="py-4 md:py-6 lg:py-8" // berbeda di setiap breakpoint
 */
export const RESPONSIVE_SPACING = {
  // Padding sections - responsive
  sectionPaddingResponsive: "py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24",
  sectionPaddingResponsiveCompact: "py-6 sm:py-8 md:py-12 lg:py-16",
  
  // Container padding - responsive
  containerPaddingResponsive: "px-4 sm:px-6 md:px-8 lg:px-12",
  
  // Gaps - responsive
  gapResponsive: "gap-4 md:gap-6 lg:gap-8",
  gapResponsiveSmall: "gap-2 md:gap-3 lg:gap-4",
} as const;