import { ProjectCard } from './ProjectCard.jsx'

export function Projects({ projects }) {
  return (
    <section className="section projects entrance" aria-labelledby="projects-heading">
      <h2 className="section__heading" id="projects-heading">
        {projects.heading}
      </h2>
      <div className="projects__list">
        {projects.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
