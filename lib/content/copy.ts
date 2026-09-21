/**
 * TODA a copy do site, da LP e do linkbio. Um arquivo só, pra ser lido e
 * aprovado linha a linha (copy-system.md § 1).
 *
 * Voz: a do próprio Ateliê no Instagram. "A gente", frase curta, coisa
 * concreta (tinta, terra, minhocário), sem jargão pedagógico e sem slogan.
 *
 * O que NÃO fazer aqui (cara de texto de IA):
 *  - "não é X, é Y" / "mais do que X"
 *  - lista de três pra dar ritmo ("sem pressa, sem cobrança, sem ...")
 *  - "de verdade", "cada detalhe", "pensado com carinho", "jornada"
 *  - inventar rotina, número ou detalhe que ninguém confirmou
 *
 * Regras do cliente (ficha no Ops): nunca "creche" nem "escola" pra se
 * descrever; sem preço; sem equipe; chamada indireta (agendar visita).
 *
 * Fonte de cada fato:
 *  [ficha]  client_profiles no Ops
 *  [ig]     legendas do @ateliedobrincaroficial (jun a set/2026)
 *  [grupo]  WhatsApp do Ateliê (turmas 10/06; endereço e datas 10 a 16/09)
 */

export const home = {
  hero: {
    rotulo: 'Desenvolvimento infantil · 6 meses a 3 anos',
    // a última palavra ganha a onda de cores do logo
    titulo: ['Tinta na mão, pé na terra e muito'],
    tituloOnda: 'brincar.',
    apoio:
      'O Ateliê do Brincar recebe bebês e crianças pequenas em Ji‑Paraná. A rotina tem pintura, horta, minhocário, música e bastante tempo no quintal.',
    selo: 'Vagas abertas o ano todo',
  },

  // [ig] projetos de junho e julho, [ficha] horta, música, inglês
  palavras: [
    'tinta',
    'terra',
    'minhocário',
    'horta',
    'bacia de água',
    'música',
    'inglês',
    'fruta no quintal',
    'balão',
  ],

  declaracao: {
    frase: 'Roupa manchada de tinta é sinal de que o dia rendeu.',
  },

  proposta: {
    titulo: 'Como é o dia por aqui',
    itens: [
      {
        titulo: 'A criança escolhe',
        texto:
          'O ambiente fica preparado com tinta, água, terra e brinquedos de encaixe. Ela decide por onde começar, e a educadora acompanha de perto.',
      },
      {
        // [ficha] ambientes separados por atividade
        titulo: 'Cada atividade no seu canto',
        texto:
          'Pintura tem um espaço, música tem outro. Assim a brincadeira não se mistura e a criança consegue se concentrar.',
      },
      {
        titulo: 'Quintal todo dia',
        texto:
          'Horta, minhocário, bacia de água no gramado. Voltar para casa com a roupa manchada faz parte.',
      },
      {
        titulo: 'Junto com outras crianças',
        texto:
          'Na hora da fruta, da roda de música e do parquinho, uma aprende com a outra a esperar a vez.',
      },
    ],
    link: 'Ler sobre a proposta',
    referencias: 'A proposta se inspira em Reggio Emilia e Montessori.',
  },

  turmas: {
    titulo: 'As turmas',
    // [grupo] Ateliê, 10/06/2026
    itens: [
      { nome: 'Berçário', faixa: '6 meses a 1 ano e meio' },
      { nome: 'Maternal I', faixa: '1 ano e meio a 2 anos e meio' },
      { nome: 'Maternal II', faixa: '2 anos e meio a 3 anos' },
    ],
    nota: 'Vagas abertas o ano todo.',
  },

  rotina: {
    titulo: 'Todo mês tem um projeto',
    // [ig] post de 07/07: "A tinta que vem do verde", "Boliche das Emoções", "Explorando a colmeia"
    apoio:
      'Em julho teve tinta feita de couve, boliche das emoções e um minhocário. Essas fotos saíram do nosso Instagram.',
    instagram: 'Ver mais no @ateliedobrincaroficial',
    legendas: {
      minhocario: 'Minhocário',
      esponja: 'Pintura com esponja',
      horta: 'Horta',
      bacia: 'Explorando a colmeia',
      degustacao: 'Fruta no quintal',
      boliche: 'Boliche das Emoções',
      tintaVerde: 'A tinta que vem do verde',
    },
  },

  novoEspaco: {
    rotulo: 'Onde fica',
    titulo: 'Rua Mato Grosso, 1928, bairro Casa Preta',
    texto:
      'Uma casa térrea com gramado na frente, adaptada para crianças pequenas. Berçário, Maternal I e Maternal II têm salas separadas.',
    comoChegar: 'Como chegar',
  },

  brinquedos: {
    selo: 'Em breve',
    titulo: 'Brinquedos Ateliê do Brincar',
    texto:
      'A gente está preparando uma linha de brinquedos com a nossa marca. Eles vão ficar expostos na recepção do Ateliê.',
  },

  visita: {
    titulo: 'Agende uma visita',
    texto:
      'Deixe seu nome e WhatsApp. A gente chama para marcar um horário, e a sua criança pode vir junto.',
  },
} as const

