'use client'

import { m } from 'framer-motion'
import { Fragment } from 'react'

/**
 * Título de seção com as palavras subindo por trás de uma máscara (slide-up
 * text do spell.sh). Dispara ao entrar na tela, uma vez.
 */
const EASE = [0.625, 0.05, 0, 1] as const

export function SlideUp({
  children,
  as: Tag = 'h2',
  className,
  stagger = 0.06,
}: {
  children: string
  as?: 'h2' | 'h3' | 'p'
  className?: string
  stagger?: number
}) {
  const words = children.split(' ').filter(Boolean)
  return (
    <Tag className={className}>
      <span className="sr-only">{children}</span>
      <m.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: stagger }}
      >
        {words.map((w, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: ordem fixa, texto estático
          <Fragment key={i}>
            {i > 0 ? ' ' : null}
            <span className="-my-[0.2em] inline-block overflow-hidden py-[0.2em] align-top">
              <m.span
                className="inline-block"
                variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                {w}
              </m.span>
            </span>
          </Fragment>
        ))}
      </m.span>
    </Tag>
  )
}
