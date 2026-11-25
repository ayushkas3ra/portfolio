# Developer Portfolio

A responsive, single-page developer portfolio built with React and Vite.

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
4. Once the production domain is known, add its canonical URL and any absolute social metadata URLs to `index.html`.
5. Deploy through Vercel and verify analytics and metadata on the production domain.

No backend or environment variables are required by the current application.
