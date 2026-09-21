import type { Metadata } from 'next'

/** LP: sem header (menu é link de fuga) e fora do Google. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>
}
