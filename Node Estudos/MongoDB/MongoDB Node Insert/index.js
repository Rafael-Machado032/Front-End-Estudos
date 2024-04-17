//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);


async function run() {
    
    try {
        

        const dbo = banco.db("Cursos"); //Conecta ao banco de dados Cursos
        const coleção = "curso"; //Variável para a coleção
        
        //const doc = {curso: 'Curso de MongoDb', aluno: 'Rafael Machado'}
        const doc = [
            {curso: 'Curso de Node', aluno: 'Clésio Silva'},
            {curso: 'Curso de Node', aluno: 'Vitor Meireles'},
            {curso: 'Curso de CSS', aluno: 'Vitor Meireles'},
            {curso: 'Curso de Croché', aluno: 'Graziele Mendes'}
        ] //Cria o documento para inserir
        

        //const insere = await dbo.collection(coleção).insertOne(doc); //Acessa a coleção e insere o documento com 1 registro
        const insere = await dbo.collection(coleção).insertMany(doc); //Acessa a coleção e insere o documento com vários registro
        
        if(insere.insertedCount == 1){
            console.log("\n Um registro inserido!");
        }else if(insere.insertedCount > 0){
            console.log("\n" + insere.insertedCount + " registros inseridos!");
        }
    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
//Execute a função e resolva quaisquer erros
run().catch(console.dir);