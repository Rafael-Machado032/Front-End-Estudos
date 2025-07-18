/*Para compilar automaticamente deve-se executar
o comando `tsc --watch` no terminal, na pasta do projeto.*/
// Para compilar uma vez, basta executar o comando `tsc`


/*Type Interface*/

// Quando crio uma varialvel, o TypeScript já infere o tipo dela
let nome_teste = "João"; // string
let idade_teste = 30; // number
let ativo_teste = true; // boolean
// No JavaScript, não é necessário declarar o tipo da variável.
// pois posso atribuir qualquer valor a ela depois, sendo string, number ou boolean.

// No TypeScript, é possível declarar o tipo da variável explicitamente.
let nome_teste2: string = "João";
let idade_teste2: number = 30;
let ativo_teste2: boolean = true;
// Se eu tentar atribuir um valor de tipo diferente, o TypeScript irá gerar um erro.
// nome_teste2 = 30; // Erro: Type 'number' is not assignable to type 'string'.
// No TypeScript não é possivel declarar uma variável com o mesmo nome de uma variável já declarada em outro arquivo.

/*Union Types */

// Union Types permitem que uma variável possa ser de mais de um tipo.
let id: string | number;
id = "123"; // OK
id = 123; // OK
// id = true; // Erro: Tipo 'boolean' não é atribuível ao tipo 'string | number'.

/* Array e ReadonlyArray */

// Array é um tipo de dado que permite armazenar uma coleção de valores.
// No TypeScript, é possível declarar um array de tipos específicos usando a sintaxe `tipo[]` ou `Array<tipo>`.
let ids: string[]; // Array de strings
ids = ["123", "456"]; // OK
// ids = [123]; // Erro: Tipo 'number' não é atribuível ao tipo 'string[]'.
let ids2: Array<string>; // Outra forma de declarar um array de strings
ids2 = ["123", "456"]; // OK
// ids2 = [123]; // Erro: Tipo 'number' não é atribuível ao tipo 'Array<string>'.

// Também é possível declarar um array que aceita mais de um tipo usando Union Types.
let ids3: (string | number)[];
ids3 = ["123", 123]; // OK
// ids3 = [true]; // Erro: Tipo 'boolean' não é atribuível ao tipo 'string | number'.

// ReadonlyArray é um tipo de array que não pode ser modificado, ou seja, não é possível adicionar, remover ou alterar elementos do array.
// É útil quando queremos garantir que um array não será modificado acidentalmente.
let ids4: ReadonlyArray<string | number>; //
ids4 = ["123", 123]; // OK
// ids4 = [true]; // Erro: Tipo 'boolean' não é atribuível ao tipo 'string | number'.

ids.push("789"); // Adiciona um novo ID ao final do array
ids.pop(); // Remove o último ID do array
ids.shift(); // Remove o primeiro ID do array
ids.unshift("000"); // Adiciona um novo ID ao início do array

/*Tuple Types */

// Tuple Types são tipos de dados que permitem armazenar uma coleção de valores de tipos diferentes.
// É útil quando queremos garantir que um array tenha um tamanho fixo e que cada elemento tenha um tipo específico.
let pessoa: [string, number, boolean]; // Declara uma tupla
pessoa = ["João", 30, true]; // OK
// pessoa = ["João", 30]; // Erro: A tupla deve ter 3 elementos.
// pessoa = ["João", 30, true, "extra"]; // Erro: A tupla deve ter 3 elementos.
// pessoa = ["João", "30", true]; // Erro: Tipo 'string' não é atribuível ao tipo 'number'.

// Também é possível declarar uma tupla com Union Types.
let pessoa2: [string, number | boolean, boolean];
pessoa2 = ["João", 30, true]; // OK
pessoa2 = ["João", true, false]; // OK
// pessoa2 = ["João", "30", true]; // Erro: Tipo 'string' não é atribuível ao tipo 'number | boolean'.

// Também é possível declarar uma tupla com tipos opcionais usando o operador `?`.
let pessoa3: [string, number?, boolean?]; // Declara uma tupla com tipos opcionais
// operador `?` é usado para declarar um tipo opcional, ou seja, o elemento pode ou não estar presente na tupla.
pessoa3 = ["João"]; // OK
pessoa3 = ["João", 30]; // OK
pessoa3 = ["João", 30, true]; // OK
// pessoa3 = ["João", true]; // Erro: Tipo 'boolean' não é atribuível ao tipo 'number?'.
// pessoa3 = ["João", 30, true, "extra"]; // Erro: A tupla deve ter no máximo 3 elementos.

