import type { ReactNode } from 'react'

type Props = { number: string; label: string; title: ReactNode; description: string }
export function SectionTitle({ number, label, title, description }: Props) {
  return <><div className="section-kicker"><span>{number}</span><p>{label}</p></div><div className="title-row"><h2>{title}</h2><p>{description}</p></div></>
}
