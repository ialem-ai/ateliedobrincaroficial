import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { leadSchema } from '@/lib/lead-schema'
import { telefoneE164 } from '@/lib/telefone'

/**
 * Agendar visita · dois canais em paralelo, um não derruba o outro:
 *  1) Aba Leads do Portal do Cliente (conta do Ateliê)
 *  2) E-mail pro Ateliê
 *
 * Contrato do portal (portal-cliente/app/api/crm/ingest/form/route.ts):
 *  - a chave identifica o cliente; só roda no servidor, nunca no navegador
 *  - `lead_id` com PREFIXO: o dedupe do portal busca external_ref sem
 *    client_id, e telefone puro sobrescreveria lead de outro cliente
 *  - campos fora da lista conhecida viram "Respostas do formulário" no card
 *  - `origem` não pode conter meta/face/insta, senão vira "Meta Ads"
 *  - o portal NÃO manda e-mail por essa rota: o e-mail sai daqui
 */
const PORTAL_INGEST = 'https://crm.improvemarketing.com.br/api/crm/ingest/form'

const ORIGEM: Record<string, string> = {
  site: 'Site · Agendar visita',
  visite: 'Site · Página Visite',
  lp: 'Página de anúncio · Agendar visita',
}

export async function POST(req: Request) {
  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ error: 'invalid_input' }, { status: 400 })
  }
  const d = parsed.data

  const suspeito = Boolean(d.adb_confere)
  if (suspeito) console.warn('[lead] campo-armadilha preenchido:', req.headers.get('user-agent'))

  const telefone = telefoneE164(d.whatsapp)
  const referer = req.headers.get('referer') || ''
  const origem = ORIGEM[d.origem] || ORIGEM.site
  const tarefas: Promise<unknown>[] = []

  // 1) Portal do Cliente
  const portalKey = process.env.PORTAL_CRM_KEY || ''
  if (portalKey) {
    tarefas.push(
      fetch(PORTAL_INGEST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({
          key: portalKey,
          lead_id: `adb-${telefone}`,
          name: d.nome,
          phone: telefone,
          origem,
          page: d.pagina || '/',
          referer,
          'Idade da criança': d.idade,
          ...(suspeito ? { Conferir: 'campo escondido veio preenchido, pode ser robô' } : {}),
        }),
      }).then((r) => {
        if (!r.ok) throw new Error(`portal ${r.status}`)
        return r
      })
    )
  }

  // 2) E-mail pro Ateliê
  const resendKey = process.env.RESEND_API_KEY || ''
  const para = process.env.LEAD_NOTIFICATION_EMAIL || ''
  const cc = process.env.LEAD_NOTIFICATION_CC || ''
  const from =
    process.env.LEAD_EMAIL_FROM || 'Ateliê do Brincar <visitas@portal.improvemarketing.com.br>'
  if (resendKey && para) {
    const resend = new Resend(resendKey)
    tarefas.push(
      resend.emails
        .send({
          from,
          to: para,
          ...(cc ? { cc } : {}),
          subject: `${suspeito ? '[CONFERIR] ' : ''}Pedido de visita · ${d.nome} · ${d.idade}`,
          text: [
            ...(suspeito
              ? [
                  'Um campo escondido do formulário veio preenchido: pode ser robô. Confira antes de chamar.',
                  '',
                ]
              : []),
            'Uma família pediu para agendar uma visita pelo site.',
            '',
            `Nome: ${d.nome}`,
            `WhatsApp: ${d.whatsapp}`,
            `Idade da criança: ${d.idade}`,
            `Veio de: ${origem}`,
            '',
            `Chamar no WhatsApp: https://wa.me/${telefone}`,
          ].join('\n'),
        })
        .then((r) => {
          if (r.error) throw new Error(`resend ${r.error.message}`)
          return r
        })
    )
  }

  if (tarefas.length === 0) {
    console.warn('[lead] nenhum canal configurado')
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  const r = await Promise.allSettled(tarefas)
  for (const x of r) if (x.status === 'rejected') console.error('[lead] canal falhou:', x.reason)
  if (!r.some((x) => x.status === 'fulfilled')) {
    return NextResponse.json({ error: 'delivery_failed' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
