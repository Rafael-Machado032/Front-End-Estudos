//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);

async function run() {
    
    try {

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const coleção = "curso";

        const ordenação = {curso:1} //Ordem crescente é 1 e ordem decrescente é -1
        const query = {} //Fizemos nossas especificação numa variável

        
        const todos = await dbo.collection(coleção).find(query).toArray(); //Busca todos da tabela com condição especifica
        const ordem = await dbo.collection(coleção).find(query).sort(ordenação).toArray();

        console.log("Pesquisa concluída ");
        
        console.log("\n Todos os Registros");
        console.log(todos);
        console.log("\n Todos os Registros na ordem");
        console.log(ordem);

    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);