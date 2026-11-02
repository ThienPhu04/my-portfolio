import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { navigation } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroStudioSection } from './sections/HeroStudioSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { TechnologiesSection } from './sections/TechnologiesSection'
import './App.css'
import './redesign.css'
import './nova.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(navigation.map(({ id }) => id))

  const scrollToSection = (id: string, behavior: ScrollBehavior = 'smooth') => {
    document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
  }

  const navigate = (id: string) => {
    scrollToSection(id)
    window.history.pushState(null, '', `#${id}`)
    setMenuOpen(false)
  }

  useEffect(() => {
    const scrollFromHash = () => {
      const id = window.location.hash.slice(1)
      if (navigation.some((item) => item.id === id)) window.setTimeout(() => scrollToSection(id, 'auto'), 0)
    }
    scrollFromHash()
    window.addEventListener('popstate', scrollFromHash)
    return () => window.removeEventListener('popstate', scrollFromHash)
  }, [])

  return (
    <main id="main-content">
      <a className="skip-link" href="#introduction">Skip to content</a>
      <Header active={activeSection} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} onNavigate={navigate} />
      <HeroStudioSection onNavigate={navigate} />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer onNavigate={navigate} />
    </main>
  )
}

export default App
