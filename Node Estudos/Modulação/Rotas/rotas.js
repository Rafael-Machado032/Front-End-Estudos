const express = require('express')
const rotas = express.Router()
//
let cursosInfo = [ //criado um json
    { 'curso': 'node', 'info': 'Curso de Node' },
    { 'curso': 'react', 'info': 'Curso de React' },
    { 'curso': 'java', 'info': 'Curso de Java' },
    { 'curso': 'Python', 'info': 'Curso de Python' }
]

rotas.get('/', (req, res) => { //Rota base
    res.json({ ola: 'Seja bem vindo!' })
})

rotas.get('/:cursoid', (req, res) => { //Rota com parâmetro
    const curso = req.params.cursoid //Foi pego o parâmetro e colocado no curso
    const cursoI = cursosInfo.find(i => i.curso == curso) //Monta o 'i' com cursoInfo
    //faz uma função com a chave curso e pesquisa com o parâmetro recebido do cursoid que foi para o curso
    if (!cursoI) { //se não achar o curso retorna status 404
        res.status(404).json(
            { erro: 'Curso não encontrado', cursoPesquisado: curso } //Mensagem com o curso inserido
        )
    } else {
        res.status(200).json(cursoI) //achou e retorna o curso achado
    }
})

module.exports = rotas //exporta o rotas