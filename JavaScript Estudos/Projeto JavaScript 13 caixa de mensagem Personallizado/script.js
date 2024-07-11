import { Cxmsg } from "./cxmsg.js"; //Use o "import" que vai utilizar a caixa
const config = {  //Pode fazer a configuração da caixa
    cor: "#48f"
}

Cxmsg.config(config) //Feita a configuração passe para caixa

const btn_mostracxmsg1 = document.querySelector("#btn_mostracxmsg1")
const btn_mostracxmsg2 = document.querySelector("#btn_mostracxmsg2")
const btn_mostracxmsg3 = document.querySelector("#btn_mostracxmsg3")

btn_mostracxmsg1.addEventListener("click", () => {
    Cxmsg.mostrar("Aluno","Rafael Machado") //chama o método da classe estanciada
    //Chama a caixa com atributos configurados para receber
})

btn_mostracxmsg2.addEventListener("click", () => {
    Cxmsg.mostrar("Curso","Javascript") //chama o método da classe estanciada
})

btn_mostracxmsg3.addEventListener("click", () => {
    Cxmsg.mostrar("Conteúdo","Caixa Personalizada") //chama o método da classe estanciada
})