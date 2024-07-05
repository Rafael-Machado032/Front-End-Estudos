const timer = document.querySelector("#timer")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_parar = document.querySelector("#btn_parar")
const btn_zerar = document.querySelector("#btn_zerar")
const btn_parcial = document.querySelector("#btn_parcial")
const parciaisregistradas = document.querySelector("#parciaisregistradas")

let intervalo = null
let tmpini = null

const contador = () => {
    const tmpatual = Date.now()  //pega o tempo atual
    let seg = (tmpatual - tmpini) / 1000
    //pega o tempo inicial pegado no click e diminui o tempo de agora no começo do click 
    //os dois tempo (tmpini e tmpatual) são o mesmo mais no segundo chamado muda o tempo atual
    timer.innerHTML = conveter(seg) //insere no html convertido
}

const conveter = (seg) => {
    const hora = Math.floor(seg / 3600) //calcula a hora
    const resto = seg % 3600 //calcula o que sobrou da hora
    const minuto = Math.floor(resto / 60) //com o resto que sobrou calcula o minuto
    const segundo = Math.floor(resto % 60) //calcula o resto que sobrou do minuto
    const tempoformatado = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo) //formata o relegio
    return tempoformatado //retorna o horário formatado
}


btn_iniciar.addEventListener("click", (evt) => {

    tmpini = Date.now() //pega o tempo agora  
    intervalo = setInterval(contador, 1000) //chama o contator de 1 a 1 segundo
})

btn_parar.addEventListener("click", (evt) => {
    clearInterval(intervalo) //para de chamar
})

btn_zerar.addEventListener("click", (evt) => {
    tmpini = Date.now()
    timer.innerHTML = "00:00:00"
    clearInterval(intervalo) //para de chamar
    parciaisregistradas.innerHTML = ""

})

btn_parcial.addEventListener("click", (evt) => {
    let parcial ="<div>"+timer.innerHTML+"</div>" 
    parciaisregistradas.innerHTML+=parcial

})