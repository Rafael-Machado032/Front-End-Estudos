const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

const info = (el) => {
    let dados = el.getBoundingClientRect() //Retorna posição e tamanho dos elementos
    posx.innerHTML = `posx: ${dados.x}`
    posy.innerHTML = `posy: ${dados.y}`
    altura.innerHTML = `largura: ${dados.width}`
    largura.innerHTML = `altura: ${dados.height}`
}


q1.addEventListener("click", (evt) => {
    info(evt.target) //retorna o elemento onde ocorreu o evento 
})
q2.addEventListener("click", (evt) => {
    info(evt.target)
})























