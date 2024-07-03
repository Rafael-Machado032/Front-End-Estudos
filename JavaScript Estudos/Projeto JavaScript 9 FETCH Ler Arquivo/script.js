const texto = document.querySelector("#texto")

const endpoint = "texto.txt"

fetch(endpoint) //acessa o arquivo mas apenas no lado servidor

.then(res=>res.text()) //converte para texto
.then(res=>{
    console.log(res); //mostra o conteúdo do arquivo
})





