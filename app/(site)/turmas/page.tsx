import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { Agendar } from '@/components/atelie/agendar'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/cn'
import { turmas } from '@/lib/content/copy'

export const metadata: Metadata = {
  title: turmas.meta.title,
  description: turmas.meta.description,
  alternates: { canonical: '/turmas' },
}

const FOTO: Record<string, { src: string; alt: string; pos: string }> = {
  Berçário: {
    src: '/fotos/boliche.jpg',
    alt: 'Bebê sentado na grama segurando pinos coloridos de boliche',
    pos: '50% 55%',
  },
  'Maternal I': {
    src: '/fotos/bacia-sensorial.jpg',
    alt: 'Menina mexendo numa bacia com água amarela',
    pos: '50% 50%',
  },
  'Maternal II': {
    src: '/fotos/esponja.jpg',
    alt: 'Menina pintando com esponja e tinta colorida',
    pos: '50% 40%',
  },
}

/*
 * 01 abertura   só tipografia, sem foto (a foto vem nas turmas)
 * 02 turmas     E03 alternado: foto em mancha + chapa de cor + texto, 3 vezes
 *               (o lado troca a cada turma, e a cor também)
 * 03 visita     E17
 */
export default function TurmasPage() {
  return (
    <>
      <section className="pt-10 pb-8 md:pt-16 md:pb-12">
        <Container>
          <h1 className="text-display max-w-[14ch]">{turmas.hero.titulo}</h1>
          <p className="mt-6 max-w-[46ch] text-[var(--color-ink-soft)] text-lg md:text-xl">
            {turmas.hero.apoio}
          </p>
        </Container>
      </section>

      {turmas.itens.map((t, i) => {
        const f = FOTO[t.nome]
        const invertido = i % 2 === 1
        return (
          <section key={t.nome} className="py-12 md:py-20">
            <Container className="grid items-center gap-10 md:grid-cols-12">
              <div
                className={cn(
                  'relative mx-auto w-full max-w-[400px] md:col-span-5',
                  invertido && 'md:order-2 md:col-start-8'
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    'absolute inset-0 rotate-3',
                    i === 0 ? 'mancha-1' : i === 1 ? 'mancha-2' : 'mancha-3'
                  )}
                  style={{
                    background: `var(--color-${t.cor})`,
                    translate: invertido ? '-5% 5%' : '5% 5%',
                  }}
                />
                <div
                  className={cn(
                    'relative aspect-[4/5] overflow-hidden',
                    i === 0 ? 'mancha-2' : i === 1 ? 'mancha-3' : 'mancha-1'
                  )}
                >
                  {f ? (
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 34vw, 90vw"
                      className="object-cover"
                      style={{ objectPosition: f.pos }}
                    />
                  ) : null}
                </div>
              </div>
              <Reveal
                className={cn(
                  'md:col-span-6',
                  invertido ? 'md:order-1 md:col-start-1' : 'md:col-start-7'
                )}
              >
                <p
                  className="inline-block rounded-full px-4 pt-2 pb-1.5 font-bold text-[var(--color-ink)]"
                  style={{ background: `var(--color-${t.cor})` }}
                >
                  {t.faixa}
                </p>
                <h2 className="text-h1 mt-4">{t.nome}</h2>
                <p className="mt-4 max-w-[44ch] text-lg md:text-xl">{t.texto}</p>
              </Reveal>
            </Container>
          </section>
        )
      })}

      <Agendar origem="site" />
    </>
  )
}
