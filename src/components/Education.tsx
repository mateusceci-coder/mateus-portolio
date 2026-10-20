import { education, ui } from '../content'
import { useLang } from '../i18n'
import { Section } from './Section'

export function Education() {
  const { t } = useLang()
  return (
    <Section id="education" title={t(ui.nav.education)}>
      <ol className="space-y-12 border-l border-line pl-7 sm:pl-9">
        {education.map((item) => (
          <li key={item.years} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[calc(1.75rem+5px)] size-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[calc(2.25rem+5px)]"
            />
            <p className="font-mono text-xs text-muted">{item.years}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight font-stretch-semi-expanded">{t(item.degree)}</h3>
            <p className="mt-1 text-sm text-muted">
              {t(item.kind)} · {t(item.school)}
            </p>
            <p className="mt-3 max-w-[60ch] leading-relaxed text-muted">{t(item.note)}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
