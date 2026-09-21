import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/cn'

export const FOTOS_ROTINA = [
  {
    src: '/fotos/minhocario.jpg',
    alt: 'Duas crianças sentadas na grama brincando com terra num minhocário',
    pos: '50% 60%',
    legenda: 'Minhocário',
  },
  {
    src: '/fotos/esponja.jpg',
    alt: 'Menina pintando com esponja e tinta colorida ao ar livre',
    pos: '50% 40%',
    legenda: 'Pintura com esponja',
  },
  {
    src: '/fotos/horta.jpg',
    alt: 'Duas crianças agachadas plantando na terra da horta',
    pos: '50% 45%',
    legenda: 'Horta',
  },
  {
    src: '/fotos/bacia-sensorial.jpg',
    alt: 'Menina mexendo numa bacia com água amarela e flores de papel',
    pos: '50% 50%',
    legenda: 'Bacia sensorial',
  },
  {
    src: '/fotos/degustacao.jpg',
    alt: 'Educadora e crianças sentadas numa toalha na grama, com uma cesta de frutas',
    pos: '50% 50%',
    legenda: 'Degustação de frutas',
    largo: true,
  },
  {
    src: '/fotos/boliche.jpg',
    alt: 'Bebê sentado na grama segurando pinos coloridos de boliche',
    pos: '50% 55%',
    legenda: 'Boliche',
  },
  {
    src: '/fotos/tinta-verde.jpg',
    alt: 'Menino pintando com pincel e tinta verde, com uma folha de couve na mesa',
    pos: '50% 55%',
    legenda: 'Pintura com tinta verde',
  },
] as const

/** E20 · contact sheet irregular, fotos reais do Ateliê. */
export function Rotina({ titulo }: { titulo: string }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SlideUp className="text-h1 mb-10 max-w-[14ch] md:mb-14">{titulo}</SlideUp>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {FOTOS_ROTINA.map((f, i) => (
            <Reveal
              as="li"
              key={f.src}
              delay={Math.min(i, 5) * 0.05}
              className={cn('group', 'largo' in f && f.largo && 'col-span-2')}
            >
              <figure>
                <div
                  className={cn(
                    'relative overflow-hidden rounded-[var(--radius-media)]',
                    'largo' in f && f.largo ? 'aspect-[4/3] md:aspect-[16/10]' : 'aspect-[4/5]'
                  )}
                >
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes={
                      'largo' in f && f.largo
                        ? '(min-width: 768px) 50vw, 100vw'
                        : '(min-width: 768px) 25vw, 50vw'
                    }
                    className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                    style={{ objectPosition: f.pos }}
                  />
                </div>
                <figcaption className="mt-2 pt-1 font-bold text-[var(--color-ink-soft)] text-sm">
                  {f.legenda}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
