'use client'

import { Pause, Play } from 'lucide-react'
import { Fragment, useState } from 'react'

/**
 * E09 · faixa de palavras correndo, em bloco Verde Menta.
 * Botão de pausa obrigatório (movimento > 5s, NBR 17225).
 */
export function Palavras({ itens }: { itens: readonly string[] }) {
  const [pausado, setPausado] = useState(false)
  const loop = [...itens, ...itens]
  const cores = ['var(--color-violeta)', 'var(--color-ink)']

  return (
    <section
      aria-label="O que faz parte do dia"
      className="relative overflow-hidden bg-[var(--color-menta)] py-6 md:py-8"
    >
      <ul
        className="flex w-max items-center gap-6 pr-6 md:gap-10 md:pr-10"
        style={{
          animation: 'marquee 38s linear infinite',
          animationPlayState: pausado ? 'paused' : 'running',
        }}
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
      </ul>
      <button
        type="button"
        onClick={() => setPausado((v) => !v)}
        aria-label={pausado ? 'Retomar a animação' : 'Pausar a animação'}
        className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-ink)] text-white"
      >
        {pausado ? (
          <Play aria-hidden className="size-4" />
        ) : (
          <Pause aria-hidden className="size-4" />
        )}
      </button>
    </section>
  )
}
