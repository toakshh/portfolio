# Akshat Anand — Portfolio

A bold, editorial, interactive portfolio for a software engineer working across
full-stack systems, AI platforms, real-time architecture and 3D web. Built with
React + Vite, a hand-written GLSL shader centerpiece, and a CSS + IntersectionObserver
motion layer (no heavy animation dependencies).

## Design

Restrained editorial system — warm near-black ink, paper-white type and a single
ember accent — with Fraunces (display serif), Inter (UI) and JetBrains Mono (labels),
film-grain texture, a blend-mode cursor with contextual labels, magnetic CTAs,
line-by-line heading reveals, a scroll-progress bar and smooth marquees.

## Sections

- **Hero** — a custom shader "core": simplex-noise vertex displacement with
  recomputed normals, fresnel rim and a warm holographic palette, mouse-reactive,
  wrapped in an additive particle field. Oversized serif name with on-load reveal.
- **About** — editorial statement with animated count-up statistics.
- **Skills** — full-bleed logo marquee + categorized list with grayscale→colour hovers.
- **Experience** — accordion timeline with quantified achievements + education strip.
- **Projects** — editorial work-list with hover motion and a contextual "GitHub" cursor.
- **Contact** — big CTA with a minimal underline form (EmailJS).

## Tech

React 18 · Vite · Tailwind CSS · React Three Fiber · @react-three/drei · Three.js · GLSL · EmailJS

## Content

All copy lives in `src/constants/index.js`. Tech logos load at runtime from public
CDNs (devicon / simpleicons) with an automatic monogram fallback.

## Run

```bash
npm install     # run on your machine if node_modules was copied across OSes
npm run dev
npm run build
```

Résumé is served from `public/Akshat_Anand_Resume.pdf`. EmailJS keys go in `.env`
(see `.env.sample`). Deployed via Vercel.
