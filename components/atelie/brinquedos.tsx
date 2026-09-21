import { Reveal } from '@/components/animations/reveal'
import { Brilho } from '@/components/effects/brilho'
import { Container } from '@/components/ui/container'
import { home } from '@/lib/content/copy'

/** Faixa curta: linha de brinquedos em breve. Selo com brilho (3 passadas e para). */
export function Brinquedos() {
  const c = home.brinquedos
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Reveal className="flex flex-col gap-6 border-[var(--color-violeta)] border-y-2 border-dashed py-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="flex items-center gap-5">
            <span className="shrink-0 rounded-full bg-[var(--color-violeta)] px-4 pt-2 pb-1.5 font-extrabold text-sm text-white uppercase tracking-[0.08em]">
              <Brilho>{c.selo}</Brilho>
            </span>
            <h2 className="text-h2">{c.titulo}</h2>
          </div>
          <p className="max-w-[40ch] text-[var(--color-ink-soft)] text-lg">{c.texto}</p>
        </Reveal>
      </Container>
    </section>
  )
}
