const { error } = require('console');
const express = require('express');
const app = express();
const mysql = require('mysql');

app.listen(3000, () => {
    console.log('API running');
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to database');
});

/* -----------------------------------Routes -------------------------------------*/
//retornar todos 
app.get("/", (req, res) => {
    connection.query("SELECT * FROM users WHERE id =15", (error, results) => {
        if (error) {
            console.error('Error querying database:', error.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        if(results.length !=0){
           // res.send(results);
           res.send(api_responde('Sucesso','Sucesso',results))
        }else{
            res.send('Nao existem Resultados')
        }
       
    });
});

//lista ordenada dos elementos da bd
app.get("/lista", (req, res) => {
    connection.query("SELECT * FROM users", (error, results) => {
        if (error) {
            console.error('Error querying database:', error.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        if(results.length !=0){
            let html = 'Nomes: <hr> ' + '<ol>'
            results.forEach(element => {
                html += '<li>' + element.username +'</li>' 
            });
            html += '</ol>'
            res.send(html)
        }else{
            res.send('Nao existem Resultados')
        }
       
    });
});

//Query parametrizadas, evitar sql ejection 

app.get("/lista_Parametro", (req,res) =>{
    connection.query("SELECT * FROM users WHERE id=? AND username = ?", [8,'Stelio'], (error, results) =>{
        if(error){
            res.send(error.sqlMessage)
        }
        if(results != 0){
          //  res.send(results)
            res.send(api_responde('Sucesso','Sucesso',results))
        }else{
            //para login era so retornar credencias invalidas
            res.send('Nao esxistem registros')
        }
    })
})


//Add valores BD
app.get("/Cadastrar",(req,res) =>{

    let values = [0,'Paulo','2024-03-10 12:45:00']

    connection.query('INSERT INTO users VALUES(?,?,?)', values, (error, results) =>{
        if(error){
            res.send('Error: '+  error.sqlMessage)
        }else{
            res.send('Sucesso')
        }
    })
})
//varios cadastros
app.get("/Cadastrar_Varios",(req,res) =>{

    let values = [[0,'Joana','2024-03-10 12:45:00'],
    [0,'tania','2024-03-10 12:45:00'],
    [0,'Maria','2024-03-10 12:45:00']
                ]

    connection.query('INSERT INTO users VALUES ?', [values], (error, results) =>{
        if(error){
            res.send('Error: '+  error.sqlMessage)
        }else{
            res.send('Sucesso')
        }
    })
})

//pegar valores atraves de dados inseridos pela url

app.get("/users/:id", (req,res)=>{
    let id = req.params.id
    connection.query("SELECT * FROM users WHERE id = ?", [id], (error, results) =>{
        if(error){
           // res.send('Error: '+ error.sqlMessage)
           res.json(api_responde('erro',error.sqlMessage,[]))
        }else{
            //res.send(results)
            res.send(api_responde('Sucesso','Sucesso',results))
        }
    })
})

//respostas 
app.get("/json", (req,res) =>{
    
    res.json({
        status: 'Sucess',
        message: 'Sucess',
        results: []
    })  

})

function api_responde(status, message, data)
{
    return {
        status: status,
        message: message,
        results: data
    }
}