import { Menu, Send, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { profile } from '../../data/content'

type Props = { active: string; menuOpen: boolean; onMenuToggle: () => void; onNavigate: (id: string) => void }

export function Header({ active, menuOpen, onMenuToggle, onNavigate }: Props) {
  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate('introduction')} aria-label="Back to introduction">
        <i>{profile.monogram}</i><span>{profile.name}</span>
      </button>
      <button className="menu-button" onClick={onMenuToggle} aria-expanded={menuOpen} aria-controls="site-nav">
        {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
      </button>
      <nav id="site-nav" className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
        {navigation.map(({ id, label }) => (
          <button key={id} onClick={() => onNavigate(id)} className={active === id ? 'active' : ''} aria-current={active === id ? 'page' : undefined}>
            {label}
          </button>
        ))}
      </nav>
      <button className="availability" onClick={() => onNavigate('contact')}>
        <b></b>{profile.availability}<Send size={12} aria-hidden="true" />
      </button>
    </header>
  )
}
