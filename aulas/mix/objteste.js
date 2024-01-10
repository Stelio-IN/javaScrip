class Pessoa {
    // Construtor da classe
    constructor(nome, idade) {
      this.nome = nome
      this.idade = idade
    }
  
    // Método da classe
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
  }

  // Criando um objeto usando a classe
let pessoa1 = new Pessoa('João', 24)

let pessoa2 = new Pessoa('Stelio',23)


pessoa2.apresentar()
pessoa1.apresentar()