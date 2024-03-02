console.log('Inicio')

/*
//adicionadno script
//Retorna todos dados exportados no modulo 
const dados = require('./modulo')

console.log(dados.nomes)
console.log(dados.provincias)
*/

//Desistruturacao
const {nomes, provincias,adicionar} = require('./modulo')
console.log(nomes) 
console.log(provincias)
console.log(adicionar(10,5))
