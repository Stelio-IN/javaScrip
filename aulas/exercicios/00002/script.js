function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')

    if(fano.value.length ==0 || fano.value>ano){
        alert('verifique os dados e tente novamente!!!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<14){
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade<22){
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade<50){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if(idade>=0 && idade<14){
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade<22){
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade<50){
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Sua idade e: ${idade},Seu genero ${genero} `

        res.appendChild(img)
    }
}