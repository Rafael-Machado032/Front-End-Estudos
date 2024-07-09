class Cxmsg{
    titulo = null   //Atributo de configuração
    texto = null    //Atributo de configuração
    cor = null      //Atributo de configuração
    destino = null  //Atributo de configuração
    divmsg = null   //Atributo de configuração

    constructor(config){                //Construtor da classe
        this.titulo = config.titulo     //Recebe as configuração externamente
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }
    mostrar = () => {       //Métodos da classe
        console.log(this.texto);
    }
    ocultar = () => {       //Métodos da classe

    }
}