//defini uma constante que as atividade serão armazenadas. Vai armazenar do localStorage ou vai ser um array vazio
const listActivity = JSON.parse(localStorage.getItem('newActivity')) || []

const newActivity = document.querySelector('#newActivity')

//checar se o conteudo da lista existe e é maior que zero
if (listActivity.length > 0) {
    listActivity.forEach((activity) => {
        listContent.innerHTML += `<div> ${activity.newActivity}</div>`
    
    
    });
}

function listActivityFunction() {
    console.log('Aqui')
}

function addActivity() {
    // acha div tasks
    // pega o input do usuario
    // colocar dentro da div o input
    const userInput = document.querySelector('#newActivity').value
    const divTasks = document.querySelector('#tasks') //
    divTasks.innerHTML += userInput
}