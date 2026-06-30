# Maple & Mortar — Roadmap

## Phase 1: Core Pages (static) ✅ Complete
Full static site with all core pages, navigation, SEO, and immersive animations.

- **Home** (`/`) — immersive hero with parallax, steam wisps, trust badges, logo
- **Menu** (`/menu`) — full categorized menu with 24 items, dietary badges, prices, descriptions, hero per category, stagger card reveals
- **About** (`/about`) — expanded brand story, founder bio (Eleanor "Nell" Hargrove), 7-milestone timeline, 4 values cards
- **Contact** (`/contact`) — server action form, embedded map placeholder, hours, contact info
- **Locations** (`/locations`) — address, hours table, holiday hours, feature icons, coming soon card

**Delivered:** Sticky translucent nav with active-link indicator + mobile menu, route transition overlay, SEO (JSON-LD, sitemap, robots.txt), 24 Pexels menu item images with attribution, framer-motion animations across all pages. All content in `src/lib/`.

## Phase 2: Dynamic Content (CMS)
Replace static data with a headless CMS so staff can update content without code.

- **Sanity** or **Contentful** headless CMS integration.
- Schema types: MenuItem, Page, BlogPost, Location, Promotion.
- Visual editing preview with Next.js draft mode.
- Dynamic menu pages with category filtering.
- Blog section (`/blog`) for seasonal specials, events, community stories.
- Promotions banner (configurable from CMS, displayed site-wide).

## Phase 3: E-Commerce (ordering + payments)
Online ordering — cafe pickup, local delivery, or shipping beans.

- **Stripe** or **Lemon Squeezy** for payments.
- **Cart system** — add menu items, customizations, quantity.
- **Checkout flow** — pickup time selection, contact info, payment.
- **Order confirmation** — email receipt via Resend or SendGrid.
- **Inventory management** — simple stock tracking in CMS.
- **Guest checkout** + optional account creation.

## Phase 4: Accounts & Loyalty
Customer accounts with rewards and order history.

- **Auth** — NextAuth v5 with email/password + Google OAuth2.
- **Customer profiles** — name, favorites, saved address.
- **Order history** — past orders, reorder button.
- **Loyalty points** — earned per purchase, redeemable for discounts or free drinks.
- **Digital gift cards** — purchase and send via email.

## Phase 5: Operations & Admin
Internal tools for staff.

- **Admin dashboard** — manage menu, orders, reservations.
- **Order management** — view incoming orders, mark ready/picked up.
- **Reservations** — table booking calendar for events/evenings.
- **Analytics** — popular items, peak hours, revenue trends.
- **Email campaigns** — seasonal promotions, loyalty reminders.

---

## Technical Foundation

- **Stack stays**: Next.js 16 + Tailwind v4 + TypeScript + framer-motion.
- **Database**: PostgreSQL via Supabase (auth + data + storage).
- **Deployment**: Vercel (static-friendly, edge functions for API routes).
- **Email**: Resend (transactional) + Loops (marketing/newsletter).
- **Monitoring**: Sentry for error tracking + PostHog for product analytics.

## Quick Wins

1. [x] Menu page — 24 items, 5 categories, dietary badges
2. [x] `/about` page — story, timeline, values cards
3. [x] Contact form — server action (logs to console, swap to Resend later)
4. [x] Structured data (JSON-LD) for local business SEO
5. [x] Sitemap + robots.txt
6. [x] Pexels menu item images (24 unique photos with attribution)
