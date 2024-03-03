/*
const os = require('os')

//console.log(os)
console.log(os.platform())
console.log(os.version())
console.log(os.cpus())
console.log(os.arch())
console.log(os.homedir())
console.log(os.totalmem())*/

const fs = require('fs')

//reading files
/*
// sync para parar a execuacao ate passar por esse metodo sync
if(fs.existsSync('./dado.csv')){
    let dados = fs.readFileSync('./dado.csv',)
    console.log(dados.toString())
}else{
    console.log('Ficheiro nao encontrado');
}
console.log('Ultima Operacao')
*/

//write files
/*
fs.writeFile('./dados1.txt', 'Sin', () =>{
    console.log('Ficheiro inscrito')
})
console.log('Fim')

fs.writeFileSync('./dados2.txt', 'Invo')

console.log('Fim')*/

// write file - append
/*
fs.appendFileSync('./dados1.txt', ' Stelio')
console.log('Fim')
*/

/*
//criar pasta
if(!fs.existsSync('./pasta1')){
    fs.mkdir('./pasta1',(erro) =>{
        if(erro){
            console.log(erro)
        }else{
            console.log('Pasta criada com sucesso')
        }
    })
}else{
    console.log('Pasta ja existe')
}
*/

//Remover pasta {recursive: true; para remover com os files dentro dele}
/*
if(fs.existsSync('./pasta1')){
    fs.rmSync('./pasta1',{recursive: true})
    console.log('Fichero removido')
}else{
    console.log('Pasta nao encontrada')
}
*/
//eliminar arquivos 
/*
if(fs.existsSync('./dados2.txt')){
    fs.unlinkSync('./dados2.txt')
}else{
    console.log('Ficheiro nao existe')
}
*/
