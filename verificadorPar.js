const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('sumit', function(event) {
    event.preventDefault()

    const number = document.querySelector('.number').value
    const result = document.querySelector('p')
    if(number % 2 === 0) {
        result.textContent = 'É par!'
    } else {
        result.textContent = 'É impar!'
    }

})