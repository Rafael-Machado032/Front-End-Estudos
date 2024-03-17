const http = require('http') // Permite ao Node.js transfere dados através do Hyper Text Transfer Protocol (HTTP)
const porta = 3000 //Porta onde vai Rodar
const host = '127.0.0.40' //Podemos especificar o local do servidor caso o não especificar fica o padrão LocalHost "127.0.0.1"

const servidor = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, { 'Content-Type': 'text/html' }) // Prepara o cabeçalho com saída html (200 é código de status)
    
    if (requisição.url == '/') { //Depois da barra é requisição no url nesse caso testa raiz
        resposta.write('<h1>Seja bem vindo</h1>')
    } else if (requisição.url=='/canal') { //Verifica a proxima requisição na url
        resposta.write('<h1>CFB Cursos</h1>')
    } if (requisição.url=='/curso') {
        resposta.write('<h1>Curso de Node</h1>')
    }

    resposta.end() //Termina cabeçalho
})

servidor.listen(porta, host, () => { console.log('Servidor rodando'); }) //Serve para verificar se esta tudo OK no código


