const btn_menupricipal = document.querySelector('.btn_menuprincipal');
const menuprincipal = document.querySelector('.menuprincipal');
const todosmenusprincipais = [...document.querySelectorAll('.btn_menuitem')];

const endpoint_config = '../config.json';
fetch(endpoint_config)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        sessionStorage.setItem('servidor_nodered', data.servidor_nodered);
        sessionStorage.setItem('versao', data.versao);
    })

btn_menupricipal.addEventListener('click', () => {
    menuprincipal.classList.toggle('ocultar');
});

todosmenusprincipais.forEach((item) => {
    item.addEventListener('click', () => {
        menuprincipal.classList.add('ocultar');
    });
});





