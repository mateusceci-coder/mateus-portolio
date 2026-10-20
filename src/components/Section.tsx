import type { ReactNode } from 'react'
import { motion } from 'motion/react'

/** Page section: title on the left on large screens (or on top when `wide`), content fades in on scroll. */
export function Section({
  id,
  title,
  wide = false,
  children,
}: {
  id: string
  title: string
  wide?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line">
      <div
        className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${wide ? '' : 'lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16'}`}
      >
        <h2
          id={`${id}-title`}
          className="text-[1.75rem] leading-tight font-semibold tracking-tight font-stretch-semi-expanded sm:text-3xl lg:sticky lg:top-28 lg:self-start"
        >
          {title}
        </h2>
        <motion.div
          className={wide ? 'mt-10' : 'mt-8 lg:mt-1'}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
