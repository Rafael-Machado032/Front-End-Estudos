//Instala formidable no terminal com o comando:
//npm install formidable

const http = require('http')
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')

const servidor = http.createServer((req, res) => {
    
    if (req.url == '/envioDeArquivo') { //Se a URL tiver /envioDeArquivo ele faz a rotina do tratamento do arquivo
        const form = new formidavel.IncomingForm() //retorna o formulário repassado pra ele
        form.parse(req, (erro, campos, arquivos) => {
            const path = require('path')
            const urlantiga = arquivos.filetoupload[0].filepath
            const urlnova = 'C:/Users/rafin/OneDrive/Documentos/GitHub/Front-End Estudos/Node Estudos/Upload de Arquivo/Destino Arquivo/' + arquivos.filetoupload[0].originalFilename
            fs.rename(urlantiga, urlnova, (erro) => { //Troca URL antiga pela URL nova
                if (erro) throw erro //Tratamento de erro
                res.write('Arquivo movido!')
                res.end()
            })
        })
    } else { //Se não tiver arquivo na URL apresenta o formulário
        res.writeHead(200, { 'Content-Type': 'text/html' })
        //Formulário para o envio de arquivo
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br/>')
        res.write('<input type="submit" value="Enviar">')
        res.write('</form>')
        return res.end()
    }
})

servidor.listen(porta,()=>{console.log('Servidor rodando');})