import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ui, type Lang, type Localized } from './content'
import { withViewTransition } from './transition'

type LangContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (text: Localized) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // theme-init.js already picked the language (saved choice or browser language).
  const [lang, setLangState] = useState<Lang>(() =>
    document.documentElement.lang.startsWith('pt') ? 'pt' : 'en',
  )

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = ui.meta.title[lang]
  }, [lang])

  const setLang = (next: Lang) => {
    try {
      localStorage.setItem('lang', next)
    } catch {
      // Storage can be blocked (private mode); the switch still works for this visit.
    }
    withViewTransition(() => setLangState(next))
  }

  return <LangContext value={{ lang, setLang, t: (text) => text[lang] }}>{children}</LangContext>
}

export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang must be used inside LanguageProvider')
  return value
}
