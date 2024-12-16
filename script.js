// Função para criar e soltar corações
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️'; // Emoji de coração

  // Define uma posição horizontal aleatória
  heart.style.left = Math.random() * 100 + 'vw';

  // Define um tamanho aleatório para os corações
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';

  // Adiciona o coração ao contêiner
  document.querySelector('.hearts-container').appendChild(heart);

  // Remove o coração após a animação terminar
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Gera corações continuamente em intervalos
setInterval(createHeart, 300);

// Função para atualizar o cronômetro desde uma data específica
function atualizarCronometro() {
  const inicio = new Date('2018-12-16T00:00:00');
  const agora = new Date();

  // Calcular a diferença de anos, meses e dias
  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();

  // Ajuste se a diferença de meses for negativa
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Ajuste se a diferença de dias for negativa
  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
  }

  // Calcular horas, minutos e segundos
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById('contador').textContent =
    `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualizar a cada segundo
setInterval(atualizarCronometro, 1000);
atualizarCronometro();
