# Checkbox — Landing Page Redesign

A responsive, animated landing page for **Checkbox**, a Ukrainian software
cash register service, built with **Astro** and **GSAP**.

**Live demo:** https://svitlanatsupryk-jul18.github.io/Astro-project/

> **Unreleased concept** Built for Checkbox from the company designer's
> Figma mockups. This is not the
> live Checkbox website — that is [checkbox.ua](https://checkbox.ua). The
> brand, design and content belong to Checkbox; development by Svitlana
> Tsupryk.

## Features

- **Interactive sections:** category slider with autoplay, testimonials
  slider, FAQ accordion, logo ticker and a live receipt counter.
- **Looping GSAP animations** that play only while they are on screen and
  pause when scrolled away.
- **Responsive, mobile-first layout**, from 320 px phones to wide desktops.
- **Accessibility:**
  - full keyboard navigation with a visible focus ring;
  - WAI-ARIA tabs for the category slider (arrow keys, Home/End);
  - header menus that close with Escape;
  - `prefers-reduced-motion` respected by every animation;
- **Performance:** optimised images (WebP, `srcset`), subset web fonts,
  minified HTML and SVG, no layout shifts while the page loads.

## Tech stack

| Area      | Tools                                                        |
| --------- | ------------------------------------------------------------ |
| Framework | [Astro 6](https://astro.build) (static output)               |
| Animation | [GSAP 3](https://gsap.com)                                   |
| Styling   | Plain CSS with custom properties and native nesting          |
| Build     | Vite, `astro:assets` image optimisation, `astro-compress`    |
| CI / host | GitHub Actions, GitHub Pages                                 |

## Why Astro

A marketing landing page is mostly content with a few interactive parts —
the kind of site Astro is built for:

- **HTML first, JavaScript only where needed.** Pages are rendered to static
  HTML at build time. The only JavaScript sent to the browser is the small
  scripts of the interactive sections (sliders, FAQ, animations) — there is no
  framework runtime.
- **Static output.** The whole site is plain files, so it is fast to serve and
  can be hosted for free on GitHub Pages, with no server to run.
- **Components without a UI framework.** Each section is an `.astro`
  component with its own markup, data and script, so the page stays easy to
  read and change.
- **Built-in image optimisation.** `astro:assets` converts photos to WebP,
  generates responsive `srcset` sizes and adds `width`/`height` to prevent
  layout shifts.
- **Built-in font handling.** The Fonts API self-hosts the fonts, preloads the
  main one and generates size-matched fallbacks, so text doesn't jump when the
  fonts load.
- **SVG as components.** Icons and illustrations live in separate `.svg` files
  but are rendered inline, so CSS can still animate their individual paths.
- **TypeScript support.** `astro check` type-checks every component, and the
  deploy workflow runs it before each build.

## Getting started

**Requirements:** Node.js 22.12 or newer.

```sh
git clone https://github.com/SvitlanaTsupryk-jul18/Astro-project.git
cd Astro-project
npm install
npm run dev
```

The dev server runs at http://localhost:4321/Astro-project/.

| Command           | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload            |
| `npm run build`   | Build the production site into `dist/`          |
| `npm run preview` | Serve the production build locally              |
| `npx astro check` | Type-check all `.astro` and TypeScript files    |

## Deployment

Every push to `main` runs the GitHub Actions workflow in
`.github/workflows/deploy.yml`:

1. **check:** type-checks the project with `astro check`;
2. **build:** builds the site, only if the check passed;
3. **deploy:** publishes the build to GitHub Pages.

Broken code stops at the first two steps, so the live site always keeps the
last working version.

## Credits

- Brand and content: [Checkbox](https://checkbox.ua)
- Design: Checkbox design team (Figma)
- Development: Svitlana Tsupryk
