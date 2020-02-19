<?php
//Headers necessários:
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// Includes necessários:
include_once '../config/database.php';
include_once '../objects/tenis.php';

// instantiate database and product object:
$database = new Database();
$db = $database->getConnection();

// cria instancia do tênis:
$tenis = new Tenis($db);

$tenis->id = isset($_GET['id']) ? $_GET['id'] : die();

$tenis->readOne();

if ($tenis->nome != null) {
    //criando array:
    $tenis_array = array(
        "id" => $tenis->id,
        "nome" => $tenis->nome,
        "preco" => $tenis->preco,
        "cor" => $tenis->cor,
        "fabricacao" => $tenis->fabricacao
    );

    //Setando código resposta: 200 ok
    http_response_code(200);

    //Transformando json:
    echo json_encode($tenis_array);
} else {
    //setando resposta: 404 nao encontrado
    http_response_code(404);

    //Informando usuario:
    echo json_encode(array("message" => "Produto não existe."));
}
