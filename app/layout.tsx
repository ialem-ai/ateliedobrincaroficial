import type { Metadata, Viewport } from 'next'
import { Baloo_Tammudu_2 } from 'next/font/google'
import { MotionProvider } from '@/components/providers/motion-provider'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { Analytics } from '@/components/tracking/analytics'
import { site } from '@/config/site'
import './globals.css'

// A mesma fonte do manual. Variable (400 a 800), então não precisa de weight.
const baloo = Baloo_Tammudu_2({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-baloo',
  display: 'swap',
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
