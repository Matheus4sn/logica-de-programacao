// Cria variáveis e atribui valor 
let nome = "Matheus"
let nivel = 0

//Inicia a estrutura de controle
if (nivel <= 1000) { //Primeira condição
    nivel = "Ferro"
  console.log("O Herói de nome " + nome + " está no nível " + nivel)
} else if (nivel >= 1001 && nivel <= 2000) { //Segunda condição
    nivel = "Bronze"
    console.log("O Herói de nome " + nome + " está no nível " + nivel)
} else if (nivel >= 2001 && nivel <= 5000) { //Terceira condição
    nivel = "Prata"
    console.log("O Herói de nome " + nome + " está no nível " + nivel)
} else if (nivel >= 5001 && nivel <= 7000) { //Quarta condição
    nivel = "Ouro"
    console.log("O Herói de nome " + nome + " está no nível " + nivel)
} else if (nivel >= 7001 && nivel <= 8000) { //Quinta condição
    nivel = "Platina"
    console.log("O Herói de nome " + nome + " está no nível " + nivel)
} else if (nivel >= 8001 && nivel <= 9000) { //Sexta condição
    nivel = "Ascendente"
    console.log("O Herói de nome " + nome + " está no nível " + nivel)
} else if (nivel >= 9001 && nivel <= 10000) { //Sétima condição
    nivel = "Imortal"
    console.log("O Herói de nome " + nome + " está no nível " + nivel)
} else {
    nivel = "Radiante"
    console.log("O Herói de nome " + nome + " está no nível " + nivel)
}
