import type { Metadata } from 'next'
import Link from 'next/link'
import { Agendar } from '@/components/atelie/agendar'
import { StickyCTA } from '@/components/layout/sticky-cta'
import { Duvidas } from '@/components/lp/duvidas'
import { Historia } from '@/components/lp/historia'
import { LpHero } from '@/components/lp/lp-hero'
import { Passos } from '@/components/lp/passos'
import { Prova } from '@/components/lp/prova'
import { Container } from '@/components/ui/container'
import { site } from '@/config/site'
import { lp } from '@/lib/content/copy'

export const metadata: Metadata = {
  title: { absolute: lp.meta.title },
  description: lp.meta.description,
  alternates: { canonical: '/visita' },
}

/*
 * LP de tráfego pago (Meta Ads). Sem header, uma ação só (formulário que
 * termina no WhatsApp), barra fixa levando ao formulário.
 *
 * 01 gancho     faixa de chamada + manchete + foto horizontal em mancha
 * 02 história   bloco menta, frase palavra por palavra
 * 03 dúvidas    E19 sticky lateral, 3 perguntas com foto
 * 04 prova      E15 carrossel com scroll-snap
 * 05 oferta     E08 linha do tempo em 4 passos
 * 06 visita     E17 degradê + formulário
 */
export default function LpVisita() {
  return (
    <>
      <LpHero />
      <Historia />
      <Duvidas />
      <Prova />
      <Passos />
      <Agendar
        origem="lp"
        titulo={lp.formulario.titulo}
        texto={lp.formulario.texto}
        rotuloEnviar={lp.hero.cta}
        soFormulario
      />
      <footer className="pt-10 pb-28 md:pb-10">
        <Container className="text-[var(--color-ink-soft)] text-sm">
          {site.legalName} · CNPJ {site.cnpj} ·{' '}
          <Link href="/privacidade" className="underline">
            Privacidade
          </Link>
        </Container>
      </footer>
      <StickyCTA label={lp.barra} />
    </>
  )
}
