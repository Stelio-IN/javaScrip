let a = ['stelio','Acacio','Mondlane']



a.push('paulo')
console.log(a.sort())
console.log(a[3])
console.log(a.length)

for(let cont=0; cont<a.length;cont++){
    console.log(a[cont])
}

for(c  in a){
    console.log(a[c])
}

console.log(a.indexOf('stelio')) //busca 