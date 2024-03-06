const carro=document.getElementById("carro") //puxando elementos DOM
const btn_parar=document.getElementById("btn_parar")
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")

const init=()=>{
    carro.style="position:relative;left:0px" //Inicia com style no id carro
}

let anima=null

const move=(dir)=>{ //É chamada a função e recebe o argumento de 1 ou -1
    carro.style.left=parseInt(carro.style.left) + (10*dir) +"px" //Incremento ou decremento do left de 10px vezes 1 ou -1
}
btn_parar.addEventListener("click",()=>{
    clearInterval(anima) //Para o interval
})

btn_esquerda.addEventListener("click",()=>{
    clearInterval(anima) //para o interval e cria um novo intervalo na proxima linha
    anima=setInterval(move,100,-1) //Chama a função move a cada 100 milissegundos e o argumento 1 que passa para o dir infinitamente
})

btn_direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(move,100,1) //Chama a função move a cada 100 milissegundos e o argumento -1 que passa para o dir infinitamente
})

window.onload=init //Ao carregar a pagina chama a função





























