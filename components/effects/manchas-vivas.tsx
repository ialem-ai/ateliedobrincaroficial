'use client'

import { Pause, Play } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/cn'

/**
 * Fundo de manchas da marca flutuando devagar (substitui o "animated gradient"
 * do spell.sh, que é um shader WebGL). Cor chapada, borda reta, sem degradê.
 *
 * Movimento contínuo acima de 5s exige controle de pausa: LBI art. 63 +
 * ABNT NBR 17225 (WCAG 2.2.2). O botão fica visível e alcançável por teclado.
 */
export function ManchasVivas({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [paused, setPaused] = useState(false)

  return (
    <div data-paused={paused} className={cn('relative isolate overflow-hidden', className)}>
      <div aria-hidden="true" className="-z-10 pointer-events-none absolute inset-0">
        <span className="mancha-1 flutua-a absolute -top-[18%] -right-[10%] h-[70%] w-[46%] bg-[var(--color-magenta)] md:w-[34%]" />
        <span className="mancha-2 flutua-b absolute -bottom-[26%] -left-[12%] h-[72%] w-[52%] bg-[var(--color-menta)] md:w-[36%]" />
        <span className="mancha-3 flutua-a absolute top-[38%] right-[24%] hidden h-[28%] w-[14%] bg-[var(--color-gema)] md:block" />
      </div>
      {children}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="absolute right-4 bottom-4 z-10 inline-flex h-11 items-center gap-2 rounded-full bg-white/15 px-4 text-sm text-white transition-colors hover:bg-white/25"
      >
        {paused ? (
          <Play className="size-4" aria-hidden />
        ) : (
          <Pause className="size-4" aria-hidden />
        )}
        {paused ? 'Retomar movimento' : 'Pausar movimento'}
      </button>
    </div>
  )
}
