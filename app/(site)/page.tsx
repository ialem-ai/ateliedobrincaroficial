import type { Metadata } from 'next'
import { Agendar } from '@/components/atelie/agendar'
import { Brinquedos } from '@/components/atelie/brinquedos'
import { Declaracao } from '@/components/atelie/declaracao'
import { Hero } from '@/components/atelie/hero'
import { Manutencao } from '@/components/atelie/manutencao'
import { NovoEspaco } from '@/components/atelie/novo-espaco'
import { Palavras } from '@/components/atelie/palavras'
import { PropostaLista } from '@/components/atelie/proposta-lista'
import { Rotina } from '@/components/atelie/rotina'
import { TurmasFicha } from '@/components/atelie/turmas-ficha'
import { site } from '@/config/site'
import { home } from '@/lib/content/copy'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  // a página de manutenção não deve aparecer no Google
  ...(site.manutencao ? { robots: { index: false, follow: true } } : {}),
}

/*
 * Mapa do ritmo (nenhum vizinho com o mesmo esqueleto):
 * 01 hero          E02  foto em mancha + chapa gema + manchete à esquerda
 * 02 palavras      E09  faixa menta correndo, sem título
 * 03 declaração    E05  frase gigante sozinha, respiro
 * 04 proposta      E06  split 5/7, lista numerada 01-04, fundo branco
 * 05 turmas        E10  ficha tipo cardápio em card rosa baby
 * 06 rotina        E20  contact sheet irregular de fotos reais
 * 07 novo espaço   E03  split 7/5, foto + bloco gema
 * 08 brinquedos         faixa tracejada curta, selo "em breve"
 * 09 visita        E17  bloco violeta com formulário
 */
export default function HomePage() {
  if (site.manutencao) return <Manutencao />

  return (
    <>
      <Hero />
      <Palavras itens={home.palavras} />
      <Declaracao frase={home.declaracao.frase} />
      <PropostaLista {...home.proposta} />
      <TurmasFicha titulo={home.turmas.titulo} itens={home.turmas.itens} nota={home.turmas.nota} />
      <Rotina titulo={home.rotina.titulo} apoio={home.rotina.apoio} />
      <NovoEspaco />
      <Brinquedos />
      <Agendar origem="site" />
    </>
  )
}
