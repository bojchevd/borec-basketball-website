# Borec Basketball Website — Design Spec

## Overview

Public-facing website for Борец Баскет (Borec Basketball) from Veles. Clean, modern, premium aesthetic aimed at fans, sponsors, and the local basketball community. No authentication or user accounts on the public side.

This is scoped to the **public website only** — a separate coaches/players app is a future project.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| CMS | Sanity v3 (hosted, free tier) |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Email | Resend (contact form, free tier) |
| Hosting | Vercel (free tier) |
| Rendering | Static generation + ISR via Sanity webhook |

## Pages & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Hybrid (static + CMS) | Hero, upcoming games (next 2-3), latest 3 news cards, sponsors section |
| `/news` | CMS | Paginated news/blog feed |
| `/news/[slug]` | CMS | Individual news post |
| `/schedule` | CMS | Full season schedule — upcoming games + past results |
| `/roster` | Static | Player cards grid |
| `/history` | Static | Club history (Борец Баскет Wikipedia-style content) |
| `/academy` | Static | Basketball academy info |
| `/minibasket` | Static | Mini basketball program info |
| `/sponsors` | Static | Full sponsors page |
| `/contact` | Static + serverless | Contact info + form that sends email via Resend |
| `404` | Static | Custom "You missed the shot" style 404 page with personality |

### Navigation

- **Navbar**: Logo (left), page links (right), mobile hamburger menu
- **Footer**: Logo, social links (Instagram, Facebook, etc.), quick nav links

## Visual Identity & Design Language

### Brand Assets

- **Primary color**: `#c70000` (red) — CTAs, accents, highlights
- **Secondary**: `#000000` (black), `#ffffff` (white)
- **Accent**: `#fad744` (gold) — used sparingly for contrast (badges, highlight stats)
- **Background base**: Dark (`#000` or near-black `#0a0a0a`)

### Typography

- **ROG Lyons Type**: Hero headings, section titles — bold, brand-consistent
- **Poppins**: All body text, UI labels, navigation — clean, readable (Google Fonts)

### Logo Usage

- Full badge logo (logos-02) in navbar and footer
- Wordmark (logos-12) as alternative in compact contexts
- Repeating pattern (logos-11) as subtle background texture on sections

### Design Direction

Inspired by the Boston Hurricanes Behance concept. Key elements:

- **Dark theme** — black base makes the red pop, feels premium
- **Oversized bold typography** as a design element, not just labels
- **Marquee/ticker text** as section separators (e.g. "BOREC BASKETBALL · VELES ·" scrolling)
- **Bento grid** layout for programs (Academy, Minibasket) — colored blocks, some with game photos, some pure color+text
- **Large date numbers** for schedule entries — editorial feel, not spreadsheet
- **Event list rows** for upcoming games as alternative compact view
- **Subtle Framer Motion** entrance animations on scroll — confident, not flashy

### Photography Approach

- **No studio photography dependency** — club has mostly game action photos
- **Hero**: Dark background + logo pattern texture + bold typography. Action photo overlaid if available, otherwise purely typographic
- **No full-bleed photo backgrounds** — lean on red/black color blocks, pattern texture, and typography as visual weight
- Game photos used **editorially inside cards**, not as section backgrounds
- Textures, colors, and patterns carry the visual identity

## Sanity Content Models

### Post (News)

| Field | Type | Notes |
|---|---|---|
| title | string | Required |
| slug | slug | Auto-generated from title |
| coverImage | image | Required |
| body | portable text | Rich text with images |
| publishedAt | datetime | Required |
| excerpt | string | Short summary for news cards |

### Game

| Field | Type | Notes |
|---|---|---|
| date | datetime | Game date and time |
| opponent | string | Opponent team name |
| homeAway | string enum | "home" or "away" |
| location | string | Venue name |
| result | string | Optional, e.g. "84-72", filled after game |
| isWin | boolean | Optional, filled after game |

The schedule page automatically splits into **Upcoming** (date >= today) and **Results** (date < today) sections.

## Page Details

### Home (`/`)

1. **Hero section**: Full-width dark background, logo pattern texture, bold oversized "БОРЕЦ БАСКЕТ" / "BOREC BASKETBALL" typography, optional game action photo
2. **Upcoming games**: Next 2-3 games displayed with large date numbers, opponent, location — editorial style
3. **Latest news**: 3 most recent posts as cards with cover image, title, excerpt, date
4. **Sponsors section**: Sponsor logos in a clean grid or row

### News (`/news`)

- Paginated grid of news cards (cover image, title, excerpt, date)
- Click through to individual post

### News Post (`/news/[slug]`)

- Full article layout: cover image, title, date, portable text body
- Back link to news feed

### Schedule (`/schedule`)

- **Upcoming games**: Large date numbers, opponent, home/away badge, location — editorial layout
- **Past results**: Same layout with score and win/loss indicator
- Auto-sorted by date

### Roster (`/roster`)

- Static player cards grid
- Each card: photo, name, number, position
- Updated occasionally by a tech person in code

### History (`/history`)

- Static rich text page about Борец Баскет
- Content sourced from existing Wikipedia article and club records
- Updated in code

### Academy (`/academy`)

- Static page promoting the basketball academy
- Program info, age groups, training details

### Minibasket (`/minibasket`)

- Static page for the mini basketball program
- Similar structure to academy page

### Sponsors (`/sponsors`)

- Full sponsors page with logo grid
- Simple flat grid — no tiering for now, keep it clean

### Contact (`/contact`)

- Display: address, email, phone, social media links
- Contact form: name, email, message → sends email via Resend API route
- Simple validation, success/error feedback

### 404 Page

- Custom branded 404 page — basketball-themed ("You missed the shot" style)
- Oversized "404" typography, playful copy, prominent "Go Home" button
- Dark background with red/gradient accent — consistent with site identity

## Rendering & Deployment

- **Static generation** for all pages at build time
- **ISR (Incremental Static Regeneration)** triggered by Sanity webhook on content publish — site updates within seconds without a full rebuild
- **Vercel** deployment with automatic preview deploys on git push
- **Sanity Studio** hosted at `borec.sanity.studio` (or similar) — separate from the public site

## Costs

| Service | Free Tier | When You'd Pay |
|---|---|---|
| Vercel | 100GB bandwidth, unlimited deploys | Very high traffic |
| Sanity | 100K API requests/month, 2 users, 10GB assets | More editors or heavy asset usage |
| Resend | 3,000 emails/month | Unlikely to exceed |

**Total cost to run: $0/month** for a basketball club website at this scale.

## Project Structure

```
borec-basketball-website/
├── branding/                    # Brand assets (existing)
│   ├── logos/
│   ├── Font/
│   ├── inspiration/
│   └── branding-guide.txt
├── docs/
│   └── superpowers/specs/       # Design specs
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx             # Home
│   │   ├── news/
│   │   │   ├── page.tsx         # News feed
│   │   │   └── [slug]/page.tsx  # Individual post
│   │   ├── schedule/page.tsx
│   │   ├── roster/page.tsx
│   │   ├── history/page.tsx
│   │   ├── academy/page.tsx
│   │   ├── minibasket/page.tsx
│   │   ├── sponsors/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx        # Custom 404 page
│   │   └── api/contact/route.ts # Resend email endpoint
│   ├── components/              # Shared UI components
│   ├── lib/
│   │   └── sanity/              # Sanity client, queries, types
│   └── styles/                  # Global styles, Tailwind config
├── sanity/
│   ├── schemas/                 # Post, Game schemas
│   └── sanity.config.ts
├── public/                      # Static assets
├── tailwind.config.ts
├── next.config.ts
└── package.json
```
