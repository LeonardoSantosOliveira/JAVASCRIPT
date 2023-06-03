function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (txtano.value.length == 0 || txtano.value > ano || txtano.value < 0){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var idade = ano - fano.value
        var fsexo = window.document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'imagens/bebeh.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemh.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adultoh.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosoh.jpg')
            }
        } else if (fsexo[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/bebem.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemm.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/adultom.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosom.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}