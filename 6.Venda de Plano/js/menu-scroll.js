$(document).ready(function() {
    // Scroll to section when clicking on navigation links
    $('a').on('click', function(e) {
        e.preventDefault();
        var link = $(this).attr('href'); //Pega o atributo href do link clicado
        var posicao = $(link).offset().top; //Pega a posicao topo do elemento
        $('html, body').animate({
            scrollTop: posicao
        }, 1000);
    });
});