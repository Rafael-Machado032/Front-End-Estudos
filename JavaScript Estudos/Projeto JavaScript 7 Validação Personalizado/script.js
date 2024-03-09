const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt) => { //Adicionou evento de click direto no botão sem necessidade de variável
    //É recomendado utilizar a variável quando estiver muito acesso pois assim acessa uma única vez   

    let estadoValidacao = f_nota.validity

    if (estadoValidacao.valueMissing) {     
        f_nota.setCustomValidity("Poxa, Este campo é obrigatório")
    } else if (estadoValidacao.rangeOverflow) {
        f_nota.setCustomValidity("Nossa, que nota alta você digitou")
    } else if (estadoValidacao.rangeUnderflow) {    
        f_nota.setCustomValidity("Credo, que nota baixa você digitou")       
    }
    f_nota.reportValidity() //Mostra a validação num balão
    f_msg.innerHTML=f_nota.validationMessage //Aparece no campo
    evt.preventDefault() //Como o botão esta dentro do form para não chamar o submit utiliza esse comando
})


//Métodos da validação do Dom
//  checkValidity()
//  setCustomValidity()
   
//Propriedade de validação do DOM
//  validity
//  validationMessage

//Propriedades de validação
/**
 *  customError: true, se uma mensagem de validação personalizada for definida.
 *  patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
 *  rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
 *  rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
 *  stepMismatch: true, se o valor de um elemento exceder seu atributo step.
 *  tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
 *  typeMismatch: true, se o valor de um elemento for invalido por seu atributo type.
 *  valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
 *  valid: true, se o valor de um elemento for válido.
 */



