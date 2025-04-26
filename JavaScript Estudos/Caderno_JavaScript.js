/*Índice*/

//Tema                                                                   Linha
//*Inicio ---------------------------------------------------------------- 105              
//*Tipo de variáveis ----------------------------------------------------- 115
//*Operadores Matemático ------------------------------------------------- 125
//*Operadores lógicos ---------------------------------------------------- 144
//*Operadores BitWise ---------------------------------------------------- 159
//*Ternário -------------------------------------------------------------- 249
//*Typeof ---------------------------------------------------------------- 265
//*Spread ---------------------------------------------------------------- 273
//*IF e IF ELSE ---------------------------------------------------------- 324
//*SWITCH CASE ----------------------------------------------------------- 339
//*LOOP FOR, WHILE e DO WHILE -------------------------------------------- 357
//*FOR ------------------------------------------------------------------- 367
//*FOR IN e FOR OF ------------------------------------------------------- 373
//*WHILE ----------------------------------------------------------------- 391
//*DO WHILE -------------------------------------------------------------- 400
//*FUNÇÕES --------------------------------------------------------------- 407
//*FUNÇÕES COM RETORNO --------------------------------------------------- 416
//*FUNÇÕES COM PARÂMETROS ------------------------------------------------ 426
//*FUNÇÕES COM PARÂMETROS REST ------------------------------------------- 442
//*FUNÇÕES ANONIMAS ------------------------------------------------------ 454
//*ARROW FUNCTION -------------------------------------------------------- 471
//*FUNÇÃO DENTRO DE OUTRA FUNÇÃO ----------------------------------------- 488
//*FUNÇÕES GERADORAS ----------------------------------------------------- 504
//*MAP ------------------------------------------------------------------- 548
//*THIS ------------------------------------------------------------------ 564
//*Manipulação dos elementos DOM ----------------------------------------- 578
//*getElementById. getElementsByTagName. getElementsByClassName. --------- 581
//*querySelectorAll ------------------------------------------------------ 594
//*Eventos --------------------------------------------------------------- 600
//*addEventListener ------------------------------------------------------ 602
//*stopPropagation ------------------------------------------------------- 657
//*Relações -------------------------------------------------------------- 664
//*Filter ---------------------------------------------------------------- 689
//*Remover Elemento ------------------------------------------------------ 701
//*Adicionar Antes ------------------------------------------------------- 708
//*Adicionar Depois ------------------------------------------------------ 725
//*Novo método de selecionar --------------------------------------------- 745
//*Pesquisar com Find ---------------------------------------------------- 762
//*Conforme ou não conforme com every (Todos) ---------------------------- 774
//*Conforme ou não conforme com every (No mínimo um) --------------------- 789
//*Reduce ---------------------------------------------------------------- 804
//*Iteradores ------------------------------------------------------------ 817
//*Array ----------------------------------------------------------------- 844
//*Map ------------------------------------------------------------------- 884
//*Set ------------------------------------------------------------------- 924
//*Template string ------------------------------------------------------- 932
//*Objeto como Classes --------------------------------------------------- 937
//*Objeto como função ---------------------------------------------------- 966
//*Objeto Literal -------------------------------------------------------- 966
//*Herança POO ----------------------------------------------------------- 1027
//*JSON ------------------------------------------------------------------ 1087
//*Static ---------------------------------------------------------------- 1118
//*Prototype ------------------------------------------------------------- 1145
//*Polimorfismo ---------------------------------------------------------- 1170
//*Abstract -------------------------------------------------------------- 1235
//*Clipboard ------------------------------------------------------------- 1266
//*Promise --------------------------------------------------------------- 1277
//*Data e Hora ----------------------------------------------------------- 1306
//*Math ------------------------------------------------------------------ 1363
//*Leitura de posição de mouse ------------------------------------------- 1369
//*Redirecionamento de Pagina -------------------------------------------- 1388
//*Caixa de dialogo ------------------------------------------------------ 1416
//*Criando conteúdo para impressão ou pdf -------------------------------- 1422
//*Objeto literal -------------------------------------------------------- 1448
//*Módulos --------------------------------------------------------------- 1514
//*Symbol ---------------------------------------------------------------- 1555
//*Funções da String ----------------------------------------------------- 1586
//*RegExp (Expressões regulares) ----------------------------------------- 1632
//*Desestruturação ------------------------------------------------------- 1661
//*Ponto e Virgula ";" --------------------------------------------------- 1752































//*Inicio

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

//*Operadores Matemático

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


//*Manipulação dos elementos DOM 
//**O NodeJs não reconhece esse comandos e são executados somente no console do navegador

//*getElementById. getElementsByTagName. getElementsByClassName.
//Serve para selecionar elementos especificado

const dc1 = document.getElementById("c1"); //Guarda dentro da variável o elemento HTML ex: <div id="c1">Curso</div>
const divTodos = [...document.getElementsByTagName("div")] //Como retorna um HTMLCollections para transformar em u array faz um spread para espalhar os elementos
const cursoTodos = [...document.getElementsByClassName("curso")]


console.log(dc1); //Mostra o elemento completo em HTML "<div id="c1">Curso</div>"
console.log(dc1.id); //Mostra o "id" do elemento "c1"
console.log(dc1.innerHTML); //Mostra o conteúdo do elemento "Curso"


//*querySelectorAll

