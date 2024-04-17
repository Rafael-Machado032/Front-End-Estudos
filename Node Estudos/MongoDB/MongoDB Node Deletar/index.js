//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);

async function run() {
    
    try {

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const coleção = "curso";

        
        
        let query = {curso: 'Curso de Node'} //Fizemos nossas especificação numa variável
        //const del = await dbo.collection(coleção).deleteOne(query);
        const del = await dbo.collection(coleção).deleteMany(query);
        
        query = {}
        const todos = await dbo.collection(coleção).find(query).toArray();

        console.log("Pesquisa concluída ");

        console.log("\n Todos os Registros");
        console.log(todos);

        if(del.deletedCount == 1){
            console.log("\n Um registro deletado!");
        }else if(del.deletedCount > 0){
            console.log("\n" + del.deletedCount + " registros deletado!");
        }
        
        
    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);