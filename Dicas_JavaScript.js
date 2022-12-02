"use strict"  //Modo restrito para corrigir as variáveis

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

//Operadores lógicos

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

//Operadores BitWise

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

         1010 = 10 Compara com o bit de baixa e faz relação "OU"
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