//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);

async function run() {

    try {

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const coleção = "curso";

        const opções = {
            curso: 1
        }
        let query = {}
        let limitador = 3


        const limite = await dbo.collection(coleção).find(query,opções).limit(limitador).toArray();
       

        const todos = await dbo.collection(coleção).find(query).toArray();

        console.log("Pesquisa concluída ");

       
        console.log("\nPesquisa limitado a "+limitador+" registros \n");
        console.log(limite);
        console.log("\nTodos os Registros");
        console.log(todos);



    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);