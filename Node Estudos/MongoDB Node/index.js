//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



async function run() {
    const banco = new MongoClient(url);
    try {
        await banco.connect();

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const obj = { curso: "Curso de Node", aluno: "Rafael Machado" }; //Inserindo dados dentro da tabela "Cursos"
        const colação = "curso";

        await dbo.collection(colação).insertOne(obj);
        console.log("1 novo curso inserido");
    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);