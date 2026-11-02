import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-38% 0px -55% 0px' },
    )
    ids.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [ids])

  return activeSection
}
