/**
 * TODA a copy do site, da LP e do linkbio. Um arquivo só, pra ser lido e
 * aprovado linha a linha (copy-system.md § 1).
 *
 * Voz: você, calorosa e simples. Calibragem 3 · 3 · 5
 * (meio formal · meio energética · bem simples).
 *
 * Regras do cliente (ficha no Ops):
 *  - NUNCA "creche" ou "escola". É espaço de desenvolvimento infantil.
 *  - Nada de preço, de equipe, de urgência de matrícula.
 *  - Chamada indireta: agendar visita.
 *
 * Fonte de cada fato:
 *  [ficha]   client_profiles no Ops (posicionamento, produtos, concorrência)
 *  [grupo]   WhatsApp do Ateliê (turmas 10/06; endereço e datas 10 a 16/09)
 *  [A_DEFINIR] ainda falta confirmar com o cliente
 */

export const home = {
  hero: {
    // [ficha] brincar livre, desenvolvimento integral
    titulo: ['Criança pequena aprende'],
    tituloOnda: 'brincando.',
    apoio:
      'Espaço de desenvolvimento infantil para crianças de 6 meses a 3 anos, em Ji‑Paraná. Tinta, lama, horta e muito tempo ao ar livre.',
    selo: 'Novo endereço a partir de 5 de outubro',
  },

  // [ficha] "brincar raiz (lama, tinta, texturas)", horta, música, inglês, ar livre
  palavras: [
    'tinta',
    'lama',
    'horta',
    'texturas',
    'música',
    'parquinho',
    'inglês',
    'ar livre',
    'comida de verdade',
  ],

  declaracao: {
    // [ficha] "opinião firme em favor da infância plena"
    frase:
      'Infância não é preparação para a escola. É a fase mais importante da vida, e ela acontece agora.',
  },

  proposta: {
    titulo: 'O que acontece aqui dentro',
    itens: [
      {
        titulo: 'Brincar livre',
        texto:
          'A criança escolhe, experimenta e repete. É assim que ela desenvolve o corpo, a linguagem e a autonomia.',
      },
      {
        titulo: 'Um ambiente para cada atividade',
        texto:
          'Espaços separados para pintar, construir, ouvir música e explorar. Nada de sala única com tudo junto.',
      },
      {
        titulo: 'Muito tempo ao ar livre',
        texto: 'Horta, parquinho, terra e água. Sujar a roupa faz parte do dia.',
      },
      {
        titulo: 'Convivência de verdade',
        texto: 'Crianças pequenas aprendem umas com as outras: esperar, dividir, pedir ajuda.',
      },
    ],
    link: 'Conhecer a proposta',
    // [ficha] referências pedagógicas
    referencias: 'Inspirado nas abordagens Reggio Emilia e Montessori.',
  },

  turmas: {
    titulo: 'Três turmas, por idade',
    // [grupo] Ateliê, 10/06/2026
    itens: [
      { nome: 'Berçário', faixa: '6 meses a 1 ano e meio' },
      { nome: 'Maternal I', faixa: '1 ano e meio a 2 anos e meio' },
      { nome: 'Maternal II', faixa: '2 anos e meio a 3 anos' },
    ],
    nota: 'Cada turma tem o próprio espaço na nova unidade.',
  },

  rotina: {
    titulo: 'Um dia comum no Ateliê',
  },

  novoEspaco: {
    rotulo: 'Nova unidade',
    titulo: 'A partir de 5 de outubro, na Rua Mato Grosso',
    texto:
      'O Ateliê muda para um espaço maior, com projeto de arquitetura feito para a primeira infância: berçário, maternal I e maternal II com ambientes próprios.',
    reinauguracao:
      'Reinauguração em 10 de outubro, véspera do Dia das Crianças. As famílias estão convidadas.',
    comoChegar: 'Como chegar',
  },

  brinquedos: {
    selo: 'Em breve',
    titulo: 'Brinquedos com a marca do Ateliê',
    texto:
      'Uma linha própria, escolhida com o mesmo critério do nosso dia a dia. O showroom fica na nova unidade.',
  },

  visita: {
    titulo: 'Venha ver o Ateliê funcionando',
    texto:
      'Deixe seu nome e WhatsApp. A equipe chama você para combinar um horário de visita com a sua criança.',
  },
} as const

