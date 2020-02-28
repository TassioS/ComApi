$(document).ready(function() {

    // show html form when 'update product' button was clicked
    $(document).on('click', '.update-product-button', function() {

        if (auxMenu == "tenisBar") {
            // get product id
            var id = $(this).attr('data-id');

            // read one record based on given product id
            $.getJSON("http://localhost/api-tassio/tenis/read_one.php?id=" + id, function(data) {

                // values will be used to fill out our form
                var nome = data.nome;
                var preco = data.preco;
                var cor = data.cor;
                var fabricacao = data.fabricacao;

                // store 'update product' html to this variable
                var update_product_html = `
        <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
        <span class='glyphicon glyphicon-list'></span> Lista de tênis
        </div><!-- build 'update product' html form -->
        <!-- we used the 'required' html5 property to prevent empty fields -->
        <form id='update-product-form' action='#' method='post' border='0'>
        <table class='table table-hover table-responsive table-bordered'>
 
        <!-- name field -->
        <tr>
            <td>Nome</td>
            <td><input value=\"` + nome + `\" type='text' name='nome' class='form-control' required /></td>
        </tr>

        <tr>
            <td>Cor</td>
            <td><input value=\"` + cor + `\" type='text' name='cor' class='form-control' required /></td>
        </tr>
 
        <!-- price field -->
        <tr>
            <td>Preco</td>
            <td><input value=\"` + preco + `\" type='number' min='1' step='0.01' name='preco' class='form-control' required /></td>
        </tr>
 
        <!-- description field -->
        <tr>
            <td>Fabricacao</td>
            <td><input value=\"` + fabricacao + `\" type='text'  name='fabricacao' class='form-control' required /></td>
        </tr>
 
 
        <tr>
 
            <!-- hidden 'product id' to identify which record to delete -->
            <td><input value=\"` + id + `\" name='id' type='hidden' /></td>
 
            <!-- button to submit form -->
            <td>
                <button type='submit' class='btn btn-info'>
                    <span class='glyphicon glyphicon-edit'></span> Atualizar tênis
                </button>
            </td>
 
        </tr>
 
        </table>
        </form>`;
                // inject to 'page-content' of our app
                $("#page-content").html(update_product_html);

                // chage page title
                changePageTitle("Editar tênis");
            });
        } else if (auxMenu == "alunosBar") {
            // get product id
            var id = $(this).attr('data-id');

            // read one record based on given product id
            $.getJSON("http://192.168.0.150/api-duda/alunos/readOne.php?id=" + id, function(data) {

                // values will be used to fill out our form
                var nome = data.nome;
                var matricula = data.matricula;
                var curso = data.curso;
                var instituto = data.instituto;

                // store 'update product' html to this variable
                var update_product_html = `
<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
<span class='glyphicon glyphicon-list'></span> Lista de Alunos
</div><!-- build 'update product' html form -->
<!-- we used the 'required' html5 property to prevent empty fields -->
<form id='update-product-form' action='#' method='post' border='0'>
<table class='table table-hover table-responsive table-bordered'>

<!-- name field -->
<tr>
<td>Nome</td>
<td><input value=\"` + nome + `\" type='text' name='nome' class='form-control' required /></td>
</tr>

<tr>
<td>Matricula</td>
<td><input value=\"` + matricula + `\" type='text' name='matricula' class='form-control' required /></td>
</tr>

<!-- price field -->
<tr>
<td>Curso</td>
<td><input value=\"` + curso + `\" type='text' name='curso' class='form-control' required /></td>
</tr>

<!-- description field -->
<tr>
<td>Instituto</td>
<td><input value=\"` + instituto + `\" type='text'  name='instituto' class='form-control' required /></td>
</tr>


<tr>

<!-- hidden 'product id' to identify which record to delete -->
<td><input value=\"` + id + `\" name='id' type='hidden' /></td>

<!-- button to submit form -->
<td>
    <button type='submit' class='btn btn-info'>
        <span class='glyphicon glyphicon-edit'></span> Atualizar Aluno
    </button>
</td>

</tr>

</table>
</form>`;
                $("#page-content").html(update_product_html);

                changePageTitle("Editar Aluno");
            });
        } else {

            // get product id
            var id = $(this).attr('data-id');
            // read one record based on given product id
            $.getJSON("http://192.168.0.109/api-rodrigo/celular/read_one.php?numero_serie=" + id, function(data) {
                var modelo = data.modelo;
                var memoria_ram = data.memoria_ram;
                var memoria_hd = data.memoria_hd;

                // store 'update product' html to this variable
                var update_product_html = `
<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
<span class='glyphicon glyphicon-list'></span> Lista de Celulares
</div><!-- build 'update product' html form -->
<!-- we used the 'required' html5 property to prevent empty fields -->
<form id='update-product-form' action='#' method='post' border='0'>
<table class='table table-hover table-responsive table-bordered'>

<!-- name field -->
<tr>
<td>Modelo</td>
<td><input value=\"` + modelo + `\" type='text' name='modelo' class='form-control' required /></td>
</tr>

<tr>
<td>Memoria RAM</td>
<td><input value=\"` + memoria_ram + `\" type='text' name='memoria_ram' class='form-control' required /></td>
</tr>

<!-- price field -->
<tr>
<td>Armazenamento</td>
<td><input value=\"` + memoria_hd + `\" type='text' name='memoria_hd' class='form-control' required /></td>
</tr>


<tr>

<!-- hidden 'product id' to identify which record to delete -->
<td><input value=\"` + id + `\" name='numero_serie' type='hidden' /></td>

<!-- button to submit form -->
<td>
    <button type='submit' class='btn btn-info'>
        <span class='glyphicon glyphicon-edit'></span> Atualizar Celular
    </button>
</td>

</tr>

</table>
</form>`;
                // inject to 'page-content' of our app
                $("#page-content").html(update_product_html);

                // chage page title
                changePageTitle("Editar Celular");
            });
        }
    });

    // will run if 'create product' form was submitted
    $(document).on('submit', '#update-product-form', function() {
        if (auxMenu == "tenisBar") {
            // get form data
            var form_data = JSON.stringify($(this).serializeObject());
            // submit form data to api
            $.ajax({
                url: "http://localhost/api-tassio/tenis/update.php",
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
            // get form data
            var form_data = JSON.stringify($(this).serializeObject());
            // submit form data to api
            $.ajax({
                url: "http://192.168.0.150/api-duda/alunos/update.php",
                type: "POST",
                contentType: 'application/json',
                //contentType: 'html',
                data: form_data,
                success: function(result) {
                    // product was created, go back to products list
                    showAlunos();
                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });

            return false;
        } else {
            // get form data
            var form_data = JSON.stringify($(this).serializeObject());
            // submit form data to api
            $.ajax({
                url: "http://192.168.0.109/api-rodrigo/celular/update.php",
                type: "POST",
                //contentType: 'application/json',
                dataType: 'html',
                data: form_data,
                success: function(result) {
                    // product was created, go back to products list
                    showCelulares();
                },
                error: function(xhr, resp, text) {
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });

            return false;
        }
    });
});