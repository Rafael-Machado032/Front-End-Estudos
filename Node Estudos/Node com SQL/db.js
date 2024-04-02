//Conexão do banco de dados
const conectar = async () => {
    if (global.conexão && global.conexão.state != 'disconnected')
        return global.conexão
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:@localhost:3306/estudosql")
    console.log('Banco de Dados Conectado');
    global.conexão = con
    return con
}

//Consulta SELECT
const todosClientes = async () => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM clientenode;')
    return await linhas
}

//Inserir na tabela
const insereClientes = async (cliente) => {
    const con = await conectar()
    const sql = 'INSERT INTO clientenode(s_nome_clientenode,s_idade_clientenode) VALUES (?,?)'
    const valores = [cliente.nome,cliente.idade]
    await con.query(sql,valores)
}//O "valores" recebe o nome e idade e bota no "?" na query


module.exports = { todosClientes,insereClientes }