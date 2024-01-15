// A variável balance recebe o saldo entre vitórias e derrotas
let balance = rankingCalculator(10, 1)
// A variável phrase usa interpolação de string para tornar o código mais legível
let phrase = `O Herói tem um saldo de ${balance} e está no nível de `

// Função que calcula o saldo entre as vitórias e as derrotas do jogador
function rankingCalculator (victory, loss) {
    return victory - loss
}

//Estrutura de controle
if (balance <= 10) { //1ª condição
    console.log(phrase + "Ferro")
} else if (balance >= 11 && balance <= 20) { //2ª condição
    console.log(phrase + "Bronze")  
} else if (balance >= 21 && balance <= 50) { //3ª condição
    console.log(phrase + "Prata")
} else if (balance >= 51 && balance <= 80) { //4ª condição
    console.log(phrase + "Ouro")
} else if (balance >= 81 && balance <= 90) { //5ª condição
    console.log(phrase + "Diamante")
} else if (balance >= 91 && balance <= 100) { //6ª condição
    console.log(phrase + "Lendário")
} else {
    console.log(phrase + "Imortal")
}