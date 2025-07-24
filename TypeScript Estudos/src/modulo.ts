


export class PessoaModel { // export esta palavra-chave é usada para exportar a classe PessoaModel, tornando-a acessível em outros módulos
    nome: string;
    altura: number;
    idade: number;

    constructor(nome: string, altura: number, idade: number) {
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
    }
}

export class PessoaModel2 { 
    nome: string;
    altura: number;
    idade: number;

    constructor(nome: string, altura: number, idade: number) {
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
    }
}

// Ou export { PessoaModel, PessoaModel2 }; // Esta sintaxe também pode ser usada para exportar a classe PessoaModel, mas é mais comum usar a primeira forma quando se define uma classe.
export default PessoaModel; // Exporta a classe PessoaModel como exportação padrão do módulo, permitindo que seja importada sem chaves em outros módulos.

/*Namespace*/
// No TypeScript, um namespace é uma forma de agrupar código relacionado em um único escopo, evitando conflitos de nomes e organizando melhor o código.
// Os namespaces são definidos usando a palavra-chave `namespace` e podem conter classes, interfaces, funções e variáveis.
// Eles são úteis para organizar grandes projetos e evitar poluição do escopo global
// Exemplo de uso de namespace:

namespace Veiculo {
    export class Carro { // A palavra-chave `export` é usada para tornar a classe Carro acessível fora do namespace Veiculo
        constructor(public modelo: string, public ano: number) {
            this.modelo = modelo;
            this.ano = ano;
        }
    }
    class Moto { // A classe Moto também pode ser definida dentro do namespace Veiculo
        constructor(public modelo: string, public ano: number) {
            this.modelo = modelo;
            this.ano = ano;
        }
    }
}

const meuCarro = new Veiculo.Carro("Fusca", 1970); // Cria uma instância da classe Carro dentro do namespace Veiculo