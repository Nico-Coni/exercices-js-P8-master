const btn = document.getElementById('myButton')
const p = document.getElementById('message')
const message = `Bonjour, vous avez cliqué sur le bouton !`

btn.addEventListener('click', (event) => {
    p.innerText = message
})