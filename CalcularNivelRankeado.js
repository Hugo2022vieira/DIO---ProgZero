function calcularNivelRankeada(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
  
    // Definição do nível do jogador
    let nivel;
    if (saldoVitorias < 0) {
      // Nível negativo não é permitido
      nivel = "Erro: Saldo de vitórias negativo";
    } else if (saldoVitorias < 10) {
      nivel = "Ferro";
    } else if (saldoVitorias < 21) {
      nivel = "Bronze";
    } else if (saldoVitorias < 51) {
      nivel = "Prata";
    } else if (saldoVitorias < 81) {
      nivel = "Ouro";
    } else if (saldoVitorias < 91) {
      nivel = "Diamante";
    } else if (saldoVitorias < 101) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Exibição da mensagem de saída formatada
    console.log(`
      **Saldo de vitórias:** ${saldoVitorias}
      **Nível:** ${nivel}
    `);
  }
  
  