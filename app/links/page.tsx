import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { Brilho } from '@/components/effects/brilho'
import { site, wa } from '@/config/site'
import { links, waTexto } from '@/lib/content/copy'

/**
 * Linkbio do Instagram. noindex, fora do sitemap, 4 links.
 * Padrão da casa: card horizontal com foto, altura fixa (variants/linkbio.md).
 */
export const metadata: Metadata = {
  title: 'Links',
  description: links.frase,
  robots: { index: false, follow: true },
  alternates: { canonical: '/links' },
}

const [visita, endereco, proposta, turmas] = links.itens

const LINKS = [
  {
    ...visita,
    href: wa(waTexto.links),
    foto: '/fotos/tinta-azul.jpg',
    pos: '50% 30%',
    cor: 'var(--color-gema)',
  },
  {
    ...endereco,
    href: site.mapsUrl,
    foto: '/fotos/novo-espaco.jpg',
    pos: '60% 50%',
    cor: 'var(--color-ceu)',
  },
  {
    ...proposta,
    href: site.manutencao ? '/visita' : '/proposta',
    foto: '/fotos/minhocario.jpg',
    pos: '50% 60%',
    cor: 'var(--color-baby)',
  },
  {
    ...turmas,
    href: site.manutencao ? '/visita#turmas' : '/turmas',
    foto: '/fotos/boliche.jpg',
    pos: '50% 55%',
    cor: 'var(--color-magenta)',
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-[100svh] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[520px] px-5">
        <div className="flex flex-col items-center text-center">
          {/* biome-ignore lint/performance/noImgElement: logo local leve */}
          <img
            src="/brand/logo-principal.png"
            alt={site.name}
            width={240}
            height={100}
            className="h-auto w-[240px]"
          />
          <p className="mt-6 max-w-[34ch] text-[var(--color-ink-soft)] text-lg">{links.frase}</p>
        </div>

        <ul className="mt-10 flex flex-col gap-4">
          {LINKS.map((l, i) => {
            const externo = l.href.startsWith('http')
            return (
              <Reveal as="li" key={l.titulo} delay={i * 0.05}>
                <a
                  href={l.href}
                  data-cta={`links-${i + 1}`}
                  {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-[200px] items-stretch overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[0_4px_0_var(--color-rule)] transition-transform active:translate-y-[3px] md:h-[216px]"
                >
                  <div className="relative w-[38%] shrink-0 overflow-hidden">
                    <Image
                      src={l.foto}
                      alt=""
                      fill
                      sizes="200px"
                      priority={i < 2}
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                      style={{ objectPosition: l.pos }}
                    />
                  </div>
                  <div className="flex w-[62%] flex-col justify-center gap-1.5 p-5">
                    <span
                      aria-hidden
                      className="mancha-1 mb-1 block size-5"
                      style={{ background: l.cor }}
                    />
                    <h2 className="text-[1.45rem] leading-[1.05]">{l.titulo}</h2>
                    <p className="text-[var(--color-ink-soft)] leading-snug">{l.texto}</p>
                    <span className="mt-1 font-extrabold text-[var(--color-violeta)] text-sm">
                      {i === 0 ? <Brilho>{l.acao}</Brilho> : l.acao}
                      <span
                        aria-hidden
                        className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </ul>

        <p className="mt-10 text-center">
          <a
            href="/"
            className="font-bold text-[var(--color-violeta)] underline underline-offset-4"
          >
            ateliedobrincaroficial.com.br
          </a>
        </p>
      </div>
    </main>
  )
}
