const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'db_devmedia';
// Create a new MongoClient
const client = new MongoClient(url);
// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Conexão estabelecida com sucesso.");
  const db = client.db(dbName);
  
  var cliente = {
    codigo : 1,
    nome : "Joel Rodrigues",
    endereco : {
        logradouro : "Rua Fulano de Tal",
        numero : "123",
        bairro : "Bairro Qualquer",
        cidade : "Rio de Janeiro",
        estado : "RJ"
    },
    status : "Ativo",
    pontos : 10
}

var colecao = db.collection("clientes");  

  colecao.insertOne(cliente, function(erro, resultado){
  if(erro)
    console.log('Erro ao inserir documento '+ erro);
  else
    console.log('Documento inserido com sucesso');
  });
  client.close();
}); 