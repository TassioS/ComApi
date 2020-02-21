$(document).ready(function () {
    $(document).on('click', '.create-product-button', function () {
        var create_product_html = `
 
    <!-- 'read products' button to show list of products -->
    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
        <span class='glyphicon glyphicon-list'></span> Lista de Tênis
    </div>
    <!-- 'create product' html form -->
    <form id='create-product-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- name field -->
        <tr>
            <td>Name</td>
            <td><input type='text' name='nome' class='form-control' required /></td>
        </tr>

        <tr>
            <td>Cor</td>
            <td><input type='text' name='cor' class='form-control' required /></td>
        </tr>
 
        <!-- price field -->
        <tr>
            <td>Price</td>
            <td><input type='number' min='1' step=0.01 name='preco' class='form-control' required /></td>
        </tr>
 
        <!-- description field -->
        <tr>
            <td>Fabricacao</td>
            <td><input type='text' name='fabricacao' class='form-control' required /></td>
        </tr>
 
        <!-- button to submit form -->
        <tr>
            <td></td>
            <td>
                <button type='submit' class='btn btn-primary'>
                    <span class='glyphicon glyphicon-plus'></span> Adicionar tênis
                </button>
            </td>
        </tr>
 
    </table>
    </form>`;

        // inject html to 'page-content' of our app
        $("#page-content").html(create_product_html);

        // chage page title
        changePageTitle("Create Product");
    });

    $(document).on('submit', '#create-product-form', function () {
        var form_data = JSON.stringify($(this).serializeObject());

        // submit form data to api
        $.ajax({
            //crossDomain: true,
            //dataType: 'jsonp',
            url: "http://localhost/api-tassio/tenis/create.php",
            type: "POST",
            contentType: 'application/json',
            data: form_data,
            success: function (result) {
                // product was created, go back to products list
                showProducts();
            },
            error: function (xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        return false;
    });
});