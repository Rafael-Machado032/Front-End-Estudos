"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaModel2 = exports.PessoaModel = void 0;
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
    class Carro {
        modelo;
        ano;
        constructor(modelo, ano) {
            this.modelo = modelo;
            this.ano = ano;
            this.modelo = modelo;
            this.ano = ano;
        }
    }
    Veiculo.Carro = Carro;
    class Moto {
        modelo;
        ano;
        constructor(modelo, ano) {
            this.modelo = modelo;
            this.ano = ano;
            this.modelo = modelo;
            this.ano = ano;
        }
    }
})(Veiculo || (Veiculo = {}));
const meuCarro = new Veiculo.Carro("Fusca", 1970);
