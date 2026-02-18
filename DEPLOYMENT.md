# Deployment Guide

> How to deploy your portfolio to Vercel with custom domain

---

## Quick Start (Recommended)

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```
Follow the prompts to authenticate with your Vercel account.

### Step 3: Deploy

```bash
# From your project directory
cd ~/Documents/odorifqi.github.io
vercel
```

Follow the prompts:
- **Set up "~/Documents/odorifqi.github.io"?** → Yes
- **Which scope?** → Select your personal account
- **Link to existing project?** → No (create new)
- **What's your project name?** → odorifqi-portfolio (or your choice)
- **In which directory is your code located?** → ./ (current directory)
- **Want to modify these settings?** → No

Vercel will build and deploy your site. You'll get a URL like:
`https://odorifqi-portfolio-xxx.vercel.app`

---

## Configure Custom Domain (odorifqi.dev)

### Step 1: Add Domain in Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Go to **Settings** → **Domains**
4. Enter `odorifqi.dev` and click **Add**

### Step 2: Update DNS Records

Vercel will show you DNS records to add. You need to configure these with your domain registrar:

**Option A: Using Vercel Nameservers (Recommended)**

Change your domain's nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

**Option B: Using A Record + CNAME**

Add these DNS records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

> Note: If your DNS provider doesn't support A records for root domains, use Option A (Vercel Nameservers).

### Step 3: Wait for SSL

Vercel automatically provisions SSL certificates. This may take a few minutes.

---

## GitHub Integration (Auto-Deploy)

### Step 1: Connect GitHub Repo

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Git**
3. Click **Connect Git Repository**
4. Select your `odorifqi.github.io` repo

### Step 2: Configure Environment Variables (Optional)

If you want to use GitHub Actions for deployment, add these secrets to your GitHub repo:

1. Go to GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:

| Secret Name | How to Get It |
|-------------|---------------|
| `VERCEL_TOKEN` | Run `vercel tokens create` in terminal |
| `VERCEL_ORG_ID` | In `.vercel/project.json` after first deploy |
| `VERCEL_PROJECT_ID` | In `.vercel/project.json` after first deploy |

---

## Manual Deployment

If you prefer not to use GitHub integration:

```bash
# Deploy to production
vercel --prod

# Deploy preview (for testing)
vercel
```

---

## Troubleshooting

### Build Fails

```bash
# Check build locally first
npm run build

# If it works locally but fails on Vercel, check:
# - Node.js version (should be 18+)
# - Environment variables
# - Build command in package.json
```

### Domain Not Working

1. Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
2. Ensure DNS records match what Vercel provided
3. Wait 24-48 hours for full propagation

### Images Not Loading

Ensure images are in `public/` folder and referenced correctly:
```
public/images/works/logo-dark.svg
→ /images/works/logo-dark.svg (in code)
```

---

## Post-Deployment Checklist

- [ ] Site loads at Vercel URL
- [ ] Custom domain works (odorifqi.dev)
- [ ] HTTPS/SSL is active
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Git push triggers auto-deploy

---

## Useful Commands

```bash
# Deploy preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List deployments
vercel list

# Remove deployment
vercel remove
```

---

## Next Steps After Deployment

1. **Test the site** - Click through all pages
2. **Update content** - Edit Markdown files in `content/`
3. **Add new projects** - Create new `.md` files in `content/works/`
4. **Monitor performance** - Vercel Analytics
5. **Set up custom email** - If you want odorifqi@odorifqi.dev

---

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Custom Domains: [vercel.com/docs/concepts/projects/custom-domains](https://vercel.com/docs/concepts/projects/custom-domains)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
