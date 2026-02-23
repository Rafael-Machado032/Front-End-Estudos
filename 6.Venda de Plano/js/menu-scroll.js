$(document).ready(function() {
    // Scroll to section when clicking on navigation links
    $('a').on('click', function(e) {
        e.preventDefault();
        var link = $(this).attr('href');
        var posicao = $(link).offset().top;
        $('html, body').animate({
            scrollTop: posicao
        }, 1000);
    });
});