# Kolkata Fashion Parsa

A complete mobile-first Indian fashion ecommerce frontend demo for a local garments shop in Parsa, Bihar — inspired by Meesho, Flipkart, and Myntra.

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

- `artifacts/kolkata-fashion/src/data/products.js` — all mock product data (10 products, multi-variant, verified Unsplash image IDs)
- `artifacts/kolkata-fashion/src/context/CartContext.jsx` — global cart state (React Context)
- `artifacts/kolkata-fashion/src/pages/` — Home, Category, ProductDetail, Cart, Profile, Admin
- `artifacts/kolkata-fashion/src/components/` — Navbar, BottomNav, ProductCard, Footer
- `artifacts/kolkata-fashion/src/App.tsx` — router + layout shell + CartProvider wrapper

## Architecture decisions

- Frontend-only: no backend, no auth, no database — all data comes from `products.js`
- Cart uses React Context (`CartProvider` wraps the whole app in `App.tsx`); state is ephemeral (in-memory, not persisted)
- Cart item key: `${productId}::${color}::${size}` — same product in different color/size = separate line item
- WhatsApp orders: pre-formatted message sent via `wa.me/919724649971` link; number is 9724649971
- Product variants: each product has color variants → each color has its own image set + size-specific pricing
- Image pool: 4 confirmed-visible Unsplash base IDs per category (W1–W4, M1–M3, KD) × 4 `crop` params each
- Routing: Wouter with base path from `import.meta.env.BASE_URL`
- Mobile-first: sticky bottom nav (mobile), sticky top nav (desktop), bottom action bar on product page

## Product

- **Homepage**: Auto-rotating hero banner, category cards, trending/new arrivals/festival rows, dual banners, gallery, WhatsApp CTA, Google Maps embed, footer
- **Category Page**: Filter sidebar (category, price range, rating), sort dropdown, responsive product grid, mobile bottom-sheet filter drawer
- **Product Detail**: Multi-image gallery, color variant switching, size selector, Add to Cart (updates global state), WhatsApp enquiry per product with pre-filled message
- **Cart Page**: Line items with qty controls, remove, product image, color/size; customer name input; price summary with savings; free delivery banner; "Order on WhatsApp" generates full formatted invoice message
- **Profile Page**: Gradient header with avatar initials, stats row (Orders/Wishlist/Reviews), tabbed sections: Order history (mock 3 orders), Wishlist (mock 3 products), Addresses (mock 2 addresses)
- **Admin Dashboard**: Stats cards, product table, upload form UI, order management table, banner management, bar chart analytics — all mock UI

## User preferences

- React + Tailwind only, no TypeScript in UI files
- No backend, no auth, no DB, no heavy dependencies
- Mobile-first; keep it lightweight and fast

## Gotchas

- Cart state is NOT persisted — reloading the page clears the cart (intentional, frontend-only demo)
- Product images use Unsplash CDN with specific confirmed-working photo IDs + crop params for variety
- WhatsApp number: 9724649971 (update in `Cart.jsx` `WA_NUMBER` and `ProductDetail.jsx` `WA_NUMBER`)
- Admin tab is UI mockup only; "Save" and action buttons do nothing

## Pointers

- See `src/data/products.js` for the full product/variant/image data structure
- See `src/context/CartContext.jsx` for `addToCart`, `removeFromCart`, `updateQty`, `cartCount`, `cartTotal`, `cartSavings`
- All pages are `.jsx` files; `App.tsx` is the only TypeScript file
