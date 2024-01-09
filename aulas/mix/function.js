function soma(c=0,d=0){
   return c+d
}

console.log(soma(5))
console.log(soma(5,2))

function parOuimpar(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
console.log(parOuimpar(6))

//Atribuir uma funcao a uma var 
let v = function(x){
    return x*2
}

console.log(v(2))

function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n*fatorial(n-1) 
    }
}
console.log(fatorial(5))