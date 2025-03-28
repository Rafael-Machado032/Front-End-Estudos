const btn_pesq = document.querySelector('#btn_pesq');
const f_txtpesq = document.querySelector('#f_txtpesq');

btn_pesq.addEventListener('click', () => { 
    if (f_txtpesq.value == '') {
        alert('Digite um nome para pesquisar');
        f_txtpesq.focus();
        return;
        
    }
});