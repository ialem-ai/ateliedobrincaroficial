import { z } from 'zod'
import { form } from '@/lib/content/copy'
import { celularValido } from '@/lib/telefone'

/**
 * Formulário "agendar visita": três campos (conversion.md § 5).
 * `adb_confere` é o campo-armadilha. Nome fora do vocabulário de autofill, e
 * ele NÃO barra nada: só marca o e-mail como [CONFERIR]
 * (memória feedback_honeypot_nome_autofill).
 */
export const leadSchema = z.object({
  nome: z.string().trim().min(2, 'Escreva seu nome.').max(120),
  whatsapp: z
    .string()
    .trim()
    .superRefine((v, ctx) => {
      const erro = celularValido(v)
      if (erro) ctx.addIssue({ code: 'custom', message: erro })
    }),
  idade: z.enum(form.idades, { message: 'Escolha a idade da criança.' }),
  origem: z.enum(['site', 'lp', 'visite']).default('site'),
  pagina: z.string().max(300).optional(),
  adb_confere: z.string().max(500).optional(),
})

export type LeadInput = z.input<typeof leadSchema>
