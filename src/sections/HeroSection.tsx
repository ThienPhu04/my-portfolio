import { Button } from '../components/ui/Button'
import { motion } from 'motion/react'
import { lazy, Suspense } from 'react'

const HeroScene = lazy(() => import('../components/three/HeroScene').then(({ HeroScene: Scene }) => ({ default: Scene })))

export function HeroSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  return <section id="introduction" className="hero section"><motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}><p className="eyebrow">Software engineer / creative developer</p><h1>THIEN<br /><em>PHU.</em></h1><p className="intro">Building useful digital products where clear interfaces meet dependable systems.</p><div className="action-row"><Button onClick={() => onNavigate('projects')}>See selected work <span aria-hidden="true">↗</span></Button><Button variant="text" onClick={() => onNavigate('contact')}>Start a conversation <span aria-hidden="true">↗</span></Button></div></motion.div><motion.div className="hero-object" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}><Suspense fallback={<div className="orbital" aria-hidden="true" />}><HeroScene /></Suspense></motion.div><div className="hero-index"><span>Scroll to explore</span><i></i><b>01—05</b></div></section>
}
