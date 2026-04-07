# Borec Basketball Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a clean, modern, premium public website for Borec Basketball club using Next.js, Sanity CMS, Tailwind, shadcn/ui, and Framer Motion — deployed to Vercel.

**Architecture:** Next.js 14 App Router for static generation + ISR. Sanity v3 as headless CMS for news posts and game schedule. Tailwind CSS + shadcn/ui for styling. Framer Motion for scroll animations. Resend for contact form emails. Dark theme with red (#c70000) accents.

**Tech Stack:** Next.js 14+, React 18, Sanity v3, Tailwind CSS 3, shadcn/ui, Framer Motion, Resend, TypeScript, Vercel

**Spec:** `docs/superpowers/specs/2026-04-08-borec-basketball-website-design.md`

---

## File Map

```
src/
├── app/
│   ├── layout.tsx                    # Root layout: fonts, navbar, footer
│   ├── page.tsx                      # Home page
│   ├── not-found.tsx                 # Custom 404
│   ├── news/
│   │   ├── page.tsx                  # News feed (paginated)
│   │   └── [slug]/page.tsx           # Individual post
│   ├── schedule/page.tsx             # Game schedule
│   ├── roster/page.tsx               # Player roster (static)
│   ├── history/page.tsx              # Club history (static)
│   ├── academy/page.tsx              # Academy info (static)
│   ├── minibasket/page.tsx           # Mini basketball (static)
│   ├── sponsors/page.tsx             # Sponsors page (static)
│   ├── contact/page.tsx              # Contact + form
│   ├── api/
│   │   ├── contact/route.ts          # Resend email endpoint
│   │   └── revalidate/route.ts       # Sanity webhook ISR endpoint
│   └── globals.css                   # Global styles + Tailwind + custom fonts
├── components/
│   ├── layout/
│   │   ├── navbar.tsx                # Top navigation
│   │   ├── mobile-nav.tsx            # Mobile hamburger menu
│   │   └── footer.tsx                # Footer with social links
│   ├── ui/                           # shadcn/ui components (auto-generated)
│   ├── marquee.tsx                   # Scrolling ticker text
│   ├── animated-section.tsx          # Framer Motion scroll reveal wrapper
│   ├── game-card.tsx                 # Game display (large date, opponent, etc.)
│   ├── news-card.tsx                 # News post card (image, title, excerpt)
│   ├── player-card.tsx               # Roster player card
│   ├── sponsor-grid.tsx              # Sponsor logos grid
│   ├── contact-form.tsx              # Contact form (client component)
│   └── portable-text.tsx             # Sanity portable text renderer
├── lib/
│   ├── sanity/
│   │   ├── client.ts                 # Sanity client config
│   │   ├── queries.ts                # GROQ queries
│   │   ├── types.ts                  # TypeScript types for Sanity docs
│   │   └── image.ts                  # Sanity image URL builder
│   ├── fonts.ts                      # Font loading (ROG Lyons Type + Poppins)
│   └── utils.ts                      # Date formatting, helpers
├── data/
│   ├── roster.ts                     # Static roster data
│   ├── sponsors.ts                   # Static sponsor data
│   └── social-links.ts               # Social media URLs
sanity/
├── schemas/
│   ├── post.ts                       # Post (news) schema
│   └── game.ts                       # Game schema
├── sanity.config.ts                  # Sanity studio config
└── sanity.cli.ts                     # Sanity CLI config
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [ ] **Step 1: Create Next.js project**

Run from `C:\Projects`:
```bash
npx create-next-app@latest borec-basketball-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

When prompted, accept defaults. This scaffolds into the existing `borec-basketball-website` directory.

- [ ] **Step 2: Install core dependencies**

Run from `C:\Projects\borec-basketball-website`:
```bash
npm install next-sanity @sanity/image-url @sanity/vision @portabletext/react framer-motion resend
npm install -D @types/node
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```

Select these options:
- Style: Default
- Base color: Neutral
- CSS variables: Yes

- [ ] **Step 4: Add shadcn/ui components we'll need**

```bash
npx shadcn@latest add button card badge input textarea label separator navigation-menu sheet
```

- [ ] **Step 5: Configure custom fonts**

Create `src/lib/fonts.ts`:
```typescript
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const rogLyonsType = localFont({
  src: "../../branding/Font/ROGLyonsType.ttf",
  variable: "--font-rog",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
```

- [ ] **Step 6: Configure Tailwind with brand colors and fonts**

Replace `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#c70000",
          gold: "#fad744",
          black: "#0a0a0a",
        },
      },
      fontFamily: {
        heading: ["var(--font-rog)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

- [ ] **Step 7: Set up global styles**

Replace `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-brand-black text-white font-body antialiased;
  }

  h1, h2, h3 {
    @apply font-heading;
  }
}
```

Note: Keep any shadcn/ui CSS variables that were added during `shadcn init` — append the above to them.

- [ ] **Step 8: Set up root layout**

Replace `src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { rogLyonsType, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Борец Баскет | Borec Basketball",
  description:
    "Official website of Borec Basketball club from Veles, North Macedonia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mk" className={`${rogLyonsType.variable} ${poppins.variable}`}>
      <body>
        {/* Navbar will be added in Task 4 */}
        <main>{children}</main>
        {/* Footer will be added in Task 4 */}
      </body>
    </html>
  );
}
```

- [ ] **Step 9: Create a placeholder home page**

Replace `src/app/page.tsx`:
```tsx
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-6xl font-heading text-brand-red">БОРЕЦ БАСКЕТ</h1>
    </div>
  );
}
```

- [ ] **Step 10: Verify it runs**

```bash
npm run dev
```

Open `http://localhost:3000` — should show "БОРЕЦ БАСКЕТ" in red on a dark background using the ROG Lyons Type font.

