$(document).ready(function () {
    $('nav a').on('click', function (e) {
        // 1. Pega o valor do href (ex: #sobre)
        var target = $(this).attr('href');

        // 2. Verifica se é um link interno (começa com #)
        if (target.startsWith('#')) {
            e.preventDefault(); // Impede o pulo brusco original

            // 3. Faz a animação
            $('html, body').animate({
                scrollTop: $(target).offset().top - 40// O -80 é pra não cobrir o título com o menu fixo
            }, 800); // Velocidade em milissegundos

            $('#menu-mobile').hide();
        }
    });
})