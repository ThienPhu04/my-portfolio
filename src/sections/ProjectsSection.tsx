import { ProjectCard } from '../components/ui/ProjectCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { projects } from '../data/projects'
export function ProjectsSection() { return <section id="projects" className="projects section"><SectionTitle number="02" label="SELECTED WORK" title={<>Things I’ve<br /><em>made.</em></>} description="A small selection of product-minded engineering work across mobile, web, and intelligent systems." /><div className="project-list">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div></section> }
