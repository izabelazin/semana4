const form = document.querySelector('form')
const select = document.querySelector('select')
const itemWrapper = document.querySelector('.item-wrapper')
const alert = document.querySelector('.alert')
let itens = []

const renderItens = (itensArr, clearItens = false) => {
  
    if(itensArr.length > 0) {
        itemWrapper.style = 'display: block'
        alert.style = 'display: none'

        if(clearItens) {
            select.innerHTML = ''
        }

        itensArr.forEach((item, index) => {
                select.innerHTML = select.innerHTML + `<option value='${item}'>${item}</option>`
        });
    }
}


const saveItensToLocalStorage = () => {
    localStorage.setItem('itens', JSON.stringify(itens))
}


const loadItens = () => {
    if(localStorage.getItem('itens')) {
        console.log('Aqui?')
        itens = JSON.parse(localStorage.getItem('itens'))
        renderItens(itens)
    } else {
        alert.textContet = 'Não há itens salvos'
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const item = document.querySelector('#item').value
    itens.push(item)
    renderItens(itens, true)


})


window.onload = function() {
    renderItens(itens)
    if(itens.length <= 0) {
        alert.textContet = 'Sem itens'
        itemWrapper.style = 'display: none'
    }
}