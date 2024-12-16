// Função para criar e soltar corações (já existente)
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

// Função para atualizar o cronômetro desde uma data específica (já existente)
function atualizarCronometro() {
  const inicio = new Date('2018-12-16T00:00:00');
  const agora = new Date();
  const diferenca = agora - inicio;

  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); // Considera anos bissextos
  const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)); // Média de dias por mês
  const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('contador').textContent =
    `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualizar a cada segundo
setInterval(atualizarCronometro, 1000);
atualizarCronometro();
