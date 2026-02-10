$(document).ready(function() {
    var depoimentos = $('.depo');
    var total = depoimentos.length;
    var atual = 0;

    // Esconde todos e mostra só o primeiro logo de cara
    depoimentos.hide().first().show();

    function mudarDepoimento(novoIndex) {
        // Faz o atual sumir suavemente
        $(depoimentos[atual]).fadeOut(400, function() {
            // Atualiza o index
            atual = novoIndex;
            // Faz o novo aparecer suavemente
            $(depoimentos[atual]).fadeIn(400);
        });
    }

    $('.setaesq').on('click', function() {
        let proximo = (atual + 1) % total; // Volta pro zero quando chega no fim
        mudarDepoimento(proximo);
    });

    $('.setadir').on('click', function() {
        let anterior = (atual - 1 + total) % total; // Vai pro último se estiver no primeiro
        mudarDepoimento(anterior);
    });
});
