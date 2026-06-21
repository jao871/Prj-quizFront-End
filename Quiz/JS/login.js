const btnEntrar = document.getElementById('btn-entrar')
const msgErro = document.getElementById('msg-erro')

btnEntrar.addEventListener('click', async () => {
    const email = document.getElementById('email').value.trim()
    const senha = document.getElementById('senha').value

    msgErro.textContent = ''

    if (!email || !senha) {
        msgErro.textContent = 'Preencha todos os campos.'
        return
    }

    try {
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        })

        const data = await res.json()

        if (!res.ok) {
            msgErro.textContent = data.erro
        } else {
            localStorage.setItem('vibetrack_usuario', data.nome)
            window.location.href = 'index.html'
        }
    } catch {
        msgErro.textContent = 'Não foi possível conectar ao servidor.'
    }
})
