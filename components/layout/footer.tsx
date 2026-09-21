import Link from 'next/link'
import { Suspense } from 'react'
import { Container } from '@/components/ui/container'
import { addressLine, site } from '@/config/site'
import { rodape } from '@/lib/content/copy'
import { FooterYear } from './footer-year'

export function Footer() {
  return (
    <footer className="pt-16 pb-28 md:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* biome-ignore lint/performance/noImgElement: logo local, tamanho fixo */}
            <img
              src="/brand/logo-principal.png"
              alt={site.name}
              width={200}
              height={84}
              className="h-auto w-[200px]"
            />
            <p className="mt-4 max-w-[30ch] text-[var(--color-ink-soft)]">{rodape.frase}</p>
          </div>
          <address className="not-italic md:col-span-4">
            <p className="font-extrabold text-[var(--color-violeta)]">{site.name}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block hover:underline"
            >
              {addressLine}
              <br />
              CEP {site.address.zip}
            </a>
            <a href={site.phoneHref} className="mt-2 block hover:underline">
              {site.phone}
            </a>
          </address>
          <div className="flex flex-col gap-2 md:col-span-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--color-violeta)] hover:underline"
            >
              {site.social.instagramHandle}
            </a>
            <Link href="/privacidade" className="text-[var(--color-ink-soft)] hover:underline">
              {rodape.privacidade}
            </Link>
          </div>
        </div>
        <p className="mt-12 border-[var(--color-rule)] border-t pt-6 text-[var(--color-ink-soft)] text-sm">
          ©{' '}
          <Suspense fallback="2026">
            <FooterYear />
          </Suspense>{' '}
          {site.legalName} · CNPJ {site.cnpj}
        </p>
      </Container>
    </footer>
  )
}
