//Instala o modulo MySQL no terminal com o comando:
//npm install mysql2 --save
(async () =>{
    const db = require('./db')
    console.log('Inserir Cliente');
    const entNome = "Marlene Rocha"
    const entIdade = "54"
    await db.insereClientes({nome:entNome,idade:entIdade})

    console.log('Obter todos os clientes');
    const clientes = await db.todosClientes()
    console.log(clientes);
})()
