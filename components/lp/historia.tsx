import { WordsStagger } from '@/components/effects/words-stagger'
import { Container } from '@/components/ui/container'
import { lp } from '@/lib/content/copy'

/** HISTÓRIA · bloco menta: a razão de existir do Ateliê, com a frase dele. */
export function Historia() {
  const c = lp.historia
  return (
    <section className="px-3 md:px-6">
      <div className="rounded-[var(--radius-card)] bg-[var(--color-menta)] py-20 text-[var(--color-ink)] md:py-28">
        <Container className="grid gap-8 md:grid-cols-12">
          <p className="text-label md:col-span-3 md:pt-4">{c.titulo}</p>
          <div className="md:col-span-9">
            <WordsStagger className="max-w-[20ch] font-extrabold text-[clamp(2.1rem,4.8vw,4rem)] leading-[1.04] tracking-[-0.03em]">
              {c.frase}
            </WordsStagger>
            <p className="mt-8 max-w-[52ch] text-lg md:text-xl">{c.texto}</p>
          </div>
        </Container>
      </div>
    </section>
  )
}
