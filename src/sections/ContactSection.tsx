import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Send } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { contactCopy, profile } from '../data/content'

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
const isConfigured = Object.values(emailConfig).every(Boolean)

export function ContactSection() {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) { form.reportValidity(); return }
    if (new FormData(form).get('company')) return
    if (!isConfigured) { setMessage('Email delivery is not configured yet. Add VITE_EMAILJS values to .env.local, or use the email link.'); return }

    setIsSending(true)
    setMessage('')
    try {
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, form, { publicKey: emailConfig.publicKey })
      form.reset()
      setMessage('Message sent. I’ll get back to you soon.')
    } catch {
      setMessage('Message could not be sent. Please use the email link instead.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <p className="eyebrow">05 / CONTACT</p><h2 id="contact-heading">Let’s make<br />something <em>useful.</em></h2>
        <p>{contactCopy}</p>
        <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
        <div className="socials">
          {profile.socialLinks.map((link) => link.url ? <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}</a> : <span key={link.label} title="Add your profile URL in src/data/content.ts">{link.label}</span>)}
        </div>
      </div>
      <form onSubmit={submit} noValidate>
        <label>Name<input required name="from_name" placeholder="Your name" autoComplete="name" /></label>
        <label>Email<input required type="email" name="reply_to" placeholder="you@example.com" autoComplete="email" /></label>
        <label>Subject<input required name="subject" placeholder="What’s this about?" /></label>
        <label>Message<textarea required name="message" placeholder="Tell me a little about the project." rows={5} /></label>
        <label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
        <Button type="submit" disabled={isSending}>{isSending ? 'Sending…' : <>Send message <Send size={15} aria-hidden="true" /></>}</Button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
    </section>
  )
}
