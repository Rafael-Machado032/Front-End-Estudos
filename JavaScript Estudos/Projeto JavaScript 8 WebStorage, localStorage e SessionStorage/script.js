const f_texto=document.querySelector("f_texto")
const p_texto=document.querySelector("#p_texto")
const btn_texto=document.querySelector("#btn_texto")

let num=10
let curso="Javascript"

//localStorage banco de dados local, nao exclui ao sair do navegador

window.localStorage.setItem("Numero",num) //Insere a chave e valor
localStorage.setItem("Nome","Rafael")
localStorage.setItem("Sobrenome","Machado")
localStorage.setItem("Curso",curso)
//localStorage.clear() //Apaga o banco de dados

console.log(localStorage.getItem(localStorage.key(0))); //Recebe o valor da posição 0
console.log(localStorage.getItem("Nome")); //Recebe o valor da chave Nome
console.log(localStorage.getItem("Sobrenome"));
console.log(localStorage.getItem("Curso"));

//sessionStorage banco de dados temporário, exclui ao sair do navegador

window.sessionStorage.setItem("Numero",num)
sessionStorage.setItem("Nome","Rafael")
sessionStorage.setItem("Sobrenome","Machado")
sessionStorage.setItem("Curso",curso)
//sessionStorage.clear() //Apaga o banco de dados

console.log(sessionStorage.getItem(sessionStorage.key(0)));
console.log(sessionStorage.getItem("Nome"));
console.log(sessionStorage.getItem("Sobrenome"));
console.log(sessionStorage.getItem("Curso"));




