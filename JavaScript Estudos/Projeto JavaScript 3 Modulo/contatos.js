import { contatos } from "./bancoContatos.js"; //Importa do bancoContatos.js o contatos

let contato={ //Criado o objeto literal com propriedades e funções
    getTodosContatos:function () { //Função que retorna o array contatos do bancoContatos.js
        return contatos
    },
    getContato:function (i_cont) { //Função que retorna um contato especifico
        return contatos[i_cont]
    },
    addContato:function (novoContato,destinoDOM) { //Função que adiciona um contato no array e na div
    //novoContato vai receber os dados inseridos    
    //destinoDom vai receber o destino dos dados   
        const cont={ //Pega os dados recebido e coloca no cont
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        
        contatos.push(cont) //pega os dado do cont e add no array contatos

        const div=document.createElement("div") //Cria uma div dentro da const div
        div.setAttribute("class","contato") //Coloca uma classe na div chamado contato
        const p_nome=document.createElement("p") //Cria uma p dentro da const p_nome
        p_nome.innerHTML=novoContato.nome //O p vai receber o nome vindo do script.js
        const p_telefone=document.createElement("p") //Cria uma p dentro da const p_telefone
        p_telefone.innerHTML=novoContato.telefone //O p vai receber o telefone vindo do script.js
        const p_email=document.createElement("p") //Cria uma p dentro da const p_email
        p_email.innerHTML=novoContato.email //O p vai receber o email vindo do script.js
        div.appendChild(p_nome) //adiciona filho dentro da div
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destinoDOM.appendChild(div) //adiciona a div com os filhos dentro do destinoDOM
    }

}

export default contato //Exporta o objeto que eh o padrão do arquivo