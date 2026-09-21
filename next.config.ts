import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,

  // Redirect da raiz: só faz sentido quando a LP mora numa sub-rota e não
  // existe home. Em site institucional isso QUEBRA a home em silêncio
  // (a raiz responde 307 e nunca renderiza). Descomente só se for o caso.
  //
  // async redirects() {
  //   return [{ source: '/', destination: '/livro', permanent: false }]
  // },
}

export default nextConfig
