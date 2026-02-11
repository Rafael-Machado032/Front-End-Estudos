$(document).ready(function () {
    $('.fotos-rede .foto-redebox').slick({
        infinite: true,
        slidesToShow: 3, // Quantas fotos aparecem
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // No celular
                settings: {
                    slidesToShow: 1 // Mostra apenas 1 foto
                }
            }
        ]
    });
})


