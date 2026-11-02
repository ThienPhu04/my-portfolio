import { SectionTitle } from '../components/ui/SectionTitle'
const technologies = [
  ['React', 'react', '61DAFB'], ['TypeScript', 'typescript', '3178C6'], ['JavaScript', 'javascript', 'F7DF1E'],
  ['Tailwind CSS', 'tailwindcss', '06B6D4'], ['Flutter', 'flutter', '02569B'], ['Node.js', 'nodedotjs', '339933'],
  ['Supabase', 'supabase', '3ECF8E'], ['MongoDB', 'mongodb', '47A248'],
  ['Figma', 'figma', 'F24E1E'], ['Git', 'git', 'F05032'],
] as const

function TechItems({ hidden = false }: { hidden?: boolean }) {
  return <>{technologies.map(([name, icon, color]) => <li className="tech-item" key={name} aria-hidden={hidden || undefined}><img src={`https://cdn.simpleicons.org/${icon}/${color}`} alt="" width="28" height="28" loading="lazy" /><span>{name}</span></li>)}</>
}

export function TechnologiesSection() {
  return <section id="technologies" className="skills section"><SectionTitle number="03" label="TOOLKIT / CAPABILITIES" title={<>Tools I use<br />to <em>build.</em></>} description="A focused stack for turning ideas into reliable, polished products." /><div className="tech-marquee" aria-label="Technology stack, continuously moving from right to left."><ul className="tech-track"><TechItems /><TechItems hidden /><TechItems hidden /></ul></div></section>
}
