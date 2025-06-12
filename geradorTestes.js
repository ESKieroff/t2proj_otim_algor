const fs = require('fs');

function gerarCasosDeTeste(qtd, caminho = 'testes.txt') {
  const linhas = [];

  for (let i = 0; i < qtd; i++) {
    const L = Math.floor(Math.random() * 50) + 20;
    const d = Math.floor(Math.random() * (L / 3)) + 5;
    
    const stops = [];
    let pos = Math.floor(Math.random() * d);

    while (pos < L - d) {
      stops.push(pos);
      pos += Math.floor(Math.random() * d) + 1;
    }

    const linha = [L, d, ...stops].join(' ');
    linhas.push(linha);
  }

  fs.writeFileSync(caminho, linhas.join('\n'));
  console.log(`✅ ${qtd} casos de teste salvos em ${caminho}`);
}

gerarCasosDeTeste(100); 
