const timeValue = document.querySelector('.time')

// mostra o relógio na hora que a página carrega
window.onload = function() {
    const date = new Date()
    timeValue.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

// passar o tempo do relógio a cada segundo (1000 milisegundos)
setInterval(function() {
    const date = new Date()
    timeValue.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)

console.log('acabou')
