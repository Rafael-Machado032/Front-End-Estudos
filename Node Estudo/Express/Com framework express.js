//Instala express no terminal com o comando:
//npm install express --save

const express = require('express') //chamando express
const app = express() //o retorno do express no app
const porta = process.env.PORT

app.get('/', (req, res) => {
    res.send('Seja bem vindo')
})
app.get('/canal', (req, res) => {
    res.json('Curso de Node')
})

app.listen(porta || 3000, () => {
    console.log('Servidor Rodando');
})