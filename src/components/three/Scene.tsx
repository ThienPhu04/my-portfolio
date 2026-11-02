import type { ReactNode } from 'react'

export function Scene({ children }: { children: ReactNode }) {
  return <div className="orbital" aria-hidden="true">{children}</div>
}
