const { MongoClient } = require('mongodb');
const banco = new MongoClient("mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
await banco.connect();

try {
    db.collection.insertOne({
        curso: 'Curso de Engenharia',
        aluno: 'Lucas Salate'
    })
    console.log("1 novo registro inserido");
} catch (erro) {
    console.log(erro);
}