export const proposta = {
  meta: {
    title: 'A proposta',
    description:
      'Brincar livre, ambientes por atividade e tempo ao ar livre. Como o Ateliê do Brincar cuida do desenvolvimento de crianças de 6 meses a 3 anos.',
  },
  hero: {
    titulo: 'Brincar é o trabalho da criança',
    apoio:
      'Tudo no Ateliê parte de uma ideia simples: a criança pequena aprende com o corpo inteiro, no tempo dela, cercada de gente que gosta de criança.',
  },
  manifesto: [
    'Até os 3 anos, o cérebro da criança se forma numa velocidade que nunca mais vai se repetir. O que ela vive nessa fase fica.',
    'Por isso o Ateliê não tem apostila, não tem fila e não tem pressa. Tem tinta, terra, água, música, livro, bicho e outras crianças.',
    'A equipe observa, acolhe e prepara o ambiente. Quem conduz a brincadeira é a criança.',
  ],
  destaque: 'Quem conduz a brincadeira é a criança.',
  diaADia: {
    titulo: 'O que faz parte da rotina',
    // [ficha] produto "Espaço de Desenvolvimento Infantil"
    itens: [
      { titulo: 'Horta', texto: 'Plantar, regar e colher. E depois provar.' },
      { titulo: 'Brincar raiz', texto: 'Lama, tinta e texturas, com roupa que pode sujar.' },
      { titulo: 'Parquinho', texto: 'Subir, descer, cair e levantar.' },
      { titulo: 'Música', texto: 'Ritmo, som e movimento todos os dias.' },
      { titulo: 'Inglês', texto: 'Contato com a segunda língua desde cedo, brincando.' },
      { titulo: 'Alimentação saudável', texto: 'Comida de verdade, no ritmo de cada idade.' },
    ],
  },
  contraste: {
    titulo: 'Um espaço só para a primeira infância',
    sim: {
      titulo: 'No Ateliê',
      itens: [
        'Só crianças de 6 meses a 3 anos',
        'Ambientes separados por atividade',
        'A criança escolhe o que explorar',
        'Muito tempo fora da sala',
      ],
    },
    nao: {
      titulo: 'No modelo tradicional',
      itens: [
        'Faixas de idade muito diferentes juntas',
        'Uma sala para tudo',
        'Atividade igual para todos, na mesma hora',
        'Pouco tempo ao ar livre',
      ],
    },
  },
} as const

export const turmas = {
  meta: {
    title: 'Turmas',
    description:
      'Berçário, Maternal I e Maternal II: as turmas do Ateliê do Brincar em Ji-Paraná, para crianças de 6 meses a 3 anos.',
  },
  hero: {
    titulo: 'Berçário, Maternal I e Maternal II',
    apoio:
      'As crianças são agrupadas por idade, e cada turma tem o próprio espaço na nova unidade.',
  },
  itens: [
    {
      nome: 'Berçário',
      faixa: '6 meses a 1 ano e meio',
      texto:
        'Tempo de chão, de engatinhar e de descobrir o próprio corpo. Ambiente baixo, macio e seguro, com estímulos para os primeiros passos.',
      cor: 'baby',
    },
    {
      nome: 'Maternal I',
      faixa: '1 ano e meio a 2 anos e meio',
      texto:
        'A fase do "eu faço sozinho". Muito movimento, as primeiras palavras em frases e as primeiras brincadeiras em grupo.',
      cor: 'menta',
    },
    {
      nome: 'Maternal II',
      faixa: '2 anos e meio a 3 anos',
      texto:
        'Faz de conta, perguntas sem fim e amizades. A criança ganha autonomia para comer, se vestir e resolver pequenos conflitos.',
      cor: 'gema',
    },
  ],
} as const

