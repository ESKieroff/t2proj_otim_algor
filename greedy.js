const fs = require('fs');
const path = require('path');

function greedyRally(L, d, stops) {

  const pontos = [0, ...stops, L];
  const n = pontos.length;
  let current = 0;
  const paradas = [];

  for (let i = 1; i < n; i++) {
    if (pontos[i] - pontos[current] > d) {
      if (i - 1 === current) {
        return null;
      }
      paradas.push(pontos[i - 1]);
      current = i - 1;
    }
  }

  return paradas;
}

function lerCasosDeTeste(arquivo) {
  const linhas = fs.readFileSync(path.resolve(__dirname, arquivo), 'utf-8').trim().split('\n');
  return linhas.map((linha) => {
    const partes = linha.trim().split(' ').map(Number);
    const L = partes[0];
    const d = partes[1];
    const stops = partes.slice(2);
    return { L, d, stops };
  });
}

// ==== EXECUÇÃO ====
const casos = lerCasosDeTeste('testes.txt');
const resultados = [];

casos.forEach(({ L, d, stops }, index) => {
  const resultado = greedyRally(L, d, stops);
  const linha = resultado
    ? `Caso ${index + 1}: Paradas -> ${resultado.join(' ')}`
    : `Caso ${index + 1}: Impossível completar a trilha.`;
  resultados.push(linha);
});


const outputPath = path.resolve(__dirname, 'result.txt');
fs.writeFileSync(outputPath, resultados.join('\n'), 'utf-8');