import { Cxmsg } from "./cxmsg.js"; //Use o "import" que vai utilizar a caixa
const config = {  //Pode fazer a configuração da caixa
    cor: "#48f",
    tipo:"sim-não",      //tipos: ok,sim-não
    textos: ["SIM","NÃO"],
    comando_sim:()=>{}
}

const fsim = () => {
    console.log("Botão sim pressionado!");
}

const btn_mostracxmsg1 = document.querySelector("#btn_mostracxmsg1")
const btn_mostracxmsg2 = document.querySelector("#btn_mostracxmsg2")
const btn_mostracxmsg3 = document.querySelector("#btn_mostracxmsg3")

btn_mostracxmsg1.addEventListener("click", () => {
    config.tipo = "ok"
    Cxmsg.mostrar(config,"Aluno","Rafael Machado") //chama o método da classe estanciada
    //Chama a caixa com atributos configurados para receber
})

btn_mostracxmsg2.addEventListener("click", () => {
    config.tipo = "sim-não"
    config.comando_sim = () =>{fsim()}
    Cxmsg.mostrar(config,"Curso","Javascript") //chama o método da classe estanciada
})

btn_mostracxmsg3.addEventListener("click", () => {
    config.tipo = "sim-não"
    config.textos = ["OK","Cancela"]
    Cxmsg.mostrar(config,"Conteúdo","Caixa Personalizada") //chama o método da classe estanciada
})