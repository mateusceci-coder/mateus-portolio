import { profile, ui } from '../content'
import { useLang } from '../i18n'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-8 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{t(ui.footer.builtWith)}</p>
      </div>
    </footer>
  )
}
