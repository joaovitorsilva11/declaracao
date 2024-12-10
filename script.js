// Função para calcular a diferença de tempo desde 16/12/2018
function atualizarCronometro() {
    const inicio = new Date('2018-12-16T00:00:00');
    const agora = new Date();
    const diferenca = agora - inicio;
  
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
    document.getElementById('contador').textContent = 
      `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }
  
  // Atualizar a cada segundo
  setInterval(atualizarCronometro, 1000);
  
  // Chamar a função ao carregar a página
  atualizarCronometro();
  