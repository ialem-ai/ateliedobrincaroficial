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
 *  [grupo]  WhatsApp do Ateliê (endereço e datas 10 a 16/09)
 *  [reunião] alinhamento de 21/09 no Ops: quatro turmas, uma por idade
 */

export const home = {
  hero: {
    rotulo: 'Desenvolvimento infantil · 6 meses a 3 anos',
    // a última palavra ganha a onda de cores do logo
    // texto do cliente (ajustes 24/09)
    titulo: ['Aqui, brincar é coisa'],
    tituloOnda: 'séria!',
    apoio:
      'No Ateliê do Brincar, bebê brinca, experimenta, se suja, inventa, descobre e aprende. Tudo isso com liberdade, afeto e um montão de experiências para viver a primeira infância do jeito que ela merece.',
    selo: 'Vagas abertas o ano todo',
  },

  // [ig] projetos de junho e julho, [ficha] música (inglês e horta saíram a pedido do cliente, 25/09)
  palavras: [
    'tinta',
    'terra',
    'minhocário',
    'bacia de água',
    'música',
    'fruta no quintal',
    'balão',
  ],

  declaracao: {
    frase: 'Roupa manchada de tinta é sinal de que o dia rendeu.',
  },

  proposta: {
    titulo: 'Como é o dia por aqui',
    // texto do cliente (ajustes 24/09)
    itens: [
      {
        titulo: 'Liberdade para explorar',
        texto:
          'Preparamos o ambiente para que cada criança possa escolher, experimentar e descobrir no seu próprio ritmo. A gente acompanha de perto, dando espaço para que ela faça por si.',
      },
      {
        titulo: 'O ambiente também ensina',
        texto:
          'Cada espaço, material e experiência é pensado para despertar a curiosidade e convidar a criança a explorar. Aqui, aprender acontece também com as mãos, com o corpo e com os sentidos.',
      },
      {
        titulo: 'Brincar é coisa séria por aqui',
        texto:
          'É brincando que a criança experimenta, cria, resolve problemas, desenvolve habilidades e entende o mundo ao seu redor. Por isso, o brincar ocupa um lugar central no nosso dia.',
      },
      {
        titulo: 'Natureza, movimento e convivência',
        texto:
          'Tem terra, água, plantas, música, movimento, quintal e, claro, outras crianças. São experiências que ajudam os pequenos a desenvolver autonomia, confiança e diferentes formas de se relacionar com o mundo.',
      },
    ],
    link: 'Ler sobre a proposta',
    referencias:
      'Cada dia traz novas descobertas, em um ambiente preparado para a criança explorar, brincar e crescer no seu próprio ritmo.',
  },

  turmas: {
    titulo: 'As turmas',
    // ajustes do cliente, 24/09/2026 (entrou o Maternal III)
    itens: [
      { nome: 'Berçário', faixa: '6 meses a 11 meses' },
      { nome: 'Maternal I', faixa: '1 ano a 1 ano e 11 meses' },
      { nome: 'Maternal II', faixa: '2 anos a 2 anos e 11 meses' },
      { nome: 'Maternal III', faixa: '3 anos a 3 anos e 11 meses' },
    ],
    nota: 'Uma turma para cada idade. Vagas abertas o ano todo.',
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
      horta: 'Mão na terra',
      bacia: 'Explorando a colmeia',
      boliche: 'Boliche das Emoções',
      tintaVerde: 'A tinta que vem do verde',
    },
  },

  novoEspaco: {
    rotulo: 'Onde fica',
    titulo: 'Rua Mato Grosso, 1928, bairro Casa Preta',
    texto:
      'Uma casa térrea com gramado na frente, adaptada para crianças pequenas. Cada turma tem a sua sala.',
    comoChegar: 'Como chegar',
  },

  brinquedos: {
    selo: 'Em breve',
    titulo: 'Brinquedos Ateliê do Brincar',
    texto:
      'Estamos preparando uma novidade que vai fazer a brincadeira sair do Ateliê e chegar até a sua casa.',
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
    // texto do cliente (ajustes 25/09)
    titulo: 'Um dia cheio de pequenas grandes descobertas.',
    apoio:
      'Tudo começa com um ambiente preparado para despertar curiosidade. A criança escolhe, experimenta, brinca, observa e descobre. A gente acompanha de perto, respeitando seu tempo e criando novas possibilidades para ela explorar.',
  },
  manifesto: [
    'Numa manhã comum, uma criança fica na bacia de água enquanto a do lado pinta com esponja. Cada uma termina quando termina.',
    'Antes da turma chegar, as educadoras deixam o espaço pronto: tinta, terra, água, brinquedos de encaixe. Depois observam o que chamou a atenção de cada criança.',
    'No meio disso tem fruta no quintal e roda de música.',
  ],
  destaque: 'Por aqui, a curiosidade é quem dá o primeiro passo.',
  diaADia: {
    titulo: 'Faz parte da semana',
    itens: [
      // o primeiro item ganha o cartão grande com foto (ajustes 25/09: faz de conta no lugar da horta)
      {
        titulo: 'Faz de conta',
        texto: 'Roda de história, fantoche na mão e personagem inventado na hora.',
      },
      {
        titulo: 'Tinta, terra e água',
        texto: 'Com a mão, com o pé, com esponja. A roupa volta manchada.',
      },
      { titulo: 'Parquinho', texto: 'Subir, escorregar, cair e levantar de novo.' },
      { titulo: 'Música', texto: 'Roda de cantiga, instrumento na mão e balão subindo.' },
      { titulo: 'Alimentação saudável', texto: 'Fruta, legume e degustação no quintal.' },
    ],
  },
  contraste: {
    // reunião 21/09: aos 4 anos a pré-escola é obrigatória, por isso param nos 3 anos e 11 meses
    titulo: 'Só para quem ainda não fez 4 anos',
    // ajustes 25/09: a coluna branca parecia descrever o Ateliê; agora cada lado diz de quem é
    apoio:
      'Em muitos lugares, bebês e crianças maiores dividem a mesma sala. Aqui, cada idade tem o seu espaço. Veja a diferença:',
    sim: {
      titulo: 'Aqui no Ateliê',
      itens: [
        'Todas as crianças têm de 6 meses a 3 anos e 11 meses',
        'Uma sala para cada idade',
        'Espaços separados por atividade',
        'Tempo no quintal todos os dias',
      ],
    },
    nao: {
      titulo: 'O que é comum em outros lugares',
      itens: [
        'Bebês dividem a sala com crianças bem maiores',
        'A mesma sala para tudo',
        'Todo mundo faz a mesma atividade, na mesma hora',
        'Pouco tempo fora da sala',
      ],
    },
  },
} as const