//Serve para chamar todos os elemento especificando nos parâmetros
const query_divTodas = [...document.querySelectorAll("div>p")] //Especificação idêntico ao do CSS
const query_cursosTodos = [...document.querySelectorAll(".curso")]

//*Eventos

//*addEventListener

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

//*stopPropagation

//Esse comando serve para bloquear o evento caso o contêiner pai estiver escultando click pois ele esculta todos, tanto pai quanto os filhos
c1.addEventListener("click", (evt) => {
    evt.stopPropagation() //Esse comando eh uma função, necessário inserir na variável o parâmetro do elemento
})

//*Relações

console.log(caixa1.hasChildNodes()); //Retorna True o False se o elemento tem filhos
console.log(caixa1.ChildNodes); //Retorna os elementos filho
console.log(caixa1.children[1]); //Retorna uma lista de filhos, caso use o [] retornara a posição escolhida
console.log(caixa1.parentNode); //Retorna o Pai do elemento
console.log(caixa1.parentNode.parentNode); //Retorna o AVÔ do elemento
console.log(caixa1.parentNode.parentNode.children[4]); //Retorna o filho do AVÔ especifico

//Criação de elementos no java script
const cursos11 = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"];
cursos11.map((el, chave) => {  //No map percorre todo o array e na variável "el" insere o elemento e na "chave" a posição do elemento 
    const novoElemento = document.createElement("div"); //Declara a criação do elemento e armazena na memoria
    novoElemento.setAttribute("id", "c" + chave);  //Seta os atributos da div com id dinâmico que começa com 0 caso queira começar com 1 insere +1
    novoElemento.setAttribute("class", "curso c1"); //Seta a classe na div
    novoElemento.innerHTML = el; //Insere o conteúdo do array no html
    //Remoção do elemento 
    novoElemento.addEventListener("click", (evt) => { //Esse é um escultador de click e insere o elemento clicado no evt
        caixa1.removeChild(evt.target) //exclui o elemento clicado
    })
    caixa1.appendChild(novoElemento);//Adiciona no elemento pai

})


//*Filter
//Serve para filtrar os elementos de um array e retorna um outro array filtrado
btnCursoSelecionado.addEventListener("click", (evt) => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter((ele, ind, arr) => { //radioSelecionado é um novo array
        return ele.checked //retorna para o array novo
    })
    radioSelecionado = radioSelecionado[0]//retorna o primeiro cheked
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert("Curso selecionado: " + cursoSelecionado)
})

//*Remover Elemento
btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()//Chama a função de selecionado
    const cursoSelecionado = rs.parentNode.parentNode //Seleciona todo o elemento
    cursoSelecionado.remove()//Remove o elemento
})

//*Adicionar Antes
btnAdicionarCursoAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        if (nomeCurso.value = "") {//Testa se o valor não vem vazio
            const cursoSelecionado = rs.parentNode.parentNode//Pega toda a estrutura da div
            const novoCurso = criarNovoCurso(nomeCurso.value)//Pega o valor no novoCurso
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)//Insere o valor do novoCurso ANTES do CursoSelecionado
        } else {
            alert("Selecione um curso")
        }
    }
    catch (ex) {
        alert("Selecione um curso")
    }
})

//*Adicionar Depois
//Não existe insertAfter
btnAdicionarCursoDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado() //Chama a função Selecionado
    try {
        if (nomeCurso.value = "") {
            const cursoSelecionado = rs.parentNode.parentNode //Pega toda a estrutura da div
            const novoCurso = criarNovoCurso(nomeCurso.value) //Pega o valor no novoCurso
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling) //Insere o valor do novoCurso DEPOIS do CursoSelecionado pois pega o irmão do elemento
        } else {
            alert("Selecione um curso")
        }
    }

    catch (ex) {
        alert("Selecione um curso")
    }
})


//*Novo método de selecionar

novoElemento.addEventListener("click", (evt) => {
    tirarSeleção()
    evt.target.classList.toggle(".selecionado") //Ao clicar no elemento insere a classe selecionado
})
const tirarSeleção = () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el) => {
        el.classList.remove(".selecionado") //Remove a classe .Selecionados
    })
}
const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]//Vai ter so um curso selecionado
    return cursosSelecionado[0] //Retorna o único que tem a classe .selecionado      
}

//*Pesquisar com Find

btnPesquisar.addEventListener("click", (evt) => { //Criado o escultador de evento do botão
    resultado.innerHTML = "Valor não encontrado" //Caso não encontrado escreve na div o texto 
    const ret = elementos_array.find((e, i) => { //Pesquisa os elementos
        if (e.toUpperCase() == txt_pesquisar.value.toUpperCase()) { //Testa os elementos e transforma todos os valore em maiúsculas para não diferenciar de minuscula e maiúscula
            resultado.innerHTML = "Valor encontrado " + e + " na posição " + i //Troca o valor não encontrado para valor encontrado
            return e //return não tem importância
        }
    })
})

//*Conforme ou não conforme com every (Todos)
//Retorna verdadeiro se todos atender a especificação

