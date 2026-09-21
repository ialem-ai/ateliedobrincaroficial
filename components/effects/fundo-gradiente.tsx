import { cn } from '@/lib/cn'
import { AnimatedGradient } from './animated-gradient'

/**
 * Bloco com o degradê animado do spell.sh no fundo. O violeta sólido fica
 * por baixo: sem WebGL, é ele que aparece. O movimento é comandado pela
 * rolagem (ver AnimatedGradient), então não precisa de botão de pausa.
 */
export function FundoGradiente({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('relative isolate overflow-hidden bg-[var(--color-violeta)]', className)}>
      <AnimatedGradient />
      {children}
    </div>
  )
}
