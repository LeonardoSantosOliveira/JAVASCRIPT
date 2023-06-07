var botao = window.document.querySelector('input#botao')
botao.addEventListener('click', contar)

function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Confira os dados e tente novamente.')
    } else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.style.textAlign = 'center'
        res.innerHTML = `Contando... <br>`
        if (i < f){
            for(var c = i; c <= f; c +=p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if (i > f){
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}