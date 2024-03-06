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
    anima=setTimeout(move,100,dir) //Com seTimeout chama 1 vez no parâmetro função, chama ele mesmo e repete o processo 
    //setInterval chama a função de tanto e tanto tempo setado no parâmetro dele infinitamente
    //seTimeout gera o intervalo e chama a função 1 vez
}

btn_parar.addEventListener("click",()=>{
    clearTimeout(anima) //Para o interval
})

btn_esquerda.addEventListener("click",()=>{
    clearTimeout(anima) //Para o interval e chama a função a baixo
    move(-1) //insere o valor no dir
})

btn_direita.addEventListener("click",()=>{
    clearTimeout(anima)
    move(1) 
})

window.onload=init //Ao carregar a pagina chama a função





























