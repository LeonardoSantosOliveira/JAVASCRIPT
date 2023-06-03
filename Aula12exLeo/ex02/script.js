function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    let fano = window.document.getElementById('txtano')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 0){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var idade = ano - fano.value
        var res = window.document.getElementById('res')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var fsex = window.document.getElementsByName('radsex')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebeh.jpg')
            } else if( idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemh.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src', 'imagens/adultoh.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoh.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebem.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemm.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src', 'imagens/adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosom.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
}