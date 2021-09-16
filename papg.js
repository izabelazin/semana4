const form = document.querySelector('form')
const result = document.querySelector('.result')

// criar a função fora como boas práticas para poder ser reutilizável
// função de PA
const calcPA = (num1, square) => {
    let valor = parseInt(num1)
    let razao = parseInt(square)
    const termo = 10
    // pa é uma string vazia pq vai assumir o valor de result
    let pa = ''

    for (let count = 1; count <= termo; count++) {
        pa += 'Termo ' + count + ' = ' + valor + '<br/>'
        valor += razao
    }
    result.innerHTML = pa

}

// função de PG
const calcPG = (num1, square) => {
    let valor = parseInt(num1)
    let razao = parseInt(square)
    const termo = 10
    // pa é uma string vazia pq vai assumir o valor de result
    let pg = ''

    for (let count = 1; count <= termo; count++) {
        pg += 'Termo ' + count + ' = ' + valor + '<br/>'
        valor *= razao
    }
    result.innerHTML = pg

}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const num1 = document.querySelector('#num1').value
    const square = document.querySelector('#square').value

    if(event.submitter.id === 'pa') {
        //criar função de pa
        calcPA(num1, square)
    } else {
        //criar função de pg
        calcPG(num1, square)
    }
})