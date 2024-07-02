//Trabalhando com API
const endpoint="https://dce2e9a9-010b-4837-a62d-682670b54047-00-194hc2z58tau3.spock.replit.dev/"
//A variável endpoint não eh obrigatória 

fetch(endpoint) //Faz o consumo da API
.then(res=>res.json()) //.then recebe o retorno do fetch com qualquer formato nesse caso foi escolhido json
.then(dados=>{ //No segundo .then recebe a resposta ja tratada no primeiro .then
    console.log(dados); //Retorna um objeto do json
})








