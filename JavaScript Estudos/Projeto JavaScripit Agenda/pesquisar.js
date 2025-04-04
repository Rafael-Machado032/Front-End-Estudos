const btn_pesq = document.querySelector('#btn_pesq');
const f_txtpesq = document.querySelector('#f_txtpesq');
const dados = document.querySelector('.dados');

btn_pesq.addEventListener('click', () => { 
    
    if (f_txtpesq.value == '') {
        alert('Digite um nome para pesquisar');
        f_txtpesq.focus();
        return;
    }
    const f_pesq = document.querySelector("input[name='f_pesq']:checked").value;
    let endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${f_txtpesq.value}`;
    fetch(endpoint)
    .then(res => {
        if (res.status == 200) {
            return res.json();
        } else {
            alert('Erro ao pesquisar contato!');
        }
    })
    .then(res => {
        console.log(res);
        dados.innerHTML = '';
        res.forEach(element => {
            const linha = document.createElement('div');
            linha.setAttribute("class",'linhadados');

            const c1 = document.createElement('div');
            c1.setAttribute("class",'coluna c1');
            c1.innerHTML = element.n_contato_contatos;
            linha.appendChild(c1);

            const c2 = document.createElement('div');
            c2.setAttribute("class",'coluna c2');
            c2.innerHTML = element.s_nome_contatos;
            linha.appendChild(c2);

            const c3 = document.createElement('div');
            c3.setAttribute("class",'coluna c3');
            c3.innerHTML = element.n_telefone_contatos;
            linha.appendChild(c3);

            const c4 = document.createElement('div');
            c4.setAttribute("class",'coluna c4');
            c4.innerHTML = element.s_email_contatos;
            linha.appendChild(c4);

            const c5 = document.createElement('div');
            c5.setAttribute("class",'coluna c5');
            c5.innerHTML = element.tx_obs_contatos;
            linha.appendChild(c5);

            dados.appendChild(linha);
        });
    })
    f_txtpesq.value = '';
    f_txtpesq.focus();
    
});