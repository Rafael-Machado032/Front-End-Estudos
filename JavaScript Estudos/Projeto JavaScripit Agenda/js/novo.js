const btn_salvar = document.getElementById('btn_salvar');
const btn_cancelar = document.getElementById('btn_cancelar');

btn_salvar.addEventListener('click', function (evt) {
    const dados = {
        "f_nome":f_nome.value,
        "f_telefone":f_telefone.value,
        "f_email":f_email.value,
        "f_obs":f_obs.value
    };

    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados),
        
    };

    console.log(dados);

    const endpoint = 'http://127.0.0.1:1880/addcontatos';
    fetch(endpoint, cabecalho)
    .then(data => {
        if (data.status == 200) {
            alert('Contato salvo com sucesso!');
            reset();
        } else {
            alert('Erro ao salvar contato!');
        }
        console.log(data);
    }) 
});

btn_cancelar.addEventListener('click', function (evt) {
    reset();
});

 const reset = () => {
    f_nome.value = '';
    f_telefone.value = '';
    f_email.value = '';
    f_obs.value = '';
    f_nome.focus();
}

