'use client'

import { Pause, Play } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import { AnimatedGradient } from './animated-gradient'

/**
 * Bloco com o degradê animado do spell.sh no fundo. O violeta sólido fica
 * por baixo: sem WebGL, é ele que aparece.
 * Movimento contínuo acima de 5s exige pausa (LBI art. 63 + NBR 17225).
 */
export function FundoGradiente({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [pausado, setPausado] = useState(false)
  return (
    <div className={cn('relative isolate overflow-hidden bg-[var(--color-violeta)]', className)}>
      <AnimatedGradient paused={pausado} />
      {children}
      <button
        type="button"
        onClick={() => setPausado((p) => !p)}
        aria-pressed={pausado}
        className="absolute right-4 bottom-4 z-10 inline-flex h-11 items-center gap-2 rounded-full bg-white/15 px-4 text-sm text-white transition-colors hover:bg-white/25"
      >
        {pausado ? (
          <Play className="size-4" aria-hidden />
        ) : (
          <Pause className="size-4" aria-hidden />
        )}
        {pausado ? 'Retomar movimento' : 'Pausar movimento'}
      </button>
    </div>
  )
}
