import Image from 'next/image'
import { Fragment } from 'react'
import { Olhinhos, SeloGirando } from '@/components/atelie/marca'
import { BlurReveal } from '@/components/effects/blur-reveal'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { site } from '@/config/site'
import { lp } from '@/lib/content/copy'

/**
 * GANCHO · faixa que chama o público pelo nome, manchete que promete ver antes
 * de decidir, um CTA. Foto da horta em mancha (a de fruta no quintal saiu: a educadora não está mais no time),
 * diferente do topo da home.
 */
export function LpHero() {
  const c = lp.hero
  return (
    <section className="relative overflow-hidden">
      <p className="bg-[var(--color-violeta)] px-4 py-3 text-center font-bold text-sm text-white md:text-base">
        {/* o espaço entre os trechos fica FORA do nowrap, senão a linha não quebra */}
        {c.chamada.split(' com ').map((parte, i) => (
          <Fragment key={parte}>
            {i > 0 ? ' ' : null}
            <span className="whitespace-nowrap">
              {i > 0 ? 'com ' : null}
              {parte}
            </span>
          </Fragment>
        ))}
      </p>
      <Container className="grid items-center gap-10 pt-8 pb-16 md:grid-cols-12 md:gap-8 md:pt-12 md:pb-24">
        <div className="md:col-span-6">
          {/* biome-ignore lint/performance/noImgElement: logo local, tamanho fixo */}
          <img
            src="/brand/logo-principal.png"
            alt={site.name}
            width={180}
            height={75}
            className="mb-8 h-auto w-[170px]"
          />
          <BlurReveal
            texto={c.titulo}
            onda={c.tituloOnda}
            className="font-extrabold text-[clamp(2.6rem,6vw,4.9rem)] leading-[0.98] tracking-[-0.035em]"
          />
          <p className="mt-6 max-w-[44ch] text-[var(--color-ink-soft)] text-lg leading-relaxed md:text-xl">
            {c.apoio}
          </p>
          <ButtonLink href="#visita" size="lg" data-cta="lp-hero" className="mt-8">
            {c.cta}
          </ButtonLink>
          <p className="mt-3 text-[var(--color-ink-soft)] text-sm">{c.nota}</p>
        </div>

        <div className="relative mx-auto aspect-[1.15/1] w-full max-w-[560px] md:col-span-6 md:max-w-none">
          <div
            aria-hidden
            className="mancha-3 absolute inset-[8%_0_0_10%] -rotate-3 bg-[var(--color-menta)]"
          />
          <div className="mancha-2 absolute inset-[2%_6%_8%_2%] overflow-hidden">
            <Image
              src="/fotos/horta.jpg"
              alt="Menino e menina agachados na terra da horta, plantando"
              fill
              priority
              sizes="(min-width: 768px) 46vw, 92vw"
              className="object-cover object-[50%_12%]"
            />
          </div>
          <Olhinhos className="absolute top-[-4%] left-[40%] w-[15%]" />
          <SeloGirando className="absolute right-0 bottom-[-4%] w-[24%]" />
        </div>
      </Container>
    </section>
  )
}
