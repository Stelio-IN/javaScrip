let array = []
let maior =0
let menor =0
let soma =0
let cont =0

let num = document.getElementById('txtnum')
let tabe = document.getElementById('selec')
let tam = document.querySelector('p#tamanho')
let mai = document.querySelector('p#maior')
let men = document.querySelector('p#menor')
let som = document.querySelector('p#soma')
let med = document.querySelector('p#media')

function adicionar(){
        n = Number(num.value)
        if(n<0 || n>100 || num.value.length==0){
            alert('Digito invalido')
        }else if(array.indexOf(n)== -1){
            //Reduzir codigo fazendo verificacao ao introduzir valores e somando
            soma +=n
            ++cont
            if(cont==1){
                maior = n
                menor = n
            }else{
                maior = maior>=n? maior : n
                menor = menor<=n? menor : n             
            }
            let item = document.createElement('option')
                item.text = ` o elemento ${n} foi adicionado`
                tabe.appendChild(item)
                array.push(n)      
            }else{
                alert('valor ja existe')
        }
        tam.innerHTML = ``
        mai.innerHTML = ``
        men.innerHTML = ``
        som.innerHTML = ``
        med.innerHTML = ``

}
function finalizar(){
    if(array.length ==0){
        alert('Adicione Numeros')
    }else{
        tam.innerHTML = `O Tamanho e ${array.length}`
        mai.innerHTML = `O Maior e ${maior}`
        men.innerHTML = `O Menor e ${menor}`
        som.innerHTML = `A Soma e ${soma}`
        med.innerHTML = `A media e ${soma/cont}`
    }
}
//document.body.style.background ='black'