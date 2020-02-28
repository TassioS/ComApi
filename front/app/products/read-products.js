var auxMenu = "aaa"
$(document).ready(function() {

    //Mostrar lista de produtos no loading:
    showHome();

    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function() {
        if (auxMenu == "tenisBar") {
            showTenis();
        } else if (auxMenu == "alunosBar") {
            showAlunos();
        } else {
            showCelulares();
        }
    });

    $(document).on('click', '#homeBar', function() {
        showHome();
    })

    $(document).on('click', '#tenisBar', function() {
        auxMenu = this.id
        showTenis();
    })

    $(document).on('click', '#alunosBar', function() {
        auxMenu = this.id
        showAlunos();
    })

    $(document).on('click', '#celularesBar', function() {
        auxMenu = this.id
        showCelulares();
    })
});

function showProducts() {
    // get list of products from the API
    $.getJSON("http://192.168.0.106/api-tassio/tenis/read.php", function(data) {
        // html for listing products
        var read_products_html = `
        <!-- when clicked, it will load the create product form -->
        <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>
        <span class='glyphicon glyphicon-plus'></span> Adicionar tênis
        </div>
        <!-- start table -->
        <table class='table table-bordered table-hover'>
 
        <!-- creating our table heading -->
        <tr>
        <th class='w-25-pct'>Nome</th>
        <th class='w-10-pct'>Preço</th>
        <th class='w-15-pct'>Cor</th>
        <th class='w-25-pct text-align-center'>Ações</th>
        </tr>`;
        // loop through returned list of data
        $.each(data, function(key, record) {
            $.each(record, function(i, val) {
                // creating new table row per record
                read_products_html += `
            <tr>
                <td>` + val.nome + `</td>
                <td>$` + val.preco + `</td>
                <td>` + val.cor + `</td>
     
                <!-- 'action' buttons -->
                <td>
                
                    <!-- edit button -->
                    <button class='btn btn-info m-r-10px update-product-button' data-id='` + val.id + `'>
                        <span class='glyphicon glyphicon-edit'></span> Editar
                    </button>
     
                    <!-- delete button -->
                    <button class='btn btn-danger delete-product-button' data-id='` + val.id + `'>
                        <span class='glyphicon glyphicon-remove'></span> Deletar
                    </button>
                </td>
     
            </tr>`;
            });
        });
        // end table
        read_products_html += `</table>`;
        // inject to 'page-content' of our app
        $("#page-content").html(read_products_html);
        // chage page title
        changePageTitle("Tênis");
    });
}

function showHome() {
    // get list of products from the API
    $.getJSON("http://192.168.0.106/api-tassio/tenis/read.php", function(data) {
        // html for listing products
        var read_products_html = `<div class='container'>
        
        <!-- this is where the contents will be shown. -->
        <div id='page-content'><p id="texto-inicial" class="text-justify">Bem vindo a página resultado do treinamento para novos estagiários Comprovei!</p></div> 
    </div>`
            // inject to 'page-content' of our app
        $("#page-content").html(read_products_html);
        // chage page title
        changePageTitle("Home");
    });
}

function showTenis() {
    // get list of products from the API
    $.getJSON("http://192.168.0.106/api-tassio/tenis/read.php", function(data) {
        // html for listing products
        var read_products_html = `
    <!-- when clicked, it will load the create product form -->
    <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>
    <span class='glyphicon glyphicon-plus'></span> Adicionar tênis
    </div>
    <!-- start table -->
    <table class='table table-bordered table-hover'>

    <!-- creating our table heading -->
    <tr>
    <th class='w-25-pct'>Nome</th>
    <th class='w-10-pct'>Preço</th>
    <th class='w-15-pct'>Cor</th>
    <th class='w-25-pct text-align-center'>Ações</th>
    </tr>`;
        // loop through returned list of data
        $.each(data, function(key, record) {
            $.each(record, function(i, val) {
                // creating new table row per record
                read_products_html += `
        <tr>
            <td>` + val.nome + `</td>
            <td>$` + val.preco + `</td>
            <td>` + val.cor + `</td>
 
            <!-- 'action' buttons -->
            <td>
            
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span> Editar
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span> Deletar
                </button>
            </td>
 
        </tr>`;
            });
        });
        // end table
        read_products_html += `</table>`;
        // inject to 'page-content' of our app
        $("#page-content").html(read_products_html);
        // chage page title
        changePageTitle("Tênis");
    });
}

function showCelulares() {
    // get list of products from the API
    $.getJSON("http://192.168.0.109/api-rodrigo/celular/read.php", function(data) {
        // html for listing products
        var read_products_html = `
    <!-- when clicked, it will load the create product form -->
    <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>
    <span class='glyphicon glyphicon-plus'></span> Adicionar Celular
    </div>
    <!-- start table -->
    <table class='table table-bordered table-hover'>

    <!-- creating our table heading -->
    <tr>
    <th class='w-25-pct'>Modelo</th>
    <th class='w-10-pct'>Memória RAM</th>
    <th class='w-15-pct'>Armazenamento</th>
    <th class='w-25-pct text-align-center'>Ações</th>
    </tr>`;
        // loop through returned list of data
        $.each(data, function(key, record) {
            $.each(record, function(i, val) {
                // creating new table row per record
                read_products_html += `
        <tr>
            <td>` + val.modelo + `</td>
            <td>` + val.memoria_ram + `GB</td>
            <td>` + val.memoria_hd + `GB</td>
 
            <!-- 'action' buttons -->
            <td>
            
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-product-button' data-id='` + val.numero_serie + `'>
                    <span class='glyphicon glyphicon-edit'></span> Editar
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-product-button' data-id='` + val.numero_serie + `'>
                    <span class='glyphicon glyphicon-remove'></span> Deletar
                </button>
            </td>
 
        </tr>`;
            });
        });
        // end table
        read_products_html += `</table>`;
        // inject to 'page-content' of our app
        $("#page-content").html(read_products_html);
        // chage page title
        changePageTitle("Celulares");
    });
}

function showAlunos() {
    // get list of products from the API
    $.getJSON("http://192.168.0.150/api-duda/alunos/read.php", function(data) {
        // html for listing products
        var read_products_html = `
    <!-- when clicked, it will load the create product form -->
    <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>
    <span class='glyphicon glyphicon-plus'></span> Adicionar Aluno
    </div>
    <!-- start table -->
    <table class='table table-bordered table-hover'>

    <!-- creating our table heading -->
    <tr>
    <th class='w-25-pct'>Nome</th>
    <th class='w-10-pct'>Matricula</th>
    <th class='w-15-pct'>Curso</th>
    <th class='w-25-pct text-align-center'>Ações</th>
    </tr>`;
        // loop through returned list of data
        $.each(data, function(key, record) {
            $.each(record, function(i, val) {
                // creating new table row per record
                read_products_html += `
        <tr>
            <td>` + val.nome + `</td>
            <td>` + val.matricula + `</td>
            <td>` + val.curso + `</td>
 
            <!-- 'action' buttons -->
            <td>
            
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span> Editar
                </button>
 
                <!-- delete button -->
                <button class='btn btn-danger delete-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span> Deletar
                </button>
            </td>
 
        </tr>`;
            });
        });
        // end table
        read_products_html += `</table>`;
        // inject to 'page-content' of our app
        $("#page-content").html(read_products_html);
        // chage page title
        changePageTitle("Alunos");
    });
}