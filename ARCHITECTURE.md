# Technical Architecture

## 1. Architecture Overview

The portfolio is a static, client-side React application built using Vite and deployed on Vercel.

No backend, database, authentication or server-side rendering is required.

## 2. Technology Stack

- React: UI components.
- JavaScript: Application logic.
- Vite: Development server and production bundling.
- Vanilla CSS: Styling, responsiveness and animations.
- Lucide React: General-purpose icons.
- SVG: Brand icons.
- Vercel Web Analytics: Visitor analytics.
- Vercel Speed Insights: Performance monitoring.
- Vercel: Hosting and deployment.
- GitHub: Version control.

## 3. Project Structure

```text
portfolio/
├── public/
│   ├── profile-picture.webp
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Profile.jsx
│   │   ├── ResumeButton.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── styles/
│   │   ├── global.css
│   │   └── components.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── .oxlintrc.json
├── .gitignore
├── PRD.md
├── DESIGN.md
├── ARCHITECTURE.md
└── README.md
```

## 4. Component Responsibilities

- Profile: Display profile image, name, professional title and introduction.
- ResumeButton: Open the externally hosted Google Docs resume in a new tab.
- ProjectCard: Render an individual project's information and links.
- Projects: Render the featured projects collection.
- SocialLinks: Display professional social media links.
- Contact: Provide contact and copy email functionality.
- Footer: Display minimal footer information.
- App: Compose all page sections and analytics integrations.

## 5. Data Management

All portfolio content will be maintained in portfolio.js.

This includes:

- Profile information.
- Google Docs resume URL (`resumeUrl`).
- Project information.
- Technology stacks.
- Project statuses.
- Social links.
- Professional contact email.

Components receive data through props.

No global state management library is required.

Local React state may be used for temporary interactions such as copy email confirmation.

## 6. Analytics Architecture

Render `Analytics` from `@vercel/analytics/react` and `SpeedInsights` from `@vercel/speed-insights/react` once in the application root.

Vercel Web Analytics collects supported aggregate visitor metrics on the free Hobby plan. Analytics must not block rendering or navigation and must not collect personal visitor information.

Custom click tracking for resume, project, social and contact actions is deferred because it is unavailable on the free Vercel plan. Do not implement unsupported custom events or add another analytics provider.

Vercel Speed Insights will monitor supported performance metrics.

## 7. Styling Architecture

All styles must be maintained in external CSS files.

global.css contains:

- CSS custom properties.
- Color tokens.
- Typography.
- CSS reset.
- Global accessibility rules.
- Base layout.

components.css contains:

- Profile styling.
- Resume button styling.
- Project cards.
- Social links.
- Contact section.
- Footer.
- Responsive rules.
- Component animations.

No Tailwind CSS, CSS-in-JS or animation libraries.

## 8. Performance Strategy

- Optimize profile image using WebP.
- Use system fonts.
- Minimize dependencies.
- Use lightweight SVG icons.
- Avoid unnecessary API requests.
- Open the Google Docs resume only after visitor activation; do not embed, fetch or preload it.
- Avoid artificial loading delays.
- Use native CSS animations.
- Generate optimized production assets using Vite.

## 9. SEO Strategy

Static metadata will be configured in index.html.

Include:

- Page title.
- Meta description.
- Open Graph metadata.
- X card metadata.
- Canonical URL.
- Favicon.

Set the canonical URL and absolute production URLs only after the production domain is confirmed. Do not reference a social preview image until that asset exists.

## 10. Testing Strategy

- ESLint checks.
- Production build verification.
- Manual functional testing.
- Responsive viewport testing.
- Keyboard navigation testing.
- Lighthouse performance and accessibility checks.
- Analytics verification after deployment.

## 11. Deployment

GitHub repository connects to Vercel.

Build command: npm run build

Output directory: dist

Production deployments originate from the main branch.

Preview deployments may be used for reviewing changes.

## 12. Engineering Constraints

- No backend.
- No database.
- No React Router.
- No Redux.
- No unnecessary dependencies.
- No full-page loading spinner.
- No artificial loading delay.
- No exposed secrets.
- No unfinished or broken links.
- No private personal information in public assets.

Prioritize simplicity, performance, accessibility and maintainability.