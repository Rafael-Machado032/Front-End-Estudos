$(document).ready(function () {

    var totalFoto = $('.vendafoto-veiculo').length;
    var index = 0; // Foto atual
    var fotosPorVez = 3; // Quantas fotos aparecem no "buraco" do slider

    // Calcula a largura total: se cada item é 1/3 do slider, o slider tem que ter (total/3)*100%
    let larguraSlider = (totalFoto / fotosPorVez) * 100;
    $('.slider').css('width', larguraSlider + '%');

    // O pulo do gato: quanto cada foto representa do TOTAL do slider (em %)
    var passo = 100 / totalFoto;

    $('.setadir').on('click', function () {
        if (index < totalFoto - fotosPorVez) { // Trava no final
            index++;
            movimentar();
        }
    });

    $('.setaesq').on('click', function () {
        if (index > 0) { // Trava no início
            index--;
            movimentar();
        }
    });

    function movimentar() {
        var deslocamento = index * passo;
        $('.slider').css('transform', 'translateX(-' + deslocamento + '%)');
    }

    $('.vendafoto-veiculo').on('click', function () {
        // 1. Remove a borda de todas antes de colocar na clicada (o reset)
        $('.vendafoto-veiculo').css('outline', 'none');

        // 2. Aplica a borda na foto clicada (sem o ";" no final da string)
        $(this).css('outline', '5px solid #ccc');

        // 1. Pega o valor do background (ex: url("foto.jpg"))
        var bg = $(this).css('background-image');

        // 2. Limpa a string para sobrar só o link
        // Remove url(" no começo e ") no final
        var linkImagem = bg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

        // 4. Joga o conteúdo na div de destaque
        $('.foto-destaque').css('background-image', 'url(' + linkImagem + ')')
    });

    $('.vendafoto-veiculo').first().trigger('click');

})