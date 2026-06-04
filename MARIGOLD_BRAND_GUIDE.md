# Marigold Pharmacy Brand Guide

## Brand Overview
Marigold Pharmacy is a community healthcare destination dedicated to quality care, personalized service, and patient wellness. Our brand emphasizes warmth, trust, and professional excellence.

---

## Color Palette

### Primary Colors
- **Golden Yellow** - Warm, welcoming, professional
  - Hex: `#D4A574`
  - RGB: `212, 165, 116`
  - OKLCH: `oklch(0.65 0.18 70)`
  - Usage: Primary CTAs, logo, highlights

- **Forest Green** - Trustworthy, natural, healthcare-focused
  - Hex: `#2D5016`
  - RGB: `45, 80, 22`
  - OKLCH: `oklch(0.38 0.12 130)`
  - Usage: Secondary accents, text emphasis

### Neutral Colors
- **Cream** - Welcoming, soft background
  - Hex: `#FFF8F0`
  - RGB: `255, 248, 240`
  - OKLCH: `oklch(0.985 0.005 90)`
  - Usage: Background, subtle accents

- **Foreground Dark** - Professional text
  - Hex: `#3D2E1D`
  - RGB: `61, 46, 29`
  - OKLCH: `oklch(0.25 0.02 45)`
  - Usage: Main text, headings

- **White** - Clean, professional
  - Hex: `#FFFFFF`
  - RGB: `255, 255, 255`
  - Usage: Cards, modals, sections

### Supporting Colors
- **Accent Orange** - Energy, positivity
  - OKLCH: `oklch(0.58 0.15 80)`
  - Usage: Hover states, secondary CTAs

- **Muted Beige** - Soft backgrounds
  - OKLCH: `oklch(0.93 0.005 90)`
  - Usage: Section backgrounds, borders

### Color Combinations to Avoid
- NO BLUE: All blue colors are avoided
- NO BLACK: Pure black is avoided (use dark foreground instead)
- Keep warm palette consistent

---

## Typography

### Font Family
- **Primary Font**: Geist (sans-serif)
  - Used for all body text and UI
  - Clean, modern, professional
  - Import: `@import 'next/font/google'`

- **Fallback**: System fonts for optimal performance

### Font Scale
- **H1 (Headings 1)**: 2.25rem (36px), Bold (700)
- **H2 (Headings 2)**: 1.875rem (30px), Bold (700)
- **H3 (Headings 3)**: 1.25rem (20px), Bold (700)
- **Body**: 1rem (16px), Regular (400)
- **Small**: 0.875rem (14px), Regular (400)

### Line Height
- Headings: 1.2
- Body: 1.5-1.6 for readability
- Use Tailwind classes: `leading-relaxed`, `leading-snug`

---

## Logo

### Logo Design
- **Main Element**: Large golden yellow (+) plus/cross symbol (70% of logo)
- **Secondary Elements**: 
  - Small stylized marigold flower integrated into one side
  - Medicine bottle/capsule icons subtly placed
  - "Marigold Pharmacy" text below in golden and green

### Logo Files
- `/public/marigold-logo-final.png` - Main logo
- `/public/marigold-favicon.png` - Browser favicon

### Logo Usage
- Always maintain clear space around logo (minimum 20px)
- Minimum size: 80px width
- DO NOT resize disproportionately
- DO NOT change colors from defined palette
- DO NOT add drop shadows or effects

### Logo Size Variants
- **Header Logo**: 64x64px (fits in navigation)
- **Full Logo**: 200x200px+ (marketing materials)
- **Favicon**: 32x32px (browser tabs)

---

## Website Structure

### Layout Pages (Following Marigold Pharmacy)
1. **Header** - Fixed navigation with logo, menu, CTAs
   - "Refill Rx" button (outline style)
   - "Transfer Rx" button (filled primary)

2. **Hero Banner** - Welcome message + quick action cards
   - Auto RX Refills
   - Refill Prescription
   - Free Delivery
   - Transfer RX

3. **Welcome Section** - About philosophy, commitment statement
   - Left: Text content
   - Right: Commitment checklist with + icons

4. **Services Grid** - 6 service cards in 3-column layout
   - Free Consultation
   - Compounding Services
   - Seasonal Vaccinations
   - Price Matching
   - Medication Synchronization
   - Health Screenings

5. **Team Section** - 3 pharmacist profiles with credentials

6. **Contact Section** - Form + contact info with hours

7. **Footer** - Dark background with navigation, hours, links

---

## UI Components

