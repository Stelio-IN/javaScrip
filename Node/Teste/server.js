/*Criando servidor
const http = require('http')

//req - request; res - response
http.createServer((req, res) =>{
    res.end('Ola mundo')
}).listen(3000)*/

const http = require('http')
const host = "127.0.0.1" 
const port = 3000

const server = http.createServer((req, res) =>{
    res.end(req)
})  
server.listen(port, host,() =>{
    console.log('Servidor Ligado')
})