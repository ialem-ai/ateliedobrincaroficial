import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'
import { addressLine, site } from '@/config/site'
import { home } from '@/lib/content/copy'

/**
 * E03 · split 7/5 contrastado: foto da casa à esquerda, texto num bloco
 * Amarelo Gema à direita. A foto tem 1280x720 (WhatsApp): exibida contida.
 */
export function NovoEspaco() {
  const c = home.novoEspaco
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-stretch overflow-hidden rounded-[var(--radius-card)] md:grid-cols-12">
          <div className="relative aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[440px]">
            <Image
              src="/fotos/novo-espaco.jpg"
              alt="Casa térrea branca da nova unidade do Ateliê, com gramado amplo na frente"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-[60%_50%]"
            />
          </div>
          <div className="bg-[var(--color-gema)] px-6 py-10 text-[var(--color-ink)] md:col-span-5 md:px-10 md:py-12">
            <p className="text-label">{c.rotulo}</p>
            <SlideUp className="text-h2 mt-4 text-[var(--color-ink)]">{c.titulo}</SlideUp>
            <Reveal>
              <p className="mt-5 text-lg">{c.texto}</p>
              <address className="mt-6 flex gap-2 not-italic">
                <MapPin aria-hidden className="mt-0.5 size-5 shrink-0" />
                <span>
                  {addressLine}
                  <br />
                  CEP {site.address.zip}
                </span>
              </address>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[44px] items-center font-extrabold underline decoration-[3px] underline-offset-[6px]"
              >
                {c.comoChegar}
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
