import { flushSync } from 'react-dom'

/** Runs a visual state change (theme, language) as a crossfade where the browser supports it. */
export function withViewTransition(update: () => void) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduce) {
    update()
    return
  }
  document.startViewTransition(() => flushSync(update))
}