/* Object Types */

// Object Types são tipos de dados que permitem armazenar uma coleção de pares chave-valor.
// É útil quando queremos garantir que um objeto tenha propriedades específicas e que cada propriedade tenha um tipo específico.
let pessoa4: { nome: string; idade: number; ativo: boolean }; //
pessoa4 = { nome: "João", idade: 30, ativo: true }; // OK
// pessoa4 = { nome: "João", idade: 30 }; // Erro: Propriedade 'ativo' está faltando.
// pessoa4 = { nome: "João", idade: "30", ativo: true }; // Erro: Tipo 'string' não é atribuível ao tipo 'number'.

// Também é possível declarar um objeto com Union Types.
let pessoa5: { nome: string; idade: number | string; ativo: boolean };
pessoa5 = { nome: "João", idade: 30, ativo: true }; // OK
pessoa5 = { nome: "João", idade: "30", ativo: true }; // OK
// pessoa5 = { nome: "João", idade: true, ativo: false }; // Erro: Tipo 'boolean' não é atribuível ao tipo 'number | string'.

// Também é possível declarar um objeto com tipos opcionais usando o operador `?`.
let pessoa6: { nome: string; idade?: number; ativo?: boolean }; // Declara um objeto com tipos opcionais
pessoa6 = { nome: "João" }; // OK
pessoa6 = { nome: "João", idade: 30 }; // OK
pessoa6 = { nome: "João", idade: 30, ativo: true }; // OK
// pessoa6 = { nome: "João", ativo: true }; // Erro: Propriedade 'idade' está faltando.
// pessoa6 = { nome: "João", idade: 30, ativo: true, extra: "extra" }; // Erro: Propriedade 'extra' não existe no tipo '{ nome: string; idade?: number; ativo?: boolean; }'.

// Também é possível declarar um objeto com propriedades dinâmicas usando o operador `Record`.
let pessoa7: Record<string, string | number | boolean>; // Declara um objeto com propriedades dinâmicas
// O operador `Record` é usado para declarar um objeto com propriedades dinâmicas, ou seja, as chaves do objeto podem ser de qualquer tipo, mas os valores devem ser de um tipo específico.
pessoa7 = { nome: "João", idade: 30, ativo: true }; // OK
pessoa7 = { nome: "João", idade: "30", ativo: true }; // OK
pessoa7 = { nome: "João", idade: 30, ativo: true, extra: "extra" }; // OK
// pessoa7 = { nome: "João", idade: true, ativo: false }; // Erro: Tipo 'boolean' não é atribuível ao tipo 'number | string'.

/* ENUM Types */

// ENUM Types são tipos de dados que permitem definir um conjunto de valores nomeados.
// É útil quando queremos garantir que uma variável só possa ter um valor específico de um conjunto de valores.
enum Status {
  Ativo = "ativo",
  Inativo = "inativo",
  Pendente = "pendente",
} // Declara um ENUM com 3 valores possíveis
let status1: Status; // Declara uma variável do tipo ENUM
status1 = Status.Ativo; // OK
// status1 = "ativo"; // Erro: Tipo 'string' não é atribuível ao tipo 'Status'.
status1 = Status.Inativo; // OK
// status1 = "inativo"; // Erro: Tipo 'string' não é atribuível ao tipo 'Status'.
status1 = Status.Pendente; // OK
// status1 = "pendente"; // Erro: Tipo 'string' não é atribuível ao tipo 'Status'.

// Também é possível declarar um ENUM com valores numéricos.
enum StatusNumerico {
  Ativo = 1,
  Inativo = 2,
  Pendente = 3,
} // Declara um ENUM com 3 valores numéricos possíveis
let status2: StatusNumerico; // Declara uma variável do tipo ENUM
status2 = StatusNumerico.Ativo; // OK
// status2 = "ativo"; // Erro: Tipo 'string' não é atribuível ao tipo 'StatusNumerico'.
status2 = StatusNumerico.Inativo; // OK
// status2 = "inativo"; // Erro: Tipo 'string' não é atribuvel ao tipo 'StatusNumerico'.
status2 = StatusNumerico.Pendente; // OK
// status2 = "pendente"; // Erro: Tipo 'string' não é atribuvel ao tipo 'StatusNumerico'.

