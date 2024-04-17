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

//Inserir na tabela INSERT INTO
const insereClientes = async (cliente) => {
    const con = await conectar()
    const sql = 'INSERT INTO clientenode(s_nome_clientenode,s_idade_clientenode) VALUES (?,?)'
    const valores = [cliente.nome,cliente.idade]
    await con.query(sql,valores)
}//O "valores" recebe o nome e idade e bota no "?" na query


//Inserir na tabela UPDATE
const atualizaClientes = async (id,cliente) => {
    const con = await conectar()
    const sql = 'UPDATE clientenode SET s_nome_clientenode = ?, s_idade_clientenode = ? WHERE i_clientenode_clientenode = ?;'
    const valores = [cliente.nome,cliente.idade,id]
    await con.query(sql,valores)
}

//Inserir na tabela UPDATE
const deletarClientes = async (id) => {
    const con = await conectar()
    const sql = 'DELETE FROM clientenode  WHERE i_clientenode_clientenode = ?;'
    const valores = [id]
    await con.query(sql,valores)
}



module.exports = { todosClientes,insereClientes,atualizaClientes,deletarClientes}