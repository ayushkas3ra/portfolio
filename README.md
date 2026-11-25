# Developer Portfolio

A responsive, single-page developer portfolio built with React and Vite.

Live website: [https://www.ayushkasera.com/](https://www.ayushkasera.com/)

## Requirements

- Node.js (current LTS recommended)
- npm

## Local development

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

## Technology stack

- React and JavaScript
- Vite
- External CSS
- Lucide React and lightweight SVG icons
- Vercel Web Analytics and Speed Insights

Analytics provides supported aggregate reporting on the free Vercel Hobby plan. Custom click tracking is deferred because it is unavailable on that plan.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. `npm run preview` serves that build locally.

## Deployment

1. Import the repository into Vercel.
2. Select the Vite framework preset, build command `npm run build`, and output directory `dist`.
3. Enable Web Analytics and Speed Insights in the Vercel project settings.
4. `index.html` configures the production canonical URL, Open Graph URL, and absolute profile image URLs for Open Graph and X.
5. The current social preview uses `public/profile-picture.webp`; a dedicated 1200 × 630 preview image is still needed to meet the design specification.
6. Deploy through Vercel and verify analytics and metadata on the production domain.

No backend or environment variables are required by the current application.
