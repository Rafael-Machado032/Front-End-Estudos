const btn_menupricipal = document.querySelector('.btn_menuprincipal');
const menuprincipal = document.querySelector('.menuprincipal');
const todosmenusprincipais = document.querySelectorAll('.btn_menuitem');

btn_menupricipal.addEventListener('click', () => {
    menuprincipal.classList.toggle('ocultar');
});