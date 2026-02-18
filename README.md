# Muhammad Rifqi | Portfolio

> Personal portfolio website built with Next.js 16, React 19, and TypeScript.

🌐 **Live Site**: [https://odorifqi.dev](https://odorifqi.dev)

---

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 16.1.6 |
| React | 19.2.4 |
| TypeScript | 5.9.3 |
| Tailwind CSS | 3.4.19 |
| Framer Motion | Latest |

---

## Features

- ✅ **Multi-page architecture** - Home, About, Works, Publishing, Contact
- ✅ **Dynamic content** - Markdown-based CMS (no code changes needed)
- ✅ **Smooth animations** - Framer Motion scroll and hover effects
- ✅ **Mobile responsive** - Works on all devices
- ✅ **SEO optimized** - Meta tags, Open Graph
- ✅ **Fast builds** - Turbopack for development

---

## Project Structure

```
.
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── content/                # Markdown content (CMS)
│   ├── works/             # Portfolio projects
│   ├── publishing/        # External content links
│   ├── about.md           # About page content
│   └── contact.md         # Contact info
├── lib/                    # Utility functions
├── public/images/works/    # Static assets
├── types/                  # TypeScript types
└── .github/workflows/      # CI/CD configuration
```

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

---

## Content Management

All content is stored in Markdown files in the `content/` folder:

### Add a new project

Create `content/works/my-project.md`:

```markdown
---
title: "My Project"
source: "Dribbble"
sourceUrl: "https://dribbble.com/..."
date: "2024-02-19"
category: "UI Design"
image: "/images/works/my-image.png"
featured: true
---

Description here...
```

### Add publishing content

Create `content/publishing/my-article.md`:

```markdown
---
title: "My Article"
platform: "Medium"
url: "https://medium.com/..."
date: "2024-02-19"
thumbnail: "/images/works/thumb.png"
excerpt: "Brief description"
---
```

Push to GitHub and Vercel auto-deploys! 🚀

---

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick deploy:
```bash
npm i -g vercel
vercel --prod
```

---

## Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  background: "#0a0a0a",
  foreground: "#d7dcdf",
  accent: "#2a83eb",
  border: "#252627",
}
```

### Content
Edit any `.md` file in `content/` folder - no code changes needed!

---

## Credits

- Design & Development: Muhammad Rifqi
- Fonts: Plus Jakarta Sans, Open Sans (Google Fonts)
- Icons: React Icons

---

## License

ISC
