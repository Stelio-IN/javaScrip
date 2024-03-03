const http = require('http')
const host = 'localhost'
//const host = "127.0.0.1";
const port = 3001;

const fs = require('fs')

const server = http.createServer((req,res) =>{
    //header da resposta
    res.setHeader('Content-Type', 'text/html')

    //sistema de roteamento
    let html_file = '';
    switch (req.url) {
        case '/':
            html_file = './html/index.html'
            break;
        case '/about':
            html_file = './html/about.html'
            break;
    
        default:
            html_file = './html/404.html'
            break;
    }
    fs.readFile(html_file, (erro, data) =>{
        if(erro){
            console.log('Aconteceu um erro')
        }else{
            res.write(data)
            res.end()
        }
    }) 
})
server.listen(port, host, () =>{
    console.log('Servidor iniciado')
})