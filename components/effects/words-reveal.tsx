'use client'

import { m } from 'framer-motion'
import { Onda } from './onda'

/**
 * Manchete com as palavras entrando em sequência, com desfoque (words stagger
 * + blur reveal do spell.sh). Roda uma vez, no carregamento. Só no hero.
 *
 * Leitor de tela lê a frase inteira; as palavras animadas são aria-hidden.
 * Uma parte pode vir como { onda } pra receber a onda de cores do logo.
 */
type Part = string | { onda: string }

const EASE = [0.22, 1, 0.36, 1] as const

export function WordsReveal({
  parts,
  as: Tag = 'h1',
  className,
  delay = 0.1,
  stagger = 0.07,
}: {
  parts: Part[]
  as?: 'h1' | 'h2' | 'p'
  className?: string
  delay?: number
  stagger?: number
}) {
  const full = parts.map((p) => (typeof p === 'string' ? p : p.onda)).join(' ')
  const tokens = parts.flatMap((p) =>
    typeof p === 'string'
      ? p
          .split(' ')
          .filter(Boolean)
          .map((w) => ({ w, onda: false }))
      : [{ w: p.onda, onda: true }]
  )
  const ondaDelay = delay + tokens.length * stagger + 0.3

  return (
    <Tag className={className}>
      <span className="sr-only">{full}</span>
      <span aria-hidden="true">
        {tokens.map((t, i) => (
          <m.span
            // biome-ignore lint/suspicious/noArrayIndexKey: ordem fixa, texto estático
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: EASE, delay: delay + i * stagger }}
          >
            {t.onda ? <Onda delay={ondaDelay}>{t.w}</Onda> : t.w}
            {i < tokens.length - 1 ? ' ' : null}
          </m.span>
        ))}
      </span>
    </Tag>
  )
}
