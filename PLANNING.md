# Personal Site Enhancement Plan

> This document contains the master plan for refactoring and enhancing odorifqi.dev
> Created: 2026-02-18

---

## Executive Summary

Transform the current single-page static portfolio into a multi-page, dynamic-content site using Next.js 16 and Markdown-based CMS.

---

## Goals

1. **Multi-page architecture**: Home, About, Works, Publishing, Contact
2. **Dynamic content management**: Update content without code changes
3. **Modern tech stack**: Next.js 16 + React 19 + TypeScript
4. **Better hosting**: Migrate to Vercel for optimal Next.js support
5. **Future-proof**: Easy to add features later (blog, contact forms, etc.)

---

## Tech Stack

| Component | Choice | Version | Reason |
|-----------|--------|---------|--------|
| Framework | Next.js | 16.x | Latest stable, Turbopack, App Router |
| React | React | 19.2 | Latest with React Compiler support |
| Language | TypeScript | 5.x | Type safety, better DX |
| Styling | Tailwind CSS | 3.x | Already familiar, maintain current styles |
| Content | Markdown | - | Simple, version-controlled, no API needed |
| Hosting | Vercel | Free tier | Native Next.js 16 support, auto-deploy |
| Domain | Custom | odorifqi.dev | Keep existing domain |

---

## Content Strategy

### CMS: Markdown Files

Instead of Notion or other headless CMS, we'll use **Markdown files** stored in the repo:

```
content/
├── works/                    # Portfolio projects
│   ├── workout-app.md
│   ├── titip-shopping.md
│   ├── shoes-website.md
│   ├── student-management.md
│   ├── company-landing.md
│   └── chat-app.md
├── publishing/               # External content links
│   ├── medium-post-1.md
│   ├── dribbble-shot-1.md
│   └── ...
├── about.md                  # About page content
└── contact.md                # Contact info
```

### Content Update Workflow

1. Create/edit Markdown file in `content/` folder
2. Add images to `public/images/`
3. Push to GitHub
4. Vercel auto-deploys
5. **No code changes needed for content updates!**

### Frontmatter Schema

**Works** (`content/works/*.md`):
```yaml
---
title: "Case study: learn, create, mentor in workout app"
source: "Medium"                    # Medium | Dribbble | Behance | etc.
sourceUrl: "https://..."            # Link to external source
date: "2024-01-15"
category: "Case Study"              # Case Study | UI Design | UX Design
image: "/images/workout-app.png"
featured: true                      # Show on homepage?
---

Brief description or case study content...
```

**Publishing** (`content/publishing/*.md`):
```yaml
---
title: "My Design Process"
platform: "Medium"                  # Medium | Dribbble | Behance | Figma | LinkedIn
url: "https://medium.com/..."
date: "2024-02-01"
thumbnail: "/images/..."
excerpt: "Optional excerpt..."
---
```

---

## Site Structure

### Pages

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Home | Hero, Summary, Featured Works |
| `/about` | About | Bio, Skills, Experience, Photo |
| `/works` | Works Gallery | Grid of all projects, filtering by category |
| `/works/[slug]` | Work Detail | Individual project page (optional) |
| `/publishing` | Publishing | Aggregated external content |
| `/contact` | Contact | Contact info, social links, contact form (future) |

### Navigation

Simple navigation bar with links to all pages.

---

## Project Structure

```
my-personal-site/
├── app/                          # Next.js 16 App Router
│   ├── page.tsx                  # Home page (./)
│   ├── layout.tsx                # Root layout with nav
│   ├── globals.css               # Global styles + Tailwind
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── works/
│   │   ├── page.tsx              # Works listing
│   │   └── [slug]/
│   │       └── page.tsx          # Individual work detail
│   ├── publishing/
│   │   └── page.tsx              # Publishing page
│   └── contact/
│       └── page.tsx              # Contact page
│
├── components/                   # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── WorkCard.tsx
│   ├── PublishingCard.tsx
│   ├── Navigation.tsx
│   └── ...
│
├── content/                      # Markdown content (CMS)
│   ├── works/
│   ├── publishing/
│   ├── about.md
│   └── contact.md
│
├── lib/                          # Utility functions
│   ├── content.ts                # Markdown parsing with gray-matter
│   └── utils.ts
│
├── types/                        # TypeScript types
│   └── index.ts
│
├── public/                       # Static assets
│   ├── images/
│   │   └── works/                # Project images
│   └── favicon.ico
│
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript config
└── package.json
```

