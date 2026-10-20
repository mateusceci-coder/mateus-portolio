import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import { App } from './App'
import { LanguageProvider } from './i18n'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MotionConfig>
  </StrictMode>,
)
