


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
    // Enum é uma estrutura que permite definir um conjunto de constantes nomeadas, facilitando a leitura e manutenção do código.
    enum Cores { // Define um enum chamado cores dentro do namespace Veiculo
        'vermelho',
        'azul',
        'verde',
        'amarelo',
        'preto',
        'branco'
    }
    abstract class Carro { // A palavra-chave `export` é usada para tornar a classe Carro acessível fora do namespace Veiculo
        private nome: string;
        private motor: Motores.Motor; // A classe Carro tem uma propriedade motor do tipo Motor, que é definida no namespace Motores
        private cor: string; // A classe Carro tem uma propriedade cor do tipo Cores, que é o enum definido acima
        constructor(nome: string, motor: Motores.Motor, cor: Cores) {
            this.nome = nome; // Inicializa a propriedade nome do carro
            this.motor = new Motores.Motor(3, 100); // Inicializa a propriedade motor do carro
            this.cor = Cores[cor]; // Inicializa a propriedade cor do carro
        }
        public ligarMotor() {
            this.motor.ligar = true; // Chama o método setter ligar do motor para ligar o motor do carro
        }
        public desligarMotor() {
            this.motor.ligar = false; // Chama o método setter ligar do motor para desligar o motor do carro
        }
        public get minhaCor() {
            return this.cor; // Método getter para acessar a cor do carro
        }
        public get nomeCarro() {
            return this.nome; // Método getter para acessar o nome do carro
        }
        public get estouLigado() {
            return (this.motor.ligadoMotor?"Sim":"Não"); // Método getter para verificar se o motor do carro está ligado
        }
        public get potenciaMotor() {
            return this.motor.potenciaMotor; // Método getter para acessar a potência do motor do carro
        }
    }

    export class CarroEsportivo extends Carro {
        
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(6,300, new Motores.Turbo(100)), 2); // Chama o construtor da classe Carro com os parâmetros nome, motor e cor
        }
        
    }

    export class CarroPopular extends Carro {
        
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(4, 100), 1); // Chama o construtor da classe Carro com os parâmetros nome, motor e cor
        }
    }
}

namespace Motores {
    export class Turbo { // A classe Motor é definida dentro do namespace Motores
        private potencia: number;
        constructor(potencia: number) {
            this.potencia = potencia;
        }
        get potenciaMotor() {
            return this.potencia; // Método getter para acessar a potência do motor
        }
    }

    export class Motor { // A classe MotorEletrico estende a classe Motor
        private ligado: boolean;
        private cilindros: number;
        private potencia: number;
        constructor(cilidros: number, potencia: number, turbo?: Turbo) {
            this.ligado = false; // Inicializa o motor como desligado
            this.cilindros = cilidros; // Define o número de cilindros do motor
            this.potencia = potencia + (turbo ? turbo.potenciaMotor : 0); // Define a potência do motor
        }
        set ligar(ligado: boolean) {
            this.ligado = ligado; // Método setter para ligar ou desligar o motor
        }
        get ligadoMotor() {
            return this.ligado; // Método getter para verificar se o motor está ligado
        }
        get potenciaMotor() {
            return this.potencia; // Método getter para acessar a potência do motor
        }

    }
}

const carro1 = new Veiculo.CarroEsportivo('Fusca', 2); // Cria uma instância da classe CarroEsportivo
const carro2 = new Veiculo.CarroPopular('Fusca', 0); // Cria uma instância da classe CarroPopular

console.log(carro1.nomeCarro); // Exibe o nome do carro esportivo
console.log(carro1.minhaCor); // Exibe a cor do carro esportivo
console.log(carro1.potenciaMotor); // Exibe a potência do motor do carro
console.log(carro1.estouLigado); // Exibe se o motor do carro esportivo está ligado
carro1.ligarMotor(); // Liga o motor do carro esportivo
console.log(carro1.estouLigado); // Verifica se o motor do carro esportivo está ligado
console.log(carro1.potenciaMotor); // Exibe a potência do motor do carro esportivo
carro1.desligarMotor(); // Desliga o motor do carro esportivo
console.log(carro1.estouLigado); // Verifica se o motor do carro esportivo está desligado
console.log(carro1.potenciaMotor); // Exibe a potência do motor do carro esportivo após desligar

//Static

export abstract class Globais {
    public static readonly PI = 3.14159;
    public static readonly VELOCIDADE_LUZ = 299792458; // em metros por segundo
    public static readonly GRAVIDADE = 9.80665; // em metros por segundo ao quadrado
    public static teste:number = 0;
    public static ateste: number[] = [];
    public static objeto = {
        nome: "Rafarl",
        email: "rafael@rafael.com"

    }


}














