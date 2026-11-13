# React Portfolio

A responsive single-page portfolio built with React 18 and Vite. Sections: About, Projects, Skills, Resume, Contact.

**Live site:** _add your deployed URL here_
**Screenshots:** _add desktop and mobile screenshots to `/docs` and link them here_

## Quick start

```bash
npm install
npm run dev        # development server at http://localhost:5173
```

Personal content (name, projects, skills, résumé) lives in `src/data.js`. Put your résumé at `public/resume.pdf` and replace the SVGs in `public/images/` with real project screenshots.

## Performance work

| Technique | Where |
|---|---|
| Component lazy loading | `React.lazy` + `Suspense` for Projects, Skills, Resume and Contact in `src/App.jsx`; each becomes its own JS chunk |
| Image lazy loading | `src/components/LazyImage.jsx` uses `IntersectionObserver` plus native `loading="lazy"`; width/height reserve space to avoid layout shift |
| JS/CSS minification | Vite production build (esbuild for JS, `cssMinify`) |
| Vendor chunking | React is split into its own long-cached chunk (`vite.config.js`) |
| Cache headers | Hashed assets served `immutable` (`netlify.toml`) |

## Production build and local verification

```bash
npm run build      # outputs dist/
npm run preview    # serves dist/ at http://localhost:4173
```

Checklist while previewing:
1. All five nav links scroll to their sections.
2. Network tab shows separate chunks loading as you scroll, and images load only near the viewport.
3. Contact form rejects an invalid email and opens a mail draft for a valid one.
4. Resume download works.
5. Run Lighthouse (Chrome DevTools) and aim for 90+ in Performance, Accessibility and SEO.

## Deployment

### Netlify (recommended)
1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git**, select the repo. Build settings are read from `netlify.toml`.
3. Deploy. SSL is issued automatically.
4. **Domain management → Add custom domain**, then either point the domain's nameservers to Netlify or add the DNS records Netlify shows (an `A` record for the apex, a `CNAME` for `www`). HTTPS certificates (Let's Encrypt) are provisioned automatically after DNS propagates.

### Vercel
Import the repo, framework preset **Vite**, build command `npm run build`, output `dist`. Add the domain under **Settings → Domains**.

### GitHub Pages
The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. In the repo: **Settings → Pages → Source: GitHub Actions**. For a custom domain add it under Pages settings, create a `CNAME` DNS record to `<username>.github.io`, then tick **Enforce HTTPS**.

## Testing after deployment

- **Browsers:** Chrome, Firefox, Safari, Edge. Use BrowserStack or LambdaTest free tiers if you lack the devices.
- **Responsiveness:** DevTools device toolbar at 360, 768 and 1280 px, plus at least one real phone. Check the nav does not overflow and the project grid collapses to one column.
- **Accessibility:** keyboard-only pass (skip link, visible focus), and a screen-reader check of the form.

## Challenges and solutions (fill in with your own experience)

| Challenge | Solution |
|---|---|
| Images causing layout shift when lazy-loaded | Reserved space with `aspect-ratio` and explicit width/height |
| Asset paths breaking on GitHub Pages sub-path | Used `import.meta.env.BASE_URL` and a `VITE_BASE` env var |
| Large initial bundle | Route-free code splitting with `React.lazy` |
| Contact form without a backend | `mailto:` fallback; Formspree or Netlify Forms are drop-in upgrades |
