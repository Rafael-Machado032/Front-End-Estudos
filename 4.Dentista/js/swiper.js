let mosaico; // Cria a variável fora
let tratamento;
let depoimento;

function inicializarSwiper() {
    // Se o swiper já existe, deleta ele antes de criar o novo
    if (mosaico !== undefined) mosaico.destroy(true, true);

    mosaico = new Swiper('.mosaico', {
        observer: true,
        observeParents: true,
        slidesPerView: 1.5,
        centeredSlides: true,
        initialSlide: 1,
        grid: { rows: 2, fill: 'row' },
        breakpoints: {
            380: { slidesPerView: 3.5, initialSlide: 2, centeredSlides: true },
            780: { slidesPerView: 6, centeredSlides: false }
        }
    });

    if (tratamento !== undefined) tratamento.destroy(true, true);

    tratamento = new Swiper('.tratcont', {
        observer: true,
        observeParents: true,
        grid: { rows: 3, fill: 'row' },
        breakpoints: {
            380: { slidesPerView: 2 },
            780: { slidesPerView: 3 }
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
        },
    });

    if (tratamento !== undefined) tratamento.destroy(true, true);

    tratamento = new Swiper('.tratcont', {
        observer: true,
        observeParents: true,
        grid: { rows: 3, fill: 'row' },
        breakpoints: {
            380: { slidesPerView: 2 },
            780: { slidesPerView: 3 }
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
        },
    });
}

// 1. Inicializa quando a página abre
$(document).ready(function () {
    inicializarSwiper();
});

// 2. Reinicializa apenas quando o redimensionamento parar (para não pesar)
let timeout;
$(window).on('resize', function () {
    clearTimeout(timeout);
    timeout = setTimeout(inicializarSwiper, 200); // Espera 200ms após o redimensionamento
});




