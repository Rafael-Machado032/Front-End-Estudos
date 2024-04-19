//Instala mongodb no terminal com o comando:
//npm install mongodb

const { MongoClient } = require('mongodb')
const url = "mongodb+srv://rafaelmachado032:010203@cluster0.84oxr2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const banco = new MongoClient(url);

async function run() {

    try {

        const dbo = banco.db("Cursos"); //Criação do banco de dados
        const coleção1 = "Curso com aluno";
        const coleção2 = "Cod dos curso"

        // const doc1 = [
        //     {idCurso:'01' ,curso:'JavaScript',nome:'Rafael machado'},
        //     {idCurso:'02' ,curso:'Node',nome:'Rafael machado'},
        //     {idCurso:'03' ,curso:'CSS',nome:'Rafael machado'},
        //     {idCurso:'04' ,curso:'HTML',nome:'Rafael machado'},
        //     {idCurso:'05' ,curso:'MySQL',nome:'Rafael machado'},
        //     {idCurso:'06' ,curso:'MongoDB',nome:'Rafael machado'},
        //     {idCurso:'07' ,curso:'Github',nome:'Rafael machado'},
        //     {idCurso:'08' ,curso:'PHP',nome:'Rafael machado'},
        //     {idCurso:'09' ,curso:'C++',nome:'Rafael machado'},
        //     {idCurso:'10' ,curso:'Foto Shop',nome:'Rafael machado'}
        // ]

        // const doc2 = [
        //     {idCurso:'01' ,cod:'1010'},
        //     {idCurso:'02' ,cod:'1200'},
        //     {idCurso:'03' ,cod:'1030'},
        //     {idCurso:'04' ,cod:'1400'},
        //     {idCurso:'05' ,cod:'1050'},
        //     {idCurso:'06' ,cod:'1600'},
        //     {idCurso:'07' ,cod:'1070'},
        //     {idCurso:'08' ,cod:'1800'},
        //     {idCurso:'09' ,cod:'1090'},
        //     {idCurso:'10' ,cod:'1000'}
        // ]

        // let insere = await dbo.collection(coleção1).insertMany(doc1);
        // insere = await dbo.collection(coleção2).insertMany(doc2);

        const novo = await dbo.collection(coleção1).aggregate([ //Agrega
            {
                $lookup: {
                    from: coleção2, //Coleção que quer juntar
                    localField: 'idCurso', //chave da Coleção 1
                    foreignField: 'idCurso', //chave da Coleção 2
                    as: 'Detalhes' //insere um nome para nova coleção
                }
            }
        ]).toArray()




        let query = {}
        const opção = { projection: { _id: 0 } }//Omite id gerado pelo mango

        const todos1 = await dbo.collection(coleção1).find(query, opção).toArray();
        const todos2 = await dbo.collection(coleção2).find(query, opção).toArray();

        console.log("Pesquisa concluída ");

        console.log("\nColeção Agregado");
        console.log(JSON.stringify(novo));

        console.log("\nTodos os Registros 1");
        console.log(todos1);

        console.log("\nTodos os Registros 2");
        console.log(todos2);

        



    } finally {
        // Garante que o cliente fechará quando você terminar/errar
        await banco.close();
    }
}
run().catch(console.dir);