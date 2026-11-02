# Thien Phu — Portfolio

A premium, responsive personal portfolio for a software engineer and creative developer. It uses editable content, accessible hash navigation, Motion/GSAP effects, and a lazy-loaded React Three Fiber hero scene.

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, Motion, GSAP ScrollTrigger, Three.js / React Three Fiber / Drei, Lucide React, and optional EmailJS delivery.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

The build performs TypeScript project checking and creates the production output in `dist`.

## Customize

All portfolio content is separated from layout components:

- Update identity, email, social URLs, projects, skills, about copy, and timeline records in `src/data/content.ts`.
- Update navigation labels and section IDs in `src/data/navigation.ts`.
- `github` and `demo` project URLs are optional; only real configured URLs are rendered.

Before publishing, replace the marked editable email, social URL values, and experience entries with real details.

## EmailJS

1. Copy `.env.example` to `.env.local`.
2. Add EmailJS service ID, template ID, and public key.
3. Map `from_name`, `reply_to`, `subject`, and `message` in the EmailJS template.
4. Restart Vite.

The form includes browser validation, a honeypot, loading state, and accessible status feedback. Until EmailJS is configured, it safely directs visitors to the email link. For production-grade spam prevention, use a server-side endpoint with rate limiting and/or CAPTCHA.

## Vercel deployment

Import the repository in Vercel. Vite is auto-detected; use `npm run build` and output directory `dist`. Add the `VITE_EMAILJS_*` variables in Vercel Environment Variables if EmailJS delivery is enabled.
