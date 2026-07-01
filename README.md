# Maple & Mortar Coffee House — Website

A cozy, dark-themed landing page concept for **Maple & Mortar**, a fictional neighborhood coffee shop in the small town of Birchwood Hollow. Built as a personal/hobby project to practice front-end design and development.

## About the Project

Maple & Mortar is a fictional coffeehouse housed in a converted old hardware store, run by former schoolteacher Nell Hargrove (and her golden retriever, Biscuit). This repo contains the design and front-end build for the shop's website — exposed-brick visuals, a warm maple-amber color palette, and copy built around the shop's backstory, menu, and hours.

This is a hobby/portfolio project: the business, branding, and story are entirely fictional, created to practice designing and building a realistic small-business website end to end.

## Features

- Responsive single-page layout (hero, about/story, menu carousel, footer)
- Custom warm/rustic dark color palette and typography system
- Fictional brand content: business story, signature menu items, hours, and contact info
- Parallax hero background with ambient steam particle effect
- Scroll-triggered entrance animations with stagger reveals
- Interactive product carousel with snap scroll
- Film-grain texture overlay for atmospheric depth
- Logo SVG (mortar + maple leaf mark with text lockup)
- Scroll progress indicator
- Respects `prefers-reduced-motion`

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4 with custom theme tokens
- **Language:** TypeScript
- **Animation:** framer-motion v12 (scroll parallax, viewport reveals, stagger)
- **Icons:** lucide-react
- **Typography:** Playfair Display (serif headings) + Inter (sans-serif body) via next/font/google
- **Images:** next/image with AI-generated JPG placeholders
- **Lint:** ESLint (next/core-web-vitals)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Status

✅ Complete — static demo webapp, ready for portfolio showcase.

## Disclaimer

Maple & Mortar Coffee House is a fictional business created for design/portfolio purposes only. Any resemblance to a real business is coincidental.
