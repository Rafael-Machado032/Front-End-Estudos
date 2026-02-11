$(document).ready(function () {

    const valorFinal = 80000;

    $('.valor-final').text(valorFinal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}))
    //Insere o valor final para ficar dinamico
    const $slider = $('.barra-filtro');
    //$ na variavel é semantica que indica que esta manipulando um elemento DOM

    const progressoBarra = (el) => {
        const val = $(el).val(); //Valor atual da barra
        const valor = (valorFinal*val)/100;
        
        $(el).css('--tamanho-barra', val + '%');
        //Insere a porcentagem na variavel do css
        $('.valor-inicial').text(valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}))
    };

    $slider.on('input', function () { //Le o movimento da barra
        progressoBarra(this);
    });

    $slider.each(function () { //Ao carregar a pagina le onde esta a bolinha
        progressoBarra(this);
    });

})

