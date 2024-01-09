function gerartabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.length!=0){
     let n = Number(num.value)  
        let cont = 1
        tab.innerHTML =''
       while(cont<=12){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }else{
        alert('get a number')
    }

}