export const turmas = {
  meta: {
    title: 'Turmas',
    description:
      'Berçário, Maternal I, II e III: as turmas do Ateliê do Brincar em Ji-Paraná, para crianças de 6 meses a 3 anos.',
  },
  hero: {
    // texto do cliente (ajustes 25/09)
    titulo: 'Cada idade, um novo mundo para explorar.',
    apoio:
      'As crianças estão sempre descobrindo algo novo. Por isso, cada turma é pensada para acompanhar as características e necessidades de cada fase, com seu próprio espaço e uma equipe que conhece de perto o momento de cada criança.',
  },
  // textos do cliente (ajustes 25/09)
  itens: [
    {
      nome: 'Berçário',
      faixa: '6 meses a 11 meses',
      destaque: 'Cada movimento é uma descoberta.',
      texto:
        'Rolar, alcançar, engatinhar, levantar, dar os primeiros passos... No Berçário, o bebê encontra um ambiente preparado para explorar livremente, desenvolver seus movimentos e conquistar novas descobertas no seu próprio ritmo.',
      cor: 'baby',
    },
    {
      nome: 'Maternal I',
      faixa: '1 ano a 1 ano e 11 meses',
      texto:
        '“Eu consigo!” vira a frase do dia. Comer sozinho, subir, abrir, fechar, escolher, tentar de novo... Por aqui, cada conquista ganha espaço e cada tentativa é parte da descoberta.',
      cor: 'menta',
    },
    {
      nome: 'Maternal II',
      faixa: '2 anos a 2 anos e 11 meses',
      texto:
        'Por quê? O que é isso? E aquilo? E como funciona? As perguntas não param, as ideias aparecem o tempo todo e as amizades começam a ganhar um lugar especial nas descobertas.',
      cor: 'gema',
    },
    {
      nome: 'Maternal III',
      faixa: '3 anos a 3 anos e 11 meses',
      texto:
        'As ideias ficam maiores, as brincadeiras ganham novas histórias e a curiosidade não para de crescer.',
      cor: 'ceu',
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
    // texto do cliente (ajustes 24/09)
    titulo: 'Venha viver o Ateliê de perto!',
    apoio:
      'Conheça nosso espaço, descubra como acontece a nossa rotina e veja de perto um lugar pensado para a criança brincar, explorar e se desenvolver.',
  },
  horario: '[A_DEFINIR] horário de funcionamento',
} as const

export const form = {
  nome: 'Seu nome',
  whatsapp: 'Seu WhatsApp',
  idade: 'Idade da criança',
  idades: [
    'Menos de 6 meses',
    '6 meses a 11 meses',
    '1 ano a 1 ano e 11 meses',
    '2 anos a 2 anos e 11 meses',
    '3 anos a 3 anos e 11 meses',
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
    // texto do cliente (ajustes 24/09)
    titulo: 'Antes de imaginar, venha viver o',
    tituloOnda: 'Ateliê.',
    apoio:
      'Uma visita para conhecer nossos espaços, saber um pouquinho da rotina e descobrir como transformamos o brincar, as experiências e o cuidado em desenvolvimento.',
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
          'A partir do Berçário, o convívio com outras crianças e os estímulos certos já fazem diferença no desenvolvimento. Os bebês ficam numa turma só deles, de 6 meses a 11 meses.',
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
          'Nenhum dos dois. É um espaço de desenvolvimento infantil, com ambientes separados por atividade. Tinta, lama e música entram na rotina com um propósito, e a criança aprende com o ambiente, não só com a professora.',
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
        texto: 'As salas de cada turma, o quintal e a rotina funcionando.',
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

export const rodape = {
  frase: 'Espaço de desenvolvimento infantil para crianças de 6 meses a 3 anos.',
  privacidade: 'Privacidade',
} as const