/* NULL UNDERFINE UNKNOWN */

// NULL, UNDERFINE e UNKNOWN são tipos de dados que permitem representar valores ausentes ou desconhecidos.
let valorNulo: null = null; // Declara uma variável do tipo NULL
// O tipo NULL é usado para representar a ausência de um valor, ou seja, quando uma variável não tem um valor atribuído.
let valorIndefinido: undefined = undefined; // Declara uma variável do tipo UNDERFINE
// O tipo UNDERFINE é usado para representar uma variável que foi declarada, mas não foi inicializada, ou seja, não tem um valor atribuído.
// Também é possível declarar uma variável do tipo UNDERFINE sem atribuir um valor a ela
let valorDesconhecido: unknown; // Declara uma variável do tipo UNKNOWN
// O tipo UNKNOWN é usado para representar um valor desconhecido, ou seja, quando não sabemos qual é o tipo do valor.
// O tipo UNKNOWN é mais seguro que o tipo ANY, pois não permite atribuir valores de qualquer tipo sem uma verificação de tipo explícita.
// Isso significa que, ao usar o tipo UNKNOWN, é necessário fazer uma verificação de tipo antes de atribuir um valor a ele ou usá-lo em uma operação.
// Por exemplo, se quisermos atribuir um valor de tipo diferente ao tipo UNKNOWN, precisamos fazer uma verificação de tipo antes:
valorDesconhecido = "teste"; // OK
valorDesconhecido = 123; // OK
valorDesconhecido = true; // OK

/* Type Assertions */

// Type Assertions são uma forma de informar ao TypeScript que sabemos mais sobre o tipo de uma variável do que o compilador.
// É útil quando queremos garantir que uma variável tenha um tipo específico, mesmo que o TypeScript não consiga inferir isso automaticamente.
let valor: unknown = "teste"; // Declara uma variável do tipo UNKNOWN
// O TypeScript não sabe qual é o tipo da variável, então precisamos fazer uma verificação de tipo antes de usá-la.
if (typeof valor === "string") {
  let tamanho: number = (valor as string).length; // OK, usamos Type Assertion para informar que valor é do tipo string
  console.log(tamanho); // Imprime o tamanho da string
}
// Também é possível usar o operador `<>` para fazer Type Assertion
if (typeof valor === "string") {
  let tamanho: number = (<string>valor).length; // OK, usamos Type Assertion para informar que valor é do tipo string
  console.log(tamanho); // Imprime o tamanho da string
}

let nvalor2: number;
let svalor2: string;
let uvalor2: unknown;

uvalor2 = 123; // Atribui um valor de tipo number
nvalor2 = <number>uvalor2; // OK, usamos Type Assertion para informar que uvalor2 é do tipo number
svalor2 = <string>uvalor2; // OK, usamos Type Assertion para informar que uvalor2 é do tipo string

//obs: unknown é um tipo mais seguro que any, pois não permite atribuir valores de qualquer tipo sem uma verificação de tipo explícita.
// a diferença entre unknown e any é que, ao usar unknown, é necessário fazer uma verificação de tipo antes de atribuir um valor a ele ou usá-lo em uma operação.
// "unknown" é sem nenhum tipo. o que significa que não podemos fazer operações com ele sem antes verificar seu tipo.
// Já o "any" é um tipo que permite atribuir valores de qualquer tipo, sem restrições, mas não é recomendado por questões de segurança e manutenção do código.

/*Funções em TypeScript */

// As funções em TypeScript podem ter tipos de parâmetros e tipos de retorno.
// Isso significa que podemos declarar o tipo de cada parâmetro da função e o tipo do valor de retorno da função.
// Isso ajuda a garantir que a função seja chamada com os tipos corretos e
// que o valor de retorno da função também tenha o tipo correto.
function soma(a: number, b: number): number { //Retorno tipo number
  return a + b;
}


function exibeMensagem(mensagem: string): void { // Retorno tipo void, ou seja, não retorna nada.
  console.log(mensagem);
}

