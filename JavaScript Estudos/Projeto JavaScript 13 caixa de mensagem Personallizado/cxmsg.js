class Cxmsg {
    static cor = "#888"      //Atributo de configuração
    static destino = null  //Atributo de configuração
    static divmsg = null   //Atributo de configuração

    static config = (config) => {               //Construtor da classe
        this.cor = config.cor
    }
    
    static mostrar = (titulo,texto) => {       //Métodos da classe
        
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto
        this.divmsg = document.createElement("div")
        
        const estilo_divmsg =       //Variável para armazenar o estilo
            " display: flex;" +
            " justify-content: center;" +
            " align-items: center;" +
            " position: absolute;" +
            " top: 0px;" +
            " left: 0px;" +
            " width: 100%;" +
            " height: 100vh;" +
            " background-color: rgba(0,0,0,0.7);"
        this.divmsg = document.createElement("div")     //criando a div e inserido na variável de propriedade divmsg
        this.divmsg.setAttribute("id", "divmsg")         //Setando "id" na div
        this.divmsg.setAttribute("style", estilo_divmsg) //Setando o estilo na div
        this.destino.prepend(this.divmsg)               //Colocar a div no topo do body que esta associado no destino

        const estilo_areaCxmsg =       //Variável para armazenar o estilo
            " display: flex;" +
            " justify-content: flex-start;" +
            " align-items: flex-start;" +
            " flex-direction: column;" +
            " width: 300px;"
        const areaCxmsg = document.createElement("div")     //criando a div e inserido na variável areaCxmsg
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)    //Setando o estilo na div
        this.divmsg.appendChild(areaCxmsg)      //Filho da divmsg

        const estilo_tituloCxmsg =
            " display: flex;" +
            " justify-content: flex-start;" +
            " align-items: center;" +
            " width: 100%;" +
            " background-color: " + this.cor + ";" +
            " color: #fff;" +
            " padding: 5px;" +
            " border-radius: 5px 5px 0px 0px;"
        const tituloCxmsg = document.createElement("div")       //criando a div e inserido na variável tituloCxmsg
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)    //Setando o estilo na div
        tituloCxmsg.innerHTML = this.titulo     //Insere conteúdo setado na chamada do objeto
        areaCxmsg.appendChild(tituloCxmsg)      //Filho da div areaCxmsg

        const estilo_corpoCxmsg =
            " display: flex;" +
            " justify-content: flex-start;" +
            " align-items: center;" +
            " width: 100%;" +
            " background-color: #eee;" +
            " color: #000;" +
            " padding: 30px 5px;"
        const corpoCxmsg = document.createElement("div")       //criando a div e inserido na variável tituloCxmsg
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)    //Setando o estilo na div
        corpoCxmsg.innerHTML = this.texto       //Insere conteúdo setado na chamada do objeto
        areaCxmsg.appendChild(corpoCxmsg)       //Filho da div areaCxmsg

        const estilo_rodapeCxmsg =
            " display: flex;" +
            " justify-content: space-around;" +
            " align-items: center;" +
            " width: 100%;" +
            " background-color: " + this.cor + ";" +
            " color: #fff;" +
            " padding: 5px;" +
            " border-radius: 0px 0px 5px 5px;"
        const rodapeCxmsg = document.createElement("div")       //criando a div e inserido na variável tituloCxmsg
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg)    //Setando o estilo na div
        areaCxmsg.appendChild(rodapeCxmsg)

        const estilo_botaoCxmsg =
            " background-color: " + this.cor + ";" +
            " color: #fff;" +
            " padding: 10px 50px;" +
            " border-radius: 5px;" +
            " cursor: pointer;" +
            " text-transform: uppercase;"
        const botaoCxmsg = document.createElement("button")       //criando a div e inserido na variável tituloCxmsg
        botaoCxmsg.setAttribute("style", estilo_botaoCxmsg)    //Setando o estilo na div
        botaoCxmsg.innerHTML = "OK"
        rodapeCxmsg.appendChild(botaoCxmsg)
        botaoCxmsg.addEventListener("click",(evt)=>{
            this.ocultar()
        })
        
    }
    static ocultar = () => {       //Métodos da classe
        this.divmsg.remove()    //Remove o conteúdo do atributo
    }
}
export{Cxmsg}