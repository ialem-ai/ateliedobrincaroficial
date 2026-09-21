import { Reveal } from '@/components/animations/reveal'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'
import { lp } from '@/lib/content/copy'

const CORES = ['var(--color-gema)', 'var(--color-ceu)', 'var(--color-baby)', 'var(--color-menta)']

/** OFERTA · E08 linha do tempo: o que acontece do clique até a visita. */
export function Passos() {
  const c = lp.visita
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SlideUp className="text-h1 mb-12 max-w-[14ch]">{c.titulo}</SlideUp>
        <ol className="relative grid gap-6 md:grid-cols-4">
          <span
            aria-hidden
            className="absolute top-8 right-[12%] left-[12%] hidden border-[var(--color-violeta)] border-t-[3px] border-dashed md:block"
          />
          {c.passos.map((p, i) => (
            <Reveal
              as="li"
              key={p.titulo}
              delay={i * 0.08}
              className="relative flex gap-5 md:block"
            >
              <span
                className="mancha-1 relative z-10 grid size-16 shrink-0 place-items-center font-extrabold text-2xl text-[var(--color-ink)] md:mb-5"
                style={{ background: CORES[i] }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-extrabold text-xl leading-tight md:text-2xl">{p.titulo}</h3>
                <p className="mt-2 text-[var(--color-ink-soft)] text-lg">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
