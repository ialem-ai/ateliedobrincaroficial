'use client'

import { m, useScroll, useTransform } from 'framer-motion'
import { Fragment } from 'react'

/**
 * E09 · faixa de palavras em bloco Verde Menta, andando conforme a página rola.
 * Presa à rolagem (não anda sozinha), então dispensa botão de pausa
 * (NBR 17225 / WCAG 2.2.2 valem pra movimento automático).
 */
export function Palavras({ itens }: { itens: readonly string[] }) {
  const { scrollY } = useScroll()
  // a lista é duplicada: andar até -50% emenda sem costura
  const x = useTransform(scrollY, (v) => `${-((v * 0.025) % 50)}%`)
  const loop = [...itens, ...itens]
  const cores = ['var(--color-violeta)', 'var(--color-ink)']

  return (
    <section
      aria-label="O que faz parte do dia"
      className="relative overflow-hidden bg-[var(--color-menta)] py-6 md:py-8"
    >
      <m.ul
        className="flex w-max items-center gap-6 pr-6 will-change-transform md:gap-10 md:pr-10"
        style={{ x }}
      >
        {loop.map((p, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: lista duplicada de propósito
          <Fragment key={i}>
            <li
              aria-hidden={i >= itens.length}
              className="whitespace-nowrap pt-2 font-extrabold text-[clamp(1.75rem,4vw,3rem)] leading-none tracking-[-0.02em]"
              style={{ color: cores[i % 2] }}
            >
              {p}
            </li>
            <li aria-hidden className="size-3 shrink-0 rounded-full bg-white md:size-4" />
          </Fragment>
        ))}
      </m.ul>
    </section>
  )
}
