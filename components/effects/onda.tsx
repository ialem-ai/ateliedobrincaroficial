'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

/**
 * Palavra com a onda de cores do logo passando uma vez (ver .onda-faixas em
 * globals.css). Dispara quando entra na tela e não repete.
 */
export function Onda({
  children,
  className,
  delay = 0,
  loop = false,
  base,
}: {
  children: string
  className?: string
  delay?: number
  /** repete a cada 6s (o pai precisa oferecer pausa: data-paused) */
  loop?: boolean
  /** cor do texto parado (padrão violeta). Em fundo violeta, use branco. */
  base?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setPlay(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      data-play={play ? (loop ? 'loop' : 'true') : 'false'}
      className={cn('onda-faixas inline-block', className)}
      style={{ animationDelay: `${delay}s`, ...(base ? { ['--base' as string]: base } : {}) }}
    >
      {children}
    </span>
  )
}