let resultado: number = soma(10, 20); // OK, a função soma é chamada com os tipos corretos
let resultado2: string = soma(10, 20).toString(); // OK, o resultado da função soma é convertido para string
exibeMensagem("Olá, TypeScript!"); // OK, a função exibeMensagem é chamada com os tipos corretos


/* Funções Parametros, Padrões e Opcionais*/

function saudacao(nome: string, idade: number = 18): string { // Parâmetro idade com valor padrão
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

console.log(saudacao("João")); // OK, idade usa o valor padrão de 18
console.log(saudacao("Maria", 25)); // OK, idade é passado como argumento

function calcularArea(base: number, altura?: number): number { // Parâmetro altura opcional pois é marcado com "?".
  // Se altura não for passado, o TypeScript irá considerar que o valor é undefined.
  if (altura === undefined) {
    altura = base; // Se altura não for passado, usa base como altura
  }
  return base * altura;
}

console.log(calcularArea(5)); // OK, altura usa o valor padrão de base
console.log(calcularArea(5, 10)); // OK, altura é passado como argumento

/* Funções Anônimas */

const soma1 = (a: number, b: number): number => {
  return a + b;
};

console.log(soma1(10, 20)); // OK, a função anônima é chamada com os tipos corretos


/* Funções com Rest Parameters */

// Rest Parameters permitem que uma função aceite um número variável de argumentos.
// É útil quando queremos criar uma função que pode receber um número indefinido de argumentos.
function soma2(...numeros: number[]): number { // Parâmetro rest, que aceita um número variável de argumentos do tipo number
  return numeros.reduce((total, numAtual) => total + numAtual, 0); // Soma todos os números passados como argumentos
// O método `reduce` é usado para iterar sobre o array de números e somar todos os valores, começando com um acumulador inicial de 0.
}
console.log(soma2(10, 20, 30)); // OK, a função com Rest Parameters é chamada com os tipos corretos
// Se eu tentar passar um argumento de tipo diferente, o TypeScript irá gerar um erro.
// soma2(10, "20", 30); // Erro: Argument of type 'string' is not assignable to parameter of type 'number'.

/* POO Classe */

// Programação Orientada a Objetos (POO) é um paradigma de programação que permite organizar o código em classes e objetos.
// Classes são modelos que definem as propriedades e comportamentos de um objeto.
// Objetos são instâncias de classes que possuem suas próprias propriedades e comportamentos.

class Pessoa {
  private nome: string; // Propriedades são variáveis que pertencem a uma classe e definem o estado do objeto.
  public idade: number; // Se não for especificado, o TypeScript assume que a propriedade é pública por padrão.
  protected matricula: string; // Propriedades protegidas só podem ser acessadas dentro da classe e suas subclasses.

  constructor(nome: string, idade: number, matricula: string) { //Construtor serve para inicializar as propriedades do objeto
    this.nome = nome;
    this.idade = idade;
    this.matricula = matricula;
  }

  apresentar(): string { // Método serve para definir comportamentos do objeto.
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
  mudarNome(novoNome: string): void { // Método para mudar o nome da pessoa
    this.nome = novoNome; // A palavra-chave `this` é usada para referenciar as propriedades e métodos da própria classe.
  } // Void indica que o método não retorna nenhum valor.
  getNome(): string { // Método getter para acessar o nome da pessoa
    return this.nome; // Retorna o nome da pessoa
  }

}

// A palavra-chave `private` é usada para declarar uma propriedade ou método que só pode ser acessado dentro da própria classe.
// A palavra-chave `public` é usada para declarar uma propriedade ou método que pode ser acessado de qualquer lugar, tanto dentro da classe quanto fora dela.
// A palavra-chave `protected` é usada para declarar uma propriedade ou método que só pode ser acessado dentro da própria classe e em subclasses, mas não fora delas.
// A palavra-chave `readonly` é usada para declarar uma propriedade que não pode ser modificada após a inicialização, ou seja, é somente leitura.
// A palavra-chave `static` é usada para declarar uma propriedade ou método que pertence à classe em si, e não a uma instância específica da classe.
// Isso significa que uma propriedade ou método estático pode ser acessado diretamente pela classe, sem precisar criar uma instância da classe.

const pessoa1 = new Pessoa("João", 30, "12345"); // A palavra-chave `new` é usada para criar uma nova instância da classe Pessoa.
//console.log(pessoa1.nome); // Erro, a propriedade nome é privada e não pode ser acessada diretamente fora da classe.
console.log(pessoa1.idade); // OK, acessa a propriedade idade do objeto pessoa1
console.log(pessoa1.apresentar()); // OK, chama o método apresentar do objeto pessoa1
console.log(pessoa1.getNome()); // OK, chama o método getter getNome do objeto pessoa1
pessoa1.mudarNome("Maria"); // OK, chama o método mudarNome do objeto pessoa1
//pessoa1.matricula = "67890"; // Erro, a propriedade matricula é protegida e não pode ser acessada diretamente fora da classe.
console.log(pessoa1.apresentar()); // OK, chama o método apresentar do objeto pessoa1 novamente, agora com o novo nome

/* Herança */
// Herança é um recurso da POO que permite criar uma nova classe baseada em uma classe existente.
// A nova classe herda as propriedades e métodos da classe base, podendo adicionar novas propriedades e métodos ou sobrescrever os existentes.
// A palavra-chave `extends` é usada para indicar que uma classe herda de outra classe.

class Aluno extends Pessoa { // A classe Aluno herda da classe Pessoa
  private curso: string; // Propriedade específica da classe Aluno

  constructor(nome: string, idade: number, matricula: string, curso: string) {
    super(nome, idade, matricula); // A palavra-chave `super` é usada para chamar o construtor da classe base e acessar métodos ou propriedades da classe base.
    this.curso = curso;
  }

  apresentar(): string {
    return `${super.apresentar()} Estou cursando ${this.curso}.`;
  }
}

//Ex2:
class Conta{
  public numero: number;
  public titular: string;
  private saldoconta: number; // Propriedade privada para armazenar o saldo da conta

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta(); // Gera um número de conta aleatório
    this.titular = titular;
    this.saldoconta = 0; // Inicializa o saldo da conta como zero
  }

  private gerarNumeroConta():number {
    return Math.floor(Math.random() * 1000000); // Gera um número de conta aleatório
  }

  protected info(): void {
    
    console.log(`Conta número: ${this.numero}, Titular: ${this.titular}`);
  }

  public saldo(): number {
    return this.saldoconta; // Método público para acessar o saldo da conta
  }

  protected depositar(valor: number): void {
    if (valor > 0) {
      this.saldoconta += valor; // Adiciona o valor ao saldo da conta
      console.log(`Depósito de R$${valor} realizado com sucesso!`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }

  protected sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldoconta) {
      this.saldoconta -= valor; // Subtrai o valor do saldo da conta
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    } else {
      console.log("Valor inválido para saque ou saldo insuficiente.");
    }
  }
}

class ContaPF extends Conta {
  private cpf: string;

  constructor(titular: string, cpf: string, saldo: number = 0) {
    super(titular); // Chama o construtor da classe base Conta
    this.cpf = cpf;
  }

  public info(): string { // Método getter para acessar o CPF do titular
    
    super.info(); // Chama o método info da classe base Conta
    return `CPF: ${this.cpf}`;
  }

  public depositar(valor: number): void {
    super.depositar(valor); // Chama o método depositar da classe base Conta
  }

  public sacar(valor: number): void {
    super.sacar(valor); // Chama o método sacar da classe base Conta
  }
}

class ContaPJ extends Conta {
  private cnpj: string;

  constructor(titular: string, cnpj: string) {
    super(titular); // Chama o construtor da classe base Conta
    this.cnpj = cnpj;
  }

  public info(): string { // Método getter para acessar o CNPJ do titular
    
    super.info(); // Chama o método info da classe base Conta
    return `CNPJ: ${this.cnpj}`; // Retorna o CNPJ do titular
  }
}

const conta1 = new ContaPF("João", "123.456.789-00");
console.log(conta1.info()); // OK, chama o método info da classe ContaPF
const conta2 = new ContaPJ("Maria", "12.345.1234.5678");
console.log(conta2.info()); // OK, chama o método info da classe ContaPJ
conta1.info(); // OK, chama o método info da classe base Conta
conta2.info(); // OK, chama o método info da classe base Conta
