function cumprimento(){
    var data = new Date()
    var hora = data.getHours()
    var Cres = document.querySelector('#titulo')
    
    if (hora >= 6 && hora < 12){
        Cres.innerHTML = `Bom dia sua gayzona q eu amo tanto!`
    }else if(hora >= 12 && hora < 18){
        Cres.innerHTML = `Boa tarde laricona perfeita linda!`
    }else if(hora >= 18 && hora <= 23){
        Cres.innerHTML = `Boa noite mia vida!`
    }else{
        Cres.innerHTML = `Boa madrugada mia boiola!`
    }
}


function correta(){
    var questao = document.querySelector('#questao')
    var popup = document.querySelector('#popup')
    questao.style.display = "none"
    popup.style.display = "flex"
}

function errada(){
    var burro = document.querySelector('#burro')
    questao.style.display = "none"
    burro.style.display = "block"
}

function fechar2(){
    burro.style.display = "none"
    questao.style.display = "block"
}

function fechar(){
    popup.style.display = "none"
    questao.style.display = "block"
}

