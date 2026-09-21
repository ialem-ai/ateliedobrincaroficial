import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from './google-analytics'
import { MetaPixel } from './meta-pixel'

/**
 * Agregador de tracking. Vercel Analytics e Speed Insights são plug-and-play em qualquer deploy
 * Vercel sem env var. Meta Pixel e GA4 só ativam se as envvars existirem.
 */
export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
      <MetaPixel />
      <GoogleAnalytics />
    </>
  )
}

/**
 * Helpers pra eventos custom no client. Importe onde precisar trackar.
 *
 * Exemplos:
 *   trackLead({ value: 64.90, currency: 'BRL' })
 *   trackPurchase({ value: 64.90, currency: 'BRL' })
 *   trackEvent('CTA_click', { source: 'hero' })
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export function trackLead(params?: { value?: number; currency?: string }) {
  if (typeof window === 'undefined') return
  window.fbq?.('track', 'Lead', params)
  window.gtag?.('event', 'generate_lead', params)
}

export function trackPurchase(params: { value: number; currency: string }) {
  if (typeof window === 'undefined') return
  window.fbq?.('track', 'Purchase', params)
  window.gtag?.('event', 'purchase', params)
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.fbq?.('trackCustom', name, params)
  window.gtag?.('event', name, params)
}
