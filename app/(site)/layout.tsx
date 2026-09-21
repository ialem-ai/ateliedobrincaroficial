import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { OrganizationJsonLd } from '@/components/seo/json-ld'
import { site } from '@/config/site'

const NAV = [
  { label: 'A proposta', href: '/proposta' },
  { label: 'Turmas', href: '/turmas' },
  { label: 'Visite', href: '/visite' },
]

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        brand={{ label: site.name, logo: '/brand/logo-principal.png' }}
        nav={NAV}
        cta={{ label: site.cta.primary, href: '/visite#visita' }}
      />
      <main>{children}</main>
      <Footer />
      <OrganizationJsonLd />
    </>
  )
}
