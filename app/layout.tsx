import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { MotionProvider } from '@/components/providers/motion-provider'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { Analytics } from '@/components/tracking/analytics'
import { site } from '@/config/site'
import './globals.css'

/*
 * Baloo Tammudu 2, a fonte do manual, hospedada aqui só com as letras latinas
 * (38 kB, pesos 400 a 800).
 *
 * Por que não next/font/google: é uma fonte télugo, e as métricas verticais
 * reservam espaço pros caracteres télugos (ascender 1177, descender 1119 em
 * 1000). O texto latino fica deslocado pra cima dentro da própria caixa, e todo
 * botão, selo e pílula sai desalinhado. Os overrides abaixo recentram a caixa
 * na altura das maiúsculas (0 a 602) e dos acentos (até 820).
 */
const baloo = localFont({
  src: './fonts/baloo-tammudu-2-latin.woff2',
  weight: '400 800',
  variable: '--font-baloo',
  display: 'swap',
  declarations: [
    { prop: 'ascent-override', value: '95%' },
    { prop: 'descent-override', value: '35%' },
    { prop: 'line-gap-override', value: '0%' },
  ],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  themeColor: '#752996',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={baloo.variable}>
      <body>
        <MotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
