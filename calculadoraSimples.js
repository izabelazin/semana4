const form = document.querySelector('form')
const result = document.querySelector('.result')

// primeiro faz essa funcao de escutar
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const firstValue = document.querySelector('#firstValue').value
    const secondValue = document.querySelector('#secondValue').value

    console.log(event)

    // faz um if para saber em qual botão foi clicado
    if (event.submitter.id === 'sum') {
        result.textContent = sumFunction(firstValue, secondValue)
        
    } else if (event.submitter.id === 'subtract') {
        result.textContent = subtractFunction(firstValue, secondValue)

    } else if (event.submitter.id === 'multiply') {
        result.textContent = multiplyFunction(firstValue, secondValue)

    } else { //fica subentendido que aqui tem um if (event.submitter.id === 'divide')
        result.textContent = divideFunction(firstValue, secondValue)
    } 
})

// por ultima faz as funções de cada uma das operação
// usa o Number.parseFloat para transformar a string em numero
const sumFunction = (num1, num2) => {
    return Number.parseFloat(num1) + Number.parseFloat(num2)
}

//outra forma de fazer o number.parsefloat
const subtractFunction = (num1, num2) => {
    return Number.parseFloat(num1 - num2)
}

const multiplyFunction = (num1, num2) => {
    return Number.parseFloat(num1) * Number.parseFloat(num2)
}

const divideFunction = (num1, num2) => {
    return Number.parseFloat(num1) / Number.parseFloat(num2)
}