- [ ] **Step 11: Commit**

```bash
git add .
git commit -m "feat: scaffold Next.js project with Tailwind, shadcn/ui, and brand fonts"
```

---

### Task 2: Sanity CMS Setup

**Files:**
- Create: `sanity/schemas/post.ts`, `sanity/schemas/game.ts`, `sanity/sanity.config.ts`, `sanity/sanity.cli.ts`, `src/lib/sanity/client.ts`, `src/lib/sanity/queries.ts`, `src/lib/sanity/types.ts`, `src/lib/sanity/image.ts`

**Prerequisite:** You need a Sanity project. Run `npx sanity@latest init` in the project root or create one at sanity.io/manage. Note the project ID and dataset name (usually "production").

- [ ] **Step 1: Create Sanity config files**

Create `sanity.config.ts` in project root:
```typescript
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./sanity/schemas/post";
import { game } from "./sanity/schemas/game";

export default defineConfig({
  name: "borec-basketball",
  title: "Borec Basketball CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: {
    types: [post, game],
  },
});
```

Create `sanity.cli.ts` in project root:
```typescript
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  },
});
```

- [ ] **Step 2: Create Post schema**

Create `sanity/schemas/post.ts`:
```typescript
import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      description: "Short summary shown on news cards",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      date: "publishedAt",
    },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date
          ? new Date(date).toLocaleDateString()
          : "No date",
      };
    },
  },
});
```

- [ ] **Step 3: Create Game schema**

Create `sanity/schemas/game.ts`:
```typescript
import { defineField, defineType } from "sanity";

export const game = defineType({
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date & Time",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "opponent",
      title: "Opponent",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeAway",
      title: "Home / Away",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Away", value: "away" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      description: 'Score after game, e.g. "84-72"',
    }),
    defineField({
      name: "isWin",
      title: "Win?",
      type: "boolean",
      description: "Did Borec win this game?",
    }),
  ],
  orderings: [
    {
      title: "Game Date, New",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      opponent: "opponent",
      date: "date",
      homeAway: "homeAway",
      result: "result",
    },
    prepare({ opponent, date, homeAway, result }) {
      const d = date ? new Date(date).toLocaleDateString() : "TBD";
      const suffix = result ? ` — ${result}` : "";
      return {
        title: `${homeAway === "home" ? "vs" : "@"} ${opponent}${suffix}`,
        subtitle: d,
      };
    },
  },
});
```

- [ ] **Step 4: Create Sanity client and helpers**

Create `src/lib/sanity/client.ts`:
```typescript
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});
```

Create `src/lib/sanity/image.ts`:
```typescript
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
```

Create `src/lib/sanity/types.ts`:
```typescript
import type { PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: any;
  excerpt: string;
  body: PortableTextBlock[];
  publishedAt: string;
}

export interface Game {
  _id: string;
  date: string;
  opponent: string;
  homeAway: "home" | "away";
  location: string;
  result?: string;
  isWin?: boolean;
}
```

Create `src/lib/sanity/queries.ts`:
```typescript
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, coverImage, excerpt, publishedAt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, coverImage, excerpt, body, publishedAt
}`;

export const LATEST_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) [0...3] {
  _id, title, slug, coverImage, excerpt, publishedAt
}`;

export const UPCOMING_GAMES_QUERY = `*[_type == "game" && date >= now()] | order(date asc) {
  _id, date, opponent, homeAway, location, result, isWin
}`;

export const PAST_GAMES_QUERY = `*[_type == "game" && date < now()] | order(date desc) {
  _id, date, opponent, homeAway, location, result, isWin
}`;

export const NEXT_GAMES_QUERY = `*[_type == "game" && date >= now()] | order(date asc) [0...3] {
  _id, date, opponent, homeAway, location, result, isWin
}`;
```

