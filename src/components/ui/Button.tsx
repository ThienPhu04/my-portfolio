import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; variant?: 'primary' | 'text' }
export function Button({ children, variant = 'primary', className = '', ...props }: Props) {
  return <button className={`${variant === 'primary' ? 'button primary' : 'text-button'} ${className}`} {...props}>{children}</button>
}
