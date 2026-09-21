import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { Olhinhos, SeloGirando } from '@/components/atelie/marca'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { addressLine, site, wa } from '@/config/site'
import { form, manutencao, waTexto } from '@/lib/content/copy'

/**
 * Home enquanto o institucional está fechado (site.manutencao). Mesma
 * identidade do site novo; leva pra LP (/visita) e pro WhatsApp.
 */
export function Manutencao() {
  return (
    <section className="flex min-h-[100svh] items-center py-12">
      <Container className="grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {/* biome-ignore lint/performance/noImgElement: logo local, tamanho fixo */}
          <img
            src="/brand/logo-principal.png"
            alt={site.name}
            width={220}
            height={92}
            className="mb-10 h-auto w-[200px]"
          />
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-gema)] px-4 py-2 font-bold text-[var(--color-ink)] text-sm">
            <span aria-hidden className="size-2 rounded-full bg-[var(--color-ink)]" />
            {manutencao.selo}
          </p>
          <h1 className="font-extrabold text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[1] tracking-[-0.03em]">
            {manutencao.titulo}
          </h1>
          <p className="mt-6 max-w-[44ch] text-[var(--color-ink-soft)] text-lg md:text-xl">
            {manutencao.apoio}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href="/visita" size="lg">
              {manutencao.conhecer}
            </ButtonLink>
            <a
              href={wa(waTexto.site)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center font-extrabold text-[var(--color-violeta)] underline decoration-[3px] decoration-[var(--color-menta)] underline-offset-[6px]"
            >
              {form.whatsappBotao} · {site.phone}
            </a>
          </div>
          <address className="mt-10 flex gap-2 text-[var(--color-ink-soft)] not-italic">
            <MapPin aria-hidden className="mt-0.5 size-5 shrink-0" />
            <span>
              {addressLine} ·{' '}
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--color-violeta)]"
              >
                {site.social.instagramHandle}
              </a>
            </span>
          </address>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[440px] md:col-span-5">
          <div
            aria-hidden
            className="mancha-2 absolute inset-[6%] rotate-6 bg-[var(--color-menta)]"
          />
          <div className="mancha-1 absolute inset-[2%_8%_10%_4%] overflow-hidden">
            <Image
              src="/fotos/tinta-azul.jpg"
              alt="Bebê sorrindo, com as mãos cobertas de tinta azul"
              fill
              priority
              sizes="(min-width: 768px) 36vw, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <Olhinhos className="absolute top-[-3%] right-[30%] w-[20%]" />
          <SeloGirando className="absolute bottom-0 left-0 w-[28%]" />
        </div>
      </Container>
    </section>
  )
}
