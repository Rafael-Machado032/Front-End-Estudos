"use strict"  //Modo restrito para corrigir as variáveis

console.log("Ola Mundo"); //Imprime no Console

let nome = "Rafael Machado";

console.log("Meu nome é " + nome + " e sou programador!");

//*Tipo de variáveis

if (true) { //Um escopo
    var nome2 = "Rafael";  //VAR É uma variável que pode ser usada fora do escopo
    let nome3 = "Graziele";  //LET É uma variável qu não pode ser usado fora do escopo
}
//console.log(nome2 + nome3);  //O nome3 vai apresentar erro

const curso = "JavaScript"  //CONST Depois de declarada e inserida o valor não pode ser mudado

//Operadores Matemático

/**            
*    +  Soma
*    -  Subtração
*    *  Multiplição
*    /  Divisão
*    %  Resto
*    ++ Incremento
*    -- Decremento
*    += Incremento
*    -= Decremento
*/

//Ex:
let num1 = 2, num2 = 15, res = 0;
res = num2 % num1;
console.log("A resposta é " + res) //A resposta é 1

//*Operadores lógicos

/*
&& End E
|| Or  OU
!  Not Negação

    AND                         OR
 V | V | VERDADEIRO         V | V | VERDADEIRO   
 V | F | FALSO              V | F | VERDADEIRO   
 F | V | FALSO              F | V | VERDADEIRO       
 F | F | FALSO              F | F | FALSO  
 
*/

//*Operadores BitWise

/*
Decimal para Binário

0	0000000	    20	0010100	    40	0101000	    60	0111100	    80	1010000
1	0000001	    21	0010101	    41	0101001	    61	0111101	    81	1010001
2	0000010	    22	0010110	    42	0101010 	62	0111110	    82	1010010
3	0000011	    23	0010111	    43	0101011	    63	0111111	    83	1010011
4	0000100	    24	0011000	    44	0101100	    64	1000000	    84	1010100
5	0000101	    25	0011001	    45	0101101	    65	1000001	    85	1010101
6	0000110	    26	0011010	    46	0101110	    66	1000010	    86	1010110
7	0000111	    27	0011011	    47	0101111	    67	1000011	    87	1010111
8	0001000	    28	0011100	    48	0110000	    68	1000100	    88	1011000
9	0001001	    29	0011101	    49	0110001	    69	1000101	    89	1011001
10	0001010	    30	0011110	    50	0110010 	70	1000110	    90	1011010
11	0001011	    31	0011111	    51	0110011	    71	1000111	    91	1011011
12	0001100	    32	0100000	    52	0110100	    72	1001000	    92	1011100
13	0001101 	33	0100001	    53	0110101	    73	1001001	    93	1011101
14	0001110	    34	0100010	    54	0110110	    74	1001010	    94	1011110
15	0001111	    35	0100011	    55	0110111	    75	1001011	    95	1011111
16	0010000	    36	0100100	    56	0111000	    76	1001100	    96	1100000
17	0010001	    37	0100101	    57	0111001	    77	1001101	    97	1100001
18	0010010	    38	0100110	    58	0111010	    78	1001110	    98	1100010
19	0010011	    39	0100111	    59	0111011	    79	1001111	    99	1100011

*/

let n1 = 10;
let n2 = 12;
let result;
result = n1 & n2; //Compara equivalência dos bits que os números representa

/*
EX:

         1010 = 10 Compara com o bit de baixa e faz relação "AND"
         ||||
         1100 = 12 
result = 1000 = 8

*/

result = n1 | n2; //Compara equivalência dos bits que os números representa

/*
EX:

         1010 = 10 Compara com o bit de baixa e faz relação "OR"
         ||||
         1100 = 12 
result = 1110 = 14

*/


result = n1 ^ n2; //Compara equivalência dos bits que os números representa

/*
EX:

         1010 = 10 Compara com o bit de baixa e faz relação "AND NOT"
         ||||
         1100 = 12 
result = 0110 = 3

*/

result = n1 << 1; //Desloca um bit para a ESQUERDA

/*
EX:

          1010 = 10
         ////
result = 10100 = 20 
Se deslocar o bit em "1" para ESQUERDA ele DOBRA
*/

result = n1 >> 1; //Desloca um bit para a DIREITA

/*
EX:

        1010 = 10
         \\\
result = 0101 = 5
Se deslocar o bit em "1" para DIREITA ele reduz pela METADE
*/

