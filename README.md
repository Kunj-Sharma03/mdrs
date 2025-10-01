## MDRS Memorial Public School Frontend

This directory contains the glassmorphic marketing site for **M.D.R.S. Memorial Public School**, implemented with the Next.js App Router, Tailwind CSS, Lenis smooth scrolling, ScrollStack animations, and rich media carousels.

> 📁 Project root: `frontend/`

## Tooling & Requirements

- Node.js 18.18+ or 20+ (Vercel currently defaults to Node 20)
- npm (bundled with Node.js)

Install dependencies:

```bash
npm install
```

## Available Scripts

- `npm run dev` &mdash; start the development server (http://localhost:3000)
- `npm run lint` &mdash; run ESLint checks
- `npm run build` &mdash; create a production build (executed by Vercel)
- `npm start` &mdash; run the compiled production build locally

## Pre-deployment Checklist

1. `npm run lint`
2. `npm run build`
3. Confirm page content and assets (images under `public/`) are up to date
4. Commit the generated changes

## Deploying to Vercel

1. Visit [vercel.com/new](https://vercel.com/new) and import this Git repository.
2. When prompted for project settings, set:
	- **Framework Preset:** Next.js
	- **Root Directory:** `frontend`
	- **Build Command:** `npm run build`
	- **Install Command:** `npm install`
	- **Output Directory:** `.next`
3. No environment variables are required. (Add them later if backend integrations are introduced.)
4. Trigger the first deploy. Subsequent pushes to the default branch will redeploy automatically.

### Custom Domains

Add your custom school domain in the Vercel dashboard and set the DNS `CNAME`/`A` records as instructed by Vercel.

### Local Preview with Vercel CLI (optional)

```bash
npm install -g vercel
vercel dev
```

This emulates the production deployment locally using your Vercel configuration.
