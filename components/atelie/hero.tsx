import Image from 'next/image'
import { WordsReveal } from '@/components/effects/words-reveal'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { home } from '@/lib/content/copy'

/**
 * E02 · foto recortada em mancha + chapa de cor deslocada + manchete à esquerda.
 * A foto tem 1440px: exibida a ~560px, fica nítida (design-direction.md § 6).
 */
export function Hero({
  titulo = home.hero.titulo,
  tituloOnda = home.hero.tituloOnda,
  apoio = home.hero.apoio,
  selo = home.hero.selo,
  ctaHref = '#visita',
  ctaLabel = 'Agendar uma visita',
  topo,
}: {
  titulo?: readonly string[]
  tituloOnda?: string
  apoio?: string
  selo?: string
  ctaHref?: string
  ctaLabel?: string
  /** Logo no topo, quando a página não tem header (LP) */
  topo?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24">
      <Container className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6 lg:col-span-6">
          {topo}
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-menta)] px-4 pt-2 pb-1.5 font-bold text-[var(--color-ink)] text-sm">
            <span aria-hidden className="size-2 rounded-full bg-[var(--color-ink)]" />
            {selo}
          </p>
          <WordsReveal
            parts={[...titulo, { onda: tituloOnda }]}
            className="text-display max-w-[11ch]"
          />
          <p className="mt-6 max-w-[44ch] text-[var(--color-ink-soft)] text-lg leading-relaxed md:text-xl">
            {apoio}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={ctaHref} size="lg" data-cta="hero">
              {ctaLabel}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] md:col-span-6 md:max-w-none lg:col-span-5 lg:col-start-8">
          {/* chapa de cor atrás da foto, deslocada */}
          <div
            aria-hidden
            className="mancha-2 absolute inset-0 translate-x-[6%] translate-y-[5%] rotate-6 bg-[var(--color-gema)]"
          />
          <div className="mancha-1 relative aspect-[4/5] overflow-hidden">
            <Image
              src="/fotos/tinta-azul.jpg"
              alt="Bebê sorrindo, com as mãos e o rosto cobertos de tinta azul, pintando uma mesa no quintal do Ateliê"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          {/* bolinhas soltas, como os pingos do logo */}
          <span
            aria-hidden
            className="absolute -top-3 left-[8%] size-7 rounded-full bg-[var(--color-magenta)]"
          />
          <span
            aria-hidden
            className="absolute bottom-[6%] -left-4 size-5 rounded-full bg-[var(--color-ceu)]"
          />
        </div>
      </Container>
    </section>
  )
}
