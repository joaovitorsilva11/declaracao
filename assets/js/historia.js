export function initHistoryTextSwitcher() {
  const select = document.getElementById('text-type');
  const target = document.getElementById('text-output');
  if (!select || !target) return;

  const texts = {
    base: {
      heading: 'Texto base',
      paragraphs: [
        'Bem-vinda à história que escrevemos juntos. Esta página traz um texto base e permite alternar entre versões diferentes, como pedido de namoro e declaração especial.',
        'Use o seletor abaixo para ver cada texto. Assim você pode escolher o tom certo para o momento e reviver cada sentimento com clareza.'
      ]
    },
    doisMeses: {
        heading: 'Mais um Mês ao Seu Lado',
        paragraphs: [
        'Olá, minha princesa!',
        'Ontem completamos mais um mês juntos! Nunca deixarei essa data passar em branco.',
        'Mais um mês se passou, e a cada dia que acordo percebo o quanto me vejo ainda mais apaixonado por você, meu amor.',
        'É impressionante como o tempo só confirma aquilo que meu coração já sabe: você é uma mulher incrível. Perfeita, parceira em todos os momentos, engraçada, bonita, inteligente, esforçada e absurdamente especial para mim.',
        'Eu poderia passar o dia inteiro falando das suas qualidades e, ainda assim, não conseguiria descrever tudo o que você é. Quero, todos os dias, conhecer você mais e mais, descobrir novos detalhes, novos sorrisos e novas versões da mulher por quem me apaixono constantemente.',
        'Você mora em meu coração, ocupa um espaço que é só seu e se tornou a parceira que eu quero para a vida. Aquela com quem eu sonho, planejo e escolho todos os dias.',
        'Que sorte a nossa termos sido emocionados e termos nos permitido sentir tudo isso sem medo. Que sorte a minha ter você comigo, só para mim, e poder chamar você de meu amor. 💕',
        'Que venham muitos outros meses, muitos anos e uma vida inteira ao seu lado.'
        ]
    },
    quatroMeses: {
        heading: 'Feliz 1 Mês de Namoro, Princesa! ❤️',
        paragraphs: [
        'Feliz 1 mês de namoro, princesa! ❤️',
        'Assim como disse ontem, é engraçado como quatro meses se passaram tão rapidamente e como a nossa conexão se construiu de forma tão intensa.',
        'Obrigado por ser essa mulher tão linda, por dentro e por fora. Eu te quero hoje, agora e sempre.',
        'Vamos construir um ótimo futuro juntos, e quero que, a cada passo que eu der, você esteja ao meu lado, assim como eu estarei ao seu, apoiando você em cada momento.',
        'Tenho certeza de que ainda viveremos muitas conquistas, aprendizados e sonhos realizados, sempre caminhando lado a lado.',
        'Eu te amo mais que tudo, minha linda. ❤️❤️'
        ]
    },
    cincoMeses: {
        heading: 'Feliz 5 Meses de Namoro, Minha Princesa! ❤️',
        paragraphs: [
        'Bom dia, meu amor. ❤️',
        'Hoje concluímos e podemos celebrar mais um mês da nossa história juntos.',
        'Feliz 5 meses de namoro, minha princesa!',
        'É engraçado como uma pessoa pode ressignificar uma data e torná-la tão importante. O que antes era apenas mais um dia do mês, hoje é uma das datas que mais gosto de lembrar e comemorar.',
        'Há cinco meses encontrei a pessoa com quem quero passar a minha vida. A pessoa que me apoia, me incentiva, me motiva e me ama. Da mesma forma, eu amo, incentivo, motivo e admiro você todos os dias.',
        'Você é muito especial para mim, minha princesa.',
        'Tão linda, educada, inteligente, parceira, carinhosa, engraçada, respeitosa e cheia de qualidades que me fazem admirar você cada vez mais.',
        'Para mim, você é perfeita. A mulher que escolho, admiro e amo todos os dias.',
        'Eu te amo, minha gatinha. ❤️'
        ]
        },

    seteMeses: {
        heading: 'Feliz 7 Meses, Minha Linda!',
        paragraphs: [
        'Feliz 7 meses, minha linda!',
        'Como explicar que, num piscar de olhos, já passou todo esse tempo? Acredito que seja o amor, pois ao seu lado me sinto completamente amado, e saiba que cada parte de mim clama por você.',
        'Obrigado por ser o motivo do meu sorriso e da minha motivação todos os dias.',
        'Agradeço a Deus por ter você na minha vida e por saber que, hoje e no futuro, nunca nos faltará amor.',
        'Com o tempo virão as viagens, mais dinheiro e muitas conquistas, mas o mais importante é que estaremos vivendo tudo isso juntos, na presença um do outro.',
        'Eu te amo, minha piriquitinha. ❤️'
        ]
    },

    pedido: {
      heading: 'Pedido Namoro',
      paragraphs: [
        'Querida Ilana,',
        'Desde que nos conhecemos, venho experimentando dia após dia uma sensação nova: um conforto diferente, um sorriso automático ao lembrar dos nossos momentos. Cada detalhe contigo foi se tornando, aos poucos, cada vez mais especial.',
        'Quem diria que o destino iria nos reunir novamente? Quem diria que nos encontraríamos em um momento tão singular? Quem diria que o nosso beijo iria encaixar tão bem? Quem diria que você seria a mulher com quem eu planejo passar o resto da minha vida?',
        'Hoje completamos três meses de relacionamento e, nesse período, a cada dia que passa, tenho ainda mais certeza de que é você que eu quero.',
        'Temos nosso plano ideal de como as coisas podem acontecer, e eu espero, de verdade, que tudo funcione como sonhamos: nossas conquistas, viagens, carros, motos, filhos… todos esses momentos, eu quero viver tudo isso contigo.',
        'Posso afirmar que no dia 18 de outubro de 2025 a minha vida mudou de rota. Encontrei uma mulher para mim: linda, inteligente, engraçada, presente, amável e gostosa.',
        'Estar com você me traz paz, vontade de cuidar, de crescer e de construir. Não é sobre pressa, é sobre certeza. E a certeza que eu tenho hoje é que quero te escolher todos os dias, de forma clara e assumida.',
        'Eu não te escolhi por acaso. Te escolhi porque quero dividir os dias simples e os planos grandes, os silêncios confortáveis e as risadas bobas, os sonhos que ainda estão só no papel e aqueles que já começam a tomar forma.',
        'Quero ser abrigo, parceria, presença. Quero estar do seu lado quando tudo estiver dando certo e, principalmente, quando não estiver. Quero continuar escrevendo nossa história com cuidado, respeito e amor.',
        'Hoje, com o coração tranquilo e cheio de certeza, eu sei: é você.'
      ]
    },
    declaracao: {
      heading: 'Meu Amor ❤️',
        paragraphs: [
        'Meu amor,',
        'Todos os dias eu agradeço por ter você na minha vida. Entre tantas pessoas, foi você quem conquistou meu coração e transformou meus dias em algo muito mais bonito.',
        'Gosto dos nossos momentos simples, das nossas conversas, das risadas sem motivo e da tranquilidade que sinto quando estou ao seu lado. Você faz com que os dias comuns se tornem especiais apenas por estar presente.',
        'Quero que você nunca se esqueça do quanto é importante para mim. Seu sorriso ilumina meus dias, seu carinho me conforta e sua companhia é uma das melhores partes da minha vida.',
        'Prometo continuar te escolhendo todos os dias, cuidando de nós e construindo nossa história com amor, respeito e admiração.',
        'Que hoje você se lembre de uma coisa: existe alguém que pensa em você com carinho, torce pela sua felicidade e se sente muito feliz por poder chamar você de meu amor.',
        'Eu te amo. Hoje, amanhã e em todos os dias que ainda virão. ❤️'
        ]
    },
    diaDosNamorados: {
        heading: 'Feliz Dia dos Namorados, Meu Amor ❤️',
        paragraphs: [
        'O que posso dizer além de que este será apenas o primeiro de muitos Dias dos Namorados que viveremos juntos?',
        'Quero que você tenha certeza, em qualquer fase da nossa vida, de que eu te amo mais do que tudo neste mundo. Você é a pessoa que escolho todos os dias e aquela com quem quero compartilhar cada momento da minha existência.',
        'É engraçado perceber como a sua companhia se tornou tudo o que eu desejo. Seu cheiro, seu beijo, sua voz, seu carinho, sua delicadeza e o seu toque são tudo o que eu procuro. Ao seu lado, encontro paz, felicidade e a sensação de estar exatamente onde deveria estar.',
        'Muitas pessoas dizem passar a vida inteira em busca do amor verdadeiro. Eu posso afirmar que a minha busca chegou ao fim, porque encontrei a mulher com quem quero passar o resto da minha vida.',
        'Desde o dia em que te conheci, não houve um único momento em que você tenha saído dos meus pensamentos. Já se passaram 20.476.800 segundos, e em cada um deles você ocupou um espaço no meu coração. É incrível como alguém pode transformar tanto a vida de outra pessoa apenas sendo quem é.',
        'Quero dividir com você todos os momentos: os sorrisos e as lágrimas, as conquistas e os desafios. Tudo se torna mais leve, mais bonito e mais especial quando estou ao seu lado. Não existe outra explicação além de ser você.',
        'Que venham as viagens, as conquistas, os novos sonhos e todas as experiências que ainda vamos viver juntos. Nosso tempo em Caldas foi especial, nossa viagem para a Bahia será incrível, e tenho certeza de que cada lugar que escolhermos conhecer será inesquecível.',
        'Não por causa do destino em si, mas porque estarei ao lado da pessoa que amo. Com você, qualquer lugar se torna o melhor lugar do mundo.',
        'Preparei este dia com muito carinho e espero que você goste de cada detalhe, porque cada um deles foi pensado com amor.',
        'E o mais bonito de tudo é saber que ainda temos muito pela frente. Muitas histórias para viver, muitos sonhos para realizar, muitos lugares para conhecer e muitos momentos para compartilhar.',
        'Feliz Dia dos Namorados, meu amor. Que este seja apenas o começo de uma vida inteira ao seu lado. ❤️'
        ]
    }
  };

  function render(type) {
    const text = texts[type] || texts.base;
    target.innerHTML = `
      <h3>${text.heading}</h3>
      ${text.paragraphs.map(p => `<p>${p}</p>`).join('')}
    `;
  }

  select.addEventListener('change', () => render(select.value));
  render(select.value);
}
