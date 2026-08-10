# AMIT DOBARIYA — Official Personal Brand Website

> **Motivational Speaker • Professional Anchor / Event Host • Transformational Speaker • Spiritual Coach**

A modern, high-converting, ₹2–5 lakh caliber personal brand website for **Amit Dobariya**, engineered using **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lucide Icons**, and integrated with **@vercel/analytics** and **@vercel/speed-insights**.

---

## 🌟 Key Features

- **Brand Positioning**: Tailored for maximum stage authority, placing Motivational Speaking & Event Anchoring at the forefront while seamlessly presenting VASTRO (science + spirituality) coaching.
- **Conversion Strategy**: Persistent floating WhatsApp button with pre-filled event inquiry text, dual-action hero buttons, and an interactive booking form that auto-formats WhatsApp payloads.
- **SEO & Metadata**: Dedicated SEO landing pages (`/motivational-speaker`, `/anchor`), valid Schema.org JSON-LD structured data (`Person`, `Organization`, `ProfilePage`), XML sitemap generator, and `robots.txt`.
- **Media Configuration System**: Optimized WebP photography pipeline, lightbox photo gallery with filter tabs, and poster-based video showreel.
- **Design System**: Premium White + Green color theme (`#075E46`, `#033D30`, `#10A77A`, `#F1FAF6`) with Plus Jakarta Sans & Inter typography.

---

## 📁 Project Architecture

```
├── app/
│   ├── layout.tsx              # Root Layout with fonts, Metadata, Analytics & Speed Insights
│   ├── page.tsx                # Home Page
│   ├── about/page.tsx          # About Amit (GTU Chemical Engineering, VASTRO)
│   ├── motivational-speaker/   # Dedicated Motivational Speaker Page
│   ├── anchor/                 # Dedicated Professional Anchor & Event Host Page
│   ├── programs/               # Full Programs & Services Catalog
│   ├── gallery/                # Photo Gallery & Video Showreel
│   ├── contact/                # Booking Form & Direct Contact Channels
│   ├── sitemap.ts              # XML Sitemap Generator
│   ├── robots.ts               # Robots.txt Generator
│   └── globals.css             # Tailored Tailwind CSS Tokens & Custom Utilities
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky Nav with Glass Blur & Mobile Drawer
│   │   └── Footer.tsx          # Branding, Links & Gujarati Tagline
│   ├── common/
│   │   ├── WhatsAppFloatingButton.tsx # Fixed Bottom-Right WhatsApp Button
│   │   ├── SectionHeading.tsx  # Standardized Section Headers
│   │   └── JsonLd.tsx          # Schema.org Structured Data
│   ├── home/                   # Hero, Stats, Speaker, Anchor, Vastro, Testimonials, CTA
│   ├── gallery/                # GalleryGrid, GalleryLightbox, VideoModal
│   └── contact/                # BookingForm Component
├── data/
│   └── siteData.ts             # Centralized Configuration & Data Models
├── public/
│   ├── images/                 # WebP Optimized Assets
│   ├── icon.svg                # Brand SVG Favicon
│   ├── favicon.ico             # Desktop Favicon
│   └── site.webmanifest        # Web App Manifest
└── tailwind.config.ts          # Color Tokens & Extended Typography
```

---

## 📷 Google Drive Media Asset Configuration

The website includes optimized media fallbacks in `public/images/`. To update assets from Amit's Google Drive folder:

1. Download high-resolution stage photos & videos from [Google Drive](https://drive.google.com/drive/folders/14Vh-2WZpsD0vJrkzAJtZVtsQZiaXXFMq?usp=sharing).
2. Convert desired images to WebP format (or replace existing WebP files in `public/images/`):
   - `/public/images/amit-hero.webp` (Hero section main portrait)
   - `/public/images/amit-speaker-01.webp` (Speaker section stage photo)
   - `/public/images/amit-anchor-01.webp` (Anchor section holding mic)
   - `/public/images/amit-about.webp` (About section portrait)
   - `/public/images/audience-01.webp` (Large audience crowd shot)
3. For YouTube video embeds or hosted MP4 showreels, update the `videoUrl` fields in `data/siteData.ts`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation

```bash
# Clone repository
git clone https://github.com/shingalajaynesh/amitdobariya.git
cd amitdobariya

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Verification & Build Commands

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Build production bundle
npm run build

# Start production server locally
npm run start
```

---

## ⚡ Deployment on Vercel

1. Push your changes to GitHub.
2. Import repository in [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Enable `@vercel/analytics` and `@vercel/speed-insights` in project settings.
5. Click **Deploy**.

---

© Amit Dobariya. All Rights Reserved.
