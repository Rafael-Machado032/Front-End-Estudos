$('.caminho a').click(function (e) {

    // Se for um link interno (âncora como #contato), deixa o navegador agir normalmente
    if (this.hash !== "") return;

    e.preventDefault(); // Impede o recarregamento total da página
    var urlDestino = $(this).attr('href'); // Pega o link (ex: venda.html)

    $('#conteudo').load(urlDestino, function () {
        // Atualiza a classe 'selecionado' para o link clicado
        $('.menu a').removeClass('selecionado');
        $('.menu a[href*="' + urlDestino + '"]').addClass("selecionado");
    });
});