//*Ternário

/**
*   Teste Logico ? Verdadeiro : Falso
*   1 = True
*   0 = False
*/
let a = 5;
let b = 10;

let res1 = ((a > b) ? "A maior que B" : "B maior que A");
//ou
let res2 = (!(a > b) ? "B maior que A" : "A maior que B"); //"!" Nega o resultado
console.log(res1);
console.log(res2);

//*Typeof

//Retorna o tipo da variável

let c = "oi";

console.log("A variável 'c' é do tipo " + typeof (c));

//*Spread

//Spread ele quebra um conjunto elemento (array) e devolve elemento por elemento
//EX1:
let a1 = [10, 20, 30];
let a2 = [11, 12, 13, 14];
let a3 = [...a1, ...a2]; //Usando spread "..." ele espalha os elementos dentro do "a3"

console.log(a3);
console.log("Tipo da variável 'a3' é " + typeof (a3)); // Faz a concatenação dos valores

//EX2:
const jogador1 = { nome: "Rafael", energia: 100, vidas: 3, magia: 150 };
const jogador2 = { nome: "Graziele", energia: 100, vidas: 5, velocidade: 80 };
const jogador3 = { ...jogador1, ...jogador2 }


console.log(jogador3)  //Se tiver os mesmo dados sempre prevalece o ultimo valor e dados diferentes concatena(junta)

//EX3:
//Operando em função

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3;
}

let valores = [1, 5, 4];

console.log("A soma é " + soma(...valores)); //Espalha os valores para cada propriedade da função


//EX4:

/*
const objs = document.getElementsByClassName("java"); //Ele retorna uma coleção de elementos html
const objs2 = [...document.getElementsByClassName("java")]; //Retorna um array de elementos html

/*
Quando eu tenho html collection essa coleção so recebe elementos HTML
Quando tenho um array de elementos eu posso adicionar outros tipos de elementos diferentes de HTML como valores string etc 
*/
/*
console.log(objs); //No node não reconhece o "Document" so no navegador pois ele e´uma implementação do DOM
console.log(objs2); 

objs2.forEach(element => {  //Percorre os elementos do array. Não reconhece HTML Collection
    console.log(element);  //retorna os elementos do array
    element.innerHTML="Curso"; //Troca todos os conteúdos da coleção do array
});
*/

//*IF e IF ELSE

let nu = 4;

if (nu > 10)  //Se a instrução for uma linha não precisa de colchetes
    console.log("Maior que 10");


if (nu <= 5) {
    console.log("Menor ou igual a 5"); //Verdadeiro
} else {
    console.log("Maior que 5"); //Falso
}


//*SWITCH CASE

let ponto = 2;

switch (ponto) {
    case 10:
        console.log("10 pontos")
        break;
    case 5:
        console.log("5 pontos")
        break;


    default:
        console.log("Nenhum ponto");
        break;
}

//* LOOP FOR, WHILE e DO WHILE

/**     
 *  
 *          Definido -> FOR //Quando soubermos quantas vezes sera repetido
 *  Loop<
 *          Indefinido ->WHILE
 *                     ->DO WHILE //Quando não sabemos quantas vezes sera repetido
 */

//*FOR

for (let i = 0; i <= 10; i++) { //Repete 10 vezes
    console.log("Repetiu " + i);
}

//*FOR IN e FOR OF


let f = [10, 20, 30, 40]
for (let a = 0; a < f.length; a++) { //length é o numero de elementos dentro desse array
    const element = 0[a];
    console.log(f[a]);
}

for (const posição in f) { //No 'for in' a primeira variável recebe o numero de elementos do array "f"
    console.log(f[posição]);
}

for (const conteúdo of f) { //No 'for of' a primeira variável recebe o conteúdo do array "f"
    console.log(conteúdo);
}


//*WHILE

let num3 = 0

while (num3 < 5) { //No while executa ate quando for falso
    console.log(num3);
    num3++
}

//* DO WHILE

do {  //No 'do while' garante a execução e depois testa 
    console.log(num3);
    num3++
} while (num3 < 5);

//*FUNÇÕES
// Funções sao bloco de comandos que são executados quando chamado

function chamada() { //Declaração da função
    console.log("Chamou a função");
}

chamada(); //chamada da função

//*FUNÇÕES COM RETORNO

