const config = { //Setando a configuração para estanciamento da classe
    titulo:"Rafael Machado",
    texto:"Curso Javascript, Criando caixa personalizada",
    cor:"#48f"
}
const cxmsg = new Cxmsg(config) //Estanciar o objeto com as configuração

const btn_mostracxmsg = document.querySelector("#btn_mostracxmsg")

btn_mostracxmsg.addEventListener("click",()=>{
    cxmsg.mostrar() //chama o método da classe estanciada
})