import type { Skill } from '../content'
import { useLang } from '../i18n'
import { BrandIcon } from './icons'

export function skillName(skill: Skill) {
  return typeof skill.name === 'string' ? skill.name : skill.name.en
}

export function Chip({ skill }: { skill: Skill }) {
  const { t } = useLang()
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm">
      {skill.icon && <BrandIcon path={skill.icon.path} className="size-3.5 shrink-0 text-muted" />}
      {typeof skill.name === 'string' ? skill.name : t(skill.name)}
    </li>
  )
}
