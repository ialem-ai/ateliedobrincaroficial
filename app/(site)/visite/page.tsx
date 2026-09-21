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
            <p className="text-label">Endereço</p>
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

      <Agendar origem="visite" />
    </>
  )
}
