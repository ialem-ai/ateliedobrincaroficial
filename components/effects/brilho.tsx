'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

/**
 * Shimmer do spell.sh em CSS (.brilho em globals.css): um reflexo passa pelo
 * texto 3 vezes quando ele entra na tela, e para. Menos de 5s: dispensa pausa.
 */
export function Brilho({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [play, setPlay] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setPlay(true)
          io.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])
  return (
    <span ref={ref} data-play={play} className={cn('brilho', className)}>
      {children}
    </span>
  )
}
