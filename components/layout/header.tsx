'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/cn'

/**
 * Header do SITE INSTITUCIONAL.
 *
 * REGRA DA CASA: landing page NÃO tem header. Menu é link de fuga.
 * Este componente vai no layout do grupo (site), nunca no grupo (lp).
 * Em LP, o lugar dele é ocupado pela barra fixa de CTA (sticky-cta.tsx).
 *
 * Máximo 5 itens de menu. Um sexto item significa que a arquitetura de
 * conteúdo está errada, não que o menu precisa crescer.
 */

type NavItem = { label: string; href: string }

export function Header({
  brand,
  nav,
  cta,
}: {
  brand: { label: string; href?: string; logo?: string }
  nav: NavItem[]
  cta?: { label: string; href: string }
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // fecha o drawer ao navegar
  // biome-ignore lint/correctness/useExhaustiveDependencies: reage à mudança de pathname, não ao estado do drawer
  useEffect(() => setOpen(false), [pathname])

  // trava o scroll do body com o drawer aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (nav.length > 5) {
    // Não quebra o build, mas grita no console durante o dev.
    console.warn(
      `[Header] ${nav.length} itens de menu. O limite da casa é 5. Reveja a arquitetura de conteúdo.`
    )
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-[var(--color-rule)] border-b bg-[var(--color-bg)]' : 'bg-transparent'
      )}
    >
      <Container className="flex h-[68px] items-center justify-between gap-6 md:h-[76px]">
        <Link href={brand.href ?? '/'} className="flex items-center gap-2.5">
          {brand.logo ? (
            // biome-ignore lint/performance/noImgElement: logo local, tamanho fixo
            <img src={brand.logo} alt={brand.label} className="h-10 w-auto md:h-12" />
          ) : (
            <span className="font-display text-lg tracking-[-0.02em]">{brand.label}</span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'font-bold text-[0.975rem] text-[var(--color-violeta)] transition-opacity hover:opacity-100',
                  active ? 'opacity-100' : 'opacity-70'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          {cta ? (
            <a
              href={cta.href}
              className="hidden min-h-[44px] items-center rounded-[var(--radius-btn)] bg-[var(--color-violeta)] px-5 font-display font-extrabold text-sm text-white shadow-[0_3px_0_#4a1763] transition-colors hover:bg-[var(--color-accent-hover)] md:inline-flex"
            >
              {cta.label}
            </a>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-[var(--color-violeta)] md:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={cn(
                  'absolute left-0 block h-[2px] w-full bg-current transition-transform duration-300',
                  open ? 'top-[6px] rotate-45' : 'top-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-[2px] w-full bg-current transition-transform duration-300',
                  open ? 'top-[6px] -rotate-45' : 'top-3'
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* drawer full-screen */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 top-[68px] z-40 flex flex-col bg-[var(--color-bg)] px-6 pt-8 pb-10 md:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label="Principal (mobile)">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-[var(--color-rule)] border-b py-4 font-display font-extrabold text-2xl text-[var(--color-violeta)] tracking-[-0.02em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {cta ? (
          <a
            href={cta.href}
            className="mt-auto flex min-h-[54px] items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-violeta)] px-6 font-display font-extrabold text-base text-white shadow-[0_4px_0_#4a1763]"
          >
            {cta.label}
          </a>
        ) : null}
      </div>
    </header>
  )
}
