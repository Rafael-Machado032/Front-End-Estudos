//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);

async function run() {

    try {

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const coleção = "curso";


        let query = { curso: 'Curso de Node 2.0' }
        let novoDoc = { $set: { curso: 'Curso de Node' } }


        //const atualizar = dbo.collection(coleção).updateOne(query, novoDoc);
        const atualizar = dbo.collection(coleção).updateMany(query, novoDoc);

        query = {}
        const todos = await dbo.collection(coleção).find(query).toArray();

        console.log("Pesquisa concluída ");

        if ((await atualizar).modifiedCount == 1) {
            console.log("1 registro atualizado");
        } else if ((await atualizar).modifiedCount > 1) {
            console.log((await atualizar).modifiedCount + " registros atualizado");
        } else {
            console.log("Nenhum registro modificado");
        }

        console.log("\n Todos os Registros");
        console.log(todos);



    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);