//Define a classe Hero com as propriedades name, age e type
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    //Cria um método que exibe uma mensagem com o tipo do herói e o tipo de ataque usado
    attacking() {
        if (this.type === "mago") {
            let attack = "usando magia";
            return attack = `O ${this.type} atacou ${attack}`;
        } else if (this.type === "guerreiro") {
           let attack = "usando espada"
           return attack = `O ${this.type} atacou ${attack}`;
        } else if (this.type === "monge") {
            let attack = "usando artes marciais"
            return attack = `O ${this.type} atacou ${attack}`;   
        } else if (this.type === "ninja") {
            let attack = "usando shuriken"
            return attack = `O ${this.type} atacou ${attack}`;   
        } else {
            return attack = "Por favor, digite uma classe válida de herói.";
        }  
    }
}
//Entrada de dados: cria um objeto novoHeroi baseado em nome, idade e tipo
const novoHeroi = new Hero("Matheus", 29, "guerreiro")

//Saída de dados: exibe uma mensagem contendo o tipo de herói e o tipo de ataque utilizado
console.log(novoHeroi.attacking())