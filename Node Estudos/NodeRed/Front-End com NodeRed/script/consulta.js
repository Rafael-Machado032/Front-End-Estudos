const obterRegistro = async() =>{
    const res = await fetch ('http://127.0.0.1:1880/consultarB')
    const resJson = await res.json()
    document.getElementById("dados").innerHTML=JSON.stringify(resJson)
}
obterRegistro();