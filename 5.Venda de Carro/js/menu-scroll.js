$(document).ready(function () {

    // FUNÇÃO PARA SCROLL AO CARREGAR
    function verificarHash() {
        var hash = window.location.hash; // Pega o #contato da URL
        if (hash) {
            // Pequeno delay para garantir que o navegador carregou tudo
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 100
                }, 800);

                // Marca o link no menu como selecionado
                $('nav a').removeClass('selecionado');
                $('nav a[href*="' + hash + '"]').addClass('selecionado');
            }, 300);
        }
    }

    verificarHash(); // Executa ao abrir a página

    //FUNÇÃO SELECIONAR

    $('nav a').on('click', function (e) {
        // 1. Pega o valor do href (ex: #sobre)
        var target = $(this).attr('href');
        $('a').each(function () {
            $(this).removeClass('selecionado')
        })

        $('nav a[href="' + target + '"]').addClass('selecionado');



        // 2. Verifica se é um link interno (começa com #)
        if (target.startsWith('#')) {
            e.preventDefault(); // Impede o pulo brusco original

            // 3. Faz a animação
            $('html, body').animate({
                scrollTop: $(target).offset().top - 100 // O -80 é pra não cobrir o título com o menu fixo
            }, 800); // Velocidade em milissegundos

            $('#menu-mobile').hide();
        }
    });


})