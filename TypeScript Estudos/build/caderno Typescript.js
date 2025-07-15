"use strict";
let nome_teste = "João";
let idade_teste = 30;
let ativo_teste = true;
let nome_teste2 = "João";
let idade_teste2 = 30;
let ativo_teste2 = true;
let id;
id = "123";
id = 123;
let ids;
ids = ["123", "456"];
let ids2;
ids2 = ["123", "456"];
let ids3;
ids3 = ["123", 123];
let ids4;
ids4 = ["123", 123];
ids.push("789");
ids.pop();
ids.shift();
ids.unshift("000");
let pessoa;
pessoa = ["João", 30, true];
let pessoa2;
pessoa2 = ["João", 30, true];
pessoa2 = ["João", true, false];
let pessoa3;
pessoa3 = ["João"];
pessoa3 = ["João", 30];
pessoa3 = ["João", 30, true];
let pessoa4;
pessoa4 = { nome: "João", idade: 30, ativo: true };
let pessoa5;
pessoa5 = { nome: "João", idade: 30, ativo: true };
pessoa5 = { nome: "João", idade: "30", ativo: true };
let pessoa6;
pessoa6 = { nome: "João" };
pessoa6 = { nome: "João", idade: 30 };
pessoa6 = { nome: "João", idade: 30, ativo: true };
let pessoa7;
pessoa7 = { nome: "João", idade: 30, ativo: true };
pessoa7 = { nome: "João", idade: "30", ativo: true };
pessoa7 = { nome: "João", idade: 30, ativo: true, extra: "extra" };
var Status;
(function (Status) {
    Status["Ativo"] = "ativo";
    Status["Inativo"] = "inativo";
    Status["Pendente"] = "pendente";
})(Status || (Status = {}));
let status1;
status1 = Status.Ativo;
status1 = Status.Inativo;
status1 = Status.Pendente;
var StatusNumerico;
(function (StatusNumerico) {
    StatusNumerico[StatusNumerico["Ativo"] = 1] = "Ativo";
    StatusNumerico[StatusNumerico["Inativo"] = 2] = "Inativo";
    StatusNumerico[StatusNumerico["Pendente"] = 3] = "Pendente";
})(StatusNumerico || (StatusNumerico = {}));
let status2;
status2 = StatusNumerico.Ativo;
status2 = StatusNumerico.Inativo;
status2 = StatusNumerico.Pendente;
let valorNulo = null;
let valorIndefinido = undefined;
let valorDesconhecido;
valorDesconhecido = "teste";
valorDesconhecido = 123;
valorDesconhecido = true;
let valor = "teste";
if (typeof valor === "string") {
    let tamanho = valor.length;
    console.log(tamanho);
}
if (typeof valor === "string") {
    let tamanho = valor.length;
    console.log(tamanho);
}
let nvalor2;
let svalor2;
let uvalor2;
uvalor2 = 123;
nvalor2 = uvalor2;
svalor2 = uvalor2;
function soma(a, b) {
    return a + b;
}
function exibeMensagem(mensagem) {
    console.log(mensagem);
}
let resultado = soma(10, 20);
let resultado2 = soma(10, 20).toString();
exibeMensagem("Olá, TypeScript!");
function saudacao(nome, idade = 18) {
    return `Olá, ${nome}! Você tem ${idade} anos.`;
}
console.log(saudacao("João"));
console.log(saudacao("Maria", 25));
function calcularArea(base, altura) {
    if (altura === undefined) {
        altura = base;
    }
    return base * altura;
}
console.log(calcularArea(5));
console.log(calcularArea(5, 10));
const soma1 = (a, b) => {
    return a + b;
};
console.log(soma1(10, 20));
function soma2(...numeros) {
    return numeros.reduce((total, numAtual) => total + numAtual, 0);
}
console.log(soma2(10, 20, 30));
class Pessoa {
    nome;
    idade;
    matricula;
    constructor(nome, idade, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
    mudarNome(novoNome) {
        this.nome = novoNome;
    }
    getNome() {
        return this.nome;
    }
}
const pessoa1 = new Pessoa("João", 30, "12345");
console.log(pessoa1.idade);
console.log(pessoa1.apresentar());
console.log(pessoa1.getNome());
pessoa1.mudarNome("Maria");
console.log(pessoa1.apresentar());
class Aluno extends Pessoa {
    curso;
    constructor(nome, idade, matricula, curso) {
        super(nome, idade, matricula);
        this.curso = curso;
    }
    apresentar() {
        return `${super.apresentar()} Estou cursando ${this.curso}.`;
    }
}
