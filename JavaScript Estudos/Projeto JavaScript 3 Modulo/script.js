import c from "./contatos.js" //importou default renomeou para c

const listaContatos=document.getElementById("listaContatos") //Pegou o elemento com id listaContatos e botou no const
const btn_gravar=document.getElementById("btn_gravar")

btn_gravar.addEventListener("click",(evt)=>{ //Trata o evento de click
    const cont={ //Insere os dados digitados nesse const
        nome:document.getElementById("f_nome").value, //Pega o valor dos campos digitado
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value
    }
    c.addContato(cont,listaContatos) //chama a função addContato com os dados e onde vai colocar

})