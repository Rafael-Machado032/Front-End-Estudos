const serv = sessionStorage.getItem('servidor_nodered');
const token = sessionStorage.getItem('token');
const endpoint_token = `${serv}/verificatoken/${token}`;
fetch(endpoint_token)
    .then((res) => {
        if (!res.ok) {
            throw new Error("A resposta da rede não foi bem-sucedida");
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
        
        if (data.retorno === 200) {
            console.log("Token válido");
        } else {
            console.log("Token inválido");
            sessionStorage.removeItem('id_usuario');
            sessionStorage.removeItem('nome_usuario');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('id_token');
            window.location.href = "./index.html";
            
        }
    });

const btn_menupricipal = document.querySelector('.btn_menuprincipal');
const menuprincipal = document.querySelector('.menuprincipal');
const todosmenusprincipais = [...document.querySelectorAll('.btn_menuitem')];
const id_usuario_element = document.getElementById('id_usuario_element');
const nome_usuario_element = document.getElementById('nome_usuario_element');
const btn_sair = document.getElementById('btn_sair');




btn_menupricipal.addEventListener('click', () => {
    menuprincipal.classList.toggle('ocultar');
});

todosmenusprincipais.forEach((item) => {
    item.addEventListener('click', () => {
        menuprincipal.classList.add('ocultar');
    });
});
// Verifica se o usuário está logado

btn_sair.addEventListener('click', () => {
    sessionStorage.removeItem('id_usuario');
    sessionStorage.removeItem('nome_usuario');
    window.location.href = "./index.html";
});

const id_usuario = sessionStorage.getItem('id_usuario');
const nome_usuario = sessionStorage.getItem('nome_usuario');


if (!id_usuario || !nome_usuario) {
    window.location.href = "./index.html";
}

id_usuario_element.innerHTML = `ID: ${id_usuario}`;
nome_usuario_element.innerHTML = `Nome: ${nome_usuario}`;




