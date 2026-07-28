# Anjali Kunder — Portfolio

A one-page portfolio built with React, TypeScript, and Vite.

## Other Projects

- **[Product Catalog + Cart](https://github.com/AnjaliKunder97/product-catalog)** ([live demo](https://anjalikunder97.github.io/product-catalog/)) — Angular 19, NgRx Signal Store, Reactive Forms checkout, deployed via GitHub Actions CI/CD
- **[Real-Time Collaborative Kanban Board](https://github.com/AnjaliKunder97/kanban-board)** ([live demo](https://kanban-board-fawn-six.vercel.app/)) — Vue 3, Nuxt, Pinia, real-time multi-client sync via Socket.io

## Run locally
npm install
npm run dev


Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for deployment

npm run build


This creates a `dist/` folder with a static site (HTML, CSS, JS, images) — that folder is what you deploy.

## Deploy options

- Netlify / Vercel: connect the repo (or drag-and-drop the `dist/` folder after building) — both auto-detect Vite projects if you push the whole project, or you can just deploy `dist/` directly as a static site.
- GitHub Pages: push this project to a repo, then either use the `dist/` folder with GitHub Pages' static hosting, or add a deploy action (e.g. `peaceiris/actions-gh-pages`) to publish `dist/` on push.

## Project structure

src/
types.ts - shared TypeScript interfaces
data.ts - all content (metrics, case studies, skills, timeline)
App.tsx - assembles all sections
App.css - design system (tokens, layout, components)
components/
Nav.tsx
Hero.tsx
MetricsLedger.tsx
Work.tsx
CaseStudyCard.tsx
Skills.tsx
Timeline.tsx
Footer.tsx
public/
images/ - project screenshots


## Updating content

Everything text-based (metrics, case study copy, skills, timeline) lives in `src/data.ts` — edit that file rather than the components to update content. To add or swap screenshots, drop new images into `public/images/` and reference them in `data.ts` as `/images/your-file.jpg`.
