const usuario = localStorage.getItem('vibetrack_usuario')
const btnLogin = document.querySelector('.btn-login')

if (usuario) {
    btnLogin.textContent = `Olá, ${usuario}`
    btnLogin.style.pointerEvents = 'none'
    btnLogin.style.borderColor = '#f5c518'
    btnLogin.style.color = '#f5c518'
}