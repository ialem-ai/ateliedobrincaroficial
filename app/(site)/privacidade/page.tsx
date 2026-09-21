import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacidade',
  description: 'Como o Ateliê do Brincar trata os dados enviados pelo site.',
  alternates: { canonical: '/privacidade' },
}

export default function PrivacidadePage() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="max-w-[680px] space-y-5 text-lg leading-relaxed">
          <h1 className="text-h1">Privacidade</h1>
          <p>
            Esta página explica como o {site.legalName} (CNPJ {site.cnpj}) trata os dados que você
            envia pelo site, de acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
          </p>
          <h2 className="text-h2 pt-4">O que coletamos</h2>
          <p>
            No formulário de visita: seu nome, seu WhatsApp e a faixa de idade da criança. Não
            pedimos o nome da criança nem nenhum outro dado dela.
          </p>
          <h2 className="text-h2 pt-4">Para que usamos</h2>
          <p>
            Só para entrar em contato e combinar a visita que você pediu. Os dados ficam no e-mail
            do Ateliê e no sistema de atendimento usado pela nossa agência de marketing, que
            trabalha para o Ateliê.
          </p>
          <h2 className="text-h2 pt-4">Medição de acesso</h2>
          <p>
            O site usa ferramentas de medição de visitas (Vercel Analytics e, quando ativadas,
            Google Analytics e Meta Pixel) para entender quais páginas são mais úteis. Elas não
            recebem seu nome nem seu telefone.
          </p>
          <h2 className="text-h2 pt-4">Seus direitos</h2>
          <p>
            Você pode pedir a qualquer momento para ver, corrigir ou apagar seus dados. Escreva para{' '}
            <a
              href={`mailto:${site.email}`}
              className="font-bold text-[var(--color-violeta)] underline"
            >
              {site.email}
            </a>{' '}
            ou ligue para {site.phone}.
          </p>
        </div>
      </Container>
    </section>
  )
}
