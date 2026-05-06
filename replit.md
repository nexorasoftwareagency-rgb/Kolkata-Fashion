# Kolkata Fashion Parsa

A complete mobile-first fashion ecommerce frontend demo for a local garments shop in Parsa, Bihar, India — inspired by Meesho, Flipkart, and Myntra.

## Run & Operate

- `pnpm --filter @workspace/kolkata-fashion run dev` — start the frontend (port auto-assigned)
- No backend, database, or API required — pure frontend with local mock data

## Stack

- React + Vite (JavaScript, no TypeScript in pages/components)
- Tailwind CSS v4
- Wouter (routing)
- Lucide React (icons)
- Poppins font via Google Fonts
- pnpm workspaces, Node.js 24

## Where things live

- `artifacts/kolkata-fashion/src/data/products.js` — all mock product data (10 products, multi-variant)
- `artifacts/kolkata-fashion/src/pages/` — Home, Category, ProductDetail, Admin
- `artifacts/kolkata-fashion/src/components/` — Navbar, BottomNav, ProductCard, Footer
- `artifacts/kolkata-fashion/src/App.tsx` — router + layout shell

## Architecture decisions

- Frontend-only: no backend, no auth, no database — all data comes from `products.js`
- Product variants: each product has color variants → each color has its own image set + size-specific pricing; switching color updates images + prices instantly via React state
- Routing: Wouter with base path from `import.meta.env.BASE_URL`
- Mobile-first: bottom navigation bar on mobile (`<sm`), sticky top nav on desktop
- Admin dashboard is a UI mockup only — no real data mutations

## Product

- **Homepage**: Auto-rotating hero banner, category cards (Men/Women/Kids), trending/new arrivals/festival product rows, dual festival banners, Instagram-style gallery, WhatsApp CTA, Google Maps embed, footer
- **Category Page**: Filter sidebar (category, price range, rating), sort dropdown, responsive product grid, mobile bottom-sheet filter drawer
- **Product Detail**: Multi-image gallery with thumbnails, color variant switching (updates images + price instantly), size selector with per-size pricing, ratings breakdown, offers section, delivery info, WhatsApp enquiry, related products
- **Admin Dashboard**: Stats cards, product table, product upload form UI, order management table, banner management, bar chart analytics — all mock UI

## User preferences

- React + Tailwind only, no TypeScript in UI files
- No backend, no auth, no DB, no heavy dependencies
- Mobile-first; keep it lightweight and fast

## Gotchas

- Product images use picsum.photos (placeholder) — replace with real fashion photos for production
- Admin tab is UI mockup only; "Save" and action buttons do nothing
- WhatsApp links use a demo phone number — update before going live

## Pointers

- See `src/data/products.js` for the full product/variant data structure
- All pages are `.jsx` files; `App.tsx` is the only TypeScript file (routing shell)
