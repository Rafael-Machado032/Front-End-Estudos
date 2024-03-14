//Node serve para rodar JavaScript no lado servidor

const http = require('http')

http.createServer((requisicao,resposta)=>{
    resposta.writeHead(200,{
        'Content-Type':'text/pain'
    })
    resposta.write('Rafael Machado \n')
    resposta.end()
}).listen(1337)