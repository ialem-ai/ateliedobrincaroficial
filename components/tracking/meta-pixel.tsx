'use client'

import Script from 'next/script'
import { site } from '@/config/site'

/**
 * Meta Pixel · ativo apenas se NEXT_PUBLIC_META_PIXEL_ID estiver setado.
 * Eventos custom: fbq('track', 'Lead'), fbq('track', 'Purchase').
 */
export function MetaPixel() {
  if (!site.metaPixelId) return null

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: snippet oficial, ID vem de env
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${site.metaPixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* biome-ignore lint/performance/noImgElement: pixel noscript 1x1 */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${site.metaPixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
