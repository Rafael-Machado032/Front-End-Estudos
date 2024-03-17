//Instala express no terminal com o comando:
//npm install express --save
//Aqui é node puro

const http = require('http')
const porta = process.env.PORT

const servidor = http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'text-plain'})
    res.end('Rafael Machado')
})

servidor.listen(porta || 3000,()=>{
    console.log('Servidor Rodando');
})