import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionTitle } from '../components/ui/SectionTitle'
import { experiences } from '../data/experience'

gsap.registerPlugin(ScrollTrigger)

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const context = gsap.context(() => { gsap.from('.timeline article', { opacity: 0, x: 28, stagger: 0.12, duration: 0.55, scrollTrigger: { trigger: timelineRef.current, start: 'top 78%', once: true } }) }, timelineRef)
    return () => context.revert()
  }, [])
  return <section id="experience" className="experience section"><SectionTitle number="04" label="PATH / EXPERIENCE" title={<>The work<br /><em>in progress.</em></>} description="An editable timeline for education, experience, independent work, and the learning in between." /><div className="timeline" ref={timelineRef}>{experiences.map((item) => <article key={item.title}><p>{item.date}</p><div className="timeline-dot"></div><div><h3>{item.title}</h3><h4>{item.organization}</h4><p>{item.description}</p><small>{item.stack.join(' · ')}</small></div></article>)}</div></section>
}
