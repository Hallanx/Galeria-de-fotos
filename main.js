$(document).ready(function () {
    (document.querySelector('header button'));
    ($('#botao-cancelar'));

    document.querySelector('header button').addEventListener('click', function (e) {

    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('header button').click(function () {
        $('form').slideDown();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoImagem = $('#endereco-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay">
                <a href="${enderecoImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
                </div>
                `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000)
        $('#endereco-imagem').val('')
    })
})