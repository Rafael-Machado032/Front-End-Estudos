const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
//Trabalhando com API
const endpoint = "https://eacea852-7fa8-4286-a97f-ea4f87fc2d45-00-2stptm2wmf9lw.janeway.replit.dev/"
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
let intervalo = setInterval(obterDados,1000)







