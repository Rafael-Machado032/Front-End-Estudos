//Instala express no terminal com o comando:
//npm install express --save
//E também o router "npm install router --save

const express = require('express')
const rotas = require('./Rotas/rotas.js') //Puxa o arquivo
const porta = process.env.PORT || 3000

const app = express()

app.use('/',rotas) //Usa o modulo rotas.js

app.get('*',(req,res)=>{ //Rota genérica se nenhuma rota for encontrada
    res.send('Curso do Rafael Machado') 
})

app.listen(porta,()=>{console.log('Servidor rodando');})




