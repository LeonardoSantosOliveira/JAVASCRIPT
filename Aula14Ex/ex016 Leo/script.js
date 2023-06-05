var botao = window.document.querySelector('input#contar')
botao.addEventListener('click', contar)

function contar(){
    var numeroInicio = Number(window.document.querySelector('input#ninicio').value)
    var numeroFim = Number(window.document.querySelector('input#nfim').value)
    var numeroPasso = Number(window.document.querySelector('input#npasso').value)
    var res = window.document.querySelector('p#mostrar')
    var contador = Number(numeroInicio.value)

    if (numeroInicio <= 0){
        window.alert('Digite um numero de inicio valido')
    } else if (numeroFim <= 0){
        window.alert('Digite um numero de fim valido')
    } else if (numeroPasso <= 0){
        window.alert('Numero de passo deve ser maior que 0, considerando passo 1.')
        for (var i = numeroInicio; i <= numeroFim; i++){
            res.innerHTML = (`${i}`)
        }
        } else{
        window.alert('tudo ok')
    }
}