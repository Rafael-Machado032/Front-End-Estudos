const carro = document.getElementById("carro") //puxando elementos DOM
const btn_parar = document.getElementById("btn_parar")
const btn_rodar = document.getElementById("btn_rodar")


const init = () => {
    carro.style = "position:relative;left:0px;width:100px;height:40px" //Inicia com style no id carro, necessário colocar width inline para pegar o tamanho do carro
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro //Largura da tela menos o tamanho do carro
}

let anima = null
let tamMax = null //Declara uma variável para o tamanho de tela
let tamCarro = null
let dir = 0

const move = () => {

    if (parseInt(carro.style.left) >= tamMax) { //
        dir = -1
    } else if (parseInt(carro.style.left) <= 0) {
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
    anima = setTimeout(move, 20)
}

btn_parar.addEventListener("click", () => {
    clearTimeout(anima) //Para o interval
})

btn_rodar.addEventListener("click", () => {
    move() //chama a função move
})



//window.onload=init //Ao carregar a pagina chama a função
window.addEventListener("load", init()) //Ao carregar a pagina chama a função de outra forma mais o mesmo resultado

window.addEventListener("resize", () => { //Ao redimensionar a tela recalcula o tamanho da mesma
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("keydown", (evt) => {
    if (evt.code === "ArrowUp") { //Aumenta o tamanho do carro
        carro.style.width = parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
    }
    if (evt.code === "ArrowDown") { //Diminui o tamanho do carro
        carro.style.width = parseInt(carro.style.width) - 10 + "px"
        carro.style.height = parseInt(carro.style.height) - 10 + "px"
    }
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro //calcula o tamanho da tela com o tamanho do carro

})


























