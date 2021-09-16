//pega as informações do form e guarda no form
const form = document.querySelector('form')

//pega as informações da idade e guarda na variavel ageValue
const ageValue = document.querySelector('.age-value')

//faz um evento de ficar escutando quando o botão é acionado
form.addEventListener('submit', function(event) {
    event.preventDefault() //vai fazer com que a pagina nao seja reiniciada, só funciona dentro de formulários

    // pega a informação que é coloca da caixa do input e salva na variavel inputDate, em formato de string
    const inputDate = document.querySelector('#ageInput').value

    // transforma a data que está em string em formato de data
    const dateOfBirth = new Date(inputDate).getFullYear()

    // faz uma variavel com o ano atual para ser usada na subtração
    const currentYearDate = new Date().getFullYear() //ano atual

    // faz a subtração da data com o ano e guarda na variavel ageResult
    const ageResult = Math.abs(dateOfBirth - currentYearDate) //método que vai subtrair o valor absoluto, então não vai dar valor negativo
    // também poderia ser feito assim: const ageResult = currentYearDate - dateOfBirth

    ageValue.innerHTML = `A idade é ${ageResult}`
}) 