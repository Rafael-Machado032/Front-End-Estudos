const carro = document.getElementById("carro") //puxando elementos DOM
const btn_parar = document.getElementById("btn_parar")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")

const init = () => {
    carro.style = "position:relative;left:0px;width:100px" //Inicia com style no id carro, necessário colocar width inline para pegar o tamanho do carro
    tamMax=window.innerWidth - parseInt(carro.style.width) //Largura da tela menos o tamanho do carro
}

let anima = null
let tamMax = null //Declara uma variável para o tamanho de tela

const move = (dir) => {
    if (dir > 0) { //indo para a direita
        if (parseInt(carro.style.left) <= tamMax) { //
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(move, 100, dir)
        } else {
            clearTimeout(anima)
        }
    } else if (dir < 0) { //indo para a esquerda
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(move, 100, dir)
        } else {
            clearTimeout(anima)
        }
    }
}

btn_parar.addEventListener("click", () => {
    clearTimeout(anima) //Para o interval
})

btn_esquerda.addEventListener("click", () => {
    clearTimeout(anima) //Para o interval e chama a função a baixo
    move(-1) //insere o valor no dir
})

btn_direita.addEventListener("click", () => {
    clearTimeout(anima)
    move(1)
})

//window.onload=init //Ao carregar a pagina chama a função
window.addEventListener("load", init()) //Ao carregar a pagina chama a função de outra forma mais o mesmo resultado
window.addEventListener("resize", () => { //Ao redimensionar a tela recalcula o tamanho da mesma
    tamMax = window.innerWidth - parseInt(carro.style.width)
})




























