'use client'

import { m, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/cn'

/**
 * Selo circular do manual girando conforme a página rola. Não é movimento
 * automático (só mexe quando a pessoa rola), então dispensa botão de pausa.
 */
export function SeloGirando({ className }: { className?: string }) {
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 1200], [0, 200])
  return (
    <m.div aria-hidden="true" style={{ rotate }} className={cn('pointer-events-none', className)}>
      {/* biome-ignore lint/performance/noImgElement: selo local, decorativo */}
      <img src="/brand/selo.png" alt="" width={160} height={167} className="h-auto w-full" />
    </m.div>
  )
}

/** Os olhinhos rosa do "ã" do logo, espiando por cima de uma foto ou título. */
export function Olhinhos({ className }: { className?: string }) {
  return (
    // biome-ignore lint/performance/noImgElement: recorte local do logo, decorativo
    <img
      src="/brand/olhinhos.png"
      alt=""
      aria-hidden="true"
      width={246}
      height={101}
      className={cn('pointer-events-none h-auto select-none', className)}
    />
  )
}
