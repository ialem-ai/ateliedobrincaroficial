'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { trackEvent, trackLead } from '@/components/tracking/analytics'
import { Button } from '@/components/ui/button'
import { wa } from '@/config/site'
import { form, waTexto } from '@/lib/content/copy'
import { type LeadInput, leadSchema } from '@/lib/lead-schema'

/** (69) 99999-9999 enquanto digita; aceita colar com ou sem formatação. */
function mascara(v: string) {
  let d = v.replace(/\D/g, '')
  if ((d.length === 12 || d.length === 13) && d.startsWith('55')) d = d.slice(2)
  d = d.slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const campo =
  'block w-full rounded-2xl border-2 border-transparent bg-white px-4 py-3.5 text-[var(--color-ink)] text-lg outline-none transition-colors placeholder:text-[var(--color-ink-soft)]/60 focus:border-[var(--color-gema)] aria-[invalid=true]:border-[var(--color-mecanica)]'

/**
 * `seguirNoWhatsApp`: depois de enviar, o próximo passo é o WhatsApp, com a
 * mensagem já preenchida com o nome e a idade. Na LP é a ação única da página:
 * o contato cai no portal E a conversa começa, sem a pessoa escolher entre dois
 * caminhos (Brunson: um CTA por página).
 */
export function VisitaForm({
  origem,
  seguirNoWhatsApp = false,
  rotuloEnviar = form.enviar,
}: {
  origem: 'site' | 'lp' | 'visite'
  seguirNoWhatsApp?: boolean
  /** o mesmo texto do CTA da página (na LP: "Agendar minha visita") */
  rotuloEnviar?: string
}) {
  const [estado, setEstado] = useState<'livre' | 'ok' | 'erro'>('livre')
  const [enviado, setEnviado] = useState<{ nome: string; idade: string } | null>(null)
  const comecou = useRef(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: 'onBlur',
    defaultValues: { origem },
  })

  const onFocus = () => {
    if (comecou.current) return
    comecou.current = true
    trackEvent('form_start', { origem })
  }

  const onSubmit = async (data: LeadInput) => {
    setEstado('livre')
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, origem, pagina: window.location.pathname }),
      })
      if (!r.ok) throw new Error(String(r.status))
      trackLead()
      setEnviado({ nome: data.nome, idade: data.idade })
      setEstado('ok')
    } catch {
      setEstado('erro')
    }
  }

  if (estado === 'ok') {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-card)] bg-white p-8 text-[var(--color-ink)] md:p-10"
      >
        <CheckCircle2 aria-hidden className="size-10 text-[var(--color-menta)]" />
        <p className="mt-4 font-extrabold text-2xl text-[var(--color-violeta)]">
          {form.sucessoTitulo}
        </p>
        {seguirNoWhatsApp && enviado ? (
          <>
            <p className="mt-2 text-lg">{form.seguirTexto}</p>
            <a
              href={wa(form.seguirMensagem(enviado.nome, enviado.idade))}
              target="_blank"
              rel="noopener noreferrer"
              data-cta={`form-${origem}-whatsapp`}
              onClick={() => trackEvent('whatsapp_click', { origem: `form-${origem}` })}
              className="mt-6 inline-flex min-h-[54px] w-full items-center justify-center rounded-[var(--radius-btn)] bg-[var(--color-menta)] px-6 py-3.5 font-extrabold text-[var(--color-ink)] text-lg shadow-[0_4px_0_#04785f]"
            >
              {form.seguirBotao}
            </a>
          </>
        ) : (
          <p className="mt-2 text-lg">{form.sucessoTexto}</p>
        )}
      </div>
    )
  }

  const whatsappReg = register('whatsapp')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={onFocus}
      noValidate
      className="rounded-[var(--radius-card)] bg-white/10 p-5 md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor={`nome-${origem}`} className="mb-2 block font-bold">
            {form.nome}
          </label>
          <input
            id={`nome-${origem}`}
            autoComplete="name"
            className={campo}
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? `nome-${origem}-erro` : undefined}
            {...register('nome')}
          />
          {errors.nome ? (
            <p id={`nome-${origem}-erro`} className="mt-2 font-bold text-[var(--color-gema)]">
              {errors.nome.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`whatsapp-${origem}`} className="mb-2 block font-bold">
            {form.whatsapp}
          </label>
          <input
            id={`whatsapp-${origem}`}
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="(69) 99999-9999"
            className={campo}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? `whatsapp-${origem}-erro` : undefined}
            {...whatsappReg}
            onChange={(e) => {
              setValue('whatsapp', mascara(e.target.value))
            }}
          />
          {errors.whatsapp ? (
            <p id={`whatsapp-${origem}-erro`} className="mt-2 font-bold text-[var(--color-gema)]">
              {errors.whatsapp.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`idade-${origem}`} className="mb-2 block font-bold">
            {form.idade}
          </label>
          <select
            id={`idade-${origem}`}
            defaultValue=""
            className={`${campo} appearance-none`}
            aria-invalid={Boolean(errors.idade)}
            aria-describedby={errors.idade ? `idade-${origem}-erro` : undefined}
            {...register('idade')}
          >
            <option value="" disabled>
              Escolha
            </option>
            {form.idades.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.idade ? (
            <p id={`idade-${origem}-erro`} className="mt-2 font-bold text-[var(--color-gema)]">
              {errors.idade.message}
            </p>
          ) : null}
        </div>

        {/* Campo-armadilha. Fora da tela e fora do teclado. Não barra nada. */}
        <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label htmlFor={`adb-${origem}`}>Não preencha</label>
          <input
            id={`adb-${origem}`}
            tabIndex={-1}
            autoComplete="off"
            {...register('adb_confere')}
          />
        </div>

        <Button
          type="submit"
          variant="claro"
          size="lg"
          disabled={isSubmitting}
          data-cta={`form-${origem}`}
        >
          {isSubmitting ? form.enviando : rotuloEnviar}
        </Button>

        {estado === 'erro' ? (
          <p role="alert" className="font-bold">
            {form.erro}{' '}
            <a
              href={wa(origem === 'lp' ? waTexto.lp : waTexto.site)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--color-gema)] decoration-[3px] underline-offset-4"
            >
              {form.whatsappBotao}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  )
}
