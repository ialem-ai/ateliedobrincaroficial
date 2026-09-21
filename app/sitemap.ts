import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

/** Só rotas indexáveis. LP (/visita) e linkbio (/links) ficam de fora. */
export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = ['', '/proposta', '/turmas', '/visite', '/privacidade']
  return rotas.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.7,
  }))
}
