import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { Agendar } from '@/components/atelie/agendar'
import { SeloGirando } from '@/components/atelie/marca'
import { Onda } from '@/components/effects/onda'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'
import { proposta } from '@/lib/content/copy'

export const metadata: Metadata = {
  title: proposta.meta.title,
  description: proposta.meta.description,
  alternates: { canonical: '/proposta' },
}

const CORES_BENTO = [
  'var(--color-menta)',
  'var(--color-baby)',
  'var(--color-gema)',
  'var(--color-ceu)',
  'var(--color-baby)',
  'var(--color-menta)',
]

/*
 * 01 abertura     E03  split 7/5: texto grande + foto em mancha
 * 02 manifesto    E18  texto corrido max-720 + frase em faixa menta
 * 03 dia a dia    E07  bento: horta grande com foto + 5 cartões de cor
 * 04 contraste    E11  split 50/50: no Ateliê x modelo tradicional
 * 05 visita       E17  bloco violeta com formulário
 */
export default function PropostaPage() {
  const [horta, ...resto] = proposta.diaADia.itens
  return (
    <>
      <section className="pt-8 pb-16 md:pt-14 md:pb-24">
        <Container className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="text-display max-w-[12ch]">{proposta.hero.titulo}</h1>
            <p className="mt-6 max-w-[46ch] text-[var(--color-ink-soft)] text-lg md:text-xl">
              {proposta.hero.apoio}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] md:col-span-5">
            <div
              aria-hidden
              className="mancha-3 absolute inset-0 -translate-x-[5%] translate-y-[5%] -rotate-6 bg-[var(--color-magenta)]"
            />
            <div className="mancha-2 relative aspect-[4/5] overflow-hidden">
              <Image
                src="/fotos/minhocario.jpg"
                alt="Duas crianças sentadas na grama brincando com terra num minhocário"
                fill
                priority
                sizes="(min-width: 768px) 36vw, 90vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[680px] space-y-6 text-xl leading-relaxed md:text-[1.375rem]">
            {proposta.manifesto.map((p) => (
              <Reveal key={p}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
        <div className="mt-16 bg-[var(--color-violeta)] py-20 md:mt-24 md:py-32">
          <Container>
            <p className="mx-auto max-w-[16ch] text-center font-extrabold text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.02] tracking-[-0.03em]">
              <Onda base="#ffffff" className="[text-wrap:balance]">
                {proposta.destaque}
              </Onda>
            </p>
          </Container>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SlideUp className="text-h1 mb-10 max-w-[14ch]">{proposta.diaADia.titulo}</SlideUp>
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <Reveal className="relative overflow-hidden rounded-[var(--radius-card)] md:row-span-2">
              <div className="relative aspect-[4/5] md:absolute md:inset-0 md:aspect-auto">
                <Image
                  src="/fotos/horta.jpg"
                  alt="Duas crianças agachadas plantando na terra da horta"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-[50%_45%]"
                />
              </div>
              <div className="absolute inset-x-3 bottom-3 rounded-[20px] bg-white p-5">
                <h3 className="font-extrabold text-2xl">{horta.titulo}</h3>
                <p className="mt-1 text-[var(--color-ink-soft)]">{horta.texto}</p>
              </div>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2 md:col-span-2 md:row-span-2">
              {resto.map((it, i) => (
                <Reveal as="li" key={it.titulo} delay={i * 0.06}>
                  <div
                    className="h-full rounded-[var(--radius-card)] p-6 text-[var(--color-ink)] md:p-7"
                    style={{ background: CORES_BENTO[i] }}
                  >
                    <h3 className="font-extrabold text-2xl text-[var(--color-ink)]">{it.titulo}</h3>
                    <p className="mt-1 text-lg">{it.texto}</p>
                  </div>
                </Reveal>
              ))}
              <li
                aria-hidden="true"
                className="hidden place-items-center rounded-[var(--radius-card)] bg-[var(--color-gema)] p-6 sm:grid"
              >
                <SeloGirando className="w-32 md:w-36" />
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-8 md:pb-12">
        <Container>
          <SlideUp className="text-h1 mb-10 max-w-[16ch]">{proposta.contraste.titulo}</SlideUp>
          <div className="grid overflow-hidden rounded-[var(--radius-card)] md:grid-cols-2">
            <div className="bg-[var(--color-gema)] p-8 text-[var(--color-ink)] md:p-12">
              <h3 className="font-extrabold text-3xl text-[var(--color-ink)]">
                {proposta.contraste.sim.titulo}
              </h3>
              <ul className="mt-6 space-y-4 text-lg">
                {proposta.contraste.sim.itens.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 size-3 shrink-0 rounded-full bg-[var(--color-violeta)]"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 md:p-12">
              <h3 className="font-extrabold text-3xl text-[var(--color-ink-soft)]">
                {proposta.contraste.nao.titulo}
              </h3>
              <ul className="mt-6 space-y-4 text-[var(--color-ink-soft)] text-lg">
                {proposta.contraste.nao.itens.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 size-3 shrink-0 rounded-full border-2 border-[var(--color-ink-soft)]"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Agendar origem="site" />
    </>
  )
}
