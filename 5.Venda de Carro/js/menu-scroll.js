$(document).ready(function () {

    //FUNÇÃO SELECIONAR

    $('nav a').on('click', function (e) {
        // 1. Pega o valor do href (ex: #sobre)
        var target = $(this).attr('href');

        $(".menu a").removeClass("selecionado");
        $('nav a[href="' + target + '"]').addClass('selecionado');

        // 2. Verifica se é um link interno (começa com #)
        if (target.startsWith('#')) {
            try {
                e.preventDefault(); // Impede o pulo brusco original

                // 3. Faz a animação
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 100 // O -80 é pra não cobrir o título com o menu fixo
                }, 800); // Velocidade em milissegundos

                $('#menu-mobile').hide(); // Esconde o menu móvel após clicar (opcional, se tiver um menu móvel)
            } catch (error) {

                $("#conteudo").load("principal.html", function () {
                    e.preventDefault(); // Impede o pulo brusco original                    // 3. Faz a animação
                    $('html, body').animate({
                        scrollTop: $(target).offset().top - 100 // O -80 é pra não cobrir o título com o menu fixo
                    }, 800); // Velocidade em milissegundos

                    $('#menu-mobile').hide(); // Esconde o menu móvel após clicar (opcional, se tiver um menu móvel)
                });
            }

        }
    });

});