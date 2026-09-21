/**
 * Régua de telefone (copiada da The Simple, onde foi corrigida).
 *
 * Estava duplicada e errada nos dois: a ativação tinha `celularValido` +
 * `telefoneE164`, e a rota de eventos tinha um `normalizaTelefone` próprio com
 * régua de "10 dígitos ou mais". As duas cópias tiravam o 55 da frente com
 * `startsWith('55')`, e é aí que mora o defeito.
 *
 * ⚠️ **55 é código do Brasil E é DDD de Santa Maria/RS.** Um celular real de lá
 * tem 11 dígitos nacionais que já começam com 55 (`55 99999-8877`), então tirar
 * o prefixo pelo `startsWith` comia o DDD da pessoa: sobravam 9 dígitos, a
 * ativação recusava com "Faltam dígitos no número" e ninguém daquele DDD
 * conseguia se cadastrar. O E164 saía sem país junto.
 *
 * A saída é decidir pelo COMPRIMENTO, não pelo prefixo: só é código de país se
 * o número inteiro tiver 12 ou 13 dígitos.
 */

/** DDDs que existem no Brasil. O resto é dedo errado ou número inventado. */
export const DDDS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77,
  79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
])

/**
 * DDD + número, sem o código do país.
 *
 * 13 dígitos = 55 + DDD + 9 dígitos (celular com país). 12 = 55 + DDD + 8
 * (fixo, ou celular antigo sem o nono). Menos que isso, o 55 da frente é DDD.
 */
export function digitosNacionais(v: string) {
  const d = v.replace(/\D/g, '')
  return (d.length === 12 || d.length === 13) && d.startsWith('55') ? d.slice(2) : d
}

/** Celular brasileiro: 11 dígitos, DDD real, e o 9 na frente do número. */
export function celularValido(v: string) {
  const n = digitosNacionais(v)
  if (n.length < 11) return 'Faltam dígitos no número.'
  if (n.length > 11) return 'Número com dígitos demais.'
  if (!DDDS.has(Number(n.slice(0, 2)))) return 'Esse DDD não existe.'
  if (n[2] !== '9') return 'Precisa ser um celular, com o 9 na frente.'
  // 999999999, 900000000: teclado batido, não é número.
  if (/^(\d)\1+$/.test(n.slice(2))) return 'Esse número não parece real.'
  return null
}

/** Só dígitos, com 55 na frente. É a chave que evita lead duplicado. */
export function telefoneE164(v: string) {
  return `55${digitosNacionais(v)}`
}
