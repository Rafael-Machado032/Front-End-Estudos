$(document).ready(function () {
    $(".detalhe-veiculo").on("click", function () {
        $("#conteudo").load("veiculo.html");
        $(".menu a").removeClass("selecionado");
        $('.menu a[href*="venda.html"]').addClass("selecionado");
    });
});