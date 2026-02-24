$(document).ready(function() {
    const $sidebar = $('#mobile-menu');
    const $overlay = $('#overlay');
    const $body = $('body');
    const $clicado = $('a');

    function abrirMenu() {
        $sidebar.removeClass('-translate-x-full'); // Mostra menu
        $overlay.removeClass('hidden').addClass('block'); // Mostra fundo
        $body.addClass('overflow-hidden'); // Trava rolagem
        $sidebar.addClass('overflow-hidden'); // Trava rolagem
        console.log("fui clicado")
    }

    function fecharMenu() {
        $sidebar.addClass('-translate-x-full');
        $overlay.addClass('hidden').removeClass('block');
        $body.removeClass('overflow-hidden'); // Libera rolagem
        $sidebar.removeClass('overflow-hidden'); // Libera rolagem
    }

    $clicado.on('click', function(e) {
        e.preventDefault(); // Evita comportamento padrão de navegação
        fecharMenu(); // Fecha o menu ao clicar em qualquer link
    });

    // Abrir ao clicar no botão (exemplo)
    $('#menu-btn').on('click', abrirMenu);

    // Fechar ao clicar no overlay (clicar fora)
    $overlay.on('click', fecharMenu);
    console.log("fui clicado")
});
