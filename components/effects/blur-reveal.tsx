'use client'

import { m } from 'framer-motion'
import { Fragment } from 'react'
import { Onda } from './onda'

/**
 * Blur reveal do spell.sh: letra por letra, saindo do desfoque. No topo roda no
 * carregamento; nas outras seções, quando entra na tela (inView). Uma vez só.
 *
 * Leitor de tela lê a frase inteira; as letras animadas são aria-hidden.
 * `onda` (opcional) é a última palavra, que recebe a onda de cores do logo.
 */
const EASE = [0.22, 1, 0.36, 1] as const

export function BlurReveal({
  texto,
  onda,
  ondaLoop = false,
  as: Tag = 'h1',
  className,
  inView = false,
  delay = 0.1,
  stagger = 0.025,
}: {
  texto: string
  onda?: string
  ondaLoop?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  inView?: boolean
  delay?: number
  stagger?: number
}) {
  const palavras = texto.split(' ').filter(Boolean)
  const total = texto.length + (onda?.length ?? 0)
  const letra = {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 10 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.5, ease: EASE } },
  }
  const gatilho = inView
    ? { whileInView: 'visible' as const, viewport: { once: true, margin: '-60px' } }
    : { animate: 'visible' as const }

  return (
    <Tag className={className}>
      <span className="sr-only">{onda ? `${texto} ${onda}` : texto}</span>
      <m.span
        aria-hidden="true"
        initial="hidden"
        {...gatilho}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {palavras.map((p, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: texto estático
          <Fragment key={i}>
            <span className="inline-block whitespace-nowrap">
              {p.split('').map((c, j) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: texto estático
                <m.span key={j} className="inline-block" variants={letra}>
                  {c}
                </m.span>
              ))}
            </span>{' '}
          </Fragment>
        ))}
        {onda ? (
          <m.span className="inline-block" variants={letra}>
            <Onda delay={delay + total * stagger + 0.2} loop={ondaLoop}>
              {onda}
            </Onda>
          </m.span>
        ) : null}
      </m.span>
    </Tag>
  )
}
