"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globais = exports.PessoaModel2 = exports.PessoaModel = void 0;
class PessoaModel {
    nome;
    altura;
    idade;
    constructor(nome, altura, idade) {
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
    }
}
exports.PessoaModel = PessoaModel;
class PessoaModel2 {
    nome;
    altura;
    idade;
    constructor(nome, altura, idade) {
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
    }
}
exports.PessoaModel2 = PessoaModel2;
exports.default = PessoaModel;
var Veiculo;
(function (Veiculo) {
    let Cores;
    (function (Cores) {
        Cores[Cores["vermelho"] = 0] = "vermelho";
        Cores[Cores["azul"] = 1] = "azul";
        Cores[Cores["verde"] = 2] = "verde";
        Cores[Cores["amarelo"] = 3] = "amarelo";
        Cores[Cores["preto"] = 4] = "preto";
        Cores[Cores["branco"] = 5] = "branco";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
            this.cor = Cores[cor];
        }
        ligarMotor() {
            this.motor.ligar = true;
        }
        desligarMotor() {
            this.motor.ligar = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get nomeCarro() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.ligadoMotor ? "Sim" : "Não");
        }
        get potenciaMotor() {
            return this.motor.potenciaMotor;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2);
        }
    }
    Veiculo.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(4, 100), 1);
        }
    }
    Veiculo.CarroPopular = CarroPopular;
})(Veiculo || (Veiculo = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        get potenciaMotor() {
            return this.potencia;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(cilidros, potencia, turbo) {
            this.ligado = false;
            this.cilindros = cilidros;
            this.potencia = potencia + (turbo ? turbo.potenciaMotor : 0);
        }
        set ligar(ligado) {
            this.ligado = ligado;
        }
        get ligadoMotor() {
            return this.ligado;
        }
        get potenciaMotor() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculo.CarroEsportivo('Fusca', 2);
const carro2 = new Veiculo.CarroPopular('Fusca', 0);
console.log(carro1.nomeCarro);
console.log(carro1.minhaCor);
console.log(carro1.potenciaMotor);
console.log(carro1.estouLigado);
carro1.ligarMotor();
console.log(carro1.estouLigado);
console.log(carro1.potenciaMotor);
carro1.desligarMotor();
console.log(carro1.estouLigado);
console.log(carro1.potenciaMotor);
class Globais {
    static PI = 3.14159;
    static VELOCIDADE_LUZ = 299792458;
    static GRAVIDADE = 9.80665;
    static teste = 0;
    static ateste = [];
    static objeto = {
        nome: "Rafarl",
        email: "rafael@rafael.com"
    };
}
exports.Globais = Globais;
