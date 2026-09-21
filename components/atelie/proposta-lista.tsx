import Link from 'next/link'
import { Reveal } from '@/components/animations/reveal'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'

const CORES = [
  'var(--color-magenta)',
  'var(--color-ceu)',
  'var(--color-gema)',
  'var(--color-mecanica)',
]

/** E06 · lista numerada editorial, split 5/7. */
export function PropostaLista({
  titulo,
  itens,
  link,
  referencias,
}: {
  titulo: string
  itens: readonly { titulo: string; texto: string }[]
  link?: string
  referencias?: string
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <SlideUp className="text-h1 max-w-[12ch]">{titulo}</SlideUp>
            {referencias ? (
              <p className="mt-5 max-w-[34ch] text-[var(--color-ink-soft)]">{referencias}</p>
            ) : null}
            {link ? (
              <Link
                href="/proposta"
                className="mt-6 inline-block font-extrabold text-[var(--color-violeta)] underline decoration-[3px] decoration-[var(--color-gema)] underline-offset-[6px]"
              >
                {link}
              </Link>
            ) : null}
          </div>
        </div>
        <ol className="md:col-span-7">
          {itens.map((it, i) => (
            <Reveal
              as="li"
              key={it.titulo}
              delay={i * 0.06}
              className="flex gap-5 border-[var(--color-rule)] border-t py-8 first:border-t-0 first:pt-0 md:gap-8"
            >
              <span
                aria-hidden
                className="mancha-3 grid size-14 shrink-0 place-items-center font-extrabold text-2xl text-[var(--color-ink)] md:size-16 md:text-3xl"
                style={{ background: CORES[i % CORES.length] }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-extrabold text-2xl md:text-[1.75rem]">{it.titulo}</h3>
                <p className="mt-2 max-w-[48ch] text-[var(--color-ink-soft)] text-lg">{it.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
