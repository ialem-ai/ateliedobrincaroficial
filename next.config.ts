import type { NextConfig } from 'next'

const manutencao = process.env.SITE_MANUTENCAO !== 'false'

const nextConfig: NextConfig = {
  cacheComponents: true,

  // Em manutenção, as páginas do institucional voltam pra home (que mostra o
  // aviso). Temporário (307): quando abrir, o Google não guarda o desvio.
  async redirects() {
    if (!manutencao) return []
    return ['/proposta', '/turmas', '/visite'].map((source) => ({
      source,
      destination: '/',
      permanent: false,
    }))
  },

  // Redirect da raiz: só faz sentido quando a LP mora numa sub-rota e não
  // existe home. Em site institucional isso QUEBRA a home em silêncio
  // (a raiz responde 307 e nunca renderiza). Descomente só se for o caso.
  //
  // async redirects() {
  //   return [{ source: '/', destination: '/livro', permanent: false }]
  // },
}

export default nextConfig
