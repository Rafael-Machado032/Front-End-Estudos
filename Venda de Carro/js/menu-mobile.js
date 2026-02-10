$(document).ready(function () {
    $('#menu-mobile').hide()
    $('#botao-mobile').on('click', function () {
        $('#menu-mobile').slideToggle()
    })
    $(window).on('resize', function () {
        if ($(window).width() > 750) {
            // Remove o "style='display: block'" que o jQuery injetou
            $('#menu-mobile').removeAttr('style');
        }
    });
    $(document).on('mouseup', function (e) {
        var menu = $("#menu-mobile"); // Seu menu
        var btn = $("#botao-mobile");     // Seu botão sanduíche

        // Se o clique NÃO for no menu nem no botão, e o menu estiver aberto...
        if (!menu.is(e.target) && menu.has(e.target).length === 0 && !btn.is(e.target) && btn.has(e.target).length === 0) {
            menu.slideUp(); // Ou .hide(), dependendo da sua lógica
        }
    });
})