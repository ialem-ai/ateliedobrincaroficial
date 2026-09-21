/**
 * Configuração central do site do Ateliê do Brincar.
 *
 * Fontes dos dados (21/09/2026):
 *  - Posicionamento, persona, produtos: ficha do cliente no Ops (client_profiles)
 *  - Endereço novo e datas: grupo "Improve & Ateliê - Mudança & Inauguração"
 *    (Ana Flávia, 10/09) e aviso do Ateliê no grupo de pais (15 e 16/09)
 *  - Turmas e faixas: Ateliê no grupo principal, 10/06/2026
 *  - Razão social e CNPJ: registro do domínio no Registro.br
 */

export const site = {
  name: 'Ateliê do Brincar',
  legalName: 'Ateliê do Brincar Ltda',
  cnpj: '27.902.614/0001-15',
  title: 'Ateliê do Brincar · Desenvolvimento infantil em Ji-Paraná',
  description:
    'Espaço de desenvolvimento infantil para crianças de 6 meses a 3 anos em Ji-Paraná/RO. Brincar livre, ambientes por atividade, horta e muito tempo ao ar livre.',

  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ateliedobrincaroficial.com.br',
  lpPath: '/visita',
  linksPath: '/links',

  /** Direção escolhida em 21/09: "Livro de histórias" (derivada do D3 bloco cromático). */
  theme: 'livro-de-historias',

  /**
   * Site institucional em manutenção: a home vira a página de manutenção e
   * /proposta, /turmas e /visite redirecionam pra ela. Continuam no ar a LP
   * (/visita), o linkbio (/links), a privacidade e o formulário.
   * Padrão LIGADO: env ausente não libera nada. Pra abrir: SITE_MANUTENCAO=false
   * no projeto da Vercel, ou trocar aqui e fazer push.
   */
  manutencao: process.env.SITE_MANUTENCAO !== 'false',

  ageRange: '6 meses a 3 anos',

  cta: {
    primary: 'Agendar uma visita',
    note: 'A equipe do Ateliê responde pelo WhatsApp e combina o melhor horário.',
  },

  /** (69) 3422-2382: WhatsApp Business no fixo do Ateliê. 55 + DDD + número. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '556934222382',
  phone: '(69) 3422-2382',
  phoneHref: 'tel:+556934222382',
  email: 'ateliedobrincaroficial@gmail.com',

  address: {
    street: 'Rua Mato Grosso, 1928',
    district: 'Casa Preta',
    city: 'Ji‑Paraná',
    state: 'RO',
    zip: '76907-616',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Mato+Grosso%2C+1928%2C+Casa+Preta%2C+Ji-Paran%C3%A1+-+RO%2C+76907-616',

  /** [A_DEFINIR] horário de funcionamento. Não aparece em nenhuma mensagem. */
  hours: null as null | string,

  social: {
    instagram: 'https://www.instagram.com/ateliedobrincaroficial/',
    instagramHandle: '@ateliedobrincaroficial',
    googleBusiness: '',
  },

  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
} as const

export const wa = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const addressLine = `${site.address.street} · ${site.address.district} · ${site.address.city}/${site.address.state}`
