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
 
    var colecao = db.collection("clientes");   
 
    colecao.deleteMany({status : "Inativo"}, function(erro, resultado){
      if(erro)
          console.log("Erro ao excluir documento: " + erro);
      else   
          console.log("Documento excluído com sucesso");
    });
 
    client.close();
});