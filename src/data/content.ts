export type Project = {
  name: string
  mark: string
  category: string
  year: string
  description: string
  detail: string
  stack: string[]
  github?: string
  demo?: string
}

export const profile = {
  name: 'THIEN PHU',
  monogram: 'TV',
  email: 'your.email@example.com',
  availability: 'Available for work',
  socialLinks: [
    // Add complete, real URLs before publishing.
    { label: 'GitHub', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'Freelancer', url: '' },
  ],
} as const

export const projects: Project[] = [
  {
    name: 'SMART Rescue', mark: 'S R', category: 'MOBILE / AI SAFETY', year: '2025',
    description: 'A safety-focused mobile system exploring AI-based fall detection and responsive emergency workflows.',
    detail: 'A mobile-first concept combining a React Native client with NestJS and FastAPI services. The project explores how event detection, alerts, and dependable data handling can support a safety-critical experience.',
    stack: ['React Native', 'NestJS', 'FastAPI', 'MongoDB', 'Redis'],
  },
  {
    name: 'Booking Gym', mark: 'B G', category: 'MOBILE / OPERATIONS', year: '2025',
    description: 'A gym membership and booking management experience designed around straightforward daily operations.',
    detail: 'A Flutter application focused on a clear membership and booking flow. Supabase provides the backend foundation, while Riverpod and GoRouter keep state and navigation deliberate and maintainable.',
    stack: ['Flutter', 'Supabase', 'Riverpod', 'GoRouter'],
  },
  {
    name: 'Personal Portfolio', mark: 'P /', category: 'WEB / CREATIVE DEV', year: '2026',
    description: 'An interactive personal showcase with a focus on typographic rhythm, motion, and thoughtful front-end craft.',
    detail: 'A React and TypeScript portfolio built around accessible interaction, editable content, lightweight WebGL, and a responsive editorial layout. It is designed to showcase product thinking alongside implementation detail.',
    stack: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS'],
  },
]

export const skillGroups = [
  { name: 'FRONTEND', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { name: 'MOBILE', skills: ['Flutter', 'Dart', 'React Native'] },
  { name: 'BACKEND', skills: ['Node.js', 'NestJS', 'FastAPI', 'REST API'] },
  { name: 'DATA', skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis'] },
  { name: 'TOOLS', skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker'] },
  { name: 'DESIGN', skills: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems'] },
] as const

export const experiences = [
  { date: 'NOW', title: 'Independent product development', organization: 'Editable entry', description: 'Replace this with your current role, freelance work, or most relevant active project.', stack: ['Product engineering', 'Design systems'] },
  { date: 'EDUCATION', title: 'Software engineering studies', organization: 'Editable entry', description: 'Add your institution, degree, field of study, and any relevant details here.', stack: ['Computer science', 'Software development'] },
  { date: 'EARLIER', title: 'Experience & learning', organization: 'Editable entry', description: 'Use this space for an internship, professional role, independent work, or meaningful milestone.', stack: ['Add technologies'] },
] as const

export const about = {
  paragraphs: [
    'I’m a software engineer interested in the productive overlap between systems thinking and visual craft. I enjoy working across web, mobile, APIs, and the little interaction details that make software feel alive.',
    'My approach is simple: understand the real problem, build the essential thing well, then keep improving it with care.',
  ],
} as const

export const contactCopy = 'Have a role, collaboration, or idea in mind? I’d love to hear what you’re working on.'