export const visite = {
  meta: {
    title: 'Agende uma visita',
    description:
      'Agende uma visita ao Ateliê do Brincar na Rua Mato Grosso, 1928, Casa Preta, Ji-Paraná/RO. Nova unidade a partir de 5 de outubro.',
  },
  hero: {
    titulo: 'Agende uma visita',
    apoio: 'A melhor forma de conhecer o Ateliê é ver as crianças brincando. Traga a sua junto.',
  },
  datas: [
    { data: '5 de outubro', texto: 'O Ateliê começa a funcionar no novo endereço.' },
    { data: '10 de outubro', texto: 'Reinauguração, com as famílias convidadas.' },
  ],
  horario: '[A_DEFINIR] horário de funcionamento da nova unidade',
} as const

export const form = {
  nome: 'Seu nome',
  whatsapp: 'Seu WhatsApp',
  idade: 'Idade da criança',
  idades: [
    'Menos de 6 meses',
    '6 meses a 1 ano e meio',
    '1 ano e meio a 2 anos e meio',
    '2 anos e meio a 3 anos',
    'Ainda está a caminho',
  ],
  enviar: 'Agendar uma visita',
  enviando: 'Enviando',
  sucessoTitulo: 'Recebemos seu contato',
  sucessoTexto: 'A equipe do Ateliê chama você no WhatsApp para combinar o horário.',
  erro: 'Não conseguimos enviar agora. Chame a gente direto no WhatsApp.',
  whatsappAlternativa: 'Prefere já conversar?',
  whatsappBotao: 'Chamar no WhatsApp',
} as const

/** Mensagens pré-preenchidas do WhatsApp, por origem (variants/servico-local.md § 6). */
export const waTexto = {
  site: 'Olá! Vim pelo site e quero agendar uma visita ao Ateliê.',
  lp: 'Olá! Vi o anúncio e quero agendar uma visita ao Ateliê.',
  links: 'Olá! Vim pelo Instagram e quero agendar uma visita ao Ateliê.',
  reinauguracao: 'Olá! Vim pelo Instagram e quero saber da reinauguração do dia 10/10.',
} as const

export const lp = {
  meta: {
    title: 'Agende uma visita ao Ateliê do Brincar',
    description:
      'Espaço de desenvolvimento infantil de 6 meses a 3 anos em Ji-Paraná. Agende uma visita à nova unidade.',
  },
  hero: {
    titulo: ['Conheça o novo'],
    tituloOnda: 'Ateliê.',
    apoio:
      'Espaço de desenvolvimento infantil para crianças de 6 meses a 3 anos em Ji‑Paraná. Agende uma visita e veja a rotina de perto.',
  },
  barra: 'Agendar uma visita',
} as const

export const links = {
  frase: 'Desenvolvimento infantil pelo brincar. 6 meses a 3 anos, em Ji‑Paraná.',
  itens: [
    {
      titulo: 'Agendar uma visita',
      texto: 'Chame a equipe no WhatsApp e combine um horário.',
      acao: 'Chamar no WhatsApp',
    },
    {
      titulo: 'Reinauguração 10/10',
      texto: 'O novo Ateliê abre as portas para as famílias.',
      acao: 'Saber mais',
    },
    {
      titulo: 'Novo endereço',
      texto: 'Rua Mato Grosso, 1928 · Casa Preta.',
      acao: 'Abrir no mapa',
    },
    {
      titulo: 'A proposta',
      texto: 'Por que aqui a criança aprende brincando.',
      acao: 'Ler no site',
    },
    { titulo: 'Turmas', texto: 'Berçário, Maternal I e Maternal II.', acao: 'Ver as turmas' },
  ],
} as const

export const rodape = {
  frase: 'Espaço de desenvolvimento infantil. 6 meses a 3 anos.',
  privacidade: 'Privacidade',
} as const