- [ ] **Step 5: Create .env.local**

Create `.env.local` in project root:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your_project_id_here` with the actual project ID from sanity.io/manage.

- [ ] **Step 6: Verify Sanity schemas compile**

```bash
npm run build
```

Should complete without type errors related to Sanity schemas.

- [ ] **Step 7: Commit**

```bash
git add sanity/ src/lib/sanity/ .env.local .gitignore
git commit -m "feat: add Sanity CMS schemas (Post, Game) and client config"
```

Note: Ensure `.env.local` is in `.gitignore` (create-next-app adds it by default).

---

### Task 3: Utility Functions

**Files:**
- Create: `src/lib/utils.ts`, `src/data/social-links.ts`

- [ ] **Step 1: Create date formatting helpers**

Create `src/lib/utils.ts` (shadcn/ui may have created a stub — extend it):
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatGameDate(dateString: string) {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
    full: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

export function formatPostDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
```

- [ ] **Step 2: Create social links data**

Create `src/data/social-links.ts`:
```typescript
export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/borecbasketball",
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/borecbasketball",
    icon: "facebook",
  },
] as const;
```

Note: Update URLs with actual social media links from the club.

- [ ] **Step 3: Commit**

```bash
git add src/lib/utils.ts src/data/social-links.ts
git commit -m "feat: add utility functions and social links data"
```

---

### Task 4: Layout — Navbar & Footer

**Files:**
- Create: `src/components/layout/navbar.tsx`, `src/components/layout/mobile-nav.tsx`, `src/components/layout/footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Navbar**

Create `src/components/layout/navbar.tsx`:
```tsx
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/news", label: "News" },
  { href: "/schedule", label: "Schedule" },
  { href: "/roster", label: "Roster" },
  { href: "/academy", label: "Academy" },
  { href: "/minibasket", label: "Minibasket" },
  { href: "/history", label: "History" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Borec Basketball"
            width={40}
            height={40}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile nav */}
        <MobileNav links={navLinks} />
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Create Mobile Nav**

Create `src/components/layout/mobile-nav.tsx`:
```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] border-white/10 bg-brand-black"
      >
        <nav className="mt-8 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

- [ ] **Step 3: Create Footer**

Create `src/components/layout/footer.tsx`:
```tsx
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/logo.png"
              alt="Borec Basketball"
              width={60}
              height={60}
            />
            <p className="mt-4 text-sm text-white/50">
              Борец Баскет — Велес
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">
              Links
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/news", label: "News" },
                { href: "/schedule", label: "Schedule" },
                { href: "/roster", label: "Roster" },
                { href: "/academy", label: "Academy" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-brand-red"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Борец Баскет. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Wire layout together**

Update `src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { rogLyonsType, poppins } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Борец Баскет | Borec Basketball",
  description:
    "Official website of Borec Basketball club from Veles, North Macedonia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mk" className={`${rogLyonsType.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Copy logo to public directory**

```bash
cp "branding/logos/borec basketball - logos-02.png" public/logo.png
```

- [ ] **Step 6: Verify navbar and footer render**

```bash
npm run dev
```

Check `http://localhost:3000` — navbar with logo and links at top, footer at bottom. Test mobile view (resize browser) — hamburger menu should open the sheet.

- [ ] **Step 7: Commit**

```bash
git add src/components/layout/ src/app/layout.tsx public/logo.png
git commit -m "feat: add navbar with mobile menu and footer with social links"
```

---

### Task 5: Shared UI Components

**Files:**
- Create: `src/components/marquee.tsx`, `src/components/animated-section.tsx`, `src/components/game-card.tsx`, `src/components/news-card.tsx`, `src/components/player-card.tsx`, `src/components/sponsor-grid.tsx`, `src/components/portable-text.tsx`

- [ ] **Step 1: Create Marquee component**

Create `src/components/marquee.tsx`:
```tsx
export function Marquee({ text, className }: { text: string; className?: string }) {
  const repeated = `${text} · `.repeat(10);

  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 ${className ?? ""}`}>
      <div className="animate-marquee inline-block">
        <span className="font-heading text-2xl uppercase tracking-widest text-white/20 md:text-4xl">
          {repeated}
        </span>
      </div>
    </div>
  );
}
```

Add to `src/app/globals.css` (inside `@layer utilities` or at the end):
```css
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
```

- [ ] **Step 2: Create AnimatedSection component**

Create `src/components/animated-section.tsx`:
```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Create GameCard component**

