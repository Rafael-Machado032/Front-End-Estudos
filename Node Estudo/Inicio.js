//Node serve para rodar JavaScript no lado servidor

const http = require('http')

http.createServer((requisicao,resposta)=>{ 
    resposta.writeHead(200,{ //Configuração código do cabeçalho
        'Content-Type':'text/plain' //O tipo e texto comum
    })
    resposta.write('Rafael Machado \n') //O que vai ver
    resposta.end() //Finaliza a resposta
}).listen(1337) //porta de esculta