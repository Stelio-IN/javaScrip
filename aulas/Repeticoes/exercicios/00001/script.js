function contar(){
   var ini = document.getElementById('txtinicio')
   var fim = document.getElementById('txtfim')
   var pas = document.getElementById('txtpasso')


   var res = document.querySelector('div#res')

   var i = Number(ini.value)
   var f =  Number(fim.value)
   var p =  Number(pas.value)

  if(ini.value.length ==0 || fim.value.length == 0|| pas.value.length == 0){
    alert('[ERRO] faltam dados!!!')
  }else{
    res.innerHTML = 'Contando: <br>'
    if(p <=0){
        alert('Passo invalido considerando passo 1')
        p=1
    }
    if(i<f){
        for(var c = i;c<=f;c+=p){
            // \u{1F603}
            //Contagem crescente
             res.innerHTML += ` ${c} \u{1F449}`
         }
         res.innerHTML += `\u{1F3C1}`
    }else{
        for(var c = i;c>=f;c-=p){
            // \u{1F603}
            //Contagem decrescente
             res.innerHTML += ` ${c} \u{1F449}`
         }
         res.innerHTML += `\u{1F3C1}`
    }

  }


  // for(var a =i;a>=f;a+p){
   // res.innerHTML = a 
  // }
}