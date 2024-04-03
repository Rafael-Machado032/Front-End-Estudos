//Emissor de evento para disparar quando chamar um determinada função

const http = require('http') //criação de servidor web
const eventos = require('events') 
const EventoEmissor = new eventos.EventEmitter()//Criação de objeto evento

const final = () => { console.log('Fim do processo'); }//função do evento

//criação de evento
EventoEmissor.on('msg', () => { console.log('Curso de node Inicio do processo'); })
EventoEmissor.on('fim', final)

const porta = process.env.PORT || 3000 //criação da porta
const retorno = () => { console.log('Servidor rodando'); }
const servidor = http.createServer((req, res) => { //criação de servidor
    EventoEmissor.emit('msg')//chamada do evento
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Rafael Machado')
    EventoEmissor.emit('fim')//chamada do evento
    res.end()
})
servidor.listen(porta, retorno)