import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { ui, type Media } from '../content'
import { useLang } from '../i18n'

/** Main viewer with thumbnails below; opens a fullscreen lightbox. Supports images, GIFs and videos. */
export function Gallery({ media }: { media: Media[] }) {
  const { t } = useLang()
  const [index, setIndex] = useState(0)
  // The lightbox content only renders while open, so a video never plays hidden.
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const current = media[index]
  const go = (step: number) => setIndex((i) => (i + step + media.length) % media.length)
  const open = () => {
    setIsOpen(true)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()

  return (
    <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
      <div className="group relative overflow-hidden rounded-2xl bg-stage">
        <MediaView
          key={current.src}
          item={current}
          onClick={open}
          className="aspect-[16/10] w-full cursor-zoom-in object-contain"
        />
        <button
          type="button"
          onClick={open}
          aria-label={t(ui.projects.expand)}
          className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-black/55 text-white backdrop-blur transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
        >
          <Maximize2 className="size-4" aria-hidden="true" />
        </button>
      </div>

      {media.length > 1 && (
        <ul className="mt-3 grid auto-cols-[minmax(4.5rem,1fr)] grid-flow-col gap-2 overflow-x-auto p-0.5">
          {media.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={t(item.alt)}
                aria-current={i === index}
                className={`block w-full overflow-hidden rounded-lg bg-stage ring-2 transition ${i === index ? 'opacity-100 ring-accent' : 'opacity-55 ring-transparent hover:opacity-90'}`}
              >
                {item.type === 'video' && !item.poster ? (
                  <video src={item.src} muted preload="metadata" className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <img
                    src={item.poster ?? item.src}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        aria-label={t(current.alt)}
        onClose={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(1)
          if (e.key === 'ArrowLeft') go(-1)
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-white"
      >
        {isOpen && (
        <div
          onClick={(e) => e.target === e.currentTarget && close()}
          className="flex h-full flex-col items-center justify-center gap-4 px-4 py-16 sm:px-20"
        >
          <button
            type="button"
            onClick={close}
            aria-label={t(ui.projects.close)}
            className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <MediaView key={current.src} item={current} className="min-h-0 w-full flex-1 object-contain" />
          <p className="max-w-prose text-center text-sm text-white/80">
            <span className="mr-3 font-mono text-white/50">
              {index + 1} / {media.length}
            </span>
            {t(current.alt)}
          </p>
          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t(ui.projects.previous)}
                className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 max-sm:top-auto max-sm:bottom-4 max-sm:translate-y-0"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t(ui.projects.next)}
                className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 max-sm:top-auto max-sm:bottom-4 max-sm:translate-y-0"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        )}
      </dialog>
    </div>
  )
}

function MediaView({ item, className, onClick }: { item: Media; className: string; onClick?: () => void }) {
  const { t } = useLang()
  const reduceMotion = useReducedMotion()
  const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.25 } }

  if (item.type === 'video') {
    // With reduced motion, videos wait for the visitor to press play.
    return (
      <motion.video
        {...fade}
        src={item.src}
        poster={item.poster}
        aria-label={t(item.alt)}
        autoPlay={!reduceMotion}
        controls={!!reduceMotion}
        muted
        loop
        playsInline
        onClick={reduceMotion ? undefined : onClick}
        className={className}
      />
    )
  }
  return <motion.img {...fade} src={item.src} alt={t(item.alt)} onClick={onClick} className={className} />
}
