$(document).ready(function () {
    $(document).on('click', '.delete-product-button', function () {
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
            callback: function (result) {
                if (result == true) {

                    // send delete request to api / remote server
                    $.ajax({
                        url: "http://192.168.0.106/api-tassio/tenis/delete.php",
                        type: "POST",
                        dataType: 'json',
                        data: JSON.stringify({ id: product_id }),
                        success: function (result) {

                            // re-load list of products
                            showProducts();
                        },
                        error: function (xhr, resp, text) {
                            console.log(xhr, resp, text);
                        }
                    });

                }
            }
        });
    });
});