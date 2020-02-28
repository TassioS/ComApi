$(document).ready(function() {

    $(document).on('click', '.create-product-button', function() {
        if (auxMenu == "tenisBar") {
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
            <td>Nome</td>
            <td><input type='text' name='nome' class='form-control' required /></td>
        </tr>

        <tr>
            <td>Cor</td>
            <td><input type='text' name='cor' class='form-control' required /></td>
        </tr>
 
        <!-- price field -->
        <tr>
            <td>Preço</td>
            <td><input type='number' min='1' step=0.01 name='preco' class='form-control' required /></td>
        </tr>
 
        <!-- description field -->
        <tr>
            <td>Fabricação</td>
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
            changePageTitle("Cadastrar Tênis");
        } else if (auxMenu == "alunosBar") {
            var create_product_html = `
 
    <!-- 'read products' button to show list of products -->
    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
        <span class='glyphicon glyphicon-list'></span> Lista de Alunos
    </div>
    <!-- 'create product' html form -->
    <form id='create-product-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- name field -->
        <tr>
            <td>Nome</td>
            <td><input type='text' name='nome' class='form-control' required /></td>
        </tr>

        <tr>
            <td>Matricula</td>
            <td><input type='text' name='matricula' class='form-control' required /></td>
        </tr>
 
        <!-- price field -->
        <tr>
            <td>Curso</td>
            <td><input type='text' name='curso' class='form-control' required /></td>        </tr>
        <!-- description field -->
        <tr>
            <td>Instituto</td>
            <td><input type='text' name='instituto' class='form-control' required /></td>
        </tr>
 
        <!-- button to submit form -->
        <tr>
            <td></td>
            <td>
                <button type='submit' class='btn btn-primary'>
                    <span class='glyphicon glyphicon-plus'></span> Adicionar Aluno
                </button>
            </td>
        </tr>
 
    </table>
    </form>`;

            // inject html to 'page-content' of our app
            $("#page-content").html(create_product_html);

            // chage page title
            changePageTitle("Cadastrar Aluno");
        } else {

            var create_product_html = `
 
    <!-- 'read products' button to show list of products -->
    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
        <span class='glyphicon glyphicon-list'></span> Lista de Celulares
    </div>
    <!-- 'create product' html form -->
    <form id='create-product-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
 
        <!-- name field -->
        <tr>
            <td>Modelo</td>
            <td><input type='text' name='modelo' class='form-control' required /></td>
        </tr>

        <tr>
            <td>Memória RAM</td>
            <td><input type='text' name='memoria_ram' class='form-control' required /></td>
        </tr>
 
        <!-- price field -->
        <tr>
            <td>Armazenamento</td>
            <td><input type='text' name='memoria_hd' class='form-control' required /></td>
        </tr>
 
 
        <!-- button to submit form -->
        <tr>
            <td></td>
            <td>
                <button type='submit' class='btn btn-primary'>
                    <span class='glyphicon glyphicon-plus'></span> Adicionar Celular
                </button>
            </td>
        </tr>
 
    </table>
    </form>`;

            // inject html to 'page-content' of our app
            $("#page-content").html(create_product_html);

            // chage page title
            changePageTitle("Cadastrar Celular");
        }
    });
    $(document).on('submit', '#create-product-form', function() {
        if (auxMenu == "tenisBar") {
            var form_data = JSON.stringify($(this).serializeObject());
            // submit form data to api
            $.ajax({
                //crossDomain: true,
                //dataType: 'jsonp',
                url: "http://192.168.0.106/api-tassio/tenis/create.php",
                type: "POST",
                contentType: 'application/json',
                data: form_data,
                success: function(result) {
                    // product was created, go back to products list
                    showTenis();
                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });
            return false;
        } else if (auxMenu == "alunosBar") {
            var form_data = JSON.stringify($(this).serializeObject());
            // submit form data to api
            $.ajax({
                //crossDomain: true,
                //dataType: 'jsonp',
                url: "http://192.168.0.150/api-duda/alunos/create.php",
                type: "POST",
                contentType: 'application/json',
                data: form_data,
                success: function(result) {
                    showAlunos();
                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });
        } else {
            var form_data = JSON.stringify($(this).serializeObject());
            // submit form data to api
            $.ajax({
                url: "http://192.168.0.109/api-rodrigo/celular/create.php",
                type: "POST",
                contentType: 'application/json',
                data: form_data,
                success: function(result) {
                    // product was created, go back to products list
                    console.log(result)
                    showCelulares();
                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(result)
                    console.log(xhr, resp, text);
                }
            });
        }
    });
});