Create `src/components/game-card.tsx`:
```tsx
import { formatGameDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/sanity/types";

export function GameCard({ game }: { game: Game }) {
  const { day, month, weekday, time } = formatGameDate(game.date);
  const isPast = new Date(game.date) < new Date();

  return (
    <div className="flex items-center gap-6 border-b border-white/10 py-6">
      {/* Large date */}
      <div className="text-center">
        <div className="font-heading text-5xl leading-none text-white md:text-7xl">
          {day}
        </div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/50">
          {month}
        </div>
      </div>

      {/* Game details */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">
            {game.homeAway === "home" ? "vs" : "@"} {game.opponent}
          </span>
          <Badge
            variant={game.homeAway === "home" ? "default" : "outline"}
            className={
              game.homeAway === "home"
                ? "bg-brand-red text-white"
                : "border-white/30 text-white/70"
            }
          >
            {game.homeAway.toUpperCase()}
          </Badge>
        </div>
        <div className="mt-1 text-sm text-white/50">
          {game.location} · {weekday} {time}
        </div>
      </div>

      {/* Result (if past game) */}
      {isPast && game.result && (
        <div className="text-right">
          <div className="font-heading text-2xl text-white">{game.result}</div>
          <div
            className={`text-xs font-bold uppercase ${
              game.isWin ? "text-green-500" : "text-brand-red"
            }`}
          >
            {game.isWin ? "WIN" : "LOSS"}
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Create NewsCard component**

Create `src/components/news-card.tsx`:
```tsx
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import { formatPostDate } from "@/lib/utils";
import type { Post } from "@/lib/sanity/types";

export function NewsCard({ post }: { post: Post }) {
  return (
    <Link href={`/news/${post.slug.current}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white/5">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={urlFor(post.coverImage).width(600).height(340).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-brand-red">
            {formatPostDate(post.publishedAt)}
          </p>
          <h3 className="mt-2 font-heading text-lg text-white group-hover:text-brand-red transition-colors">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-2 text-sm text-white/50 line-clamp-2">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 5: Create PlayerCard component**

Create `src/components/player-card.tsx`:
```tsx
import Image from "next/image";

interface Player {
  name: string;
  number: number;
  position: string;
  photo: string;
}

export function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/5">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={player.photo}
          alt={player.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-heading text-4xl text-brand-red">
          #{player.number}
        </div>
        <h3 className="font-heading text-lg text-white">{player.name}</h3>
        <p className="text-xs uppercase tracking-wider text-white/50">
          {player.position}
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Create SponsorGrid component**

Create `src/components/sponsor-grid.tsx`:
```tsx
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

export function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {sponsors.map((sponsor) => {
        const img = (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={120}
            height={60}
            className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        );

        return sponsor.url ? (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {img}
          </a>
        ) : (
          <div key={sponsor.name}>{img}</div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 7: Create PortableText renderer**

Create `src/components/portable-text.tsx`:
```tsx
import { PortableText as PortableTextReact } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { PortableTextBlock } from "@portabletext/types";

const components = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ""}
          width={1200}
          height={675}
          className="rounded-lg"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="mb-4 mt-8 font-heading text-2xl text-white">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mb-3 mt-6 font-heading text-xl text-white">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed text-white/70">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-red underline hover:text-brand-red/80"
      >
        {children}
      </a>
    ),
  },
};

export function PortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableTextReact value={value} components={components} />;
}
```

- [ ] **Step 8: Commit**

```bash
git add src/components/
git commit -m "feat: add shared UI components (marquee, game card, news card, player card, sponsors, portable text)"
```

---

### Task 6: Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/data/sponsors.ts`

- [ ] **Step 1: Create sponsors data**

Create `src/data/sponsors.ts`:
```typescript
export const sponsors = [
  { name: "Sponsor 1", logo: "/sponsors/sponsor1.png" },
  { name: "Sponsor 2", logo: "/sponsors/sponsor2.png" },
] as const;
```

Note: Replace with actual sponsor data and add logos to `public/sponsors/`. Create the directory:
```bash
mkdir -p public/sponsors
```

- [ ] **Step 2: Build the Home page**

