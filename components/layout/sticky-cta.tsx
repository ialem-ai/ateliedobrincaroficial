import { site } from '@/config/site'

/**
 * Barra fixa de CTA da LP (no lugar do menu): rodapé no mobile, canto superior
 * direito no desktop. Leva ao formulário da própria página.
 */
export function StickyCTA({
  label = site.cta.primary,
  href = '#visita',
}: {
  label?: string
  href?: string
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:inset-auto md:top-16 md:right-6 md:bottom-auto md:px-0 md:pb-0">
      <a
        href={href}
        data-cta="barra-fixa"
        className="pointer-events-auto flex min-h-[54px] w-full items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-violeta)] px-7 font-extrabold text-lg text-white shadow-[0_4px_0_#4a1763] md:w-auto"
      >
        {label}
      </a>
    </div>
  )
}
