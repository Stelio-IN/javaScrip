const express = require('express')
const app = express()
app.listen(3001)

/*------------------------Routes------------------------------*/

app.get('/', (req,res) =>{
    res.send('Ola Mundo!')
})

//Clientes
app.get("/clientes/:loja.:cidade", (req,res) =>{
    let lojas = [
        'Rua A',
        'Rua B',
        'Rua C',
        'Rua D',
    ]
    res.send(`A loja escolhida foi da cidade: ${req.params.cidade} a loja na rua ${lojas[req.params.loja]}`)
})

app.get("/clientes/:id_cliente", (req,res) =>{
    //res.send(req.params)
    res.send(`O cliente selecionado foi o ${req.params.id_cliente}`)
})
app.get("/clientes/:id/comentarios/:id_comentario", (req,res) =>{
    //res.send(req.params)
    res.send(req.params)
})

app.get("/soma/:valor1/:valor2", (req,res) =>{
    res.send(`A soma entre ${req.params.valor1} + ${req.params.valor2} = ${+req.params.valor1 + +req.params.valor2}`)
})

