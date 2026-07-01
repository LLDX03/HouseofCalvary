# House of Calvary

Tattoo studio website — static multi-page site built with [Vite](https://vitejs.dev).

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview   # serve the built output locally
```

## Structure

```
index.html, portfolio.html, artists.html,   Page entry points (Vite multi-page app)
contact.html, pricing.html, merch.html,
recruitment.html

src/main.js                                 Nav/footer/WhatsApp-float injection + hamburger menu
src/css/base.css                            Fonts, CSS variables, reset
src/css/layout.css                          Shared page scaffolding (container, section, page-hero, eyebrow)
src/css/components.css                      Reusable UI chrome (nav, buttons, footer, CTA band)
src/css/utilities.css                       Small helper classes
src/css/pages/*.css                         Page-specific styles, one file per page

public/                                     Images, served as-is at /...
```

Deployed on Vercel — Framework Preset "Vite" is auto-detected (Build Command `vite build`,
Output Directory `dist`).
