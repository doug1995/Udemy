const porta = 3003

const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
app.use(bodyparser.urlencoded({extended:true}))

app.get('/produtos',(req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id)) //Converter para JSON

})
app.post('/produtos',(req,res,next)=>{
const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    telefone: req.body.telefone
})
res.send(produto)
})
app.put('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,        
    })
    res.send(produto)
    })
app.delete('/produtos/:id',(req,res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
    })

app.listen(porta, () =>{
    console.log(`Servidor Executando na porta ${porta}.`)
})