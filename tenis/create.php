<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-API-KEY, Origin, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");

// Includes necessários:
include_once '../config/database.php';
include_once '../objects/tenis.php';

// instantiate database and product object:
$database = new Database();
$db = $database->getConnection();

// cria instancia do tênis:
$tenis = new Tenis($db);

// Pegando os dados:
$json = file_get_contents('php://input');
$dados = json_decode($json);
//checando se dados são vazios:
if (
    !empty($dados->nome) &&
    !empty($dados->preco) &&
    !empty($dados->cor) &&
    !empty($dados->fabricacao)
) {
    $tenis->nome = $dados->nome;
    $tenis->preco = $dados->preco;
    $tenis->cor = $dados->cor;
    $tenis->fabricacao = $dados->fabricacao;

    //criando o produto:
    if ($tenis->create()) {
        //setando resposta - 201 Criado
        http_response_code(201);
        echo json_encode(array("message" => "Tenis criado com sucesso!"));
    } else {
        //sentando resposta - 503 serviço indisponivel
        http_response_code(503);

        echo json_encode(array("message" => "Não foi possivel criar um tênis"));
    }
} else {
    //Setando resposta - 400 Bad request
    http_response_code(400);
    echo json_encode(array("message" => "Dados incompletos, impossivel criar o produto."));
}
