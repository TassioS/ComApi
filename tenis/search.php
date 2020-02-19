<?php
//headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Includes necessários:
//include_once '../config/core.php';
include_once '../config/database.php';
include_once '../objects/tenis.php';

// instantiate database and product object:
$database = new Database();
$db = $database->getConnection();

// cria instancia do tênis:
$tenis = new Tenis($db);

//Pegando keywords
$keywords = isset($_GET["s"]) ? $_GET["s"] : "";

//chamando função que procura registros com as keywords desejadas
$stmt = $tenis->search($keywords);
$num = $stmt->rowCount();

if ($num > 0) {
    $tenis_array = array();
    $tenis_array["registros"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract(($row));

        $tenis_item=array(
            "id" => $id,
            "nome" => $nome,
            "cor" => $cor,
            "fabricacao" => $fabricacao,
            "preco" => $preco
        );
        //duvida perguntar depois!
        array_push($tenis_array["registros"],$tenis_item);
    }

    //setando código de resposta:
    http_response_code(200);

    //Mensagem para usuário:
    echo json_encode($tenis_array);
}else{
    //setando codigo de erro:
    http_response_code(503);

    echo json_encode(array("message","Não encontramos produtos com os termos desejados."));
}
