import { Olhinhos } from '@/components/atelie/marca'
import { VisitaForm } from '@/components/atelie/visita-form'
import { FundoGradiente } from '@/components/effects/fundo-gradiente'
import { SlideUp } from '@/components/effects/slide-up'
import { Container } from '@/components/ui/container'
import { addressLine, site, wa } from '@/config/site'
import { form, home, waTexto } from '@/lib/content/copy'

/** E17 · bloco violeta com o formulário. Manchas da marca flutuando, com pausa. */
export function Agendar({
  origem = 'site',
  titulo = home.visita.titulo,
  texto = home.visita.texto,
  soFormulario = false,
  rotuloEnviar,
}: {
  origem?: 'site' | 'lp' | 'visite'
  titulo?: string
  texto?: string
  /** LP: sem o atalho de WhatsApp ao lado; o formulário termina no WhatsApp */
  soFormulario?: boolean
  rotuloEnviar?: string
}) {
  return (
    <section id="visita" className="scroll-mt-24 px-3 py-3 md:px-6 md:py-6">
      <FundoGradiente className="rounded-[var(--radius-card)] pt-16 pb-24 text-white md:pt-24 md:pb-28">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <Olhinhos className="-top-12 absolute left-0 w-14 md:-top-16 md:w-20" />
            <SlideUp className="text-h1 max-w-[12ch] text-white">{titulo}</SlideUp>
            <p className="mt-5 max-w-[36ch] text-lg text-white/90">{texto}</p>
            {soFormulario ? null : (
              <div className="mt-8 text-white/90">
                <p className="font-bold text-white">{form.whatsappAlternativa}</p>
                <a
                  href={wa(origem === 'lp' ? waTexto.lp : waTexto.site)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`whatsapp-${origem}`}
                  className="mt-1 inline-flex min-h-[44px] items-center font-extrabold text-white underline decoration-[3px] decoration-[var(--color-gema)] underline-offset-[6px]"
                >
                  {form.whatsappBotao} · {site.phone}
                </a>
                <p className="mt-4 text-sm text-white/75">{addressLine}</p>
              </div>
            )}
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <VisitaForm
              origem={origem}
              seguirNoWhatsApp={soFormulario}
              {...(rotuloEnviar ? { rotuloEnviar } : {})}
            />
          </div>
        </Container>
      </FundoGradiente>
    </section>
  )
}
