const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt) => { //Adicionou evento de click direto no botão sem necessidade de variável
    //É recomendado utilizar a variável quando estiver muito acesso pois assim acessa uma única vez   

    evt.preventDefault() //Como o botão esta dentro do form para não chamar o submit utiliza esse comando

    let msg = null

    if (!f_nota.checkValidity()) { //Checa se o valor atende os requisitos definido no html caso atenda retorna True
    //Na condição é negação pois queremos se não atenda    
        msg = f_nota.validationMessage //Mensagem padrão do sistema
    }

    f_msg.innerHTML = msg
})


