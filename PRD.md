# Product Requirements Document

## 1. Project Overview

**Project Name:** Personal Developer Portfolio

**Version:** 1.0.0

**Product Type:** Static single-page web application

A minimalist, responsive, performance-first personal portfolio that showcases software development projects, provides access to a resume, connects visitors to professional profiles, and provides privacy-friendly visitor analytics.

The application will replace the existing Next.js portfolio with a lightweight React application.

## 2. Objectives

- Establish a professional online presence.
- Showcase software engineering and AI projects.
- Provide easy access to a resume and professional profiles.
- Deliver a fast and accessible browsing experience.
- Understand visitor traffic and engagement.
- Maintain a simple, scalable codebase.

## 3. Target Audience

- Recruiters
- Software engineers
- Potential collaborators
- Technology enthusiasts
- Visitors from social media

## 4. MVP Features

### 4.1 Profile Section

- Optimized profile photograph.
- Full name.
- Professional title.
- Short personal introduction.

### 4.2 Resume

- Prominent resume button.
- Resume is hosted on Google Docs and opens on demand in a new tab.
- Do not require a local resume PDF in the public directory.

### 4.3 Featured Projects

Each project card should support:

- Project name.
- Short description.
- Technology stack.
- Project status, where applicable.
- GitHub repository link.
- Live demonstration link, where available.

Projects must be configurable through a centralized JavaScript data file.

### 4.4 Social Links

- GitHub.
- X.
- LinkedIn.
- Accessible social icons.
- External links.

### 4.5 Contact

- Professional contact email.
- Copy email functionality.
- No contact form or backend required.

### 4.6 Visitor Analytics

- Page views.
- Unique visitor estimates.
- Referral sources.
- Device categories.
- Aggregate geographic insights.
- Use Vercel Web Analytics on the free Hobby plan for supported aggregate metrics.
- Custom click tracking for resume, project, social and contact actions is deferred because it is unavailable on the free Vercel plan.

Analytics must not collect unnecessary personally identifiable information.

### 4.7 SEO

- Descriptive page title.
- Meta description.
- Open Graph metadata.
- X card metadata.
- Custom favicon.
- Canonical URL.
- Social sharing preview image.

### 4.8 Responsive Design

The application must support:

- Mobile phones.
- Tablets.
- Laptops.
- Desktop monitors.

No horizontal overflow should occur at supported viewport sizes.

### 4.9 Animations

- Subtle entrance animations.
- Button hover and press transitions.
- Project card hover effects.
- Social icon hover effects.
- Reduced-motion support.

No full-page loading spinner or artificial loading delay.

## 5. Technology Stack

- React
- JavaScript
- Vite
- External CSS
- Lucide React or lightweight SVG icons
- Vercel
- Vercel Web Analytics
- Vercel Speed Insights
- GitHub

## 6. Non-Functional Requirements

### Performance

- Target Lighthouse performance score: 95 or higher.
- Target initial compressed transfer size: below 200 KB.
- Target Largest Contentful Paint: below 1.5 seconds under favorable test conditions.
- Optimized image formats.
- Minimal JavaScript dependencies.
- No unnecessary network requests.

### Accessibility

- Semantic HTML.
- Keyboard navigation.
- Visible focus indicators.
- Accessible link labels.
- Appropriate color contrast.
- Reduced-motion support.

### Maintainability

- Reusable React components.
- Centralized project and social link configuration.
- External CSS files.
- Consistent naming conventions.
- Clear project documentation.

### Privacy and Security

- No unnecessary personal data collection.
- No exposed API secrets.
- HTTPS deployment.
- Privacy-friendly analytics.
- No private contact information in the public repository.

## 7. Out of Scope

- Backend server.
- Database.
- Authentication.
- Admin dashboard.
- Blog.
- Dark/light theme switcher.
- Live GitHub statistics.
- Contact form.
- Full-page loading screen.
- Complex animations.
- Tailwind CSS.
- React Router.
- Redux.

## 8. Future Enhancements

- Blog and technical articles.
- Project case studies.
- Additional project categories.
- Automated project metadata.
- Enhanced analytics reporting.

Future enhancements must not compromise the application's performance or simplicity.

## 9. Acceptance Criteria

The MVP is complete when:

- All portfolio sections are implemented.
- The website works across mobile and desktop devices.
- Resume, project and social links function correctly.
- Vercel Web Analytics and Speed Insights are integrated.
- Custom click tracking remains deferred on the free Vercel plan.
- SEO metadata and social previews are configured.
- Accessibility checks are completed.
- Performance targets are evaluated using Lighthouse.
- The production website is successfully deployed.

## 10. Engineering Principles

- Simplicity over complexity.
- Performance over unnecessary visual effects.
- Accessibility by default.
- Privacy-conscious analytics.
- Maintainability over premature abstraction.
- Minimal dependencies.
- Mobile-first development.