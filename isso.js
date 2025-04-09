function atualizarCronometro() {
    const inicio = new Date("2023-09-21T00:00:00");
    const agora = new Date();
    const diferenca = agora - inicio;
  
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
  
    document.getElementById("cronometro").textContent = 
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💘`;
  }
  
  atualizarCronometro();
  setInterval(atualizarCronometro, 1000);
  