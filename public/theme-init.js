// Runs before React so the page never flashes the wrong theme or language.
// Kept as a file (not inline) so the Content-Security-Policy can forbid inline scripts.
;(function () {
  var root = document.documentElement
  var theme, lang
  try {
    theme = localStorage.getItem('theme')
    lang = localStorage.getItem('lang')
  } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  if (lang !== 'pt' && lang !== 'en') {
    lang = /^pt\b/i.test(navigator.language) ? 'pt' : 'en'
  }
  root.classList.toggle('dark', theme === 'dark')
  root.lang = lang === 'pt' ? 'pt-BR' : 'en'
})()
