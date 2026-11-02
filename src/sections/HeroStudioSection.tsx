import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import heroAsset from '../assets/hero.png'

type Props = { onNavigate: (id: string) => void }

export function HeroStudioSection({ onNavigate }: Props) {
  return (
    <section id="introduction" className="nova-hero" aria-labelledby="hero-title">
      <motion.div className="nova-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: 'easeOut' }}>
        <p className="nova-kicker">Engineering / design / systems</p>
        <h1 id="hero-title">Digital products<br />for ambitious <em>ideas.</em></h1>
        <p>I turn complex problems into clear, responsive experiences—across web, mobile, and the systems behind them.</p>
        <div className="nova-actions">
          <button className="nova-primary" onClick={() => onNavigate('projects')}>View selected work <ArrowUpRight size={17} aria-hidden="true" /></button>
          <button className="nova-secondary" onClick={() => onNavigate('contact')}>Start a project</button>
        </div>
      </motion.div>
      <motion.div className="nova-portrait" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12, ease: 'easeOut' }} aria-hidden="true">
        <span className="nova-orbit orbit-a" /><span className="nova-orbit orbit-b" />
        <img src={heroAsset} alt="" />
        <p>THIEN PHU / 2026</p>
      </motion.div>
    </section>
  )
}
