# Борец Баскет Website

Next.js 16 + Tailwind + Sanity CMS basketball club website. Deployed on Vercel.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (use to verify before pushing)
- `npm run lint` — eslint

## Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS with custom brand colors (`brand-red`, `brand-gold`, `brand-black`)
- **CMS**: Sanity (schemas in `/sanity`)
- **Email**: Resend (API key in `.env.local`)
- **Fonts**: `rogLyonsType` (headings via `font-heading`), `poppins` (body via `font-body`)
- **Deployment**: Vercel (auto-deploy on push to `main`)

## Key Patterns
- Macedonian language primary, i18n via `useI18n()` hook
- `AnimatedSection` component for scroll-in animations
- Standalone landing pages (e.g. `/upis`) hide navbar/footer via pathname check in those components
- API routes use Resend for email with styled HTML templates
- Commit style: `feat:` / `fix:` prefix, short description

## Structure
- `src/app/` — pages and API routes
- `src/components/` — shared components (`ui/` for primitives)
- `src/lib/` — utils, fonts, i18n
- `public/` — static assets (images, logo)
