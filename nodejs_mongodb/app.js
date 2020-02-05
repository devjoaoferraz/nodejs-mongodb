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

  var usuarios = [
    { login: 'João', senha: '123' },
    { login: 'Maria', senha: '456' },
    { login: 'Pedro', senha: '789' }
  ]

  var colecao = db.collection('usuarios');

  var indice = { conteudo : "text" };

  colecao.createIndex(indice);

  var filtro = { $text : { $search : "Maria"}};

  colecao.find(filtro).toArray(function(erro, documentos){
    documentos.forEach(function(doc){
      console.log('Nome:' + doc.login);
      console.log('Senha:' + doc.senha);
      console.log('---');
    }, this);
  })

  client.close();
}); 