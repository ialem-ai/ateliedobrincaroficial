import type { Metadata } from 'next'
import Link from 'next/link'
import { Agendar } from '@/components/atelie/agendar'
import { Hero } from '@/components/atelie/hero'
import { NovoEspaco } from '@/components/atelie/novo-espaco'
import { PropostaLista } from '@/components/atelie/proposta-lista'
import { Rotina } from '@/components/atelie/rotina'
import { TurmasFicha } from '@/components/atelie/turmas-ficha'
import { StickyCTA } from '@/components/layout/sticky-cta'
import { Container } from '@/components/ui/container'
import { site } from '@/config/site'
import { home, lp } from '@/lib/content/copy'

export const metadata: Metadata = {
  title: { absolute: lp.meta.title },
  description: lp.meta.description,
  alternates: { canonical: '/visita' },
}

/*
 * LP de tráfego pago (Meta Ads): agendar visita. Sem header, barra fixa de CTA.
 * 01 hero        E02  logo no topo + manchete + foto em mancha
 * 02 proposta    E06  lista numerada (sem link pro site: link de fuga)
 * 03 turmas      E10  ficha
 * 04 rotina      E20  contact sheet
 * 05 novo espaço E03  split com bloco gema
 * 06 visita      E17  formulário
 */
export default function LpVisita() {
  return (
    <>
      <Hero
        titulo={lp.hero.titulo}
        tituloOnda={lp.hero.tituloOnda}
        apoio={lp.hero.apoio}
        topo={
          // biome-ignore lint/performance/noImgElement: logo local, tamanho fixo
          <img
            src="/brand/logo-principal.png"
            alt={site.name}
            width={180}
            height={75}
            className="mb-8 h-auto w-[180px]"
          />
        }
      />
      <PropostaLista
        titulo={home.proposta.titulo}
        itens={home.proposta.itens}
        referencias={home.proposta.referencias}
      />
      <TurmasFicha
        titulo={home.turmas.titulo}
        itens={home.turmas.itens}
        nota={home.turmas.nota}
        comLink={false}
      />
      <Rotina titulo={home.rotina.titulo} />
      <NovoEspaco />
      <Agendar origem="lp" />
      <footer className="pt-10 pb-28 md:pb-10">
        <Container className="text-[var(--color-ink-soft)] text-sm">
          {site.legalName} · CNPJ {site.cnpj} ·{' '}
          <Link href="/privacidade" className="underline">
            Privacidade
          </Link>
        </Container>
      </footer>
      <StickyCTA />
    </>
  )
}
