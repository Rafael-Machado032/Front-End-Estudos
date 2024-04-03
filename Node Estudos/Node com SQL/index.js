//Instala o modulo MySQL no terminal com o comando:
//npm install mysql2 --save
(async () =>{
    const db = require('./db')//Chama banco de dados

    //Chamar o inserir cliente
    //console.log('Inserir Cliente');
    //const entNome = "Marlene Rocha"
    //const entIdade = "54"
    //await db.insereClientes({nome:entNome,idade:entIdade})

    //chama atualiza cliente
    //console.log('Cliente atualizado');
    //const id = 7
    //const entNome = "Matheus Rodrigues"
    //const entIdade = 30
    //await db.atualizaClientes(id,{nome:entNome,idade:entIdade})

    //Deletar cliente
    const id = 6
    await db.deletarClientes(id)

    //Chama consulta cliente
    console.log('Obter todos os clientes');
    const clientes = await db.todosClientes()
    console.log(clientes);
})()
