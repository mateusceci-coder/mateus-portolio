import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { certificates, profile, ui } from '../content'
import { useLang } from '../i18n'
import { Section } from './Section'

/** Each certificate is laid out like a certificate viewer: subject on top, fields below. */
export function Certificates() {
  const { t } = useLang()
  return (
    <Section id="certificates" title={t(ui.nav.certificates)}>
      <ul className="grid gap-6 xl:grid-cols-2">
        {certificates.map((cert) => (
          <li key={cert.name} className="rounded-2xl border border-line bg-surface">
            <div className="flex gap-4 p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight font-stretch-semi-expanded">{cert.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t(cert.summary)}</p>
              </div>
            </div>
            <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-8 gap-y-2 border-t border-dashed border-line px-6 py-5 font-mono text-[0.8125rem]">
              <dt className="text-muted">{t(ui.certificates.issuedBy)}</dt>
              <dd>{cert.issuer}</dd>
              <dt className="text-muted">{t(ui.certificates.holder)}</dt>
              <dd>{profile.name}</dd>
              <dt className="text-muted">{t(ui.certificates.valid)}</dt>
              <dd>
                {t(cert.issued)} → {t(cert.expires)}
              </dd>
            </dl>
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-t border-line px-6 py-4 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
              >
                {t(ui.certificates.verify)}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
