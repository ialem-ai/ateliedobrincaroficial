import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

/**
 * Botão "adesivo": cor chapada, pílula, e uma borda inferior dura em vez de
 * sombra borrada (referência Duolingo escolhida em 21/09). Ao apertar, desce.
 */
const buttonStyles = cva(
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[var(--radius-btn)] font-display font-extrabold tracking-[-0.01em] transition-[transform,box-shadow,background-color] duration-150 active:translate-y-[3px] disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-violeta)] text-white shadow-[0_4px_0_#4a1763] hover:bg-[var(--color-accent-hover)] active:shadow-[0_1px_0_#4a1763]',
        claro:
          'bg-white text-[var(--color-violeta)] shadow-[0_4px_0_rgb(42_23_51/0.25)] hover:bg-[var(--color-talco)] active:shadow-[0_1px_0_rgb(42_23_51/0.25)]',
        contorno:
          'border-2 border-current text-[var(--color-violeta)] hover:bg-[var(--color-violeta)] hover:text-white',
      },
      size: {
        md: 'px-6 pt-3.5 pb-3 text-base',
        lg: 'px-8 pt-4 pb-3.5 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

type Variants = VariantProps<typeof buttonStyles>

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & Variants) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...props} />
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & Variants) {
  return <a className={cn(buttonStyles({ variant, size }), className)} {...props} />
}
