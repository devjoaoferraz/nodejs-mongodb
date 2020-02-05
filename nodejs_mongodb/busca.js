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

    colecao.find({status:"Ativo"}).toArray(function(erro, documentos){
        documentos.forEach(function(doc) {
            console.log("_______________________");
            console.log("Codigo: " + doc.codigo);
            console.log("Nome: " + doc.nome);
            console.log("Status: " + doc.status);
        }, this);
    });
 
    client.close();
});