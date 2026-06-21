const btnCadastrar = document.getElementById('btn-cadastrar')
const msgErro = document.getElementById('msg-erro')
const msgSucesso = document.getElementById('msg-sucesso')

btnCadastrar.addEventListener('click', async () => {
    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const senha = document.getElementById('senha').value

    msgErro.textContent = ''
    msgSucesso.textContent = ''

    if (!nome || !email || !senha) {
        msgErro.textContent = 'Preencha todos os campos.'
        return
    }

    try {
        const res = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        })

        const data = await res.json()

        if (!res.ok) {
            msgErro.textContent = data.erro
        } else {
            msgSucesso.textContent = data.mensagem
            setTimeout(() => window.location.href = 'login.html', 1500)
        }
    } catch {
        msgErro.textContent = 'Não foi possível conectar ao servidor.'
    }
})
