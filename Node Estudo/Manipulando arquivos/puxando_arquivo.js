//Pegar o html quando chamar esse servidor
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT //porta padrão servidor

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (erro, arquivo) => { //Ler o arquivo
        res.writeHead(200, { 'Content-Type': 'text/html' }) //Escreve no cabeçalho
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000, () => { 
    console.log('Servidor rodando')
})




