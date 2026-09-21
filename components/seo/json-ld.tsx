import { site } from '@/config/site'

/**
 * ChildCare é o tipo schema.org para espaço de cuidado infantil. Sem
 * aggregateRating: só entra com nota real do Google visível na página.
 * [A_DEFINIR] openingHoursSpecification e geo, quando o horário for confirmado.
 */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    '@id': `${site.url}/#atelie`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/brand/logo-principal.png`,
    image: [`${site.url}/fotos/tinta-azul.jpg`, `${site.url}/fotos/novo-espaco.jpg`],
    description: site.description,
    telephone: '+556934222382',
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: 'Ji-Paraná',
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'BR',
    },
    areaServed: { '@type': 'City', name: 'Ji-Paraná' },
    sameAs: [site.social.instagram],
  }
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
