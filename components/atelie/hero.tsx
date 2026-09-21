'use client'

import Image from 'next/image'
import { Fragment } from 'react'
import { Olhinhos, SeloGirando } from '@/components/atelie/marca'
import { BlurReveal } from '@/components/effects/blur-reveal'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { wa } from '@/config/site'
import { form, home, waTexto } from '@/lib/content/copy'

/**
 * Topo · E02 em colagem: foto principal recortada em mancha, duas fotos
 * menores em manchas, chapa gema atrás, selo do manual girando com a rolagem
 * e os olhinhos do "ã" espiando. Manchete letra a letra (blur reveal) com a
 * onda de cores do logo na última palavra, uma vez só (menos de 5s: dispensa botão de pausa).
 */
export function Hero({
  rotulo = home.hero.rotulo,
  titulo = home.hero.titulo[0],
  tituloOnda = home.hero.tituloOnda,
  apoio = home.hero.apoio,
  selo = home.hero.selo,
  ctaHref = '#visita',
  waMsg = waTexto.site,
  topo,
}: {
  rotulo?: string
  titulo?: string
  tituloOnda?: string
  apoio?: string
  selo?: string
  ctaHref?: string
  waMsg?: string
  /** Logo no topo, quando a página não tem header (LP) */
  topo?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-4 pb-16 md:pt-8 md:pb-28">
      <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-6">
        <div className="relative z-10 md:col-span-6">
          {topo}
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-menta)] px-4 py-2 font-bold text-[var(--color-ink)] text-sm">
            <span aria-hidden className="size-2 rounded-full bg-[var(--color-ink)]" />
            {selo}
          </p>
          <p className="text-label mb-4 text-[var(--color-ink-soft)]">
            {rotulo.split(' · ').map((parte, i) => (
              <Fragment key={parte}>
                {i > 0 ? ' · ' : null}
                <span className="whitespace-nowrap">{parte}</span>
              </Fragment>
            ))}
          </p>
          <BlurReveal
            texto={titulo}
            onda={tituloOnda}
            className="font-extrabold text-[clamp(2.7rem,6.2vw,5.1rem)] leading-[0.98] tracking-[-0.035em]"
          />
          <p className="mt-7 max-w-[44ch] text-[var(--color-ink-soft)] text-lg leading-relaxed md:text-xl">
            {apoio}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={ctaHref} size="lg" data-cta="hero">
              {form.enviar}
            </ButtonLink>
            <a
              href={wa(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero-whatsapp"
              className="inline-flex min-h-[44px] items-center font-extrabold text-[var(--color-violeta)] underline decoration-[3px] decoration-[var(--color-menta)] underline-offset-[6px]"
            >
              {form.whatsappBotao}
            </a>
          </div>
        </div>

        {/* colagem */}
        <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[560px] md:col-span-6 md:max-w-none">
          {/* chapas de cor */}
          <div
            aria-hidden
            className="mancha-2 absolute top-[6%] right-0 h-[80%] w-[74%] rotate-6 bg-[var(--color-gema)]"
          />
          <div
            aria-hidden
            className="mancha-3 absolute bottom-0 left-[2%] h-[34%] w-[36%] -rotate-12 bg-[var(--color-ceu)]"
          />

          {/* foto principal */}
          <div className="mancha-1 absolute top-[2%] right-[6%] h-[76%] w-[70%] overflow-hidden">
            <Image
              src="/fotos/tinta-azul.jpg"
              alt="Bebê sorrindo, com as mãos e o rosto cobertos de tinta azul, pintando uma mesa no quintal"
              fill
              priority
              sizes="(min-width: 768px) 34vw, 70vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <Olhinhos className="absolute top-[-4%] right-[30%] w-[16%] rotate-[-6deg]" />

          {/* fotos menores */}
          <div className="mancha-3 absolute bottom-[6%] left-0 h-[40%] w-[38%] overflow-hidden border-[6px] border-[var(--color-talco)]">
            <Image
              src="/fotos/minhocario.jpg"
              alt="Duas meninas sentadas na grama rindo, com um minhocário de terra na frente"
              fill
              sizes="(min-width: 768px) 18vw, 38vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
          <div className="absolute right-[2%] bottom-[2%] size-[30%] overflow-hidden rounded-full border-[6px] border-[var(--color-talco)]">
            <Image
              src="/fotos/esponja.jpg"
              alt="Menina pintando com esponja e tinta colorida"
              fill
              sizes="(min-width: 768px) 14vw, 30vw"
              className="object-cover object-[50%_40%]"
            />
          </div>

          {/* selo e pingos */}
          <SeloGirando className="absolute top-[4%] left-[2%] w-[24%] md:w-[21%]" />
          <span
            aria-hidden
            className="absolute top-[46%] left-[6%] size-6 rounded-full bg-[var(--color-magenta)] md:size-8"
          />
          <span
            aria-hidden
            className="absolute right-[36%] bottom-[-2%] size-4 rounded-full bg-[var(--color-mecanica)]"
          />
        </div>
      </Container>
    </section>
  )
}
