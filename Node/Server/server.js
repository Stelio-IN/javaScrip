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
            html_file = './views/index.html'
            //sucesso
            res.statusCode = 200
            break;
        case '/about':
            //sucesso
            html_file = './views/about.html'
            res.statusCode = 200
            break;
        case '/acerca_de':
            //redicionamento
            res.setHeader('Location', '/about')
            res.statusCode = 301
            res.end()
            break;
    
        default:
            html_file = './views/404.html'
            //Erro
            res.statusCode = 404
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