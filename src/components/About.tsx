import { ui } from '../content'
import { useLang } from '../i18n'
import { Section } from './Section'

export function About() {
  const { t } = useLang()
  const [lede, ...rest] = ui.about.paragraphs
  return (
    <Section id="about" title={t(ui.nav.about)}>
      <div className="max-w-[62ch] space-y-5 text-[1.0625rem] leading-relaxed text-muted">
        <p className="text-xl leading-normal text-ink sm:text-[1.375rem]">{t(lede)}</p>
        {rest.map((paragraph, i) => (
          <p key={i}>{t(paragraph)}</p>
        ))}
      </div>
    </Section>
  )
}
