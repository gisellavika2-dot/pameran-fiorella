# Fiorella Design System 🎨

Dokumentasi lengkap design system Fiorella berdasarkan Graphic Standard Manual (GSM). Panduan ini memastikan konsistensi visual dan pengalaman pengguna di seluruh website.

---

## 📋 Daftar Isi

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Components](#components)
5. [Responsive Design](#responsive-design)
6. [Best Practices](#best-practices)

---

## 🎨 Color Palette

Semua warna didefinisikan dalam `src/data/design.ts` dan dapat diakses melalui konstanta `COLORS`.

### Primary Dark
Digunakan untuk background utama, teks gelap, dan elemen dominan.

| Nama | Hex Code | Penggunaan |
|------|----------|-----------|
| `dark.primary` | `#121E42` | Background utama, text gelap |
| `dark.secondary` | `#364A8C` | Elemen penting, highlight |

### Primary Light
Digunakan untuk teks pada latar gelap dan elemen sekunder.

| Nama | Hex Code | Penggunaan |
|------|----------|-----------|
| `light.primary` | `#6590C2` | Teks pada dark background |
| `light.secondary` | `#A8C4D4` | Background terang/secondary |

### Neutral
Untuk background terang, heading, dan teks body.

| Nama | Hex Code | Penggunaan |
|------|----------|-----------|
| `neutral.white` | `#FFFFFF` | Background level tertinggi |
| `neutral.light` | `#EDECE6` | Heading terang, bg alternatif |
| `neutral.gray` | Skala 50-900 | Teks dan divider |

### Semantic Colors
Untuk state dan messaging khusus.

| Nama | Hex Code | Penggunaan |
|------|----------|-----------|
| `semantic.success` | `#10B981` | Success messages, valid state |
| `semantic.warning` | `#F59E0B` | Warning messages, alerts |
| `semantic.error` | `#EF4444` | Error messages, invalid state |
| `semantic.info` | `#3B82F6` | Info messages, notifications |

### Contoh Penggunaan

```tsx
import { COLORS } from "@/data/design";

// Warna background
<div style={{ backgroundColor: COLORS.dark.primary }}>
  {/* Dark background */}
</div>

// Warna teks
<p style={{ color: COLORS.light.primary }}>
  Teks terang di dark background
</p>

// Warna semantic
<div style={{ backgroundColor: COLORS.semantic.success }}>
  Berhasil!
</div>

// Tailwind (lebih direkomendasikan)
<div className="bg-[#121E42] text-[#6590C2]">
  Gunakan hex codes di Tailwind
</div>
```

---

## 📝 Typography

### Font Stack

| Penggunaan | Font | Fallback |
|-----------|------|----------|
| **Headline** | Castoro (Serif) | serif |
| **Body** | Figtree (Sans-serif) | sans-serif |
| **Fallback** | - | system-ui, -apple-system |

### Font Import

Tambahkan ke `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
```

### Predefined Text Styles

Gunakan styles yang sudah didefinisikan dalam `TYPOGRAPHY.styles`:

#### H1 - Hero/Main Title
- Font: Castoro
- Size: 60px (3.75rem)
- Weight: 700 (bold)
- Line Height: 1.2
- Penggunaan: Page title utama, hero section

```tsx
<h1 style={TYPOGRAPHY.styles.h1}>
  Fiorella
</h1>
```

#### H2 - Section Title
- Font: Castoro
- Size: 36px (2.25rem)
- Weight: 700 (bold)
- Line Height: 1.2
- Penggunaan: Section title, major heading

```tsx
<h2 style={TYPOGRAPHY.styles.h2}>
  Hari Pelaksanaan
</h2>
```

#### H3 - Subsection Title
- Font: Castoro
- Size: 30px (1.875rem)
- Weight: 700 (bold)
- Line Height: 1.3
- Penggunaan: Subsection title, minor heading

#### H4 - Card Title
- Font: Castoro
- Size: 24px (1.5rem)
- Weight: 600 (semibold)
- Line Height: 1.4
- Penggunaan: Card title, medium heading

#### Body Text
- Font: Figtree
- Size: 16px (1rem)
- Weight: 400 (normal)
- Line Height: 1.5
- Penggunaan: Regular paragraph text

```tsx
<p style={TYPOGRAPHY.styles.body}>
  Ini adalah teks body yang dibaca dengan nyaman.
</p>
```

#### Small Text / Caption
- Font: Figtree
- Size: 14px (0.875rem)
- Weight: 400 (normal)
- Line Height: 1.5
- Penggunaan: Caption, helper text

#### Extra Small (XS)
- Font: Figtree
- Size: 12px (0.75rem)
- Weight: 500 (medium)
- Line Height: 1.5
- Penggunaan: Tag, label, meta text

### Font Weight Reference

| Weight | CSS Value | Penggunaan |
|--------|-----------|-----------|
| Light | 300 | (jarang digunakan) |
| Normal | 400 | Body text |
| Medium | 500 | Label, emphasis |
| Semibold | 600 | Heading kecil |
| Bold | 700 | Heading besar |

### Contoh Penggunaan

```tsx
import { TYPOGRAPHY } from "@/data/design";

// Menggunakan predefined style
<h1 style={TYPOGRAPHY.styles.h1}>Main Title</h1>
<p style={TYPOGRAPHY.styles.body}>Body paragraph</p>

// Menggunakan Tailwind (direkomendasikan)
<h1 className="font-serif text-6xl font-bold leading-tight">
  Main Title
</h1>
<p className="font-sans text-base font-normal leading-relaxed">
  Body paragraph
</p>

// Custom dengan font utilities
<p style={{ fontSize: TYPOGRAPHY.sizes.lg, lineHeight: TYPOGRAPHY.lineHeight.normal }}>
  Large text
</p>
```

---

## 📏 Spacing System

Spacing system Fiorella berbasis **kelipatan 8px** dengan **minimum 4px** untuk flexibility.

### Spacing Scale

```
0    = 0px
1    = 4px   (minimum)
2    = 8px   (base unit)
3    = 12px
4    = 16px  (standard)
5    = 20px
6    = 24px
8    = 32px
12   = 48px
16   = 64px
20   = 80px
24   = 96px
32   = 128px
...dst
```

### Penggunaan Spacing

#### Dengan Tailwind (Recommended)

```tsx
// Padding
<div className="p-4">Base padding 16px</div>
<div className="px-6 py-4">Horizontal 24px, Vertical 16px</div>
<div className="py-16 md:py-24">Responsive padding</div>

// Margin
<div className="mb-4">Margin-bottom 16px</div>
<div className="my-6">Margin Y 24px</div>
<div className="mx-auto">Center dengan margin auto</div>

// Gap (Flexbox/Grid)
<div className="flex gap-4">Items dengan gap 16px</div>
<div className="grid gap-6">Grid dengan gap 24px</div>
```

#### Dengan Constants Util

```tsx
import { space, SPACING, padding, margin, gap } from "@/lib/spacing";

// Single value
const spacingValue = space(4); // "1rem" = 16px

// Shorthand helpers
const styles = padding(4, 6);  // vertical 16px, horizontal 24px
// Result: { paddingTop: "1rem", paddingRight: "1.5rem", ... }

// Gap
const flexGap = gap(4);  // { gap: "1rem" }
```

### Recommended Spacing Scales

#### Compact Layout (Tight)
- Gap: 2-3 (8-12px)
- Padding: 2-3 (8-12px)
- Penggunaan: Compact forms, badges, dense layouts

#### Normal Layout (Standard)
- Gap: 4 (16px) - **DEFAULT**
- Padding: 4-6 (16-24px)
- Penggunaan: Cards, sections, standard components

#### Spacious Layout (Relaxed)
- Gap: 6-8 (24-32px)
- Padding: 6-8 (24-32px)
- Penggunaan: Hero sections, major sections

#### Extra Spacious
- Gap: 12+ (48px+)
- Padding: 12+ (48px+)
- Penggunaan: Page sections, major divisions

### Component Spacing Reference

```
BUTTON
├── Padding: px-4 py-2 (horizontal 16px, vertical 8px)
├── Gap (icon-text): gap-2 (8px)
└── Size Large: px-6 py-3

CARD
├── Padding: p-6 (24px)
├── Internal Gap: gap-4 (16px)
└── Shadow: base

SECTION
├── Padding Y: py-16 md:py-24 lg:py-32
├── Container Padding X: px-4 sm:px-6 lg:px-8
├── Max Width: max-w-7xl
└── Content Gap: gap-8

HEADER/NAV
├── Padding: px-6 py-4
├── Gap: gap-4
└── Item Gap: gap-2

FORM INPUT
├── Padding: px-3 py-2
├── Field Gap: gap-3 (antar field)
└── Label Gap: gap-2

GRID
├── Gap: gap-6 (desktop)
├── Gap Mobile: gap-4
└── Responsive: gap-4 md:gap-6 lg:gap-8

STACK (Vertical List)
├── Normal: space-y-4
├── Loose: space-y-6
└── Tight: space-y-2
```

### Responsive Spacing

Spacing berubah sesuai breakpoint:

```tsx
// Mobile: 16px, Tablet: 24px, Desktop: 32px
<div className="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>

// Section responsive
<section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  Content
</section>
```

---

## 🧩 Components

### Spacing Best Practices di Components

#### Button Component

```tsx
// src/components/ui/Button.tsx
export default function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 gap-2 flex items-center justify-center">
      {children}
    </button>
  );
}

// Usage
<Button>Click Me</Button>
<Button>
  <IconComponent />
  <span>With Icon</span>
</Button>
```

#### Card Component

```tsx
// src/components/ui/Card.tsx
export default function Card({ children, ...props }) {
  return (
    <div className="p-6 rounded-lg border">
      {children}
    </div>
  );
}
```

#### Section Component (Recommended untuk halaman dengan scroll-snap)

```tsx
// src/components/ui/Section.tsx
export default function Section({ children, title }) {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-4xl font-bold mb-12">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

// Usage
<Section title="Divisi">
  <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
    {/* Items */}
  </div>
</Section>
```

---

## 📱 Responsive Design

### Breakpoints

| Label | Width | Penggunaan |
|-------|-------|-----------|
| `xs` | 320px | Mobile kecil |
| `sm` | 640px | Mobile besar |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop kecil |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop besar |

### Mobile-First Approach

Selalu mulai dari mobile, kemudian tambahkan breakpoint untuk screen yang lebih besar:

```tsx
// ❌ TIDAK
<div className="hidden md:block">Desktop only</div>

// ✅ BENAR (mobile-first)
<div className="md:p-6 p-4">
  Padding 16px di mobile, 24px di desktop
</div>
```

### Responsive Classes Examples

```tsx
// Text size responsive
<h2 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive heading
</h2>

// Grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {items.map(item => <Card key={item.id}>{item}</Card>)}
</div>

// Spacing responsive
<section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div className="px-4 sm:px-6 lg:px-8">
    Content here
  </div>
</section>

// Display responsive
<button className="block md:hidden">Mobile Menu</button>
<nav className="hidden md:block">Desktop Navigation</nav>
```

---

## ✅ Best Practices

### 1. Konsistensi Warna

- ✅ Gunakan warna dari `COLORS` constant
- ✅ Gunakan hex codes yang konsisten
- ✅ Gunakan semantic colors untuk state

```tsx
// ✅ BENAR
<div className="bg-[#121E42] text-[#EDECE6]">
  Gunakan hex dari GSM
</div>

// ❌ HINDARI
<div className="bg-blue-500">
  Arbitrary color tidak sesuai GSM
</div>
```

### 2. Konsistensi Typography

- ✅ Gunakan Castoro untuk heading
- ✅ Gunakan Figtree untuk body text
- ✅ Ikuti font sizes dan weights yang sudah ditentukan

```tsx
// ✅ BENAR
<h1 className="font-serif text-6xl font-bold">
  Heading dengan Castoro
</h1>
<p className="font-sans text-base font-normal">
  Body dengan Figtree
</p>

// ❌ HINDARI
<h1 className="font-sans">
  Heading dengan font yang salah
</h1>
```

### 3. Konsistensi Spacing

- ✅ Gunakan spacing scale yang konsisten (kelipatan 8px)
- ✅ Gunakan responsive spacing untuk mobile/tablet/desktop
- ✅ Jangan gunakan arbitrary spacing (seperti `p-7`)

```tsx
// ✅ BENAR
<div className="p-6 gap-4 md:gap-6 lg:gap-8">
  Spacing kelipatan 8px
</div>

// ❌ HINDARI
<div className="p-7 gap-5">
  Arbitrary spacing
</div>
```

### 4. Component Layering

- ✅ Gunakan predefined component spacing
- ✅ Consistency dalam padding/margin antar component
- ✅ Stack components dengan gap yang konsisten

```tsx
// ✅ BENAR - Stack dengan gap
<div className="flex flex-col gap-4">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>

// ❌ HINDARI - Margin di setiap card
<Card className="mb-4">Item 1</Card>
<Card className="mb-4">Item 2</Card>
<Card>Item 3</Card>
```

### 5. Accessibility

- ✅ Pastikan contrast ratio 4.5:1 untuk teks body
- ✅ Gunakan semantic HTML elements
- ✅ Tambahkan aria-labels untuk interactive elements

```tsx
// ✅ BENAR - Text dengan contrast baik
<p className="text-[#1F2937] bg-[#FFFFFF]">
  Contrast ratio 11:1 ✓
</p>

// ❌ HINDARI - Kontras kurang baik
<p className="text-[#A8C4D4] bg-[#EDECE6]">
  Kontras rendah ✗
</p>
```

### 6. Dokumentasi Component

Setiap component baru harus didokumentasikan:

```tsx
/**
 * Card Component
 * 
 * Reusable card container dengan padding dan border.
 * 
 * @param children - Card content
 * @param hoverable - Enable hover effect (default: false)
 * 
 * @example
 * <Card hoverable>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 */
export default function Card({ children, hoverable = false }: CardProps) {
  // Implementation
}
```

---

## 📚 File Struktur

```
src/
├── data/
│   └── design.ts           # Color, typography, spacing constants
├── lib/
│   └── spacing.ts          # Spacing utilities dan helpers
└── components/
    └── ui/
        ├── Button.tsx      # Dengan consistent spacing
        ├── Card.tsx        # Dengan consistent spacing
        └── ...
```

---

## 🔗 Import Reference

```tsx
// Import colors
import { COLORS } from "@/data/design";

// Import typography
import { TYPOGRAPHY } from "@/data/design";

// Import spacing
import { SPACING, space, padding, margin, gap } from "@/lib/spacing";
import { COMPONENT_SPACING, RESPONSIVE_SPACING } from "@/lib/spacing";

// Import breakpoints
import { BREAKPOINTS } from "@/data/design";
```

---

## ❓ FAQ

**Q: Boleh gunakan arbitrary values di Tailwind?**
A: Hindari untuk color dan spacing. Gunakan hanya jika benar-benar diperlukan dan selalu dokumentasikan alasannya.

**Q: Bagaimana dengan custom colors tidak ada di palette?**
A: Konsultasikan dengan design team, update `src/data/design.ts`, dan update dokumentasi ini.

**Q: Apa spacing minimal yang bisa digunakan?**
A: 4px (spacing[1]). Jangan gunakan spacing[0] untuk gap antar elemen.

**Q: Responsive design harus di semua component?**
A: Ya, kecuali component khusus desktop/mobile. Gunakan mobile-first approach.

---

**Last Updated:** August 2026
**Version:** 1.0.0
**Design System Owner:** Design Team Fiorella