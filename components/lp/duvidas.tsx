import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/cn'
import { lp } from '@/lib/content/copy'

/**
 * CRENÇAS · E19 sticky lateral: título preso à esquerda, as 3 dúvidas rolando
 * à direita, cada uma com foto em mancha e a cor de uma turma.
 */
export function Duvidas() {
  const c = lp.duvidas
  return (
    <section className="py-20 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-16">
            <SlideUp className="text-h1 max-w-[14ch]">{c.titulo}</SlideUp>
            <p className="mt-5 max-w-[38ch] text-[var(--color-ink-soft)] text-lg">{c.apoio}</p>
          </div>
        </div>
        <ol className="grid gap-14 md:col-span-7 md:gap-20">
          {c.itens.map((d, i) => (
            <Reveal
              as="li"
              key={d.pergunta}
              className="grid gap-6 sm:grid-cols-[160px_1fr] sm:items-start md:grid-cols-[180px_1fr]"
            >
              <div className="relative mx-auto aspect-square w-40 sm:w-full">
                <div
                  aria-hidden
                  className={cn(
                    'absolute inset-0 translate-x-[8%] translate-y-[6%]',
                    i === 1 ? 'mancha-1' : 'mancha-3'
                  )}
                  style={{ background: `var(--color-${d.cor})` }}
                />
                <div
                  className={cn(
                    'relative size-full overflow-hidden',
                    i === 1 ? 'mancha-2' : 'mancha-1'
                  )}
                >
                  <Image
                    src={d.foto}
                    alt={d.alt}
                    fill
                    sizes="180px"
                    className="object-cover"
                    style={{ objectPosition: d.pos }}
                  />
                </div>
              </div>
              <div>
                <p className="font-extrabold text-[var(--color-ink-soft)] text-sm">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 font-extrabold text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.08]">
                  {d.pergunta}
                </h3>
                <p className="mt-3 max-w-[50ch] text-lg">{d.resposta}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
