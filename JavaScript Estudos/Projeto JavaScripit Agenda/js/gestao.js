const dados = document.querySelector('.dados');
const fundopopup = document.querySelector('.fundopopup');
const btn_gravar = document.querySelector('#btn_gravar');
const btn_cancelar = document.querySelector('#btn_cancelar');
const f_nome = document.querySelector('#f_nome');
const f_telefone = document.querySelector('#f_telefone');
const f_email = document.querySelector('#f_email');
const f_obs = document.querySelector('#f_obs');
let id = null

btn_gravar.addEventListener('click', (evt) => {
    fundopopup.classList.add('ocultar');
    console.log(id);
    const endpoint = `http://127.0.0.1:1880/editarcontatos/${id}/${f_nome.value}/${f_telefone.value}/${f_email.value}/${f_obs.value}`;
    fetch(endpoint)
    .then(res => {
        if (res.status == 200) {
            
            preencher();
        } else {
            alert('Erro ao editar contato!');
        }
    })
    
});

btn_cancelar.addEventListener('click', (evt) => {
    fundopopup.classList.add('ocultar');
});

const preencher = () => {
    
    
    let endpoint = `http://127.0.0.1:1880/contatos`;
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

            const c6 = document.createElement('div');
            c6.setAttribute("class",'coluna c6');

            const imgdelete = document.createElement('img');
            imgdelete.setAttribute("src", "img/delete_black.png");
            imgdelete.setAttribute("class", "imgdelete img");
            c6.appendChild(imgdelete);
            imgdelete.addEventListener('click', (evt) => {
                
                const id = element.n_contato_contatos;
                removercontato(id);
                console.log(id);
                
            });

            const imgedit = document.createElement('img');
            imgedit.setAttribute("src", "img/edit_black.png");
            imgedit.setAttribute("class", "imgedit img");
            c6.appendChild(imgedit);
            imgedit.addEventListener('click', (evt) => {
                id = element.n_contato_contatos;
                const nome = element.s_nome_contatos;
                const telefone = element.n_telefone_contatos;
                const email = element.s_email_contatos;
                const obs = element.tx_obs_contatos;
                f_nome.value = nome;
                f_telefone.value = telefone;
                f_email.value = email;
                f_obs.value = obs;
                fundopopup.classList.remove('ocultar');
                
                
                
            });

            linha.appendChild(c6);

            dados.appendChild(linha);
        });
    })

    
};

preencher();

const removercontato = (id) => {
    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`;
    fetch(endpoint)
    .then(res => {
        if (res.status == 200) {
            alert('Contato removido com sucesso!');
            preencher();
        } else {
            alert('Erro ao remover contato!');
        }
    })
}
