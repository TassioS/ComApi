<?php
//headers necessários
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Includes necessários:
include_once '../config/database.php';
include_once '../objects/tenis.php';

// instantiate database and product object:
$database = new Database();
$db = $database->getConnection();

// cria instancia do tênis:
$tenis = new Tenis($db);

//Pegando o id do produto a ser editado
$dados = json_decode(file_get_contents("php://input"));

//Setando atributos do tenis a ser editado:
$tenis->id = $dados->id;
$tenis->nome = $dados->nome;
$tenis->preco = $dados->preco;
$tenis->cor = $dados->cor;
$tenis->fabricacao = $dados->fabricacao;

if ($tenis->update()) {
    //Setando código 200 ok
    http_response_code((200));

    //Resposta para o usuario:
    echo json_encode(array("message" => "Tenis atualizado!"));
} else {
    //Setando resposta 503: serviço indisponivel.
    http_response_code(503);

    //Resposta ao usuário:
    echo json_encode(array("message" => "Tenis nao encontrado!"));
}
