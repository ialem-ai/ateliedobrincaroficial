import { Reveal } from '@/components/animations/reveal'
import { Container } from '@/components/ui/container'

/** E05 · declaração tipográfica sozinha na tela. */
export function Declaracao({ frase }: { frase: string }) {
  return (
    <section className="py-28 md:py-44">
      <Container>
        <Reveal>
          <p className="max-w-[20ch] font-extrabold text-[clamp(2.25rem,6vw,5rem)] text-[var(--color-violeta)] leading-[1.04] tracking-[-0.03em] [text-wrap:balance]">
            {frase}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
