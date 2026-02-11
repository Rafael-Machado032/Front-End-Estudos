$(document).ready(function () {

    var totaldepo = $('.equipe').length;
    let larguraslider = totaldepo * 100;

    $('.slider').css('width', larguraslider + '%'); //Setar a largura do slider ja que cada depoimento é 100%

    $('.equipe').each(function (index) { //Cada depoimento ganha 1 pontinho com index
        $('<span></span>')
            .addClass('dot')
            .attr('data-index', index)
            .appendTo('.cont-dot');
    });

    $('.dot').first().addClass('selecionado'); //Comeca com o primeiro pontinho marcado

    $('.dot').on('click', function () {
        var index = $(this).data('index');

        // 1. Calcula a porcentagem do deslocamento
        // Se clicar no index 1, move -100%. No index 2, move -200%
        var deslocamento = index * -(100 / totaldepo);

        // 2. Move o trilho lateralmente
        $('.slider').css('transform', 'translateX(' + deslocamento + '%)');

        // 3. Atualiza os pontinhos
        $('.dot').removeClass('selecionado');
        $(this).addClass('selecionado');
    });

    $(window).on('resize', function () {
        // Quando a tela muda de tamanho, volta o slider para o início para recalcular
        $('.slider').css('transform', 'translateX(0%)');
        $('.dot').removeClass('selecionado').first().addClass('selecionado');
    });

    // 1. Criamos uma função para mudar o slide
    function proximoSlide() {
        // Busca o ponto que está ativo no momento
        var pontoAtual = $('.dot.selecionado');
        // Busca o próximo ponto na fila
        var proximoPonto = pontoAtual.next('.dot');

        // Se não houver um próximo (chegou no fim), volta para o primeiro
        if (proximoPonto.length === 0) {
            proximoPonto = $('.dot').first();
        }

        // Dispara o evento de clique que já configuramos antes
        proximoPonto.click();
    }

    // 2. Iniciamos o cronômetro (4000ms = 4 segundos)
    var sliderAutomatico = setInterval(proximoSlide, 4000);

    // 3. (OPCIONAL) Pausar quando o mouse estiver em cima
    $('.slider').hover(
        function () { clearInterval(sliderAutomatico); }, // Para ao entrar
        function () { sliderAutomatico = setInterval(proximoSlide, 5000); } // Volta ao sair
    );


})