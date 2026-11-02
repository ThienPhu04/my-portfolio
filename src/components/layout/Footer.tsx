import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/content'

const copyrightYear = new Date().getFullYear()

type Props = { onNavigate: (id: string) => void }

export function Footer({ onNavigate }: Props) {
  return (
    <footer>
      <button className="brand" onClick={() => onNavigate('introduction')} aria-label="Back to introduction">
        <i>{profile.monogram}</i><span>{profile.name}</span>
      </button>
      <p>© {copyrightYear} — Built with intent.</p>
      <button className="top" onClick={() => onNavigate('introduction')}>Back to top <ArrowUp size={14} aria-hidden="true" /></button>
    </footer>
  )
}
