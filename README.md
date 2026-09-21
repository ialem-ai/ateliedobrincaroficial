# Ateliê do Brincar · site

Site institucional, página de anúncio e linkbio do Ateliê do Brincar, espaço de
desenvolvimento infantil (6 meses a 3 anos) em Ji-Paraná/RO. Next.js 16 +
Tailwind v4, feito pela Improve.

## Rotas

| Rota | O que é | Google |
|---|---|---|
| `/` | Home | indexa |
| `/proposta` | A proposta pedagógica | indexa |
| `/turmas` | Berçário, Maternal I, Maternal II | indexa |
| `/visite` | Endereço novo, datas e formulário | indexa |
| `/privacidade` | LGPD | indexa |
| `/visita` | Página de anúncio (Meta Ads), sem menu | noindex |
| `/links` | Linkbio do Instagram | noindex |
| `/api/lead` | Formulário: grava no Portal do Cliente e manda e-mail | |

## Onde mexer

- Todo o texto: `lib/content/copy.ts`
- Endereço, telefone, datas: `config/site.ts`
- Cores e fonte do manual: `app/globals.css`
- Fotos: `public/fotos/`

## Rodar

```bash
npm install
cp .env.example .env.local   # preencher
npm run dev
```

Envvars em `.env.example`. A chave do portal (`PORTAL_CRM_KEY`) fica só no
servidor: nunca em variável `NEXT_PUBLIC_`.

## Identidade

Fonte Baloo Tammudu 2 e as 8 cores do Manual de Identidade Visual (p. 24 e 26).
O manual imprime o Amarelo Gema como `#Ed8500`, mas o RGB da mesma linha dá
`#EDB500`, que é o usado. A pasta `ARQUIVOS FINAIS ATELIÊ DO BRINCAR/` guarda o
material de origem e fica fora do Git.
