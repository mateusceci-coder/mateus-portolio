import type { PointerEvent } from 'react'
import { Lock } from 'lucide-react'
import { projects, ui, type Project } from '../content'
import { useLang } from '../i18n'
import { Chip, skillName } from './Chip'
import { Gallery } from './Gallery'
import { Section } from './Section'

export function Projects() {
  const { t } = useLang()
  return (
    <Section id="projects" title={t(ui.projects.title)} wide>
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}

function ProjectShowcase({ project }: { project: Project }) {
  const { t } = useLang()

  // Feeds the pointer position to the .spotlight glow.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <article
      onPointerMove={onPointerMove}
      className="spotlight relative rounded-3xl border border-line bg-surface p-3 sm:p-5 lg:p-6"
    >
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-10">
        <Gallery media={project.media} />

        <div className="px-2 pb-3 sm:px-1 lg:py-1 lg:pr-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-2xl font-semibold tracking-tight font-stretch-semi-expanded">{project.title}</h3>
            {project.isPrivate && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-2.5 py-1 font-mono text-[0.6875rem] text-amber">
                <Lock className="size-3" aria-hidden="true" />
                {t(ui.projects.private)}
              </span>
            )}
          </div>
          <p className="mt-4 leading-relaxed text-muted">{t(project.summary)}</p>

          <h4 className="mt-7 font-mono text-xs tracking-[0.12em] text-muted uppercase">
            {t(ui.projects.highlights)}
          </h4>
          <ul className="mt-3 space-y-2.5 text-[0.9375rem] leading-relaxed">
            {project.highlights.map((highlight) => (
              <li key={highlight.en} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-accent" />
                <span>{t(highlight)}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-7 font-mono text-xs tracking-[0.12em] text-muted uppercase">{t(ui.projects.stack)}</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((skill) => (
              <Chip key={skillName(skill)} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
