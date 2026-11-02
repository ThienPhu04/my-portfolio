import { ExternalLink, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Project } from '../../data/content'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    closeButtonRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <article className={`project project-${index}`}>
      <div className="project-image"><div className="project-art"><span>{project.mark}</span><i></i><i></i><i></i></div><p>{project.category}</p></div>
      <div className="project-content">
        <p className="project-number">{String(index + 1).padStart(2, '0')} — {project.year}</p>
        <h3>{project.name}</h3><p>{project.description}</p>
        <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-links">
          <button type="button" onClick={() => setIsOpen(true)}>View details <span aria-hidden="true">↗</span></button>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} aria-hidden="true" /></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} aria-hidden="true" /></a>}
        </div>
      </div>
      {isOpen && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby={`project-title-${index}`} onMouseDown={(event) => event.stopPropagation()}>
            <button ref={closeButtonRef} className="dialog-close" onClick={() => setIsOpen(false)} aria-label={`Close ${project.name} details`}><X size={18} /></button>
            <p className="project-number">{project.category} — {project.year}</p>
            <h3 id={`project-title-${index}`}>{project.name}</h3>
            <p>{project.detail}</p>
            <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
      )}
    </article>
  )
}
