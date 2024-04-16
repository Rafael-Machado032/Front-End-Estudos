//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);


async function run() {
    
    try {
        

        const dbo = banco.db("Cursos"); //Conecta ao banco de dados Cursos
        const coleção = "curso"; //Variável para a coleção
        const doc = { 
            curso: 'Curso de Eletrónica',
            aluno: 'Victor Meireles'
        }; //Cria o documento para inserir
        

        await dbo.collection(coleção).insertOne(doc); //Acessa a coleção e insere o documento
        console.log("1 novo registro inserido");
    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
//Execute a função e resolva quaisquer erros
run().catch(console.dir);