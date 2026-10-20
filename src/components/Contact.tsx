import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { profile, ui } from '../content'
import { useLang } from '../i18n'
import { BrandIcon, linkedinPath } from './icons'
import { Section } from './Section'

export function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Section id="contact" title={t(ui.nav.contact)}>
      <p className="text-[clamp(2rem,1.2rem+3vw,3.25rem)] leading-tight font-semibold tracking-[-0.03em] font-stretch-semi-expanded">
        {t(ui.contact.heading)}
      </p>
      <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">{t(ui.contact.text)}</p>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-lg break-all underline decoration-accent/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-xl"
        >
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          {copied ? <Check className="size-3.5 text-accent" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
          <span aria-live="polite">{t(copied ? ui.contact.copied : ui.contact.copy)}</span>
        </button>
      </div>

      <ul className="mt-8 flex flex-wrap gap-3">
        {[
          { label: 'LinkedIn', href: profile.linkedin, path: linkedinPath },
          { label: 'GitHub', href: profile.github, path: siGithub.path },
        ].map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-muted"
            >
              <BrandIcon path={link.path} className="size-4" />
              {link.label}
              <ArrowUpRight className="size-3.5 text-muted" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
