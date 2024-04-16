//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function run() {
    const banco = new MongoClient(url);
    try {
        await banco.connect();

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const coleção = "curso";

        const query = {curso: /.e/} //Fizemos nossas especificação numa variável

        const todos = await dbo.collection(coleção).find({}).toArray(); //Busca todos da tabela
        const exptodos = await dbo.collection(coleção).find(query).toArray(); //Busca todos da tabela com condição especifica
        
        console.log("Pesquisa concluída ");
        
        console.log("\n Todos os Registros");
        console.log(todos);
        console.log("\n Todos os Registros com condição especifica");
        console.log(exptodos);

    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);