---

## Current Content Migration

### Existing Projects (from work.js)

1. **Case study: learn, create, mentor in workout app**
   - Source: Medium
   - Image: image-6.png

2. **Case study: "Shopping list" for e-commerce**
   - Source: Medium
   - Image: titip.png

3. **UI Design: Shoes Website**
   - Source: Dribbble
   - Image: shoes.png

4. **UI Design: Information System - Student Management**
   - Source: Behance
   - Image: sia.png

5. **UI Design: Company website Landing Page**
   - Source: Behance
   - Image: fgdd.png

6. **UI Design: Schedule an event in a chat app**
   - Source: Dribbble
   - Image: chatapp.png

### Contact Info (from contact.js)

- Email: odorifqi@gmail.com
- CV: Google Drive link
- Medium: @odorifqi
- Behance: odorifqi
- Dribbble: odorifqi
- LinkedIn: odorifqi
- GitHub: odorifqi

---

## Design System

### Colors (keep current)
- Background: `#0a0a0a` (dark)
- Text primary: `#d7dcdf` (light gray)
- Text secondary: `gray-400`
- Accent: `#2a83eb` (blue)
- Border: `#252627`

### Typography
- Primary: `'Plus Jakarta Sans', sans-serif`
- Secondary: `'Open Sans', sans-serif` (for pronunciation)

### Breakpoints
- Mobile: default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)

---

## Implementation Phases

### Phase 1: Foundation ✅ COMPLETE

- [x] Initialize Next.js 16 project with TypeScript
- [x] Configure Tailwind CSS with existing color scheme
- [x] Set up project structure (app/, components/, content/)
- [x] Migrate existing static assets
- [x] Create base layout with navigation

### Phase 2: Content Layer ✅ COMPLETE

- [x] Install and configure `gray-matter` for Markdown parsing
- [x] Create content fetching utilities
- [x] Migrate existing 6 works to Markdown format
- [x] Create Publishing entries for external content
- [x] Build page components for each route

### Phase 3: Pages Development ✅ COMPLETE

- [x] Home page (Hero + Summary + Featured Works)
- [x] About page (Bio + Skills)
- [x] Works page (Grid with filtering)
- [x] Publishing page (External content aggregator)
- [x] Contact page (Info + Links)

### Phase 4: Polish ✅ COMPLETE

- [x] Add smooth scroll animations (Framer Motion)
- [x] Hover effects on cards
- [x] Mobile responsiveness review
- [x] SEO meta tags
- [x] Favicon added
- [x] lib/utils.ts created
- [ ] Loading states (deferred - not critical)

### Phase 5: Deployment ✅ READY

- [x] Configure static export (or keep SSR if needed)
- [x] Create deployment configuration files
- [x] Create deployment documentation (DEPLOYMENT.md)
- [ ] Set up Vercel project (manual step - see DEPLOYMENT.md)
- [ ] Configure custom domain (odorifqi.dev) (manual step)
- [ ] Set up auto-deploy on push (manual step)

### Phase 6: Future Enhancements (Optional)

- [ ] Dark/Light mode toggle
- [ ] Contact form with API route
- [ ] Blog with MDX support
- [ ] Analytics (Vercel Analytics)
- [ ] Search functionality
- [ ] RSS feed

---

## Hosting Decision

**Chosen: Vercel (Free Tier)**

Reasons:
- Native Next.js 16 support (no static export limitations)
- Turbopack optimization
- Auto-deploy on push
- Deploy previews for PRs
- Built-in analytics
- Global CDN
- Easy custom domain setup
- Can add API routes later

Alternative considered: GitHub Pages (rejected due to static-only limitation)

---

## Commands Reference

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Build
npm run build            # Production build

# Deployment
vercel                   # Deploy to Vercel (CLI)
# Or: push to main branch for auto-deploy
```

---

## Notes

### Why Markdown instead of Notion?
- Version controlled with git
- Edit directly on GitHub
- No API dependencies or rate limits
- Fast builds
- Can migrate to Notion later if needed

### Why Next.js 16?
- Latest stable version
- Turbopack for faster development
- React Compiler support
- Enhanced routing and navigation
- Future-proof

### Domain
Keep `odorifqi.dev` - will configure on Vercel after deployment.

---

## Changelog

| Date | Change |
|------|--------|
| 2026-02-18 | Initial planning document created |

