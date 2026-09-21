import Link from 'next/link'
import { Brilho } from '@/components/effects/brilho'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'

/** E10 · ficha estilo cardápio: turma · pontilhado · faixa etária. Bloco Rosa Baby. */
export function TurmasFicha({
  titulo,
  itens,
  nota,
  comLink = true,
}: {
  titulo: string
  itens: readonly { nome: string; faixa: string }[]
  nota?: string
  comLink?: boolean
}) {
  return (
    <section id="turmas" className="scroll-mt-8 py-14 md:py-20">
      <Container>
        <div className="rounded-[var(--radius-card)] bg-[var(--color-baby)] px-6 py-10 md:px-14 md:py-14">
          <SlideUp className="text-h2 text-[var(--color-ink)]">{titulo}</SlideUp>
          <dl className="mt-8">
            {itens.map((t) => (
              <div
                key={t.nome}
                className="flex flex-col gap-1 border-[var(--color-ink)]/15 border-b py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-3"
              >
                <dt className="whitespace-nowrap font-extrabold text-[var(--color-ink)] text-xl md:text-2xl">
                  {t.nome}
                </dt>
                <span
                  aria-hidden
                  className="mb-1.5 hidden min-w-6 flex-1 border-[var(--color-ink)]/40 border-b-2 border-dotted sm:block"
                />
                <dd className="font-bold sm:text-right text-[var(--color-ink)] md:text-lg">
                  <Brilho>{t.faixa}</Brilho>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            {nota ? <p className="text-[var(--color-ink)]/80">{nota}</p> : <span />}
            {comLink ? (
              <Link
                href="/turmas"
                className="font-extrabold text-[var(--color-ink)] underline decoration-[3px] underline-offset-[6px]"
              >
                Ver as turmas
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
