        const respostas = JSON.parse(localStorage.getItem('vibetrack_respostas') || '{}');
        const total = 6;
        const lista = document.getElementById('gabarito-lista');
        const scoreEl = document.getElementById('score');

        let acertos = 0;

        for (let i = 1; i <= total; i++) {
            const r = respostas[i];
            const li = document.createElement('li');
            li.className = 'gabarito-item';

            if (r && r.correta) {
                acertos++;
                li.classList.add('acerto');
                li.innerHTML = `<span class="icone">✔</span> ${r.pergunta}`;
            } else {
                li.classList.add('erro');
                li.innerHTML = `<span class="icone">✘</span> ${r ? r.pergunta : 'Pergunta ' + i}`;
            }

            lista.appendChild(li);
        }

        scoreEl.innerHTML = `<strong>${acertos}</strong> de <strong>${total}</strong> acertos`;

        function reiniciar() {
            localStorage.removeItem('vibetrack_respostas');
            window.location.href = 'quiz1.html';
        }

const usuario = localStorage.getItem('vibetrack_usuario')
const btnFinal = document.querySelector('.btn-final')

if (usuario) {
    btnFinal.textContent = `Parabéns, ${usuario}`
    btnFinal.style.pointerEvents = 'none'
    btnFinal.style.borderColor = '#f5c518'
    btnFinal.style.color = '#f5c518'
}