function retorno() {
    return "Retornou a função"  //Retorna o resultado da função
}                               //Não pode ter mais de um 'return' na função pois executa o primeiro e para

res = retorno() //O resultado é inserido em uma variável

console.log(res);

//*FUNÇÕES COM PARÂMETROS

function parâmetro(p1) { //com parâmetro inicia com uma variável
    console.log(p1);
}

parâmetro("Chamou com parâmetro") //no chamado insere valor dentro do chamado

//EX2:
function iniciaValor(n1 = 0, n2 = 1) { //Se iniciar com valores no parâmetros não precisa chamar a função com parâmetro
    res = n1 + n2
    return res
}
res2 = iniciaValor(10) //Na função exite dois valores mais foi inserido direto no parâmetro
console.log(res2);

//*FUNÇÕES COM PARÂMETROS REST

function soma1(...p) { //Função que não sabe o numero de parâmetros, usando spread
    res = 0
    for (let v of p) { //Executa a soma dos valores dentro do array 'p'
        res += v
    }
    return res
}

console.log(soma1(10, 20));

//*FUNÇÕES ANONIMAS

//São funções que não tem nome nelas e sao criadas somente no momento da execução da função

const func = function (v1, v2) {
    return v1 + v2
}

console.log(func(10, 40));

//EX2:
//FUNÇÃO CONSTRUTOR ANONIMA serve para funções simples digitado na mesma linha

const func1 = new Function("v1", "v2", "return v1 + v2") //Toda construção se utiliza um operador 'new' e o 'Function" com letra maiúscula
//Também é obrigatório aspas nos parâmetros e corpo da função, lembrando que o corpo é sempre a ultima aspas
console.log(func1(10, 30));

//*ARROW FUNCTION

//São funções LAMBIDA que representa funções anonimas de outra forma

const soma2 = (v1, v2) => { return v1 + v2 }
console.log(soma2(10, 15));

//EX2:

const nome1 = n => n; //Primeiro o parâmetro e depois da seta o corpo
console.log(nome1("Rafael"));

//EX3:

const add = n => n + 10 //caso seja mais complexas ou seja mais de uma linha utiliza-se 'return'
console.log(add(50));

//*FUNÇÃO DENTRO DE OUTRA FUNÇÃO

const soma3 = (...valores) => { // 2º A soma3 usa uma variável rest quando nao sabemos quantos valores vai entrar no array
    const somar = val => { // 4º Os valores da variável 'valores' vão dentro da variável 'val'
        let res3 = 0;
        for (let v of val) { // 5º Como 'val' é um array ele insere cada valor no 'v' e soma no comando de baixo
            res3 += v
        }
        return res3 // 6º retorna a resposta pra quem chamou no caso o return de baixo
    }
    return somar(valores) // 3º O return chama a função somar e insere os valores da variável 'valores'
}                         // 7º O valor retornado retorna para quem chamou nesse caso o console.log

console.log(soma3(20, 20, 40)) // 1º Chama a função soma3
// 8º Com o valor retornado imprime no console a resposta do res3

//*FUNÇÕES GERADORAS

//Funções geradoras são funções que retorna resultados controlados ou seja a cada chamado obtém outra resposta, diferente da primeira resposta

function* cores() { //Para declarar a função geradora coloca-se '*' do lado do 'function' ficando 'function*'
    yield 'Vermelho'//'yield' quando executada retorna essa resposta e para
    yield 'Verde'  // Quando chamar de novo executa o proxima 'yield' e mostra o seu resultado
    yield 'Azul'
}

const itc = cores(); //Coloca-se a função dentro de uma variável
console.log(itc.next().value); //Ao chamar a função coloca-se 'next().value' que sempre vai chamar a proxima 'yield'
console.log(itc.next().value);
console.log(itc.next().value); //Caso venha outra chamada sem ter mais 'yield' vai retorna undefined (indefinido)

//EX2:

function* perguntas() {
    const nom = yield 'Qual o seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nom + ", e seu esporte favorita é " + esporte
}

const itp = perguntas();
console.log(itp.next().value);  //Imprime primeiro yeld
console.log(itp.next("Rafael").value); //Coloca o valor no primeiro yield e imprime o segundo
console.log(itp.next("Futebol").value); //Coloca o valor no segundo yield e retorna o que esta no 'return'

//EX3:

