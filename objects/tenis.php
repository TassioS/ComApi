<?php
class Tenis
{
    //conexão db e nome da tabela
    private $conn;
    private $table_name =  "tenis";

    //atributos
    public $id;
    public $nome;
    public $preco;
    public $cor;
    public $fabricacao;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    // ler tenis
    function read()
    {

        // select tenis
        $query = "SELECT * FROM . $this->table_name ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    function create()
    {
        //query para inserir registros
        $query = "INSERT INTO " . $this->table_name . " SET nome=:nome, preco=:preco,cor=:cor,fabricacao=:fabricacao";

        //preparando a query
        $stmt = $this->conn->prepare($query);

        $this->nome = htmlspecialchars(strip_tags($this->nome));
        $this->preco = htmlspecialchars(strip_tags($this->preco));
        $this->cor = htmlspecialchars(strip_tags($this->cor));
        $this->fabricacao = htmlspecialchars(strip_tags($this->fabricacao));

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":preco", $this->preco);
        $stmt->bindParam(":cor", $this->cor);
        $stmt->bindParam(":fabricacao", $this->fabricacao);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    function readOne()
    {
        //query
        $query = "SELECT t.nome, t.preco, t.cor, t.fabricacao FROM " . $this->table_name . " t where t.id = ?";

        //preparando a query
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->nome = $row["nome"];
        $this->preco = $row["preco"];
        $this->id = $row["id"];
        $this->cor = $row["cor"];
        $this->fabricacao = $row["fabricacao"];
    }

    function update()
    {
        //query:
        $query = "UPDATE " . $this->table_name . "
        SET
         nome = :nome,
         preco = :preco,
         cor = :cor,
         fabricacao = :fabricacao
        WHERE
         id = :id;";

        //preparando query:
        $stmt = $this->conn->prepare($query);

        //Limpando:
        $this->nome = htmlspecialchars(strip_tags(($this->nome)));
        $this->preco = htmlspecialchars(strip_tags(($this->preco)));
        $this->cor = htmlspecialchars(strip_tags(($this->cor)));
        $this->fabricacao = htmlspecialchars(strip_tags(($this->fabricacao)));

        //binding values
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':nome', $this->nome);
        $stmt->bindParam(':preco', $this->preco);
        $stmt->bindParam(':cor', $this->cor);
        $stmt->bindParam(':fabricacao', $this->fabricacao);
        $stmt->execute();

        if ($stmt->rowCount() == 1) {
            return true;
        } else {
            return false;
        }
    }

    function delete(){
        //query:
        $query = "DELETE FROM ". $this->table_name ." where id=?";

        //preparando query:
        $stmt = $this->conn->prepare($query);

        //Limpando
        $this->id = htmlspecialchars(strip_tags($this->id));

        //binding id a ser deletado:
        $stmt->bindParam(1,$this->id);
        $stmt->execute();

        if($stmt->rowCount() == 1){
            return true;
        }else{
            return false;
        }
    }

    function search($keywords){
            //query:
            $query = "SELECT * FROM " .$this->table_name. " t
            WHERE
            t.name like ? or t.preco like ? or t.fabricacao = ?";

            //preparando query:
            $stmt = $this->conn->prepare($query);

            //Limpando:
            $keywords = htmlspecialchars(strip_tags($keywords));
            $keywords = "%{$keywords}%";

            //binding keywords

            $stmt->bindParam(1,$keywords);
            $stmt->bindParam(2,$keywords);
            $stmt->bindParam(3,$keywords);

            $stmt->execute();
            return $stmt;
    }
}
