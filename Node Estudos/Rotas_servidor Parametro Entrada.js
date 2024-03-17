const http = require('http')  // Permite ao Node.js transfere dados através do Hyper Text Transfer Protocol (HTTP)
const url =require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, { 'Content-Type': 'text/html' })
    
    resposta.write(requisição.url) //Escreve as rota do url no html
    const p=url.parse(requisição.url,true).query //Método pega uma string de URL, analisa-a e retorna um objeto URL.
    resposta.write('<br/>'+p.nome)
    resposta.write('<br/>'+p.curso)

    resposta.end()
})

servidor.listen(porta, host, () => { console.log('Servidor rodando'); })


