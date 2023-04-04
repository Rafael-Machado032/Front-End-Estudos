const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")

let larguraPalco = palco.offsetWidth //Toda ves que for redimensiona a tela ele captura a largura da tela
let alturaPalco = palco.offsetHeight //Toda ves que for redimensiona a tela ele captura a altura da tela
let bolas = []
let numBola = 0

class bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor((Math.random() * 10)) + 10 //Tamanho aleatório da bolinha a partir do 10 até 20
        this.r = Math.floor((Math.random() * 255))  //Variar cor da bolinha
        this.g = Math.floor((Math.random() * 255))  //Variar cor da bolinha
        this.b = Math.floor((Math.random() * 255))  //Variar cor da bolinha
        this.posX = Math.floor(Math.random() * (larguraPalco - this.tam)) //Tamanho da tela menos o tamanho da bolinha do eixo X
        this.posY = Math.floor(Math.random() * (alturaPalco - this.tam))  //Tamanho da tela menos o tamanho da bolinha do eixo Y
        this.velX = Math.floor(Math.random() * 2) + 0.5  //Velocidade minima 0.5 e max 2.5 do eixo X
        this.velY = Math.floor(Math.random() * 2) + 0.5  //Velocidade minima 0.5 e max 2.5 do eixo Y
        this.dirX = (Math.random() * 10) > 5 ? 1 : -1 //Direção do eixo X
        this.dirY = (Math.random() * 10) > 5 ? 1 : -1 //Direção do eixo Y
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor(Math.random() * 10000000000000000000)  //Criação aleatório do id da bolinha
        //Utiliza-se Date.Now e mais random para ser quase impossível criar o mesmo id para cada bolinha
        this.desenhar()  //chama a função
        this.controle = setInterval(this.controlar, 10);  //Chama a função controlar a cada 10 milisegundos
        this.eu = document.getElementById(this.id)  //adiciona a bolinha no Dom
        numBola++ //soma quando for chamado
        num_objetos.innerHTML = numBola //insere no html
    }
    minhaPos = () => {
        return this.arrayBolas.indexOf(this) //Pega a posição do objeto do arrayBola
    }
    remover = () => { //Quando chamo remover exite 3 ações 1.Limpar o intervalo 2.remover do arrayBolas 3.Remover do DOM
        clearInterval(this.controle) //Limpa o intervalo serve para parar de chamar a função controlar e a bolinha fica parada
        bolas = bolas.filter((b) => {  //Ele cria um array com todas as bolinha menos a bolinha criada desse objeto
            if (b.id != this.id) {  //Tem que ser diferente do id criado nesse objeto
                return b
            }
        })
        this.eu.remove()  //Remove a bolinha do DOM
        numBola-- //diminui a quantidade de bolinha
        num_objetos.innerHTML = numBola  // insere no html o numero atualizado de bolinhas

    }
    desenhar = () => {
        const div = document.createElement("div") //Cada bolinha vai ser uma div
        div.setAttribute("id", this.id) //seta os atributos da div (bolinha) id
        div.setAttribute("class", "bola") //seta os atributos da div (bolinha) classe
        div.setAttribute("style", `left: ${this.posX}px;top:${this.posY}px;width:${this.tam}px;height:${this.tam}px;background:rgb(${this.r},${this.g},${this.b})`) //seta os atributos da div (bolinha) cor
        this.palco.appendChild(div) //Adiciona  um filho para a div palco ou seja dentro da div palco
    }
    colisão_bordas = () => {
        if (this.posX + this.tam >= larguraPalco) {  //Como o eixo da bolinha a no lado esquerdo e superior soma-se a posição e mais o tamanho da bolinha
            this.dirX = - 1
        } else if (this.posX <= 0) {
            this.dirX = 1
        }

        if (this.posY + this.tam >= alturaPalco) {  //Como o eixo da bolinha a no lado esquerdo e superior soma-se a posição e mais o tamanho da bolinha
            this.dirY = - 1
        } else if (this.posY <= 0) {
            this.dirY = 1
        }

    }
    controlar = () => {  //Essa função e chamada a cada 10 milissegundos como configurada no interval
        this.colisão_bordas() //chama a colisão para verificar se ta na borda
        this.posX += this.dirX * this.velX //Soma e incrementa a posição da bolinha
        this.posY += this.dirY * this.velY //Soma e incrementa a posição da bolinha
        this.eu.setAttribute("style", `left: ${this.posX}px;top:${this.posY}px;width:${this.tam}px;height:${this.tam}px;background:rgb(${this.r},${this.g},${this.b})`)
        if ((this.posX > larguraPalco) || (this.posY > alturaPalco)) {  //Se a posição da bolinha fica fora da tela ela remove
            this.remover()
        }
    }
}

window.addEventListener("resize", (evt) => {  //Gera um evento quando redimensiona a tela
    larguraPalco = palco.offsetWidth //Captura o tamanho da tela largura
    alturaPalco = palco.offsetHeight //Captura o tamanho da tela altura
})
btn_add.addEventListener("click", (evt) => {
    const qtde = txt_qtde.value
    for (let i = 0; i < qtde; i++) {
        //Instanciar novas bolinha
        bolas.push(new bola(bolas, palco)) //Adiciona no final do array bolas
    }
})
btn_remover.addEventListener("click", (evt) => {
    bolas.map((b) => {
        //remover bolas
        b.remover()
    })
})


