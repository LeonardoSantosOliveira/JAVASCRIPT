var botao = document.querySelector('input#botao')
botao.addEventListener('click', calcular)

function calcular(){
    var numero = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')
    if (numero.value.length == 0){
        window.alert('Digite um número válido')
    } else{
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${i} x ${n} = ${i*n}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}