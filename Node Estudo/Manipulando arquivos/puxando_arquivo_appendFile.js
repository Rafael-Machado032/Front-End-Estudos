//Pegar o html quando chamar esse servidor
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT //porta padrão servidor

const server = http.createServer((req, res) => {
    fs.appendFile('teste.txt','Curso de Node Rafael Machado', (err) => { 
        //https://www.geeksforgeeks.org/node-js-fs-appendfile-function/
        //O  método fs.appendFile()  é usado para anexar de forma assíncrona os dados fornecidos a um arquivo. Um novo arquivo é criado se não existir.
        if (err) throw err //dispara o throw para tratamento do erro
        console.log('Arquivo Criado');
        res.end()
    })
})

server.listen(porta || 3000, () => { 
    console.log('Servidor rodando2')
})




