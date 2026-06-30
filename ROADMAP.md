# Maple & Mortar — Roadmap

## Phase 1: Core Pages (static)
Build out the remaining static pages to turn the landing page into a full site.

- **Menu page** (`/menu`) — full categorized menu with dietary badges, prices, descriptions, and hero image per category. Reuses the card component pattern from Popular Picks.
- **About page** (`/about`) — expanded brand story, founder bio (Eleanor "Nell" Hargrove), timeline, interior photo gallery.
- **Contact page** (`/contact`) — embedded map, contact form (Netlify-form or server action), hours, social links.
- **Locations page** (`/locations`) — single or multiple locations with address, hours, local SEO schema.

**No backend needed.** All content lives in local data files (`src/lib/`).

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

## Quick Wins (do first)

1. [ ] Menu page — already have menu data, just need page routing and layout
2. [ ] `/about` page — expand existing About section content
3. [ ] Contact form — simple server action with Resend
4. [ ] Add structured data (JSON-LD) for local business SEO
5. [ ] Sitemap + robots.txt
