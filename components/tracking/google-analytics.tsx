'use client'

import Script from 'next/script'
import { site } from '@/config/site'

/**
 * GA4 · ativo apenas se NEXT_PUBLIC_GA_ID estiver setado (formato G-XXXXXXX).
 * Eventos custom via gtag('event', 'name', { ... }).
 */
export function GoogleAnalytics() {
  if (!site.gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: snippet oficial, ID vem de env
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gaId}', { anonymize_ip: true });
          `,
        }}
      />
    </>
  )
}
