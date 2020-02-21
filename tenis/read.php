<?php
// Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,OPTIONS,GET");
header("Content-Type: application/json; charset=UTF-8");

// Includes necessários
include_once '../config/database.php';
include_once '../objects/tenis.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// cria instancia do tênis
$tenis = new Tenis($db);

// query products
$stmt = $tenis->read();
$num = $stmt->rowCount();

// query tenis
$stmt = $tenis->read();
$num = $stmt->rowCount();

// verificando se existem registros
if ($num > 0) {

    // tenis array
    $tenis_arr = array();
    $tenis_arr["registros"] = array();

    // recuperando dados da tabela
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $tenis_item = array(
            "id" => $id,
            "nome" => $nome,
            "preco" => $preco,
            "cor" => $cor,
            "fabricacao" => $fabricacao
        );

        array_push($tenis_arr["registros"], $tenis_item);
    }

    // set response code - 200 OK
    http_response_code(200);

    // Exibe produtos em json
    echo json_encode($tenis_arr);
} else {

    // setando resposta - 404 Not found
    http_response_code(404);

    // setando respostas caso não encontre registros
    echo json_encode(
        array("message" => "Nenhum tenis encontrado.")
    );
}
