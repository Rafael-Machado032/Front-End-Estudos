//Trabalhando com API
const endpoint="https://cba67353-9bac-4b14-9d59-17a10d29b0db-00-f0sm574m7rab.riker.replit.dev/"
//A variável endpoint não eh obrigatória 

fetch(endpoint) //Faz o consumo da API
.then(res=>res.json()) //.then recebe o retorno do fetch com qualquer formato nesse caso foi escolhido json
.then(dados=>{ //No segundo .then recebe a resposta ja tratada no primeiro .then
    console.log(dados); //Retorna um objeto do json
})








