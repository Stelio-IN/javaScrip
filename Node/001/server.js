/*Criando servidor
const http = require('http')

//req - request; res - response
http.createServer((req, res) =>{
    res.end('Ola mundo')
}).listen(3000)*/

const http = require('http');
const host = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
    
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (req.url === "/") {
        res.end('<html><body><h1>Página inicial do website</h1></body></html>');
    } else if (req.url === "/new") {
        res.end('<html><body><h1>Página Nova do website</h1></body></html>');
    } else if (req.url === "/contactos") {
        res.end('<html><body><h1>Página Contatos do website</h1></body></html>');
    } else {
        res.end('<html><body><h1>Página desconhecida</h1></body></html>');
    }   
});

server.listen(port, host, () => {
    console.log('Servidor Ligado');
});
