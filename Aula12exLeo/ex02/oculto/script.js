function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 0){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'imagens/bebeh.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemh.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adultoh.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosoh.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebem.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemm.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/adultom.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosom.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}