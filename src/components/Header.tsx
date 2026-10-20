import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile, ui, type Lang } from '../content'
import { useLang } from '../i18n'
import { withViewTransition } from '../transition'

const sections = ['about', 'skills', 'projects', 'education', 'certificates', 'contact'] as const
const langs: Lang[] = ['pt', 'en']

export function Header() {
  const { lang, setLang, t } = useLang()
  // theme-init.js already applied the saved (or system) theme to <html>.
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked (private mode); the switch still works for this visit.
    }
    withViewTransition(() => {
      document.documentElement.classList.toggle('dark', next === 'dark')
      setTheme(next)
    })
  }

  // Opaque while the mobile menu is open, so the big hero text never shows through it.
  const surface = menuOpen
    ? 'border-line bg-bg'
    : scrolled
      ? 'border-line bg-bg/80 backdrop-blur-md'
      : 'border-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${surface}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight font-stretch-semi-expanded">
          {profile.name}
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-ink">
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={t(ui.header.language)}
            className="flex rounded-full border border-line p-0.5 font-mono text-xs"
          >
            {langs.map((code) => (
              <button
                key={code}
                type="button"
                lang={code === 'pt' ? 'pt-BR' : 'en'}
                aria-label={ui.header.languageNames[code]}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === code ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t(theme === 'dark' ? ui.header.toLight : ui.header.toDark)}
            className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={t(menuOpen ? ui.header.closeMenu : ui.header.openMenu)}
            className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-ink md:hidden"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)} className="block py-2.5 text-lg">
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
