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

let nu=4;

if (nu>10)  //Se a instrução for uma linha não precisa de colchetes
    console.log("Maior que 10");


if (nu<=5) {
    console.log("Menor ou igual a 5"); //Verdadeiro
} else {
    console.log("Maior que 5"); //Falso
}


//*SWITCH CASE

let ponto=2;

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


let f = [10,20,30,40]
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

while (num3<5) { //No while executa ate quando for falso
    console.log(num3);
    num3++
}

//* DO WHILE

do {  //No 'do while' garante a execução e depois testa 
    console.log(num3);
    num3++
} while (num3<5);



