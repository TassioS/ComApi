$(document).ready(function() {
    $(document).on('click', '.delete-product-button', function() {
        var product_id = $(this).attr('data-id');

        bootbox.confirm({

            message: "<h4>Tem certeza que deseja deletar?</h4>",
            buttons: {
                confirm: {
                    label: '<span class="glyphicon glyphicon-ok"></span> Sim',
                    className: 'btn-danger'
                },
                cancel: {
                    label: '<span class="glyphicon glyphicon-remove"></span> Não',
                    className: 'btn-primary'
                }
            },
            callback: function(result) {
                if (result == true) {

                    if (auxMenu == "tenisBar") {
                        $.ajax({
                            url: "http://192.168.0.106/api-tassio/tenis/delete.php",
                            type: "POST",
                            dataType: 'json',
                            data: JSON.stringify({ id: product_id }),
                            success: function(result) {

                                // re-load list of products
                                showTenis();
                            },
                            error: function(xhr, resp, text) {
                                console.log(xhr, resp, text);
                            }
                        });
                    } else if (auxMenu == "alunosBar") {

                        $.ajax({
                            url: "http://192.168.0.150/api-duda/alunos/delete.php",
                            type: "POST",
                            dataType: 'json',
                            data: JSON.stringify({ id: product_id }),
                            success: function(result) {

                                // re-load list of products
                                showAlunos();
                            },
                            error: function(xhr, resp, text) {
                                console.log(xhr, resp, text);
                            }
                        });
                    } else {
                        $.ajax({
                            url: "http://192.168.0.109/api-rodrigo/celular/delete.php",
                            type: "POST",
                            dataType: 'html',
                            data: JSON.stringify({ numero_serie: product_id }),
                            success: function(result) {

                                // re-load list of products
                                showCelulares();
                            },
                            error: function(xhr, resp, text) {
                                console.log(xhr, resp, text);
                            }
                        });
                    }
                }
            }
        });
    });
});