export const proposta = {
  meta: {
    title: 'A proposta',
    description:
      'Brincar livre, ambientes separados por atividade e tempo no quintal. Como funciona o dia no Ateliê do Brincar, em Ji-Paraná.',
  },
  hero: {
    titulo: 'Como a gente trabalha',
    apoio:
      'A proposta do Ateliê se inspira em Reggio Emilia e Montessori. Na prática, isso quer dizer ambiente preparado, material ao alcance da mão e adulto que observa antes de interferir.',
  },
  manifesto: [
    'Numa manhã comum, uma criança fica na bacia de água enquanto a do lado pinta com esponja. Cada uma termina quando termina.',
    'Antes da turma chegar, as educadoras deixam o espaço pronto: tinta, terra, água, brinquedos de encaixe. Depois observam o que chamou a atenção de cada criança.',
    'No meio disso tem fruta no quintal, roda de música, um pouco de inglês e visita à horta.',
  ],
  destaque: 'Quem escolhe a brincadeira é a criança.',
  diaADia: {
    titulo: 'Faz parte da semana',
    itens: [
      { titulo: 'Horta', texto: 'As crianças plantam, regam e depois provam o que nasceu.' },
      {
        titulo: 'Tinta, terra e água',
        texto: 'Com a mão, com o pé, com esponja. A roupa volta manchada.',
      },
      { titulo: 'Parquinho', texto: 'Subir, escorregar, cair e levantar de novo.' },
      { titulo: 'Música', texto: 'Roda de cantiga, instrumento na mão e balão subindo.' },
      { titulo: 'Inglês', texto: 'Palavras e músicas em inglês no meio da brincadeira.' },
      { titulo: 'Alimentação saudável', texto: 'Fruta, legume e degustação no quintal.' },
    ],
  },
  contraste: {
    titulo: 'Só para quem tem até 3 anos',
    sim: {
      titulo: 'No Ateliê',
      itens: [
        'Todas as crianças têm de 6 meses a 3 anos',
        'Uma sala para cada turma',
        'Espaços separados por atividade',
        'Tempo no quintal todos os dias',
      ],
    },
    nao: {
      titulo: 'Em espaços para todas as idades',
      itens: [
        'Bebês dividem o espaço com crianças bem maiores',
        'A mesma sala serve para tudo',
        'A atividade é igual para todos, na mesma hora',
        'Pouco tempo fora da sala',
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
    titulo: 'As turmas',
    apoio: 'São três, separadas pela idade da criança, e cada uma tem a sua sala.',
  },
  itens: [
    {
      nome: 'Berçário',
      faixa: '6 meses a 1 ano e meio',
      texto:
        'Para quem está aprendendo a sentar, engatinhar e andar. Muito chão livre, som de chocalho e textura para explorar com as mãos.',
      cor: 'baby',
    },
    {
      nome: 'Maternal I',
      faixa: '1 ano e meio a 2 anos e meio',
      texto:
        'A idade de querer fazer tudo sozinho: comer, subir, abrir, fechar. A gente deixa tentar e fica do lado.',
      cor: 'menta',
    },
    {
      nome: 'Maternal II',
      faixa: '2 anos e meio a 3 anos',
      texto: 'Chegam o faz de conta, as perguntas sem fim e os primeiros amigos.',
      cor: 'gema',
    },
  ],
} as const

export const visite = {
  meta: {
    title: 'Agende uma visita',
    description:
      'Agende uma visita ao Ateliê do Brincar na Rua Mato Grosso, 1928, Casa Preta, Ji-Paraná/RO.',
  },
  hero: {
    titulo: 'Agende uma visita',
    apoio:
      'Você conhece a casa, vê as crianças brincando e tira as dúvidas com a equipe. Pode trazer a sua criança.',
  },
  horario: '[A_DEFINIR] horário de funcionamento',
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
  sucessoTitulo: 'Pronto, recebemos',
  sucessoTexto: 'Alguém do Ateliê vai chamar você no WhatsApp para marcar o horário.',
  erro: 'Não deu para enviar agora. Chame a gente direto no WhatsApp.',
  whatsappAlternativa: 'Prefere conversar agora?',
  whatsappBotao: 'Chamar no WhatsApp',
  // LP: depois do envio, a conversa segue no WhatsApp
  seguirTexto: 'Falta um passo: mande a mensagem no WhatsApp para a equipe marcar o seu horário.',
  seguirBotao: 'Enviar mensagem no WhatsApp',
  seguirMensagem: (nome: string, idade: string) =>
    `Oi! Sou ${nome.trim().split(' ')[0]}, acabei de pedir uma visita pelo site. ${
      idade.startsWith('Ainda')
        ? 'Meu bebê ainda está a caminho.'
        : `Minha criança tem ${idade.includes(' a ') ? `entre ${idade.replace(' a ', ' e ')}` : idade.toLowerCase()}.`
    }`,
} as const

/** Mensagens pré-preenchidas do WhatsApp, por origem (variants/servico-local.md § 6). */
export const waTexto = {
  site: 'Oi! Vim pelo site e queria agendar uma visita ao Ateliê.',
  lp: 'Oi! Vi o anúncio e queria agendar uma visita ao Ateliê.',
  links: 'Oi! Vim pelo Instagram e queria agendar uma visita ao Ateliê.',
} as const

/**
 * LP de tráfego pago (/visita). Estrutura Russell Brunson, adaptada a serviço
 * local e às regras do cliente (sem preço, sem urgência falsa, CTA indireto):
 *
 *  GANCHO   chama o público pelo nome e promete ver antes de decidir
 *  HISTÓRIA por que o Ateliê existe (frase do próprio Ateliê, post de 22/07)
 *  CRENÇAS  as 3 dúvidas reais do carrossel de 29/07, uma por falsa crença:
 *           veículo ("é escola ou creche?"), interna ("muito pequeno?"),
 *           externa ("é seguro?")
 *  PROVA    projetos do mês com fotos reais
 *  OFERTA   o que acontece na visita, passo a passo
 *  CTA      um só: formulário que termina no WhatsApp
 */
export const lp = {
  meta: {
    title: 'Agende uma visita ao Ateliê do Brincar',
    description:
      'Espaço de desenvolvimento infantil para crianças de 6 meses a 3 anos em Ji-Paraná. Agende uma visita e veja a rotina antes de decidir.',
  },
  hero: {
    chamada: 'Para mães e pais de Ji‑Paraná com filho de 6 meses a 3 anos',
    titulo: 'Veja o Ateliê funcionando antes de',
    tituloOnda: 'decidir.',
    apoio:
      'Escolher onde deixar um filho pequeno é difícil, a gente sabe. Na visita você conhece as salas, vê a rotina das turmas e conversa com a equipe.',
    cta: 'Agendar minha visita',
    nota: 'Leva menos de 1 minuto. A equipe chama você no WhatsApp.',
  },
  historia: {
    // [ig] 22/07: "O Ateliê do Brincar foi criado com uma filosofia clara..."
    titulo: 'O Ateliê foi criado com uma ideia só',
    frase: 'A primeira infância merece um espaço inteiro dedicado a ela.',
    texto:
      'Por isso aqui só entram crianças de 6 meses a 3 anos. Ninguém divide atenção com turmas de crianças maiores, e cada sala, brinquedo e atividade foi escolhido para essa idade.',
  },
  duvidas: {
    titulo: 'As três perguntas que quase toda família faz',
    apoio:
      'A gente ouve essas perguntas toda semana. As respostas estão aqui, e na visita você confere pessoalmente.',
    // [ig] carrossel de 29/07 "Antes de decidir, você provavelmente tem essas dúvidas"
    itens: [
      {
        pergunta: 'Meu filho não é pequeno demais?',
        resposta:
          'A partir do Berçário, o convívio com outras crianças e os estímulos certos já fazem diferença no desenvolvimento. Os bebês ficam numa turma só deles, de 6 meses a 1 ano e meio.',
        foto: '/fotos/boliche.jpg',
        alt: 'Bebê sentado na grama segurando pinos coloridos de boliche',
        pos: '50% 55%',
        cor: 'baby',
      },
      {
        pergunta: 'Como eu sei se o espaço é seguro?',
        // [ig] 17/06: "pisos adequados, brinquedos sensoriais certificados"
        resposta:
          'Vendo com os próprios olhos. Na visita você anda pelas salas e conhece as profissionais. Os pisos são próprios para bebês e os brinquedos sensoriais são certificados.',
        foto: '/fotos/bacia-sensorial.jpg',
        alt: 'Menina mexendo numa bacia com água amarela, acompanhada de perto',
        pos: '50% 50%',
        cor: 'menta',
      },
      {
        pergunta: 'O Ateliê é escola ou creche?',
        resposta:
          'Nenhum dos dois. É um espaço de desenvolvimento infantil, com ambientes separados por atividade. Horta, tinta, lama e música entram na rotina com um propósito, e a criança aprende com o ambiente, não só com a professora.',
        foto: '/fotos/minhocario.jpg',
        alt: 'Duas meninas rindo sentadas na grama, com um minhocário de terra na frente',
        pos: '50% 60%',
        cor: 'gema',
      },
    ],
  },
  prova: {
    titulo: 'O que as turmas fizeram em julho',
    apoio:
      'Todo mês tem um projeto novo. Essas fotos são do nosso Instagram, onde 3,1 mil pessoas acompanham a rotina.',
  },
  visita: {
    titulo: 'Como funciona a visita',
    passos: [
      { titulo: 'Você deixa seu nome e WhatsApp', texto: 'Aqui embaixo, em menos de 1 minuto.' },
      {
        titulo: 'A equipe chama você para marcar',
        texto: 'Pelo WhatsApp, no horário que for melhor para você.',
      },
      {
        titulo: 'Você conhece o Ateliê por dentro',
        texto: 'As salas de cada turma, o quintal, a horta e a rotina funcionando.',
      },
      {
        titulo: 'Tira todas as dúvidas',
        texto: 'Com calma, conversando com a equipe. A decisão fica para depois.',
      },
    ],
  },
  formulario: {
    titulo: 'Agende sua visita',
    texto:
      'Deixe seus dados e mande a mensagem no WhatsApp. A equipe responde e marca o horário com você.',
  },
  barra: 'Agendar minha visita',
} as const

export const links = {
  frase: 'Crianças de 6 meses a 3 anos em Ji‑Paraná. Tinta, terra e muito brincar.',
  // ordem pedida pelo Murillo (21/09)
  itens: [
    {
      titulo: 'Fale com a gente',
      texto: 'Tire dúvidas e agende uma visita.',
      acao: 'Chamar no WhatsApp',
    },
    {
      titulo: 'Nosso site',
      texto: 'A proposta, as turmas e a rotina do Ateliê.',
      acao: 'Abrir o site',
    },
    { titulo: 'Instagram', texto: 'O dia a dia das turmas e os projetos do mês.', acao: 'Seguir' },
    { titulo: 'Como chegar', texto: 'Rua Mato Grosso, 1928 · Casa Preta.', acao: 'Abrir no mapa' },
  ],
} as const

export const manutencao = {
  selo: 'Site em manutenção',
  titulo: 'O site está em manutenção.',
  apoio:
    'Enquanto isso, dá para conhecer o Ateliê e agendar uma visita por aqui, ou falar com a gente pelo WhatsApp.',
  conhecer: 'Conhecer o Ateliê',
} as const

export const rodape = {
  frase: 'Espaço de desenvolvimento infantil para crianças de 6 meses a 3 anos.',
  privacidade: 'Privacidade',
} as const
