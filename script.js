function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`

    if(hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = "manha.jpg"
        document.body.style.background = '#47acf0'
        
    } else if (hora >=12 && hora <= 18) {
        //Boa tarde!
        img.src = "tarde.jpg"
        document.body.style.background = '#9c1108'

    } else {
            //Boa noite
            img.src = "noite.jpg"
            document.body.style.background = '#351023'

        
    }
}