function* contator() { // Gerador com loop
    let i = 0;
    while (true) { //loop infinito
        yield i++; //sempre acrescenta mais um quando a função for chamada
        if (i > 5) {  //Quando chegar ate 5 executa o fim do loop
            break
        }
    }
}
const itc1 = contator();
for (let c of itc1) { //Fica executando ate quando a função encontrar o break
    console.log(c);
}

//*MAP

//O map percorre todo o array e sem precisar do 'for' e retorna os valores no parâmetro

const curso1 = ['HTML', 'CSS', 'Javascript', 'PHP', 'React'] //Criado de array
curso1.map((el, i) => { //Primeiro parâmetro é os elemento da coleção e o segundo é a posição dos elementos
    console.log("Curso:" + el + " - Posição do curso:" + i); //Foi usada uma ARROW FUNCTION para manipular os elementos
})


//EX2:

const dobrar = (e) => e * 2; //Função de dobrar
const num = [1, 2, 3, 4, 5].map(dobrar); //criei um array com a função no map
console.log(num);

//*THIS

// function aluno(nome,nota) {
//     this.nome=nome  //'this' serve para separa a variável do parâmetro da função com o mesmo nome
//     this.nota=nota // "this.nome" Variável "nome" Parâmetro

//     console.log(nome);
//     console.log(nota);
// }

// aluno("Rafael",100);
//Esse código apresenta erro por causa do "use strict"


/**Manipulação dos elementos DOM 
 * O NodeJs não reconhece esse comandos e são executados somente no console do navegador
*/

//*getElementById. getElementsByTagName. getElementsByClassName.
//Serve para selecionar elementos especificado

const dc1 = document.getElementById("c1"); //Guarda dentro da variável o elemento HTML ex: <div id="c1">Curso</div>
const divTodos = [...document.getElementsByTagName("div")] //Como retorna um HTMLCollections para transformar em u array faz um spread para espalhar os elementos
const cursoTodos = [...document.getElementsByClassName("curso")]


console.log(dc1); //Mostra o elemento completo em HTML "<div id="c1">Curso</div>"
console.log(dc1.id); //Mostra o "id" do elemento "c1"
console.log(dc1.innerHTML); //Mostra o conteúdo do elemento "Curso"


//querySelectorAll

//Serve para chamar todos os elemento especificando nos parâmetros
const query_divTodas = [...document.querySelectorAll("div>p")] //Especificação idêntico ao do CSS
const query_cursosTodos = [...document.querySelectorAll(".curso")]

//Eventos

//addEventListener

/**Podemos ler eventos a partir da tag HTML exemplo "onclick" que dispara ao clicar
 * 
 * <div id="c1 class="curso c1" onclick="alert("Olá mundo!")">HTML</div>
 * 
 * Também pode chamar função ao clicar
 * 
 * <div id="c2 class="curso c2" onclick="msg()">PHP</div>
 * 
 * <script>
 *      const msg =()=>{
 *          alert("Olá mundo!")
 *      }
 * </script>
 */

//Agora para fazer a leitura de evento direto no java script usamos "addEventListener" que eh um escutador de eventos

//EX1:
const c1 = document.querySelector("#c1"); //Seleciona a tag que vai monitorar o evento

const msg = () => {     //Criação da função
    alert("Olá mundo!");
}

c1.addEventListener("click", msg);  //O primero parâmetro é o tipo de evento e o segundo é a função não precisa de parenteses

//EX2:

c1.addEventListener("click", () => { //Posso chamar uma função direto no escutador também

    alert("Olá mundo!");

})

//EX3:

c1.addEventListener("click", (evt) => { //Posso chamar uma função direto no escutador também
    //"evt" é uma variável que recebe o elemento
    let el = evt.target;  //"target mostra o elemento"
    el.classList.add("destaque"); //Insere outa classe chamado "destaque" Estilizado no css
})
//EX4:
const cursos = [...document.querySelectorAll(".cursos")]  //Distribui todos os elementos selecionado no array

cursos.map((el) => { //adiciona o escutador em todas as tag com a classe "cursos"
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.id + " foi clicado e o conteúdo é " + el.innerHTML); //mostra o id da tag
    })
})
 //A cada clique na tag fica destacado

 //stopPropagation
//Esse comando serve para bloquear o evento caso o contêiner pai estiver escultando click pois ele esculta todos, tanto pai quanto os filhos
c1.addEventListener("click",(evt)=>{
    evt.stopPropagation() //Esse comando eh uma função, necessário inserir na variável o parâmetro do elemento
 })

