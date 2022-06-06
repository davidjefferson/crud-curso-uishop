$(document).ready(function(){
    $('#cep').on('blur', function(){
        const cep = $(this).val();
        const url = 'https://viacep.com.br/ws/' + cep + '/json/';

        $.ajax({
            url: url,
            success: function(response) {
                $('#logradouro').val(response.logradouro);
                $('#cidade').val(response.localidade);
                $('#estado').val(response.uf);
                $('#bairro').val(response.bairro);
                $('#bairro').val(response.bairro);
            },
            error: function() {
                alert('Não foi possível buscar o cep, verifique e tente novamente!');
            }
        });
    });
});