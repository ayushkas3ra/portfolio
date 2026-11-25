import { ArrowUpRight } from 'lucide-react'

function RepositoryIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.04-1.14 3.04-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  )
}

export function ProjectCard({ project }) {
  const links = [
    { label: 'Source code', href: project.repositoryUrl, icon: RepositoryIcon },
    { label: 'Live demo', href: project.demoUrl, icon: ArrowUpRight },
  ].filter(
    (link) => typeof link.href === 'string' && link.href.trim().length > 0,
  )

  return (
    <article className="project-card">
      <div className="project-card__heading">
        <h3 className="project-card__title">{project.name}</h3>
        {project.status && (
          <span className="project-card__status">{project.status}</span>
        )}
      </div>
      {project.description && (
        <p className="project-card__description">{project.description}</p>
      )}
      {project.technologies.length > 0 && (
        <ul className="project-card__technologies" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li className="technology-tag" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      )}
      {links.length > 0 && (
        <div className="project-card__links">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Icon aria-hidden="true" size={15} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
