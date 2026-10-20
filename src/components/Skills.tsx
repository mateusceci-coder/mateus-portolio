import { skillGroups, ui } from '../content'
import { useLang } from '../i18n'
import { Chip, skillName } from './Chip'
import { Section } from './Section'

export function Skills() {
  const { t } = useLang()
  return (
    <Section id="skills" title={t(ui.nav.skills)}>
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title.en}>
            <h3 className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{t(group.title)}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Chip key={skillName(skill)} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-12 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-6 text-sm">
        <span className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{t(ui.skills.spokenTitle)}</span>
        <span>{t(ui.skills.spoken)}</span>
      </p>
    </Section>
  )
}
