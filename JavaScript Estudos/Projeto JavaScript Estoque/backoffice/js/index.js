const cabecalho = document.querySelector('#cabecalho');
const menu = document.querySelector('#menu');
const btn_home = document.querySelector('#btn_home');
const btn_novo = document.querySelector('#btn_novo');
const btn_pesquisar = document.querySelector('#btn_pesquisar');
const btn_filtrar = document.querySelector('#btn_filtrar');
const btn_gestao = document.querySelector('#btn_gestao');
const btn_sobre = document.querySelector('#btn_sobre');
const principal = document.querySelector('#principal');

btn_home.addEventListener('click', (evt) => {
    selecionarAba(evt.target, 'home.html');
    
});

btn_novo.addEventListener('click', (evt) => {
    selecionarAba(evt.target, 'novo.html');

});

btn_pesquisar.addEventListener('click', (evt) => {
    selecionarAba(evt.target, 'pesquisar.html');
    
});

btn_filtrar.addEventListener('click', (evt) => {
    selecionarAba(evt.target, 'filtrar.html');
    
});

btn_gestao.addEventListener('click', (evt) => {
    selecionarAba(evt.target, 'gestao.html');
    
});

btn_sobre.addEventListener('click', (evt) => {
    selecionarAba(evt.target, 'sobre.html');
    
});

const selecionarAba = (el,url) => {
    const aba = [...document.querySelectorAll('.aba')];
    aba.forEach((item) => {
        item.classList.remove('selecionado');
    });
    el.classList.add('selecionado');
    window.open(url, 'if_principal');
}