// Função para calcular o nível do herói
function calcularNivel(xp) {
  if (xp < 1000) {
    return 'Ferro';
  } else if (xp >= 1001 && xp < 2001) {
    return 'Bronze';
  } else if (xp >= 2001 && xp < 5001) {
    return 'Prata';
  } else if (xp >= 5001 && xp < 7001) {
    return 'Ouro';
  } else if (xp >= 7001 && xp < 8001) {
    return 'Platina';
  } else if (xp >= 8001 && xp < 9001) {
    return 'Ascendente';
  } else if (xp >= 9001 && xp < 10001) {
    return 'Imortal';
  } else {
    return 'Radiante';
  }
}

// Variáveis
const nome = 'Goku';
const xp = 9000;

// Calcular o nível do herói
const nivel = calcularNivel(xp);

// Exibir a mensagem
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
