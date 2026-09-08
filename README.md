# Ateliê do Brincar — site

Página institucional do Ateliê do Brincar, creche de desenvolvimento da primeira
infância (6 meses a 3 anos) em Ji-Paraná/RO. No momento, uma página única de
"site em construção" — HTML e CSS estáticos, sem build.

## Estrutura

```
index.html          página única (CSS embutido, tokens da marca no topo)
assets/             logotipos extraídos do manual de identidade
  logo-principal.png   assinatura principal colorida (fundo claro)
  logo-branco.png      assinatura monocromática branca (fundo escuro)
  selo.png / icone.png selo colorido e favicon
```

A pasta `ARQUIVOS FINAIS ATELIÊ DO BRINCAR/` guarda o material de origem da
identidade (manual, vetores, papelaria, uniformes). Ela é ignorada pelo Git —
fica só na máquina, para consulta.

## Identidade visual

Fonte: **Baloo Tammudu 2** (Google Fonts), a mesma do manual — pesos 400 a 800.

Cores institucionais (MIV, p. 24), definidas como variáveis CSS em `:root`:

| Nome | Token | Hex |
|---|---|---|
| Branco Talco | `--talco` | `#FCF7F3` |
| Amarelo Gema | `--gema` | `#EDB500` |
| Laranja Mecânica | `--mecanica` | `#FE6428` |
| Verde Menta | `--menta` | `#06BF96` |
| Azul Céu Vívido | `--ceu` | `#00CCFF` |
| Rosa Baby | `--baby` | `#FFB0C5` |
| Rosa Magenta | `--magenta` | `#F95286` |
| Violeta Superior | `--violeta` | `#752996` |

> O manual imprime o hex do Amarelo Gema como `#Ed8500`, mas o RGB da mesma
> linha (237, 181, 0) corresponde a `#EDB500` — que é a cor de fato aplicada nas
> peças. Adotamos `#EDB500`.

A página tem modo claro e escuro (segue o tema do dispositivo) e respeita
`prefers-reduced-motion`.

## Rodar localmente

```bash
python3 -m http.server 4321
```

E abrir http://localhost:4321.

## Deploy

Site estático, sem build: no Vercel basta apontar para a raiz do repositório,
sem build command e com output directory na raiz.
