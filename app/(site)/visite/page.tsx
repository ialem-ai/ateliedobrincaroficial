import { MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { Agendar } from '@/components/atelie/agendar'
import { Container } from '@/components/ui/container'
import { addressLine, site } from '@/config/site'
import { visite } from '@/lib/content/copy'

export const metadata: Metadata = {
  title: visite.meta.title,
  description: visite.meta.description,
  alternates: { canonical: '/visite' },
}

/*
 * 01 abertura + endereço   E16  NAP em texto + link de rota, sem iframe
 * 02 datas                 E08  linha do tempo curta: 5/10 e 10/10
 * 03 formulário            E17
 */
export default function VisitePage() {
  return (
    <>
      <section className="pt-10 pb-12 md:pt-16 md:pb-16">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-display max-w-[10ch]">{visite.hero.titulo}</h1>
            <p className="mt-6 max-w-[42ch] text-[var(--color-ink-soft)] text-lg md:text-xl">
              {visite.hero.apoio}
            </p>
          </div>
          <address className="self-end rounded-[var(--radius-card)] bg-[var(--color-ceu)] p-7 text-[var(--color-ink)] not-italic md:col-span-5 md:p-9">
            <p className="text-label">Nova unidade</p>
            <p className="mt-4 flex gap-2 font-bold text-xl">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0" />
              <span>
                {addressLine}
                <br />
                CEP {site.address.zip}
              </span>
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 flex min-h-[44px] items-center gap-2 font-bold text-lg"
            >
              <Phone aria-hidden className="size-5" />
              {site.phone}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center font-extrabold underline decoration-[3px] underline-offset-[6px]"
            >
              Como chegar
            </a>
          </address>
        </Container>
      </section>

      <section className="pb-16 md:pb-20">
        <Container>
          <ol className="relative ml-3 border-[var(--color-violeta)] border-l-[3px] border-dashed pl-8 md:ml-4">
            {visite.datas.map((d) => (
              <li key={d.data} className="relative pb-8 last:pb-0">
                <span
                  aria-hidden
                  className="absolute top-1 -left-[47px] size-6 rounded-full border-4 border-[var(--color-talco)] bg-[var(--color-magenta)]"
                />
                <p className="font-extrabold text-2xl text-[var(--color-violeta)] md:text-3xl">
                  {d.data}
                </p>
                <p className="mt-1 text-lg">{d.texto}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Agendar origem="visite" />
    </>
  )
}
