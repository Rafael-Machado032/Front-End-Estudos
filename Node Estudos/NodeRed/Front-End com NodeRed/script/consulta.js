const obterRegistro = async () => {
    const res = await fetch('http://127.0.0.1:1880/consultarB')
    const resJson = await res.json()

    resJson.map(
        (dado) => {
            document.getElementById("dados").innerHTML += "<div>ID: " + dado.i_contatos_contatos + " - NOME: " + dado.s_nome_contatos + " - TELEFONE: " + dado.s_telefone_contatos + " - EMAIL: " + dado.s_email_contatos + "</div>";
        }
    )
}

obterRegistro();