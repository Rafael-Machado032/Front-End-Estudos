const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const btn_texto = document.getElementById("btn_texto")
//Trabalhando com API
const endpoint = "https://dce2e9a9-010b-4837-a62d-682670b54047-00-194hc2z58tau3.spock.replit.dev/"
//A variável endpoint não eh obrigatória 
const obterDados=()=>{
    fetch(endpoint) //Faz o consumo da API
    .then(res => res.json()) //.then recebe o retorno do fetch com qualquer formato nesse caso foi escolhido json
    .then(dados => { //No segundo .then recebe a resposta ja tratada no primeiro .then
        console.log(dados); //Retorna um objeto do json
        p_temp.innerHTML = "Temperatura: " + dados.temperatura
        p_nivel.innerHTML = "Nivel: " + dados.nivel
        p_press.innerHTML = "Pressão: " + dados.pressao
    })
}
//let intervalo = setInterval(obterDados,1000)

let dados={ //Objeto que recebe os dados 
    Nome: "Rafael",
    Sobrenome: "Machado",
    Curso: "JavaScript"
}

let cabecalho={ //foi criado um variável para colocar as configuração de envio
    method: "POST", //Método envio
    body:JSON.stringify(dados) //No corpo do envio recebe o objeto com os dados e converte para json
}

const gravarDados=()=>{
    const endpoint="" //Endereço do API
    fetch(endpoint,cabecalho) //Faz consumo do API coma configuração
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret);
    })
}

btn_texto.addEventListener("click",(evt)=>{
    gravarDados()
})



