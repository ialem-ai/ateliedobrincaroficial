import { Olhinhos } from '@/components/atelie/marca'
import { WordsStagger } from '@/components/effects/words-stagger'
import { Container } from '@/components/ui/container'

/** E05 · declaração tipográfica sozinha na tela, palavra por palavra ao rolar. */
export function Declaracao({ frase }: { frase: string }) {
  return (
    <section className="py-28 md:py-44">
      <Container>
        <div className="relative">
          <Olhinhos className="-top-12 absolute left-1 w-16 md:-top-16 md:w-24" />
          <WordsStagger className="max-w-[16ch] font-extrabold text-[clamp(2.4rem,6.4vw,5.4rem)] text-[var(--color-violeta)] leading-[1.02] tracking-[-0.03em]">
            {frase}
          </WordsStagger>
        </div>
      </Container>
    </section>
  )
}
