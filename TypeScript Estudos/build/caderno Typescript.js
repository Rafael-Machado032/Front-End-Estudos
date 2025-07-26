"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 1000000);
    }
    info() {
        console.log(`Conta número: ${this.numero}, Titular: ${this.titular}`);
    }
    get saldo() {
        return this.saldoconta;
    }
    set saldo(valor) {
        if (valor >= 0) {
            this.saldoconta = valor;
        }
        else {
            console.log("Valor inválido para o saldo da conta.");
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldoconta += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso!`);
        }
        else {
            console.log("Valor inválido para depósito.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldoconta) {
            this.saldoconta -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        }
        else {
            console.log("Valor inválido para saque ou saldo insuficiente.");
        }
    }
}
class ContaPF extends Conta {
    baseCalculo = 0;
    cpf;
    constructor(titular, cpf, saldo = 0) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        super.info();
        return `CPF: ${this.cpf}`;
    }
    depositar(valor) {
        super.depositar(valor);
    }
    sacar(valor) {
        super.sacar(valor);
    }
    calcularImposto(taxa) {
        this.baseCalculo = this.saldo;
        return this.baseCalculo * taxa;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        super.info();
        return `CNPJ: ${this.cnpj}`;
    }
    depositar(valor) {
        super.depositar(valor);
    }
    sacar(valor) {
        super.sacar(valor);
    }
}
const conta1 = new ContaPF("João", "123.456.789-00");
console.log(conta1.info());
const conta2 = new ContaPJ("Maria", "12.345.1234.5678");
console.log(conta2.info());
conta1.info();
conta2.info();
conta1.depositar(1000);
conta2.depositar(2000);
conta1.saldo = 500;
conta2.saldo = 1000;
console.log(`Saldo da conta de ${conta1.info()}: R$${conta1.saldo}`);
console.log(`Saldo da conta de ${conta2.info()}: R$${conta2.saldo}`);
;
;
let curso1;
let curso2;
curso1 = {
    titulo: "Curso de TypeScript",
    duracao: 30,
    ativo: true,
    programa: "TypeScript",
    iniciarCurso: (teste) => {
        console.log(`Iniciando o curso: ${teste}`);
    },
};
curso2 = {
    titulo: "Curso de JavaScript",
    duracao: 40,
    ativo: false,
    maximoAlunos: 100,
    programa: "JavaScript",
};
function exibirDados(dados) {
    return dados;
}
function exibirDados2(dados, r) {
    return r;
}
console.log(exibirDados("Olá, TypeScript!"));
console.log(exibirDados(123));
console.log(exibirDados2(true, false));
class Caixa {
    conteudo;
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    obterConteudo() {
        return this.conteudo;
    }
}
const caixaString = new Caixa("Texto dentro da caixa");
const caixaNumero = new Caixa(12345);
const modulo_1 = require("./modulo");
const p1 = new modulo_1.PessoaModel("João", 1.75, 30);
const p2 = new modulo_1.PessoaModel2("Maria", 1.65, 25);
console.log(p1.nome);
console.log(p1.altura);
console.log(p2.idade);
const modulo_2 = require("./modulo");
modulo_2.Globais.teste = 10;
let av = [10, 20, 30, 40];
let [aa, bb, cc, dd] = av;
const obj = {
    cor1: "verde",
    cor2: "azul",
    cor3: "vermelho",
    cor4: "amarelo"
};
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1 = 0, nu2 = 0, nu3 = 0, nu4 = 0] = [10];
let [n1, n2, ...nt] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const fcores = () => {
    return ["Verde", "Amarelo", "Azul", "Branco"];
};
let [co1, co2, co3, co4] = fcores();
let texto = "Curso de Typescript";
let [...t] = texto.split(" ");
let [pa1, pa2, pa3] = texto.split(" ");