btnVerificar.addEventListener("click", (evt) => {
    const ret = elementos_array.every((e, i) => { //Compara os elementos
        if (e < 18) { //testa se menor que 18
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18//Retorna verdadeiro  ou falso se atende essa condição
    })
    if (ret) { //se o resultado for verdadeiro imprime ok
        resultado.innerHTML = "OK"
    }
})

//*Conforme ou não conforme com every (No mínimo um)
//Diferente do every ele retorna verdadeiro se encontrar pelo menos um for verdadeiro

btnVerificar.addEventListener("click", (evt) => {
    const ret = elementos_array.some((e, i) => { //Compara os elementos
        if (e < 18) { //testa se menor que 18
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18//Retorna verdadeiro  ou falso se atende essa condição
    })
    if (ret) { //se o resultado for verdadeiro imprime ok
        resultado.innerHTML = "OK"
    }
})

//*Reduce
//Serve para reduzir um array usando seu próprio retorno ate chegar um valor
btnReduzir.addEventListener("click", (evt) => {
    dobro.push(elementos_array[0] * 2)
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
        ant.push(anterior) //insere a ultima posição
        atu.push(atual)
        dobro.push(atual * 2)
        return atual + anterior
    })

})

//*Iteradores
//São operações ocultas que identifica o conteúdo e quando termina
/** Tipos de elementos iteráveis
 * Arrays
 * String
 * Map
 * Sets
 */
//EX:
const valor = [10, 8, 5, 2]
const it_valores = valor[Symbol.iterador]() //Mostra a operação do iterador
console.log(valor)
console.log(it_valores.next());
console.log(it_valores.next());
console.log(it_valores.next());
console.log(it_valores.next());
console.log(it_valores.next());

/**Console:
 * [10,8,5,2]
 * { value: 10, done: false }
 * { value: 8, done: false }
 * { value: 5, done: false }
 * { value: 2, done: false }
 * { value: undefined, done: true } // O done mostra o final do array
 */

//*Array

let curso2 = ["html", "css", "Javascript"] //criado um array com conteúdo

curso2.push("c++") //adiciona no final do array
curso2.push("Python") //adiciona no final do array
curso2.pop()  //Exclui o ultimo conteúdo do array no exemplo python
curso2.unshift("java") //adiciona no começo do array
curso2.shift()  //Exclui o primeiro conteúdo do array no exemplo java

let turno = ["manha", "tarde", "noite", curso2] //Array dentro do array

console.log(turno[3][1]); //imprime css pos selecionou o array no segundo nível

//EX2:
let valores2 = [2, 5]
const op = [  //array com funções em cada posição
    (val) => {
        let res = 0
        for (const v of val) {
            res += v
        }
        return res
    },
    (val) => {
        let res = 1
        for (const v of val) {
            res *= v
        }
        return res
    },
    (val) => {
        for (const v of val) {
            console.log(v);
        }
    }
]
console.log(op[0](valores2)); //chamo a primeira função e insiro o valores entre parenteses


//*Map
//Parecido com array porem utiliza-se chaves para posições

/**
 * clear   -> Limpar todo a coleção
 * delete  -> Excluir um elemento
 * entries -> Entradas das coleção
 * forEach -> Loop para percorrer a coleção
 * get     -> Obter um elemento da coleção pela chave
 * has     -> Pesquisa a chave se tem na coleção retorna true o false
 * keys    -> Chaves da coleção
 * set     -> Adicionar um elemento da coleção
 * size    -> Tamanho da coleção
 * values  -> Valores da coleção
 */

let mapa = new Map()

mapa.set("curso", "javascript") //adiciona primeira a chave e depois o conteúdo
mapa.set(10, "curso")
mapa.set(1, 100)
mapa.set("canal", 100)

mapa.delete(1) // O delete pesquisa pela chave para exclusão

let pes = "teste"
let res3 = 10
if (mapa.has(pes)) { //Pesquisa se tem na coleção e testa no if
    res3 = "A chave existe na coleção com o valor: " + mapa.get(pes) //Mostra o valor 
} else {
    res3 = "A chave NÂO esta na coleção"

}
res3 += "<br/> O tamanho da coleção é " + mapa.size
caixa.innerHTML = res3

mapa.forEach((el) => {
    console.log(el); //imprime cada elemento da coleção
})

//*Set
//Parecido com array porem não aceita valores repetidos
let musicas = new Set(["musica1", "musica boa", "musica 10"])//Posso declarar os valores direto na construção

musicas.add("musica muito legal")
musicas.add("musica1") //Valores que ja estão na coleção ele não aceita
musicas.add("musica10")

//*Template string
const canal = "Java"
const frase = `Este é o curso de ${curso} do ${canal}` //Utiliza-se craze para declarar variáveis de outra forma


//*Objeto como Classes

