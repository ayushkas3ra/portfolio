function BrandIcon({ name }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.04-1.14 3.04-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    )
  }

  if (name === 'x') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.4L5.58 22H2.45l7.25-8.29L1.8 2h6.4l4.43 6.96L18.9 2Zm-1.1 17.9h1.73L7.28 3.98H5.42L17.8 19.9Z"
        />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.93H4.96V9.36h2.97v9.57ZM6.45 8.05a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.57 10.88h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.56 0-1.8 1.21-1.8 2.46v4.73H9.73V9.36h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.58 1.98 3.58 4.55v5.26Z"
        />
      </svg>
    )
  }

  return null
}

export function SocialLinks({ links }) {
  const availableLinks = links.filter(
    (link) => typeof link.href === 'string' && link.href.trim().length > 0,
  )

  if (availableLinks.length === 0) {
    return null
  }

  return (
    <nav className="social-links entrance" aria-label="Social profiles">
      {availableLinks.map((link) => (
        <a
          className="social-links__item"
          href={link.href}
          key={link.label}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          <BrandIcon name={link.icon} />
        </a>
      ))}
    </nav>
  )
}
