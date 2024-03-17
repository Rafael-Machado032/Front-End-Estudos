//Pegar o html quando chamar esse servidor
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT //porta padrão servidor

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (erro, arquivo) => {
        //https://www.geeksforgeeks.org/node-js-fs-readfile-method/?ref=header_search
        //O método fs.readFile() é um método embutido usado para ler o arquivo. Este método lê o arquivo inteiro no buffer
        res.writeHead(200, { 'Content-Type': 'text/html' }) //Escreve no cabeçalho
        res.write(arquivo)
        return res.end()
        //A função res.end() conclui o processo de resposta e é derivada do método response.end() do HTTP.ServerResponse no núcleo do Node. É empregado para concluir prontamente a resposta sem incluir quaisquer dados.
    })
})

server.listen(porta || 3000, () => { 
    //https://www.geeksforgeeks.org/node-js-server-listen-method/?ref=header_search
    //O server.listen() é uma interface de programação de aplicativo embutida da classe Socket dentro do módulo tls que é usada para iniciar o servidor para ouvir a conexão criptografada.
    console.log('Servidor rodando1')
})