Replace `src/app/page.tsx`:
```tsx
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { LATEST_POSTS_QUERY, NEXT_GAMES_QUERY } from "@/lib/sanity/queries";
import type { Post, Game } from "@/lib/sanity/types";
import { GameCard } from "@/components/game-card";
import { NewsCard } from "@/components/news-card";
import { SponsorGrid } from "@/components/sponsor-grid";
import { Marquee } from "@/components/marquee";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { sponsors } from "@/data/sponsors";

export const revalidate = 60;

export default async function Home() {
  const [posts, games] = await Promise.all([
    client.fetch<Post[]>(LATEST_POSTS_QUERY),
    client.fetch<Game[]>(NEXT_GAMES_QUERY),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        {/* Pattern background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(/pattern.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl lg:text-9xl">
            Борец
            <br />
            <span className="text-brand-red">Баскет</span>
          </h1>
          <p className="mt-6 text-lg text-white/50 font-body">
            Basketball Club · Veles, North Macedonia
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild className="bg-brand-red hover:bg-brand-red/80 font-body">
              <Link href="/schedule">View Schedule</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body">
              <Link href="/news">Latest News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text="BOREC BASKETBALL · VELES · БОРЕЦ БАСКЕТ" />

      {/* Upcoming Games */}
      {games.length > 0 && (
        <AnimatedSection>
          <section className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
              Upcoming <span className="text-brand-red">Games</span>
            </h2>
            <div>
              {games.map((game) => (
                <GameCard key={game._id} game={game} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body">
                <Link href="/schedule">Full Schedule</Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Latest News */}
      {posts.length > 0 && (
        <AnimatedSection>
          <section className="mx-auto max-w-7xl px-4 py-20">
            <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
              Latest <span className="text-brand-red">News</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <NewsCard key={post._id} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body">
                <Link href="/news">All News</Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Marquee */}
      <Marquee text="ACADEMY · MINIBASKET · JOIN US" />

      {/* Programs Bento Grid */}
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
            Our <span className="text-brand-red">Programs</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/academy"
              className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-lg bg-brand-red p-6"
            >
              <div>
                <h3 className="font-heading text-4xl uppercase text-white md:text-5xl">
                  Basketball
                  <br />
                  Academy
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Competitive training for serious players
                </p>
              </div>
            </Link>
            <Link
              href="/minibasket"
              className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-lg bg-white/5 p-6 border border-white/10"
            >
              <div>
                <h3 className="font-heading text-4xl uppercase text-white md:text-5xl">
                  Mini
                  <br />
                  <span className="text-brand-gold">Basket</span>
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  Basketball for the youngest players
                </p>
              </div>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Sponsors */}
      <AnimatedSection>
        <section className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="mb-12 text-center font-heading text-3xl uppercase text-white/30">
            Our Sponsors
          </h2>
          <SponsorGrid sponsors={[...sponsors]} />
        </section>
      </AnimatedSection>
    </>
  );
}
```

- [ ] **Step 3: Copy pattern image to public**

```bash
cp "branding/logos/borec basketball - logos-11.png" public/pattern.png
```

- [ ] **Step 4: Verify home page renders**

```bash
npm run dev
```

Open `http://localhost:3000`. Hero should show with pattern background, red brand text. If Sanity has no data yet, the games and news sections will be hidden (conditional rendering).

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/data/sponsors.ts public/pattern.png
git commit -m "feat: build home page with hero, games, news, programs bento, and sponsors"
```

---

### Task 7: News Pages

**Files:**
- Create: `src/app/news/page.tsx`, `src/app/news/[slug]/page.tsx`

- [ ] **Step 1: Create News feed page**

Create `src/app/news/page.tsx`:
```tsx
import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/types";
import { NewsCard } from "@/components/news-card";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "News | Борец Баскет",
  description: "Latest news from Borec Basketball club.",
};

export const revalidate = 60;

export default async function NewsPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">News</span>
      </h1>

      {posts.length === 0 ? (
        <p className="text-white/50">No news posts yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post._id} delay={i * 0.1}>
              <NewsCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </section>
  );
}
```

- [ ] **Step 2: Create individual news post page**

Create `src/app/news/[slug]/page.tsx`:
```tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";
import { formatPostDate } from "@/lib/utils";
import { PortableText } from "@/components/portable-text";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY);
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Борец Баскет`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <Link
        href="/news"
        className="mb-8 inline-block text-sm text-white/50 hover:text-white"
      >
        &larr; Back to News
      </Link>

      <p className="text-sm font-medium uppercase tracking-wider text-brand-red">
        {formatPostDate(post.publishedAt)}
      </p>

      <h1 className="mt-2 font-heading text-4xl uppercase text-white md:text-5xl">
        {post.title}
      </h1>

      {post.coverImage && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={urlFor(post.coverImage).width(1200).height(675).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mt-8">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Verify news pages render**

```bash
npm run dev
```

Visit `/news` — should show empty state or posts if Sanity has data. Visit `/news/some-slug` — should 404 if no post exists.

- [ ] **Step 4: Commit**

```bash
git add src/app/news/
git commit -m "feat: add news feed and individual post pages with Sanity CMS"
```

---

### Task 8: Schedule Page

**Files:**
- Create: `src/app/schedule/page.tsx`

- [ ] **Step 1: Build the Schedule page**

Create `src/app/schedule/page.tsx`:
```tsx
import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { UPCOMING_GAMES_QUERY, PAST_GAMES_QUERY } from "@/lib/sanity/queries";
import type { Game } from "@/lib/sanity/types";
import { GameCard } from "@/components/game-card";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Schedule | Борец Баскет",
  description: "Borec Basketball game schedule and results.",
};

export const revalidate = 60;

