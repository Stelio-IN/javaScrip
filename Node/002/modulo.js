let nomes = ['Stelio','Maria', 'carlos']
const provincias = ['Maputo', 'Gaza', 'Solafa']

function adicionar(a,b){
    return a+b
}

//exportar obj e funcoes  
module.exports = {
    // pode ou nao dar nome ao objecto, apenas considerar que tera o mesmo nome da variavel
    nomes: nomes,
    provincias,
    adicionar
}