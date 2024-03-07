const express = require('express')

const app = express()

app.listen(3001)


app.get('/', (req,res) =>{
    res.send('<h1>SIN</h1>')
})
app.get('/about', (req,res) =>{
    res.send('<h1>About</h1>')
})

