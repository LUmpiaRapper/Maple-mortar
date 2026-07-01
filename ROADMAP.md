# Maple & Mortar — Roadmap

## Phase 1: Core Static Site ✅ Complete

A fully static, portfolio-ready coffee shop website with all core pages, SEO, and animations.

### Pages

- **Home** (`/`) — immersive hero with parallax, steam wisps, trust badges, logo
- **Menu** (`/menu`) — full categorized menu with 24 items, dietary badges, prices, descriptions, stagger card reveals
- **About** (`/about`) — brand story, founder bio (Eleanor "Nell" Hargrove), 7-milestone timeline, 4 values cards
- **Contact** (`/contact`) — server action form, embedded map placeholder, hours, contact info
- **Locations** (`/locations`) — address, hours table, holiday hours, feature icons, coming soon card

### Features

- Sticky translucent nav with active-link indicator + mobile menu
- Route transition overlay with framer-motion
- SEO (JSON-LD, sitemap, robots.txt)
- 24 Pexels menu item images with attribution
- Scroll-triggered animations with stagger reveals
- Fully responsive

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 with custom theme tokens
- **Language:** TypeScript
- **Animation:** framer-motion v12
- **Icons:** lucide-react
- **Typography:** Playfair Display + Inter via next/font/google

### Status

All content is hardcoded in `src/lib/`. Zero external services required to run.
