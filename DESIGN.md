# Design Specification

## 1. Design Philosophy

The portfolio should feel minimal, modern, professional and personal.

Design inspirations:
- Linear
- Vercel
- Linktree

Core principles:
- Content-first design.
- Monochrome visual identity.
- Clear visual hierarchy.
- Generous whitespace.
- Mobile-first responsiveness.
- Subtle interactions.
- Performance-first implementation.

## 2. Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | #101010 | Page background |
| Surface | #1B1B1B | Project cards |
| Surface Hover | #242424 | Interactive surfaces |
| Border | #303030 | Card borders |
| Primary Text | #FAFAFA | Headings |
| Secondary Text | #A3A3A3 | Descriptions |
| Primary Button | #FAFAFA | Resume button |
| Button Text | #101010 | Primary button text |
| Focus | #93C5FD | Keyboard focus indicator |

The website will use a permanent dark theme.

## 3. Typography

Font family:
- System font stack.
- No external font requests.

Typography scale:
- Name: 32px, weight 700.
- Professional title: 15px, weight 500.
- Section headings: 12px, weight 600.
- Project titles: 16px, weight 600.
- Descriptions: 14px, weight 400.
- Footer: 12px, weight 400.

Use responsive typography where necessary.

## 4. Layout

- Single-column layout.
- Horizontally centered container.
- Maximum content width: 640px.
- Minimum horizontal page padding: 20px.
- Desktop top spacing: 64px.
- Mobile top spacing: 40px.
- Natural vertical scrolling.
- No fixed navigation bar.
- No horizontal overflow.

## 5. Page Sections

### 5.1 Profile

- Centered profile photograph.
- Rounded-square image.
- Image dimensions: approximately 112 × 112px.
- Border radius: 16px.
- Thin neutral border.
- Optimized WebP image.
- Full name.
- Professional title.
- Short personal introduction.

Suggested title:
Full-stack & AI Developer

Suggested introduction:
Building software, exploring AI, and turning ideas into reality.

### 5.2 Resume

- Full-width primary button.
- White background.
- Dark text.
- Document icon on the left.
- External-link arrow on the right.
- Minimum height: 48px.
- Border radius: 10px.
- Google Docs resume opens on demand in a new tab.

### 5.3 Featured Projects

- Section heading.
- Vertically stacked project cards.
- Dark surface background.
- Subtle border.
- Border radius: 12px.
- Internal padding: 16px.
- Project name and description.
- Technology stack labels.
- Optional project status.
- GitHub and live demo links where available.

Initial projects:
- IBDB.
- ChatPersona.
- Countdown to Secret Wars.

Unfinished projects must be clearly marked as in development. Unavailable links must not be displayed.

### 5.4 Social Links

- GitHub.
- X.
- LinkedIn.
- Centered horizontal icon layout.
- Accessible labels.
- Minimum interactive target size: 44px.
- No duplicate social buttons.

### 5.5 Contact

- Professional contact link.
- Copy email button.
- Temporary confirmation after copying.
- No contact form.
- No private personal contact details.

### 5.6 Footer

- Minimal muted text.
- Optional copyright year.
- No unnecessary branding or decorative elements.

## 6. Spacing System

Use a consistent spacing scale:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px

## 7. Responsive Breakpoints

- Mobile: below 480px.
- Tablet: 480px to 767px.
- Desktop: 768px and above.

The layout remains single-column across all screen sizes.

Use fluid widths and a maximum-width container rather than separate mobile and desktop layouts.

## 8. Animations and Interactions

- Profile entrance: 300ms.
- Project card entrance: 250ms.
- Button hover: 150ms.
- Button press: 100ms.
- Social icon hover: 150ms.

Use CSS transitions and keyframes.

Animations must not block content or delay interaction.

Respect prefers-reduced-motion.

No loading spinner.
No artificial loading delay.
No animation libraries.

## 9. Accessibility

- Semantic HTML elements.
- Visible keyboard focus states.
- Accessible icon labels.
- Sufficient color contrast.
- Descriptive image alternative text.
- Keyboard-accessible interactions.
- Minimum 44px interactive touch targets.

## 10. Asset Guidelines

- Profile image: WebP, preferably below 50 KB.
- Icons: lightweight SVG.
- Favicon: SVG.
- Social preview image: 1200 × 630px.
- Avoid unnecessary decorative images.
- Avoid externally hosted fonts.

## 11. Design Restrictions

Do not introduce:
- Excessive gradients.
- Glassmorphism.
- Animated particles.
- Background videos.
- Skill progress bars.
- Carousels.
- Full-page loading screens.
- Heavy UI libraries.
- Tailwind CSS.

## 12. Definition of Done

- Consistent monochrome visual identity.
- Responsive layout across mobile, tablet and desktop.
- All links and interactions functional.
- No horizontal overflow.
- Accessible keyboard navigation.
- Smooth, non-blocking animations.
- Optimized visual assets.
- Production-ready design.