Disciplina: Projeto e Otimização de Algoritmos
Professor: Michael da Costa Móra
Alunos: Rodrigo Oliveira

# Projeto: Algoritmos Greedy

## Introdução

• Este trabalho consiste no desenho, análise e implementação de algoritmos greedy.

• O trabalho pode ser realizado grupos de até 4 alunos.

Objetivos do trabalho:
Você e um grupo de amigos deseja realizar um rally pelo deserto de Dakkar. 

Os regulamentos da corrida determinam que os times podem viajar apenas durante o dia. 

Após analisar o mapa seus colegas identificaram um grande conjunto de bons pontos de para passar a noite. 

Durante várias sessões de brainstorming eles (sim, você estava estudando para as provas P1 e não participou) definiram o seguinte algoritmo para determinar se vocês conseguem chegar no próximo ponto de parada antes do anoitecer.

Algoritmo: Cada vez que vocês chegarem a um potencial ponto de parada, vocês determinam se conseguem chegar no próximo ponto de parada antes do anoitecer.

Se vocês conseguirem, vocês continuam dirigindo, caso não consigam, vocês param e acampam no ponto atual.
Eles afirmam que o algoritmo acima os levará a linha de chegada com o menor número de paradas. 
Você concorda?

Para tornar a questão mais precisa vamos assumir as seguintes premissas:

• Modelaremos a trilha do rally como um longo segmento de linha de comprimento 𝐿.

• Vocês conseguem viajar no máximo 𝑑 quilômetros por dia antes de anoitecer.

• Assumiremos que os pontos de parada estão localizados a distâncias 𝑥1, 𝑥2, … , 𝑥𝑛 do ponto de
partida.

• Assumiremos também que os seus amigos sempre estão corretos quando estimam se conseguem ou não chegar ao próximo ponto de parada antes do anoitecer.

• Vamos considerar um conjunto de pontos de parada como válidos se a distância entre cada par adjacente é no máximo 𝑑, e o primeiro ponto de parada está a no máximo uma distância 𝑑 do início
e o último ponto de parada está a uma distância no máximo 𝑑 do final da corrida. 
Portanto, um conjunto de pontos de parada é valido se vocês conseguirem acampar nestes pontos e ainda
completar toda a trilha.

• Assumimos que o conjunto 𝑛 com todos os pontos de parada é valido.

Com base nas informações acima, podemos afirmar que o algoritmo proposto é ótimo, no sentido de que encontra o menor conjunto de pontos de parada válidos que completa o rally?
Estruture a resposta no formato de um relatório com as seguintes sessões:

1. O Problema;
2. O Algoritmo;
3. Análise do Algoritmo;
4. Implementação e Tempo de Execução.
   
Além do relatório, entregue sua implementação em um arquivo .zip.