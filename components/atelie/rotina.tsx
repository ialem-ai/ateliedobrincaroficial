import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'
import { site } from '@/config/site'
import { home } from '@/lib/content/copy'

const L = home.rotina.legendas

export const FOTOS_ROTINA = [
  {
    src: '/fotos/minhocario.jpg',
    alt: 'Duas crianças sentadas na grama brincando com terra num minhocário',
    pos: '50% 60%',
    legenda: L.minhocario,
  },
  {
    src: '/fotos/esponja.jpg',
    alt: 'Menina pintando com esponja e tinta colorida ao ar livre',
    pos: '50% 40%',
    legenda: L.esponja,
  },
  {
    src: '/fotos/horta.jpg',
    alt: 'Duas crianças agachadas plantando na terra da horta',
    pos: '50% 45%',
    legenda: L.horta,
  },
  {
    src: '/fotos/bacia-sensorial.jpg',
    alt: 'Menina mexendo numa bacia com água amarela e flores de papel',
    pos: '50% 50%',
    legenda: L.bacia,
  },
  {
    src: '/fotos/boliche.jpg',
    alt: 'Bebê sentado na grama segurando pinos coloridos de boliche',
    pos: '50% 55%',
    legenda: L.boliche,
  },
  {
    src: '/fotos/tinta-verde.jpg',
    alt: 'Menino pintando com pincel e tinta verde, com uma folha de couve na mesa',
    pos: '50% 55%',
    legenda: L.tintaVerde,
  },
] as const

/** E20 · contact sheet irregular, fotos reais do Ateliê. */
export function Rotina({ titulo, apoio }: { titulo: string; apoio?: string }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end">
          <SlideUp className="text-h1 max-w-[14ch] md:col-span-6">{titulo}</SlideUp>
          {apoio ? (
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-[var(--color-ink-soft)] text-lg">{apoio}</p>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[44px] items-center font-extrabold text-[var(--color-violeta)] underline decoration-[3px] decoration-[var(--color-magenta)] underline-offset-[6px]"
              >
                {home.rotina.instagram}
              </a>
            </div>
          ) : null}
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {FOTOS_ROTINA.map((f, i) => (
            <Reveal as="li" key={f.src} delay={Math.min(i, 5) * 0.05} className="group">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-media)]">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-brand)] group-hover:scale-[1.04]"
                    style={{ objectPosition: f.pos }}
                  />
                </div>
                <figcaption className="mt-2 font-bold text-[var(--color-ink-soft)] text-sm">
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
