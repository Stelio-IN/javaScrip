
const express = require('express')
// criando uma aplicacao express
const app = express()

//registrar tamblete engine
app.set('view engine','ejs')
app.set('views','view')

//porta para executar
app.listen(3001)

/*
antes do ejs
app.get('/', (req,res) =>{
    //res.send('<h1>SIN</h1>')
    //Pegar o caminho absuluto usando o root para nao ter de colocar o indereco completo do pc 
    res.status(200).sendFile('./view/home.html',{root: __dirname})
})
app.get('/about', (req,res) =>{
    //res.send('<h1>About</h1>')
    res.status(200).sendFile('./view/about.html' ,{root: __dirname})
})
app.get('/services', (req,res) =>{
    //res.send('<h1>About</h1>')
    res.status(200).sendFile('./view/services.html' ,{root: __dirname})
})

//Rdirecionamento
app.get('/acerca-de', (req,res) =>{
    res.status(302).redirect('/about')
})

//o use deve estar sempre no final pois depois de verificar e todas e nao encontrar deve direcionar
app.use((req,res) =>{
    //res.sendFile('./view/404.html' ,{root: __dirname})
    res.status(404).sendFile('./view/404.html' ,{root: __dirname})
})
*/


//**************************************************** */
//middleware
app.use((req, res, next) =>{
    console.log('Novo pedido: ');
    console.log('Host: ', req.hostname);
    console.log('Path: ', req.path );
    console.log('Method: ', req.method);
    console.log('URL: ', req.url);
    //para poder sair da metodo pois ele fica no loop
    next()
})
app.use((req, res, next) =>{
    console.log('Segundo middleware');
    //para poder sair da metodo pois ele fica no loop
    next()
})

//**************************************************** */
//Rotas
app.get('/', (req,res) =>{
    res.render('home',{title: "Casa", nome: "Stelio"})
})
app.get('/about', (req,res) =>{
    res.render('about',{title: "Acerca de"})
})
app.get('/services', (req,res) =>{
    const servicos = []
    /*
    const servicos = [
        {titulo_servico: "Desenvolvimento WEB", discricao: "Fazemos apps e paginas web"},
        {titulo_servico: "Desenvolvimento Desktop", discricao: "Fazemos apps desktop"},
        {titulo_servico: "Desenvolvimento Mobile", discricao: "Fazemos apps e paginas Mobile"},
    ]
    */
    res.render('services',{title: "Services",servicos})
})
//o use deve estar sempre no final pois depois de verificar e todas e nao encontrar deve direcionar
app.use((req,res) =>{
    //res.sendFile('./view/404.html' ,{root: __dirname})
    res.status(404).render('404',{title: "Erro"})
})
