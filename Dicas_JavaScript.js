"use strict"
const { Console } = require("console");

 //Modo restrito para corrigir as variáveis

console.log("Ola Mundo"); //Imprime no Console

let nome = "Rafael Machado";

console.log("Meu nome é " + nome + " e sou programador!");

//Tipo de variáveis

if (true) { //Um escopo
    var nome2 = "Rafael";  //VAR É uma variável que pode ser usada fora do escopo
    let nome3 = "Graziele";  //LET É uma variável qu não pode ser usado fora do escopo
}
console.log(nome2 + nome3);  //O nome3 vai apresentar erro

const curso = "JavaScript"  //CONST Depois de declarada e inserida o valor não pode ser mudado

//Operadores Matemático

/*              
+  Soma
-  Subtração
*  Multiplição
/  Divisão
%  Resto
++ Incremento
-- Decremento
+= Incremento
-= Decremento
*/

//Ex:
let num1=2,num2=15,res=0;
res=num2%num1;
console.log("A resposta é "+res) //A resposta é 1