export default async function SchedulePage() {
  const [upcoming, past] = await Promise.all([
    client.fetch<Game[]>(UPCOMING_GAMES_QUERY),
    client.fetch<Game[]>(PAST_GAMES_QUERY),
  ]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">Schedule</span>
      </h1>

      {/* Upcoming */}
      <AnimatedSection>
        <div>
          <h2 className="mb-6 font-heading text-2xl uppercase text-white/30">
            Upcoming Games
          </h2>
          {upcoming.length === 0 ? (
            <p className="py-8 text-white/50">No upcoming games scheduled.</p>
          ) : (
            upcoming.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </AnimatedSection>

      {/* Results */}
      {past.length > 0 && (
        <AnimatedSection>
          <div className="mt-16">
            <h2 className="mb-6 font-heading text-2xl uppercase text-white/30">
              Results
            </h2>
            {past.map((game) => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        </AnimatedSection>
      )}
    </section>
  );
}
```

- [ ] **Step 2: Verify schedule page**

```bash
npm run dev
```

Visit `/schedule` — should show "No upcoming games" if Sanity is empty, or games if data exists.

- [ ] **Step 3: Commit**

```bash
git add src/app/schedule/
git commit -m "feat: add schedule page with upcoming games and results"
```

---

### Task 9: Static Pages — Roster, History, Academy, Minibasket, Sponsors

**Files:**
- Create: `src/app/roster/page.tsx`, `src/app/history/page.tsx`, `src/app/academy/page.tsx`, `src/app/minibasket/page.tsx`, `src/app/sponsors/page.tsx`, `src/data/roster.ts`

- [ ] **Step 1: Create roster data file**

Create `src/data/roster.ts`:
```typescript
export interface Player {
  name: string;
  number: number;
  position: string;
  photo: string;
}

export const roster: Player[] = [
  {
    name: "Player Name",
    number: 1,
    position: "Point Guard",
    photo: "/players/placeholder.png",
  },
  // Add more players here
];
```

Note: Add actual player data and photos to `public/players/`. Create the directory:
```bash
mkdir -p public/players
```

- [ ] **Step 2: Create Roster page**

Create `src/app/roster/page.tsx`:
```tsx
import type { Metadata } from "next";
import { roster } from "@/data/roster";
import { PlayerCard } from "@/components/player-card";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Roster | Борец Баскет",
  description: "Meet the Borec Basketball team.",
};

export default function RosterPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">Roster</span>
      </h1>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {roster.map((player, i) => (
          <AnimatedSection key={player.number} delay={i * 0.05}>
            <PlayerCard player={player} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create History page**

Create `src/app/history/page.tsx`:
```tsx
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "History | Борец Баскет",
  description: "The history of Borec Basketball club from Veles.",
};

export default function HistoryPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">History</span>
      </h1>

      <AnimatedSection>
        <div className="space-y-6 text-white/70 leading-relaxed">
          <p>
            Борец Баскет is a basketball club from Veles, North Macedonia.
            {/* Add full history content from Wikipedia and club records here */}
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">Early Years</h2>
          <p>
            {/* Add historical content */}
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">Achievements</h2>
          <p>
            {/* Add achievements */}
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">Present Day</h2>
          <p>
            {/* Add current information */}
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
```

Note: Fill in actual history content from the Борец Баскет Wikipedia article and club records.

- [ ] **Step 4: Create Academy page**

Create `src/app/academy/page.tsx`:
```tsx
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Academy | Борец Баскет",
  description: "Borec Basketball Academy — competitive training for serious players.",
};

export default function AcademyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-4 font-heading text-5xl uppercase text-white md:text-6xl">
        Basketball <span className="text-brand-red">Academy</span>
      </h1>

      <AnimatedSection>
        <div className="space-y-6 text-white/70 leading-relaxed">
          <p className="text-lg text-white/50">
            Competitive training for players looking to take their game to the next level.
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">Programs</h2>
          <p>
            {/* Add program details: age groups, schedule, training info */}
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">Coaches</h2>
          <p>
            {/* Add coaching staff info */}
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">How to Join</h2>
          <p>
            {/* Add enrollment info */}
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
```

- [ ] **Step 5: Create Minibasket page**

Create `src/app/minibasket/page.tsx`:
```tsx
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Minibasket | Борец Баскет",
  description: "Borec Minibasket — basketball for the youngest players.",
};

export default function MinibasketPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-4 font-heading text-5xl uppercase text-white md:text-6xl">
        Mini<span className="text-brand-red">basket</span>
      </h1>

      <AnimatedSection>
        <div className="space-y-6 text-white/70 leading-relaxed">
          <p className="text-lg text-white/50">
            Basketball for the youngest players — building fundamentals, teamwork, and love for the game.
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">About the Program</h2>
          <p>
            {/* Add program description */}
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">Ages & Schedule</h2>
          <p>
            {/* Add age groups and training schedule */}
          </p>

          <h2 className="font-heading text-2xl text-white pt-4">How to Join</h2>
          <p>
            {/* Add enrollment information */}
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
```

- [ ] **Step 6: Create Sponsors page**

Create `src/app/sponsors/page.tsx`:
```tsx
import type { Metadata } from "next";
import { sponsors } from "@/data/sponsors";
import { SponsorGrid } from "@/components/sponsor-grid";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Sponsors | Борец Баскет",
  description: "Our sponsors and partners.",
};

export default function SponsorsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        Our <span className="text-brand-red">Sponsors</span>
      </h1>

      <AnimatedSection>
        <SponsorGrid sponsors={[...sponsors]} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-20 rounded-lg border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="font-heading text-2xl text-white">
            Become a Sponsor
          </h2>
          <p className="mt-2 text-white/50">
            Interested in supporting Borec Basketball? Get in touch.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-md bg-brand-red px-6 py-2 text-sm font-medium text-white hover:bg-brand-red/80"
          >
            Contact Us
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
```

- [ ] **Step 7: Verify all static pages**

```bash
npm run dev
```

Visit `/roster`, `/history`, `/academy`, `/minibasket`, `/sponsors` — all should render with proper layout and styling.

- [ ] **Step 8: Commit**

```bash
git add src/app/roster/ src/app/history/ src/app/academy/ src/app/minibasket/ src/app/sponsors/ src/data/roster.ts
git commit -m "feat: add static pages (roster, history, academy, minibasket, sponsors)"
```

---

### Task 10: Contact Page + Resend Email

**Files:**
- Create: `src/app/contact/page.tsx`, `src/components/contact-form.tsx`, `src/app/api/contact/route.ts`

- [ ] **Step 1: Install Resend**

Already installed in Task 1. Add the API key to `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=borecbasketball@gmail.com
```

Note: Get an API key from resend.com. Replace `CONTACT_EMAIL` with the actual club email.

- [ ] **Step 2: Create the API route**

Create `src/app/api/contact/route.ts`:
```typescript
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Borec Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
```

Note: The `from` address uses Resend's default domain for the free tier. To use a custom domain (e.g. `contact@borecbasketball.com`), verify it in Resend dashboard.

- [ ] **Step 3: Create the contact form component**

Create `src/components/contact-form.tsx`:
```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-8 text-center">
        <h3 className="font-heading text-xl text-white">Message Sent!</h3>
        <p className="mt-2 text-white/50">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-white/70">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30"
          placeholder="Your name"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-white/70">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-white/70">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30"
          placeholder="Your message..."
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="bg-brand-red hover:bg-brand-red/80 font-body"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-brand-red">
          Failed to send. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 4: Create Contact page**

Create `src/app/contact/page.tsx`:
```tsx
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { AnimatedSection } from "@/components/animated-section";
import { socialLinks } from "@/data/social-links";

export const metadata: Metadata = {
  title: "Contact | Борец Баскет",
  description: "Get in touch with Borec Basketball.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">Contact</span>
      </h1>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Info */}
        <AnimatedSection>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl text-white">Location</h2>
              <p className="mt-2 text-white/50">
                Veles, North Macedonia
                {/* Add specific address */}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-white">Email</h2>
              <a
                href="mailto:borecbasketball@gmail.com"
                className="mt-2 block text-brand-red hover:text-brand-red/80"
              >
                borecbasketball@gmail.com
              </a>
            </div>

            <div>
              <h2 className="font-heading text-xl text-white">Social</h2>
              <div className="mt-2 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-brand-red"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.2}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Verify contact page and form**

```bash
npm run dev
```

Visit `/contact`. Form should render. Submitting will fail without a valid Resend API key — that's expected in dev. Verify there are no runtime errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/contact/ src/app/api/contact/ src/components/contact-form.tsx
git commit -m "feat: add contact page with email form via Resend"
```

---

### Task 11: Custom 404 Page

**Files:**
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create custom 404 page**

Create `src/app/not-found.tsx`:
```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Oversized 404 background text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-heading text-[20rem] leading-none text-white/5 select-none md:text-[30rem]">
          404
        </span>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl uppercase text-white md:text-6xl">
          You Missed <span className="text-brand-red">The Shot</span>
        </h1>
        <p className="mt-4 text-white/50">
          The page you&apos;re looking for didn&apos;t make the play.
          <br />
          No worries — the game&apos;s still on elsewhere.
        </p>
        <Button
          asChild
          className="mt-8 bg-brand-red hover:bg-brand-red/80 font-body"
        >
          <Link href="/">Get Me Home</Link>
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify 404 page**

```bash
npm run dev
```

Visit `http://localhost:3000/some-nonexistent-page` — should show the branded 404 with "You Missed The Shot" and a "Get Me Home" button.

- [ ] **Step 3: Commit**

```bash
git add src/app/not-found.tsx
git commit -m "feat: add custom branded 404 page"
```

---

### Task 12: ISR Revalidation Webhook

**Files:**
- Create: `src/app/api/revalidate/route.ts`

- [ ] **Step 1: Add webhook secret to env**

Add to `.env.local`:
```
SANITY_WEBHOOK_SECRET=your_random_secret_here
```

Generate a random string for the secret (e.g. `openssl rand -hex 32`).

- [ ] **Step 2: Create the revalidation endpoint**

Create `src/app/api/revalidate/route.ts`:
```typescript
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const secret = request.headers.get("x-sanity-webhook-secret");

  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { _type } = body;

  // Revalidate affected pages based on content type
  if (_type === "post") {
    revalidatePath("/");
    revalidatePath("/news");
    // Individual post pages are handled by revalidatePath with the slug
    if (body.slug?.current) {
      revalidatePath(`/news/${body.slug.current}`);
    }
  }

  if (_type === "game") {
    revalidatePath("/");
    revalidatePath("/schedule");
  }

  return NextResponse.json({ revalidated: true });
}
```

- [ ] **Step 3: Configure Sanity webhook**

In the Sanity management console (sanity.io/manage):
1. Go to your project → API → Webhooks
2. Create a new webhook:
   - Name: "Revalidate website"
   - URL: `https://your-domain.vercel.app/api/revalidate`
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["post", "game"]`
   - Projection: `{_type, slug}`
   - HTTP Headers: `x-sanity-webhook-secret: your_random_secret_here`

Note: Replace the URL with your actual Vercel deployment URL after deploying.

- [ ] **Step 4: Commit**

```bash
git add src/app/api/revalidate/
git commit -m "feat: add Sanity webhook revalidation endpoint for ISR"
```

---

### Task 13: SEO & Metadata

**Files:**
- Create: `src/app/sitemap.ts`, `src/app/robots.ts`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create sitemap generator**

Create `src/app/sitemap.ts`:
```typescript
import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/types";

const BASE_URL = "https://borecbasketball.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<Post[]>(POSTS_QUERY);

  const staticPages = [
    "",
    "/news",
    "/schedule",
    "/roster",
    "/history",
    "/academy",
    "/minibasket",
    "/sponsors",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postPages = posts.map((post) => ({
    url: `${BASE_URL}/news/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...postPages];
}
```

- [ ] **Step 2: Create robots.txt**

Create `src/app/robots.ts`:
```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://borecbasketball.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Enhance root layout metadata**

Update the metadata export in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Борец Баскет | Borec Basketball",
    template: "%s | Борец Баскет",
  },
  description:
    "Official website of Borec Basketball club from Veles, North Macedonia.",
  openGraph: {
    title: "Борец Баскет | Borec Basketball",
    description:
      "Official website of Borec Basketball club from Veles, North Macedonia.",
    url: "https://borecbasketball.com",
    siteName: "Борец Баскет",
    locale: "mk_MK",
    type: "website",
  },
};
```

Note: Update `title` fields in individual page metadata to just the page name (e.g. `"News"` instead of `"News | Борец Баскет"`) since the template handles the suffix.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/app/layout.tsx
git commit -m "feat: add sitemap, robots.txt, and OpenGraph metadata"
```

---

### Task 14: Final Polish & Build Verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Fix any TypeScript errors or build issues that come up. Common issues:
- Missing image dimensions
- Unescaped HTML entities (use `&apos;` etc.)
- Missing environment variables (build will warn)

- [ ] **Step 2: Test production build locally**

```bash
npm run start
```

Walk through every page:
- `/` — hero, games, news, programs, sponsors
- `/news` — feed page
- `/schedule` — upcoming + results
- `/roster` — player cards
- `/history`, `/academy`, `/minibasket` — static content
- `/sponsors` — logo grid + CTA
- `/contact` — info + form
- `/nonexistent` — custom 404

Check mobile responsiveness on each page.

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build issues and final polish"
```

---

### Task 15: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/borec-basketball-website.git
git branch -M main
git push -u origin main
```

Note: Create the GitHub repo first at github.com.

- [ ] **Step 2: Import to Vercel**

1. Go to vercel.com → New Project → Import from GitHub
2. Select `borec-basketball-website`
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `SANITY_WEBHOOK_SECRET`
4. Deploy

- [ ] **Step 3: Update Sanity webhook URL**

After deployment, update the webhook URL in Sanity management console to use the actual Vercel domain.

- [ ] **Step 4: Verify live deployment**

Visit the Vercel URL and repeat the walkthrough from Task 14, Step 2.

- [ ] **Step 5: Commit any post-deploy fixes**

```bash
git add -A
git commit -m "fix: post-deployment adjustments"
git push
```
