# Health Mart Pharmacy - Professional Website

## Overview

This is a comprehensive, professional pharmacy website for **Health Mart Pharmacy** featuring a modern, welcoming design inspired by Marigold Pharmacy. The site showcases all pharmacy services, team information, and provides easy contact options.

## Features

### ✨ Design
- **Professional Aesthetic**: Clean, modern design with a warm healthcare feel
- **Color Scheme**: Teal, blue, and white palette for trust and professionalism
- **Custom Logo**: Bold, visible Health Mart Pharmacy branding
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **High-Quality Images**: Professional pharmacy and team imagery

### 📄 Pages & Sections

1. **Header/Navigation**
   - Sticky navigation with logo
   - Quick action buttons (Refill Rx, Transfer Rx)
   - Mobile-responsive menu

2. **Hero Section**
   - Main value proposition
   - Call-to-action buttons
   - Trust metrics (20+ years, 100% commitment)
   - Professional imagery

3. **Services Section**
   - 6 core pharmacy services
   - Benefits overview (Auto RX Refills, Free Consultation, etc.)
   - Service details and descriptions

4. **About Section**
   - Company mission and vision
   - Highlights and key differentiators
   - Statistics (24/7 support, 1000+ customers, 100% accuracy)

5. **Team Section**
   - Meet the expert pharmacists
   - Professional bios
   - Team credentials

6. **Comprehensive Info Section**
   - 27 detailed service descriptions
   - Why choose us content
   - Specialty services information
   - Complete pharmacy expertise showcase

7. **Contact Section**
   - Contact form
   - Phone, address, hours
   - Email and location information
   - Social media links

8. **Footer**
   - Company info
   - Quick links
   - Legal and privacy links
   - Copyright information

## Content Included

✅ **27 Lines of Core Information** (All included)
- Service descriptions and benefits
- Mission and vision statements
- Team credentials and expertise
- Contact information

✅ **24+ Additional Information Lines** (All included)
- Comprehensive pharmacy care details
- Specialized services (immunizations, delivery, health screenings)
- Medication management services
- Customer-focused messaging

## Technical Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Color System**: CSS custom properties (oklch color space)
- **Images**: Responsive Image optimization
- **Typography**: Professional fonts with semantic sizing

## Design Highlights

### Color Palette
- **Primary**: Teal/Blue (#0891B2, 186° hue)
- **Secondary**: Green (#16A34A, 169° hue)
- **Background**: Off-white (#F8FAFC, 0.985 oklch lightness)
- **Foreground**: Dark blue (#1E293B, 0.15 oklch lightness)

### Components
- Professional header with sticky positioning
- Hero section with image showcase
- Service cards with hover effects
- Team member profiles with images
- Contact form with validation-ready inputs
- Footer with navigation

### Best Practices
- Semantic HTML structure
- Accessible navigation
- Mobile-responsive design
- Professional imagery
- Clear typography hierarchy
- Consistent spacing and layout
- Trust-building elements (testimonials, credentials, stats)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The site will be available at `http://localhost:3000`

## Customization

You can easily customize:
- **Logo**: Replace `/public/healthmart-logo.png`
- **Images**: Update images in `/public/` directory
- **Colors**: Modify CSS custom properties in `app/globals.css`
- **Content**: Edit component text in `/components/`
- **Fonts**: Update `app/layout.tsx` font configuration

## Files Structure

```
/app
  ├── page.tsx              # Main page (combines all components)
  ├── layout.tsx            # Root layout with metadata
  └── globals.css           # Global styles and design tokens

/components
  ├── header.tsx            # Navigation header
  ├── hero.tsx              # Hero section
  ├── services.tsx          # Services section
  ├── about.tsx             # About & mission
  ├── team.tsx              # Team section
  ├── info-section.tsx      # Comprehensive info (27+ lines)
  ├── contact.tsx           # Contact form & info
  └── footer.tsx            # Footer

/public
  ├── healthmart-logo.png   # Custom logo
  ├── pharmacy-hero.png     # Hero image
  ├── pharmacy-services.png # Services showcase
  └── pharmacy-team.png     # Team image
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized images with Next.js Image component
- Fast load times with CSS-in-JS optimization
- Mobile-first responsive design
- Semantic HTML for better SEO

## Future Enhancements

- Patient portal integration
- Prescription refill system
- Appointment booking
- Immunization scheduling
- Newsletter signup
- Blog section for health tips
- Testimonials section
- Insurance verification

---

**Health Mart Pharmacy** - Your trusted community pharmacy dedicated to quality care and your health and wellness.
