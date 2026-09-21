import Image from 'next/image'
import { FOTOS_ROTINA } from '@/components/atelie/rotina'
import { Container } from '@/components/ui/container'
import { site } from '@/config/site'
import { home, lp } from '@/lib/content/copy'

// alinha a primeira foto com a margem do Container (1180px + 2.5rem)
const PADDING = 'max(1.5rem, calc((100vw - 1180px) / 2 + 2.5rem))'

/** PROVA · E15 carrossel horizontal com scroll-snap (CSS puro), fotos reais do mês. */
export function Prova() {
  const c = lp.prova
  return (
    <section className="bg-white py-20 md:py-24">
      <Container className="mb-8 grid gap-4 md:mb-10 md:grid-cols-12 md:items-end">
        <h2 className="text-h1 max-w-[14ch] md:col-span-6">{c.titulo}</h2>
        <div className="md:col-span-5 md:col-start-8">
          <p className="text-[var(--color-ink-soft)] text-lg">{c.apoio}</p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-[44px] items-center font-extrabold text-[var(--color-violeta)] underline decoration-[3px] decoration-[var(--color-magenta)] underline-offset-[6px]"
          >
            {home.rotina.instagram}
          </a>
        </div>
      </Container>
      <ul
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
        style={{ paddingInline: PADDING, scrollPaddingInline: PADDING }}
        aria-label="Fotos dos projetos de julho"
      >
        {FOTOS_ROTINA.map((f) => (
          <li key={f.src} className="w-[68vw] max-w-[300px] shrink-0 snap-start">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-media)]">
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                  style={{ objectPosition: f.pos }}
                />
              </div>
              <figcaption className="mt-2 font-bold text-[var(--color-ink-soft)] text-sm">
                {f.legenda}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
