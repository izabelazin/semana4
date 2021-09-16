const result = document.querySelector('.result')

// tudo que estiver aqui dentro vai ser executado com a página uma unica vez
window.onload = function() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1

    // monstra a estação do ano confirme a função abaixo
    checkSeason(day, month)
}

const checkSeason = (day,month)=> {
    if(month === 12 && day >= 22 || month <= 3 && day <= 21) {
        result.innerHTML = 'Verão <img>'
    } else if(month === 3 && day >= 22 || month <= 6 && day <= 21) {
        result.innerHTML = 'Outono <img>'

    } else if(month === 6 && day >= 22 || month <= 9 && day <= 21) {
        result.innerHTML = 'Inverno <img>'
    } else {
        result.innerHTML = 'Primavera <img>'
    }
}