class Pessoa {
    constructor(pNome, pIdade) { //Ao declarar o objeto se o construtor estiver parâmetro eh obrigado a inseri o valor quando chamar
        this.nome = pNome
        this.idade = pIdade
    }
    getNome() { //obtém o valor
        return this.nome
    }
    getIdade() {
        return this.idade
    }
    setNome(nome) { //Insere o valor
        this.idade = nome
    }
    setIdade(idade) {
        this.idade = idade
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Idade..: ${this.idade}`);
        console.log(`-------------------------------------`);

    }
}

const pessoa1 = new Pessoa("Rafael", 34)

//*Objeto como função

function Pessoa2(pNome, pIdade) {//Ao declarar o objeto se o construtor estiver parâmetro eh obrigado a inseri o valor quando chamar

    this.nome = pNome,
        this.idade = pIdade,

        this.getNome = function () { //obtém o valor
            return this.nome
        },
        this.getIdade = function () {
            return this.idade
        },
        this.setNome = function (nome) { //Insere o valor
            this.idade = nome
        },
        this.setIdade = function (idade) {
            this.idade = idade
        },
        this.info = function () {
            console.log(`Nome..: ${this.nome}`);
            console.log(`Idade..: ${this.idade}`);
            console.log(`-------------------------------------`);
        }
}


const pessoa2 = new Pessoa("Rafael", 34)


//*Objeto Literal
//Sempre aponta para a mesmo parâmetro mesmo declarado instancia diferente
const Pessoa1 = {
    nome,
    idade,
    getNome: function () {
        return this.nome
    },
    getIdade: function () {
        return this.idade
    },
    setNome: function (nome) {
        this.nome = nome
    },
    setIdade: function (idade) {
        this.idade = idade
    }
}

const p2 = Pessoa1 //Instancia diferente q a de baixo
const p3 = Pessoa1

p3.nome = "Rafael"
p2["nome"] = "Bruno"
Pessoa.setNome("Rodrigo")

console.log(Pessoa1.nome); //imprime o mesmo nome nos 3
console.log(p2.getNome());
console.log(p3.nome);


//*Herança POO

class Carro { //classe pai ou base
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function () {
        this.ligado = true
    }
    desligar = function () {
        this.ligado = false
    }
    setCor = function (cor) {
        this.cor = cor
    }
}
class Militar extends Carro {  //Classe filho
    constructor(nome, portas, blindagem, munição) {
        super(nome, portas) //O nome e portas recebido do militar são repassados para o pai
        this.blindagem = blindagem
        this.munição = munição
        this.setCor("Verde")
    }
    atirar = function () {
        if (this.munição > 0) {
            this.munição--
        }
    }
}
const c2 = new Carro("Normal", 4)
c2.ligar()
c2.setCor("Preto")

const c3 = new Militar("Tank", 1, 100, 50)
c3.atirar()
c3.atirar()
c3.atirar()
c3.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligados: ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`---------------------------`)

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Ligados: ${(c3.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Cor: ${c3.cor}`)
console.log(`Blindagem: ${c3.blindagem}`)
console.log(`Munição: ${c3.munição}`)
console.log(`---------------------------`)


//*JSON
//Utilizado para transferência de dados para apis

const pessoa3 = {
    nome: "Rafael",
    canal: "YouTube",
    curso: "JavaScript",
    aulas: {
        aula1: "introdução",
        aula2: "Variáveis",
        aula3: "Condicional"
    }
}

const converte_objeto_para_json = JSON.stringify(pessoa3)
/** Converte para formato JSON
{
   "nome": "Rafael",
   "canal": "YouTube",
   "curso": "JavaScript",
   "aulas": {
      "aula1": "introdução",
      "aula2": "Variáveis",
      "aula3": "Condicional"
   }
}
 */
const string_pessoa = '{"nome":"Rafael","canal":"YouTube","curso":"JavaScript","aulas":{"aula1":"introdução","aula2":"Variáveis","aula3":"Condicional"}}'
const converte_json_para_objeto = JSON.parse(string_pessoa) //Retorna para objeto


//*Static
//Serve para reverenciar somente a classe

class Npc {
    static alerta = false //O alerta so eh acionado para classe e não para cada estacia
    constructor(energia) {
        this.energia = energia

    }
    info = function () {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "Sim" : "Não")}`)
        console.log("--------------------------------------");
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alerta = true
npc1.alerta = true//com static esse comando não funciona

npc1.info()
npc2.info()
npc3.info()

//*Prototype
//Serve para adicionar um propriedade ou método a um objeto

const Nave = function (energia) {
    this.energia = energia
    this.disparos = 100
}

const n3 = new Nave(100)

Nave.prototype.vidas = 3 //Adicionei uma propriedade na classe
Nave.prototype.disparar = function () { //Adicionei um método
    if (this.disparos > 0) {
        this.disparos--
    }
}

n3.disparar()
n3.disparar()
n3.disparar()

console.log(Nave);
console.log(n3);
console.log(n3.disparar);

//*Polimorfismo
//Quando tenho a capacidade de um mesmo método ter ações diferentes


class Carro {
    constructor(tipo, estagioTurbo) {
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = "normal"
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = "esportivo"
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = "super esportivo"
        }
        this.velMax += this.turbo.pot //+= eh concatenação
    }
    info() {
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.turbo);
        console.log("------------------------------");
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        } else if (e == 1) {
            this.pot = 50
        } else if (e == 2) {
            this.pot = 75
        } else if (e == 3) {
            this.port = 100
        }
    }
}

class CarroEspecial extends Carro {

    constructor(estagioTurbo) {
        super(4, estagioTurbo)
        this.velMax = 300 + this.turbo.pot
        this.nome = "Carro Especial"
    }
    info() {
        console.log(`Nome.....${this.nome}`);
        console.log(`VelMax...${this.velMax}`);
        console.log(`Turbo....${this.turbo}`);
        console.log("------------------------------");
    }
}


const c4 = new Carro(1, 0)
const c5 = new Carro(1, 1)
const c6 = new CarroEspecial(3)

c4.info()
c5.info()
c6.info()

//*Abstract
//Quando tenho uma classe abstrata ela não pode ser estanciada, só como classe Base para outras classes


class carroPadrão {
    constructor() {
        if (this.constructor === carroPadrão) {//Tornamos a classe abstrata e não consegue ser estanciada
            throw new TypeError("Essa classe não pode ser estanciada!") //Exceção de erro
        }
        if (this.ligar === undefined) { //Na outra classe vai ser obrigatório implementar o método
            throw new TypeError("É obrigatório a implementar o método ligar!")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }

}

class Carro1 extends carroPadrão { // classe exemplo
    constructor() {
        this.velMax
    }
}
class CarroEspecial1 extends carroPadrão {
    constructor() {

    }

}

//*Clipboard
//Eh uma area de transferência tipo copiar e cola

tcpy.addEventListener("click", (evt) => {
    navigator.clipboard.writeText(display.innerHTML)//Copia conteúdo do display
    //Para versão mobile necessário usar select e selectRange
    teste.select() //seleciona o texto
    teste.setSelectionRange(0, 99999) //Quantidade de caractere selecionado de 0 a 99999
    navigator.clipboard.writeText(teste.value) //Copiar a partir do input
})

//*Promise
//Serve para aplicações que demora a processar executa depois que terminar recomendado para API

const numero = document.getElementById("numero")

let promessa = new Promise((resolve, rejeita) => {
    let resultado = true
    let tempo = 3000 //3 segundos para o tempo
    setTimeout(() => { //Executa depois de 3 segundos
        if (resultado) {
            resolve("Deu tudo certo!")
        } else {
            rejeita("Deu tudo errado")
        }
    }, tempo);
})
promessa.then((retorno) => { //se for true cai no primeiro parâmetro executa esse comandos, o processando... como ja executou não executa de novo
    numero.innerHTML = retorno
    numero.classList.remove("erro") //insere a classe para formatação
    numero.classList.add("ok")
})
promessa.catch((retorno) => { //se for falso cai nesse comandos
    numero.innerHTML = retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})

numero.innerHTML = "Processando..."//executa antes dos 3 segundos

//*Data e Hora

const data = new Date()
console.log(data); //retorna data hora 
console.log(Date.now); //retorna o código do Timestamp

const dia = getDate()
dia = dia < 10 ? "0" + dia : dia //Formatação para preencher com o zero quando for um digito

const mes = getMonth()
mes = mes < 10 ? "0" + mes : mes

const data_resumo = dia + "/" + mes + "/" + data.getFullYear()

//Exemplo de Relógio

const relógio = () => {
    const data1 = new Date

    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora

    let minuto = data.getHours()
    minuto = minuto < 10 ? "0" + minuto : minuto

    let segundo = data.getHours()
    segundo = segundo < 10 ? "0" + segundo : segundo

    const hora_completa = hora + ":" + minuto + ":" + segundo
}

const intervalo = setInterval(relógio, 1000); //A cada um segundo atualiza o horário

/**
 * getDate() = Dia do mes
 * getDay() = Dia da Semana (numero) 
 * getMonth() = Mes
 * getFullYear() = Ano com 4 dígitos
 * getHours() = Horas
 * getMinutes() = Minutos
 * getSeconds() = Segundos
 * getMilliseconds() = Milissegundos
 * getTimezoneOffset() = Timezone da localidade
 * getTime() = Timestamp (milissegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
 * Date.now() = Timestamp (milissegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
 * 
 * setDate() = Definem um dia do mes para data
 * setMonth() = Define um mes para data
 * setFullYear() = Define um ano para data
 * setHours() = Define horas
 * setMinutes() = Define minutos
 * setSeconds() = Define segundos
 * setMilliseconds() = Define milissegundos
 * toDateString() = Retorna somente a data
 */


//*Math
//Função para gerar cálculos Matemático

const num6 = Math.floor(Math.random() * 10) + 1 //Floor pega o numero inteiro e random pega um numero aleatório entre 0 e 1
//Nesse caso o numero aleatório é de 1 a 10

//*Leitura de posição de mouse

const olhos = [...document.getElementsByClassName("olho")]

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener("mousemove", (evt) => {
    posx_mouse = evt.clientX //retorna a posição do eixo x
    posy_mouse = evt.clientY //retorna a posição do eixo y

    const rot = Math.atan2(posx_mouse, posy_mouse) * 180 / Math.PI //atan2 retorna angulo em radianos e para transformar em graus multiplica por 180 e divide por PI

    olhos.forEach((o) => {
        o.style.transform = "rotate(" + rot + "deg)"//o valor é em graus
    })

})

//*Redirecionamento de Pagina
//Comandos para navegar nas paginas web

btn_url.addEventListener("click", (evt) => {
    window.location = "aula.html"  //Acessa a pagina local
    window.location = "https://www.google.com.br"  //Acessa a pagina na internet
    window.location.replace("https://www.google.com.br") //Acessa a pagina na internet e apaga o histórico da pagina anterior
    window.location.assign("https://www.google.com.br")  //Acessa a pagina na internet e manteiem o histórico da pagina anterior
    window.location.reload() //Recarrega a pagina
    window.history.back()  //Retorna a pagina anterior
    window.history.forward()  //Vai para proxima pagina
    console.log(window.history.length);  //Retorna a quantidade de paginas no historico
    window.history.go(2) //Acessa a pagina na posição do histórico (números negativo retorna as paginas anterior)


    /**
     * <!--Para consegui acessar o site digitado, necessário inserir onsubmit="event.preventDefault()" no form-->
     * 
     * <form onsubmit="event.preventDefault()"> 
     *      <input type="url" name="url" id="url" placeholder="Digite o site aqui!" pattern="https://.*" size="30" required />
     *      <button id="btn_url">Navegar</button>
     * </form>
     *   
     */
    window.location = url.value //Com o comando no form, consegue pegar o valor do input e acessar o site
})


//*Caixa de dialogo
//Um código para imprimir a pagina criada em outro html
alert("Olá mundo!") //caixa de mensagem com um botão ok
const res4 = confirm("Você esta feliz?") //Retorno verdadeiro se clicar OK ou falso se clicar CANCELAR
const nome3 = prompt("Digite seu nome:", "digite seu nome aqui") //Retorna ou o valor digitado ou se nao escrever nada retorna null. O segundo parâmetro eh o pre digitado

//*Criando conteúdo para impressão ou pdf
//Para nao imprimir tudo da tela criamos outra janela so com a tabela sem os botoes

btn_imprime.addEventListener("click", (evt) => {
    const conteúdo = document.getElementById('tabela').innerHTML  //Copiou o conteúdo da tabela

    let estilo = "<style>"  //criado estilo para a nova janela e colocado na variavel
    estilo += "table{width: 100%; font:25px; Calíbri}"
    estilo += "table, th, td, {border: solid 2px #888; border-collapse: collapse; padding: 4px 8px; text-align: center;}"
    estilo += "</style>"

    const win = window.open('', '', 'height=700, width=700')  //criado uma nova janela
    //Primeiro parâmetro url Segundo parâmetro target se abre uma nova janela ou nao (default abre nova janela) Terceiro parâmetro configuração

    win.document.write('<html><head>') //Criação do html da pagina
    win.document.write('<title>Tabela</title>')
    win.document.write(estilo)
    win.document.write('</head><body>')
    win.document.write(conteúdo)
    win.document.write('</body></html>')


    //window.print()
    win.print() //janela da impressão
})

//*Objeto literal


const computador = { //declaração do objeto literal
    cpu: "i9",  //Propriedade
    ram: "8gb",
    hd: "2tb",
    info: function () {  //Metodo
        console.log(`CPU:${this.cpu}`);
        console.log(`RAM:${this.ram}`);
        console.log(`HD:${this.hd}`);
    }
}

computador["monitor"] = "22pol" //Adicionar propriedade no objeto computador
computador.placaVideo = "rtx" //Outra forma de adicionar propriedade
delete (computador.hd) //excluiu a propriedade hd

const com = Object.assign({}, computador) //Clonou o objeto computador
com.info()

const o1 = { obj1: '1' }
const o2 = { obj2: '1' }
const o3 = { obj3: '1' }
const o4 = Object.assign(o1, o2, o3) //Aqui mesclou o objeto


const computadores = [ //Declaração do objeto dentro de um array
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"
    },
    {
        cpu: "i5",
        ram: "12gb",
        hd: "1tb"
    }
]

converte_objeto_para_json.innerHTML = JSON.stringify(computador) //Converte para formato json

computador.info() //chama o método do objeto computador

const computador1 = { //declaração do objeto literal mais como base
    cpu: "",  //Propriedade
    ram: "",
    hd: "",
    info: function () {  //Metodo
        console.log(`CPU:${this.cpu}`);
        console.log(`RAM:${this.ram}`);
        console.log(`HD:${this.hd}`);
    }
}

const c11 = Object.create(computador1) //criação do objeto a partir da base
c11.cpu = "Pentium 4"
c11.ram = "8gb"
c11.hd = "500mb"
c11.info()

//*Módulos
//São arquivos js separado como modulo para facilitar organização

//Em HTML
//<script src="style.js" type="module"></script> 
//<!--Declara no chamado do arquivo o tipo "module"-->

//-------------------------------------------------------//---------------------------------------------------------------------//
//No style.js

import { cursos2 } from "./style2.js"; //importa a constante do outro arquivo
import { carros as C } from "./style2.js" //Renomeai o chamado usando o "as"
import getTodosCarros, { getTodosCursos } from "./style2.js" //Na hora de chamar um default nao insere chaves
import * as geral from "./style2.js" //O modulo fica como objeto que usa o nome e depois suas propriedade ou métodos

console.log(cursos2);
console.log(C); //Usa o novo nome do chamado
console.log(getTodosCursos);
console.log(geral.cursos + geral.default); //Chamado geral e busca a proxima propriedade exportado depois do ponto e pode também chamar o método ou propriedade padrão


//-------------------------------------------------------//---------------------------------------------------------------------//
//No style2.js

const cursos2 = ["JavaScript", "HTML", "C++", "Arduino", "C#"]
const carros = ["Polo", "Ônix", "Argo", "Corsa", "Gol"]

const getTodosCursos = () => {
    return cursos2
}
const getTodosCarros = () => {
    return carros
}

export default function getTodosCarros() { //Declaração padrão direto na função
    return cursos
}

export { cursos2, carros, getTodosCursos2 }  //Deixa disponível para a importação
//export default getTodosCarros  //Declaro como padrão, um modulo não pode ter vários padrões so um

//*Symbol
//Retorna um objeto do tipo symbol que identificador único interno

const s1 = Symbol() //cada s tem um identificação diferente
const s2 = Symbol()
const s3 = Symbol()
const s4 = Symbol()

console.log(s1 == s2); //Imprime false
console.log(s3 === s4); //Imprime false

//ex:

class Jogador { //Objeto jogador
    constructor(nome4) {
        this.nome4 = nome4
        this.id = Symbol()
    }
}

let jogadores = [new jogador4("j0"), new jogador4("j1"), new jogador4("j2"), new jogador4("j3")] //array dos jogadores

let sy1 = jogadores[2].id //sy1 recebe o id da posição 2 que eh um symbol

jogadores = jogadores.filter((j) => {
    return j.id != sy1 //remove o jogador da posição 2
})

console.log(jogadores) //Imprime o array dos jogadores menos o "j2"
console.log(sy1) //Imprime Symbol()

//*Funções da String

let nome5 = "Rafael" // Declaração normal do tipo string
let nome6 = new String(" Machado") //Declaração da instancia da classe string
let nome7 = new String(" Machado")

console.log(nome5.charAt(0)) //Retorna o carácter da posição nesse casso R
console.log(nome5.charCodeAt(0)) //Retorna o código do carácter (ASCII) nesse caso 82
nome5 = nome5.concat(nome6) //concatena
console.log(nome5) //Retorna Rafael Machado
console.log(nome6.indexOf("M")) //Retorna a primeira posição do carácter caso nao acha retorna -1
console.log(nome5.lastIndexOf("a")); //Retorna a ultima carácter encontrado

//Comparação de objeto string
console.log(nome6 == nome7) //Retorna falso pois nao eh assim que compara objetos string so se fosse variáveis
console.log(nome6.localeCompare(nome7)) //Retorna 0 se for Iguais e 1 se for Diferente e a primeira é maior que a segunda e -1 é Diferente e a primeira é menor que a segunda

//Corte
console.log(nome5.replace("a", "o")) //Substitui a primeira letra encontra no cas "a" e troca pelo "o"
console.log(nome6.replace(" Machado", " Silva")) //Também substitui também mais caracteres
console.log(nome6.search("Silva")) //Retorna a primeira posição da palavra no caso 1
console.log(nome7.slice(3, 6)) //Corta as posições selecionada no caso do 3 ate 6
console.log(nome5.split("a")) //Recorta a letra e cria um array onde cortou nesse caso "Rof" "el" " M" "ch" "do"
console.log(nome6.substring(0, 5)) //Retorna o conteúdo da posição de 0 a 4 pois nao inclui o 5
console.log(nome7.substr(6, 5)) //Retorna a partir do 6 5 posições

//Transforma
console.log(nome5.toUpperCase()) //Torna o conteúdo tudo MAIÚSCULA
console.log(nome5.toLocaleLowerCase()) //Torna o conteúdo tudo MINUSCULO
console.log(nome5.valueOf()) //Conteúdo da string
console.log(nome5.toString()) //Torna o conteúdo uma string

//Procura
let nome8 = new String("Rafael Machado Fagundes")

console.log(nome8.startsWith("R")) //Verifica se a string começa com "R" e retorna Verdadeiro ou falso
console.log(nome8.startsWith("Rafael"))
console.log(nome8.endsWith("s"))  //Verifica se a string termina com "s" e retorna Verdadeiro ou falso
console.log(nome8.endsWith("Fagundes"))
console.log(nome8.includes("c"))  //Verifica se a string tem o carácter "c" e retorna Verdadeiro ou falso
console.log(nome8.includes("Machado"))
console.log(nome8.repeat(3)) //imprime 3 vezes o conteúdo
console.log(String.fromCharCode(82, 97, 102, 97)) //Converte código (ASCII) para letra

console.log(`Nome: ${nome8}`) //Template string

//*RegExp (Expressões regulares)
//São padrão de caracteres criadas para utilizar nas funções mudando seu comportamento
//"i" Ignora letras maiúsculas e minusculas
//"g" utiliza globalmente não so o primeiro

console.log(nome8.search("rafael")) //Sem o RegExp a função não conseguiria achar a palavra pois existe case sensitive
console.log(nome8.search(/rafael/i)) //Com RegExp a letra "i" ignora essa regra e acha a palavra
console.log(nome8.match("a")) //Retorna so a primeira letra encontrada
console.log(nome8.match(/a/g)) //Retorna todas a letras encontradas
console.log(nome8.replace(/A/ig, "Teste")); //Ignora case sensitive e substitui todas as letras encontradas

//Criar padrões utiliza "[ ]"
console.log(nome8.match(/[ah]/ig)) //Retorna as letras separadamente, não juntos
console.log(nome8.match(/[a-s]/ig)) //Retorna da primeira letra ate a ultima
console.log(nome8.match(/[a-s|1-10]/ig)) //Pode fazer 2 o mais padrões colocando "|"

//Meta caracteres
console.log(nome8.match(/\d/ig)) //"\d" Retorna so números
console.log(nome8.match(/\s/ig)) //"\s" Retorna espaços
console.log(nome8.match(/\bA/ig)) //"\b+letra" Retorna Caracteres

//Quantificadores
let num10 = "1,10,100,1000"

console.log(num10.match(/10/ig)) //Retorna 10,10,10 pois retorna so os 10
console.log(num10.match(/10+/ig)) // Retorna 10,100,1000 pois ou eh o 10 ou todos junto com o 10
console.log(num10.match(/10*/ig)) // Retorna 1,10,100,1000 pois é o primeiro carácter ou todos juntos
console.log(num10.match(/10?/ig)) // Retorna 1,10,10,10 pois é o primeiro carácter ou os dois juntos

//*Desestruturação
//Extrair dados de um objeto ou array e colocar em variáveis distintas

let aa, bb, cc, dd

[aa, bb, cc, dd] = [10, 20, 30, 40] //conceito básico no array
//[] colchetes eh o operador do array

console.log(aa); //10
console.log(bb); //20
console.log(cc); //30
console.log(dd); //40

({ aa, bb, cc, dd } = { aa: "verde", bb: "amarelo", cc: "azul", dd: "branco" })
//{} chaves é o operador de objeto e obrigatório englobar entre ()

console.log(aa); //verde
console.log(bb); //amarelo
console.log(cc); //azul
console.log(dd); //branco

let array_números = [10, 20, 30, 40]
[aa, bb, cc, dd] = array_números

console.log(aa); //10
console.log(bb); //20
console.log(cc); //30
console.log(dd); //40

//valores padrão

[aa, bb = 0, bb = 0, cc = 0, dd = 0] = [50]

console.log(aa); //50
console.log(bb); //0
console.log(cc); //0
console.log(dd); //0

let aa1 = 10; //nesse caso obrigatório ";"
let bb2 = 20;

[aa1, bb2] = [bb2, aa1] //O "aa" pega o valor de "bb" e vice 

console.log(aa1); //20
console.log(bb2); //10

// Por função
let num_array = () => {
    return [10, 20, 30, 40]
}

[aa, bb, cc, dd] = num_array()

console.log(aa); //10
console.log(bb); //20
console.log(cc); //30
console.log(dd); //40

//Poe spread "..."
num_array = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let [aaa, bbb, ccc, ...ddd] = num_array

console.log(aaa); //10
console.log(bbb); //20
console.log(ccc); //30
console.log(ddd); //40 50 60 70 80 90

let obj5 = { nome10: "Rafael", sobrenome10: "Machado" }
let { nome10, sobrenome10 } = obj5

console.log(nome10); //Rafael
console.log(sobrenome10); //Machado

//Por objeto excluindo valor
const cores1 = () =>{
    return [ "verde","amarelo","azul","branco"]
}

let [cc1,cc2,,cc3] = cores1 //caso nao haja a variável ele eh excluído o valor que consta nessa posição

console.log(cc1); //verde
console.log(cc2); //amarelo
console.log(cc3); //branco

//por split

let texto1="Curso de javaScript"
let [...t]=texto1.split(" ") //Cada espaço conta com uma variável
console.log(t) //"Curso", "de", "javaScript"

//*Ponto e Virgula ";"
//JavaScript por regra coloca ";" automaticamente em comandos, mas existe comandos que o interpretador não consegue e tem a necessidade de colocar
//Exemplo o For ou qualquer outro loop caso ele não tenha um bloco de comandos o ";" é obrigatória

let ii=null
for (let ii = 0; ii < 10; ii++) {
    const element = array[ii]; // Se fosse um comando não precisaria mais com eh 2 é obrigatória as chaves
    console.log(element);
}

//Porem caso queira so o calculo sem precisar executar o comando abaixo obrigatoriamente coloca-se ";" para dizer que termina ali no exemplo
for (let iii = 0; iii < 10; iii++); //Terminou aqui e vai para outra sem executar 10 vezes o log

console.log(iii)

//É obrigatório também o uso do ";" sempre que a proxima linha começa com "[]" ou "()"
//ex:

let v = "OK";
['j','a','b'].forEach(l=>console.log(l))

/**Comandos Explicados */
    
Telefones = [1, 2, 3];
let idtel = 4;

if (!idsTelefones.includes(idtel)) { //O método includes verifica se o valor já está presente no array. Retrona TRUE ou FALSE
    idsTelefones.push(idtel); //O método push adiciona o valor ao final do array
}

console.log(idsTelefones); // Saída: [1, 2, 3, 4]

//*map
array.map(callback(elemento, índice, arrayOriginal)) 
/**O método map cria um novo array com os resultados da chamada da função callback 
 * para cada elemento do array original. 
 * O array original não é alterado.*/

/** callback: A função que será executada para cada elemento do array.
 * elemento: O elemento atual do array que está sendo processado.
 * índice: O índice do elemento atual no array (opcional).
 * arrayOriginal: O array original que está sendo processado (opcional).*/
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados); // Saída: [2, 4, 6, 8]

//*filter
array.filter(callback(elemento, índice, arrayOriginal))
/**O método filter cria um novo array com todos os elementos que passam no teste 
 * implementado pela função callback fornecida. O array original não é alterado. */

/** callback: A função que será executada para cada elemento do array.
 * elemento: O elemento atual do array que está sendo processado.
 * índice: O índice do elemento atual no array (opcional).
 * arrayOriginal: O array original que está sendo processado (opcional).*/
const numeros1 = [1, 2, 3, 4, 5];
const pares = numeros1.filter((numero) => numero % 2 === 0);

console.log(pares); // Saída: [2, 4]
























































