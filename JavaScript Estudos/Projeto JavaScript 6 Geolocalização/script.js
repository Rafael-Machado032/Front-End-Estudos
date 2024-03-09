const lati=document.getElementById("lati")
const long=document.getElementById("long")

if (navigator.geolocation) { //Testa no navegador se esta ativada
    navigator.geolocation.getCurrentPosition(mostrarLocalização,erroLocalização) //Método dos navegadores para geolocalização
    //O navigator.geolocation so funciona com 2 funções, a de Sucesso e a de Erro
} else {
    console.log("Geolocalização não suportada");
}

function mostrarLocalização(pos) { //A variável recebe varias dados de localização com latitude, longitude, timestamp etc.
    lati.innerHTML=`Latitude: ${pos.coords.latitude}`
    long.innerHTML=`Longitude: ${pos.coords.longitude}`
    
}

function erroLocalização() { //se bloquear a localização aparece essa mensagem
    console.log("Erro ao obter a localização");
}



