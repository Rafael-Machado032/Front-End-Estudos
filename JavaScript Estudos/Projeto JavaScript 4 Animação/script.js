const carro=document.getElementById("carro") //puxando elementos DOM
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")

const init=()=>{
    carro.style="position:relative;left:0px" //Inicia com style no id carro
}

btn_esquerda.addEventListener("click",()=>{
       
    carro.style.left=parseInt(carro.style.left) - 10 +"px" //Decremento do left para -10px
})

btn_direita.addEventListener("click",()=>{
    let pos=parseInt(carro.style.left) //converte o valor do left para inteiro
    pos+=10 //Incrementa o left para 10px
    carro.style=`position:relative;left:${pos}px`
})

window.onload=init //Ao carregar a pagina chama a função





























