const palco=document.getElementById("palco")
const num_objetos=document.getElementById("num_objetos")
const txt_qtde=document.getElementById("txt_qtde")
const btn_add=document.getElementById("btn_add")
const btn_remover=document.getElementById("btn_remover")

let larguraPalco=palco.offsetWidth //Toda ves que for redimensiona a tela ele captura a largura da tela
let alturaPalco=palco.offsetHeight //Toda ves que for redimensiona a tela ele captura a altura da tela
let bolas=[]
let numBola=0

class bola{
    constructor(arrayBolas,palco){
        this.tam=Math.floor((Math.random()*10))+10 //Tamanho aleatório da bolinha a partir do 10 até 20
        this.r=Math.floor((Math.random()*255))  //Variar cor da bolinha
        this.g=Math.floor((Math.random()*255))  //Variar cor da bolinha
        this.b=Math.floor((Math.random()*255))  //Variar cor da bolinha
        this.posX=Math.floor(Math.random()*(larguraPalco-this.tam)) //Tamanho da tela menos o tamanho da bolinha do eixo X
        this.posY=Math.floor(Math.random()*(alturaPalco-this.tam))  //Tamanho da tela menos o tamanho da bolinha do eixo Y
        this.velX=Math.floor(Math.random()*2)+0.5  //Velocidade minima 0.5 e max 2.5 do eixo X
        this.velY=Math.floor(Math.random()*2)+0.5  //Velocidade minima 0.5 e max 2.5 do eixo Y
        this.dirX=(Math.random()*10)>5?1:-1 //Direção do eixo X
        this.dirY=(Math.random()*10)>5?1:-1 //Direção do eixo Y
        this.palco=palco
        this.arrayBolas=arrayBolas
        this.id=Date.now()+"_"+Math.floor(Math.random()*10000000000000000000)  //Criação aleatório do id da bolinha
        //Utiliza-se Date.Now e mais random para ser quase impossível criar o mesmo id para cada bolinha
        this.desenhar()  //chama a função
        this.controle=setInterval(this.controlar, 10);  //Chama a função controlar a cada 10 milisegundos
        this.eu=document.getElementById(this.id)  //adiciona a bolinha no Dom
    }
    minhaPos=()=>{

    }
    remover=()=>{

    }
    desenhar=()=>{

    }
    controlar=()=>{

    }
}

window.addEventListener("resize",(evt)=>{  //Gera um evento quando redimensiona a tela
    larguraPalco=palco.offsetWidth //Captura o tamanho da tela
    alturaPalco=palco.offsetHeight
})
btn_add.addEventListener("click",(evt)=>{
    const qtde=txt_qtde.value
    for (let i = 0; i < qtde; i++) { 
         //Instanciar novas bolinha      
    }
})
btn_remover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        //remover bolas
    })
})


