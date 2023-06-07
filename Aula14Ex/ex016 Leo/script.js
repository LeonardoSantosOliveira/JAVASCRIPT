function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando: <br>'
        if (p == 0){
            window.alert('Passo deve ser maior que 0, considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if (i > f){
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}