### Buttons
- **Primary Button**: Golden yellow background
  - Padding: 0.625rem 1.5rem (py-2.5 px-6)
  - Hover: Darker golden shade
  - Border radius: 0.75rem

- **Secondary Button**: Outlined border
  - Border: 2px primary color
  - Background: White
  - Text: Primary color
  - Hover: Light background

- **Text Button**: No background
  - Text: Primary color
  - Hover: Underline or darker shade

### Forms
- **Input Fields**: 
  - Border: 1px border-border
  - Padding: 0.5rem 1rem
  - Focus ring: 2px ring-primary
  - Border radius: 0.75rem

- **Labels**: 
  - Font weight: Bold (600)
  - Color: Foreground
  - Margin bottom: 0.5rem

### Cards
- **Background**: White
- **Border**: None (subtle shadow)
- **Shadow**: Light hover effect
- **Border radius**: 0.75rem
- **Padding**: 2rem (p-8)

### Badges/Circles
- **+ Icon Circles**: Golden yellow background
  - Width: 24px, Height: 24px
  - Text color: White
  - Font weight: Bold
  - Border radius: Full (rounded-full)

---

## Spacing System

### Vertical Spacing
- Section padding: 4rem (py-16)
- Component spacing: 2rem (mb-8)
- Element spacing: 1rem (mb-4)

### Horizontal Spacing
- Container max-width: 80rem (max-w-7xl)
- Horizontal padding: 1rem-2rem (px-4 sm:px-6 lg:px-8)
- Gap between grid items: 2rem (gap-8)

---

## Brand Voice & Messaging

### Core Values
- **Trustworthy**: Professional, reliable, established
- **Welcoming**: Community-focused, personal care
- **Expert**: Knowledgeable, skilled pharmacists
- **Caring**: Patient-first approach

### Key Messages
- "Stay Healthy, Be Well with Marigold Pharmacy"
- Quality care means more than just prescriptions
- Think of us as your community healthcare destination
- We're committed to your well-being

### Tone
- Professional yet approachable
- Informative without being clinical
- Warm and genuine
- Community-oriented

---

## Photography & Imagery

### Style
- Warm, natural lighting
- Professional healthcare settings
- Diverse, friendly faces
- Community-focused scenes
- Golden/warm color tones

### Content Types
- Pharmacist consultations
- Pharmacy storefront
- Customer interactions
- Medications/healthcare items
- Health screenings

### Guidelines
- Use professional images
- Maintain warm color temperature
- Show diverse staff and customers
- Include medical/pharmacy elements subtly
- Avoid cold, sterile clinical appearance

---

## Accessibility

### Color Contrast
- All text must meet WCAG AA standards
- Minimum 4.5:1 contrast ratio for body text
- Minimum 3:1 contrast ratio for large text

### Typography
- Minimum font size: 14px for body text
- Use semantic HTML hierarchy
- Include alt text for all images

### Interactive Elements
- All buttons and links must be keyboard accessible
- Focus states clearly visible
- Screen reader compatible

---

## Implementation

### Tailwind CSS Classes
```css
/* Primary Color (Golden Yellow) */
.bg-primary { background-color: oklch(0.65 0.18 70); }
.text-primary { color: oklch(0.65 0.18 70); }

/* Secondary Color (Forest Green) */
.bg-secondary { background-color: oklch(0.38 0.12 130); }
.text-secondary { color: oklch(0.38 0.12 130); }

/* Background Colors */
.bg-background { background-color: oklch(0.985 0.005 90); }
.text-foreground { color: oklch(0.25 0.02 45); }
```

### Next.js Font Setup
```tsx
import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })
```

---

## Brand Assets Included

### Logo Files
- `public/marigold-logo-final.png` - Main brand logo
- `public/marigold-favicon.png` - Browser favicon

### Image Assets
- `public/pharmacy-storefront-marigold.png` - Storefront image
- `public/pharmacy-consultation-marigold.png` - Consultation scene

---

## Do's and Don'ts

### DO
- ✓ Use warm colors consistently
- ✓ Maintain logo clear space
- ✓ Keep typography hierarchy clear
- ✓ Use professional imagery
- ✓ Follow accessibility guidelines
- ✓ Maintain community focus in messaging

### DON'T
- ✗ Don't use blue or black colors
- ✗ Don't distort or resize logo disproportionately
- ✗ Don't use clinical, cold imagery
- ✗ Don't change brand colors
- ✗ Don't mix fonts outside the approved palette
- ✗ Don't ignore accessibility standards

---

## Contact & Questions

For brand implementation questions or guidelines, refer to this document or contact the development team.

**Last Updated**: 2024
**Version**: 1.0
