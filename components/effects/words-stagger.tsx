'use client'

import { m } from 'framer-motion'
import { Fragment } from 'react'

/** Words stagger do spell.sh: palavra por palavra, com desfoque, ao entrar na tela. */
export function WordsStagger({
  children,
  as: Tag = 'p',
  className,
  stagger = 0.09,
}: {
  children: string
  as?: 'p' | 'h2'
  className?: string
  stagger?: number
}) {
  const palavras = children.split(' ').filter(Boolean)
  return (
    <Tag className={className}>
      <span className="sr-only">{children}</span>
      <m.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: stagger }}
      >
        {palavras.map((p, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: texto estático
          <Fragment key={i}>
            <m.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 12, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.55, ease: 'easeOut' },
                },
              }}
            >
              {p}
            </m.span>{' '}
          </Fragment>
        ))}
      </m.span>
    </Tag>
  )
}
