import { Fragment, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Mail } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { profile, ui } from '../content'
import { useLang } from '../i18n'
import { BrandIcon, linkedinPath } from './icons'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { lang, t } = useLang()
  // Footnote currently hovered, in the headline or in the list: both highlight together.
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <div aria-hidden="true" className="hero-glow absolute -top-72 -left-48 size-[46rem] rounded-full" />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-44 sm:pb-28">
        <motion.div
          className="flex items-center gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {profile.photo ? (
            <img
              src={profile.photo}
              alt=""
              className="size-16 rounded-2xl border border-line object-cover sm:size-20"
            />
          ) : (
            <span
              aria-hidden="true"
              className="grid size-12 place-items-center rounded-xl border border-line bg-surface font-mono text-sm font-medium text-accent"
            >
              MC
            </span>
          )}
          <div>
            <h1 className="text-lg leading-tight font-semibold font-stretch-semi-expanded sm:text-xl">
              {profile.name}
            </h1>
            <p className="mt-1 font-mono text-xs tracking-[0.12em] text-muted uppercase">{t(ui.hero.role)}</p>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 max-w-[19ch] text-[clamp(2.35rem,1rem+5.4vw,5.25rem)] leading-[1.04] font-semibold tracking-[-0.035em] text-pretty font-stretch-semi-expanded"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {ui.hero.headline[lang].map((part, i) =>
            typeof part === 'string' ? (
              <Fragment key={i}>{part}</Fragment>
            ) : (
              <span
                key={i}
                onMouseEnter={() => setActive(part.note)}
                onMouseLeave={() => setActive(null)}
                className={`whitespace-nowrap underline decoration-2 underline-offset-[0.14em] transition-[text-decoration-color] duration-300 ${active === part.note ? 'decoration-accent' : 'decoration-transparent'}`}
              >
                {part.text}
                <sup className="relative -top-[1.5em] ml-[0.12em] align-baseline font-mono text-[0.3em] font-medium tracking-normal text-accent">
                  {part.note}
                </sup>
              </span>
            ),
          )}
          <span
            aria-hidden="true"
            className="cursor ml-[0.1em] inline-block h-[0.74em] w-[0.36em] translate-y-[0.05em] bg-accent"
          />
        </motion.p>

        <ol className="mt-8 space-y-1.5 font-mono text-[0.8125rem] text-muted sm:text-sm">
          {ui.hero.footnotes.map((note, i) => (
            <motion.li
              key={i}
              onMouseEnter={() => setActive(i + 1)}
              onMouseLeave={() => setActive(null)}
              className={`flex gap-3 transition-colors duration-300 ${active === i + 1 ? 'text-ink' : ''}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.12, ease }}
            >
              <span className="text-accent">{i + 1}</span>
              <span>{t(note)}</span>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95, ease }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          >
            {t(ui.hero.contact)}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-line bg-surface/70 px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
          >
            {t(ui.hero.project)}
          </a>
          <span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-line sm:block" />
          <ul className="flex items-center">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-ink"
              >
                <BrandIcon path={siGithub.path} className="size-[1.125rem]" />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-ink"
              >
                <BrandIcon path={linkedinPath} className="size-[1.125rem]" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label={profile.email}
                className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-ink"
              >
                <Mail className="size-[1.125rem]" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
