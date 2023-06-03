function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var mostrar = window.document.querySelector('div#horario')
    var foto = window.document.querySelector('img#foto')
    mostrar.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos</p>`
    var mensagem = window.document.querySelector('p#boa')

    if (hora < 12){
        document.body.style.background = 'lightgreen'
        foto.src = 'imagens/manha.jpg'
        mensagem.innerHTML = 'Bom Dia!'
    } else if (hora < 18){
        document.body.style.background = 'lightpink'
        foto.src = 'imagens/tarde.jpg'
        mensagem.innerHTML = 'Boa Tarde!'
    }   else{
        document.body.style.background = 'gray'
        foto.src = 'imagens/noite.jpg'
        mensagem.innerHTML = 'Boa Noite!'
    }
}