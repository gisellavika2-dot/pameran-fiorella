// QUICK_REFERENCE.md

# Fiorella Design System - Quick Reference ⚡

Panduan cepat untuk developer. Untuk dokumentasi lengkap, baca `DESIGN_SYSTEM.md`.

---

## 🎨 Colors

```tsx
// Dark backgrounds & text
bg-[#121E42]   // Primary dark
text-[#121E42] // Dark text

// Light text & secondary
text-[#6590C2] // Light text on dark bg
bg-[#A8C4D4]   // Light background

// Light neutral
bg-[#EDECE6]   // Light neutral bg
text-[#EDECE6] // Light text

// State colors
bg-[#10B981]   // Success (green)
bg-[#F59E0B]   // Warning (yellow)
bg-[#EF4444]   // Error (red)
bg-[#3B82F6]   // Info (blue)
```

---

## 📝 Typography

```tsx
// Headings (Castoro - Serif)
<h1 className="font-serif text-6xl font-bold leading-tight">
  Hero Title (60px)
</h1>

<h2 className="font-serif text-4xl font-bold leading-tight">
  Section Title (36px)
</h2>

<h3 className="font-serif text-3xl font-bold leading-snug">
  Subsection (30px)
</h3>

<h4 className="font-serif text-2xl font-semibold">
  Card Title (24px)
</h4>

// Body Text (Figtree - Sans)
<p className="font-sans text-base font-normal leading-relaxed">
  Regular body text (16px)
</p>

<small className="font-sans text-sm font-normal leading-relaxed">
  Small text (14px)
</small>

<span className="font-sans text-xs font-medium">
  Extra small (12px) - Labels, tags
</span>
```

---

## 📏 Spacing (Kelipatan 8px)

### Quick Spacings

```tsx
// 4px
p-1 m-1 gap-1

// 8px (common)
p-2 m-2 gap-2

// 12px
p-3 m-3 gap-3

// 16px (default)
p-4 m-4 gap-4

// 24px
p-6 m-6 gap-6

// 32px
p-8 m-8 gap-8

// 48px
p-12 m-12 gap-12

// 64px
p-16 m-16 gap-16
```

### Common Combinations

```tsx
// Button padding
className="px-4 py-2"         // Compact
className="px-6 py-3"         // Large

// Card padding
className="p-6"               // Standard
className="p-8"               // Large

// Section padding (Y-axis, responsive)
className="py-16 md:py-24"    // Mobile & tablet
className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"

// Container X-axis padding
className="px-4 sm:px-6 lg:px-8"

// Gaps (for flex/grid)
className="gap-4"             // 16px (most common)
className="gap-6"             // 24px
className="gap-8"             // 32px

// Responsive gaps
className="gap-4 md:gap-6 lg:gap-8"
```

---

## 🔗 Common Component Patterns

### Button

```tsx
<button className="px-4 py-2 bg-[#121E42] text-[#EDECE6] rounded-lg hover:bg-[#364A8C] transition-colors duration-200">
  Click Me
</button>

// Large variant
<button className="px-6 py-3 bg-[#121E42] text-[#EDECE6] rounded-lg">
  Large Button
</button>
```

### Card

```tsx
<div className="p-6 bg-white rounded-lg shadow-base border border-gray-200">
  <h3 className="text-2xl font-bold mb-4">Card Title</h3>
  <p className="text-gray-600">Card content</p>
</div>
```

### Section with Title

```tsx
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-12 text-center">
      Section Title
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Content */}
    </div>
  </div>
</section>
```

### Grid Layout

```tsx
// 1 col on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id}>{item}</Card>)}
</div>

// With responsive gap
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
  {/* Items */}
</div>
```

### Flex Stack

```tsx
// Vertical stack with gap
<div className="flex flex-col gap-4">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</div>

// Horizontal stack
<div className="flex gap-4 items-center">
  <Icon />
  <span>Text</span>
</div>
```

---

## 📱 Responsive Breakpoints

```tsx
// Mobile-first (default for small screens)
className="text-base"           // Mobile
className="md:text-lg"          // Tablet (768px+)
className="lg:text-xl"          // Desktop (1024px+)

// Common patterns
className="hidden md:block"     // Show on tablet+
className="block md:hidden"     // Show on mobile only

// Grid responsive
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Padding responsive
className="px-4 sm:px-6 lg:px-8"
className="py-8 sm:py-12 md:py-16 lg:py-20"
```

---

## 🎯 Do's and Don'ts

### ✅ DO

```tsx
// Use consistent spacing
<div className="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>

// Use predefined colors
<div className="bg-[#121E42] text-[#EDECE6]">
  GSM colors
</div>

// Use responsive design
<h2 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive heading
</h2>

// Use semantic elements
<h1>Main title</h1>
<h2>Section title</h2>
<p>Body text</p>
```

### ❌ DON'T

```tsx
// Don't use arbitrary spacing
<div className="p-7">❌ Use p-6 or p-8 instead</div>

// Don't use arbitrary colors
<div className="bg-blue-500">❌ Use GSM colors</div>

// Don't skip responsive
<div className="grid grid-cols-3">❌ Breaks on mobile</div>

// Don't nest padding/margin
<div className="mb-4">
  <div className="mb-4">❌ Use gap in parent instead</div>
</div>
```

---

## 📚 Imports

```tsx
// Design constants
import { COLORS, TYPOGRAPHY, SPACING } from "@/data/design";

// Spacing utilities
import { space, padding, margin, gap } from "@/lib/spacing";
import { COMPONENT_SPACING, PADDING_SCALES } from "@/lib/spacing";

// Component imports
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
```

---

## 🔥 Copy-Paste Templates

### Hero Section

```tsx
<section className="py-20 md:py-32 bg-[#121E42]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#EDECE6] mb-6">
      Welcome to Fiorella
    </h1>
    <p className="font-sans text-lg text-[#A8C4D4] mb-8 max-w-2xl mx-auto">
      Pameran foto dan video yang menampilkan dokumentasi kegiatan.
    </p>
    <Button>Explore Now</Button>
  </div>
</section>
```

### Card Grid

```tsx
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-12">Our Collection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <div key={item.id} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <p className="text-gray-600 mb-6">{item.description}</p>
          <Button variant="outline">Learn More</Button>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Form Section

```tsx
<section className="py-16 md:py-24">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
    <form className="flex flex-col gap-6">
      <div>
        <label className="block font-semibold mb-2">Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#121E42]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block font-semibold mb-2">Message</label>
        <textarea 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#121E42]"
          rows={4}
          placeholder="Your message"
        />
      </div>
      <Button>Send Message</Button>
    </form>
  </div>
</section>
```

---

## 🆘 Troubleshooting

**Q: Spacing tidak tampil dengan benar**
A: Pastikan menggunakan kelipatan yang valid (1, 2, 3, 4, 6, 8, 12, dll). Jangan p-7, gunakan p-6 atau p-8.

**Q: Warna tidak sesuai GSM**
A: Gunakan hex codes dari GSM (#121E42, #6590C2, dll). Import dari COLORS constant jika perlu.

**Q: Layout berantakan di mobile**
A: Tambahkan responsive classes (md:, lg:). Mulai dari mobile, tambah breakpoint untuk screen besar.

**Q: Font tidak tampil dengan benar**
A: Pastikan `Castoro` (headline) dan `Figtree` (body) sudah diimport di globals.css.

---

**Last Updated:** August 2026
**Version:** 1.0.0