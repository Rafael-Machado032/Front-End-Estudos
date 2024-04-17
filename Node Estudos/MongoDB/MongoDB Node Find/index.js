//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);

async function run() {
    
    try {
        

        const dbo = banco.db("Cursos"); //Conecta ao banco de dados Cursos
        const coleção = "curso"; //Variável para a coleção

        const prireg = await dbo.collection(coleção).findOne(); //Busca o primeiro registro
        const expreg = await dbo.collection(coleção).findOne({aluno:"Graziele da Rocha"}); //Busca o primeiro registro com a condição especifica
        const todos = await dbo.collection(coleção).find({}).toArray(); //Busca todos da tabela
        const exptodos = await dbo.collection(coleção).find({aluno: "Rafael Machado"}).toArray(); //Busca todos da tabela com condição especifica
        
        console.log("Pesquisa concluída ");
        console.log("\n Primeiro Registro");
        console.log(prireg);
        console.log("\n Primeiro Registro Especifico ");
        console.log(expreg);
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