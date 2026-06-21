const questaoNum = parseInt(document.querySelector('.contador').textContent.split('/')[0]);
const questaoLabel = document.querySelector('.questao h2').textContent;
const alternativas = document.querySelectorAll('.alternativa');
const btnProxima = document.getElementById('btn-proxima');

// Carrega respostas salvas
const respostas = JSON.parse(localStorage.getItem('vibetrack_respostas') || '{}');

// Marca se já respondeu essa questão
if (respostas[questaoNum] !== undefined) {
    mostrarResultado(respostas[questaoNum]);
    btnProxima.disabled = false;
}

alternativas.forEach(btn => {
    btn.addEventListener('click', () => {
        if (respostas[questaoNum] !== undefined) return; // já respondeu

        const escolhido = parseInt(btn.dataset.index);
        respostas[questaoNum] = {
            escolhido: escolhido,
            correta: btn.dataset.correta === 'true',
            pergunta: questaoLabel
        };
        localStorage.setItem('vibetrack_respostas', JSON.stringify(respostas));

        mostrarResultado(respostas[questaoNum]);
        btnProxima.disabled = false;
    });
});

function mostrarResultado(resposta) {
    alternativas.forEach(btn => {
        const idx = parseInt(btn.dataset.index);
        btn.disabled = true;

        if (btn.dataset.correta === 'true') {
            btn.classList.add('correta');
        } else if (idx === resposta.escolhido && !resposta.correta) {
            btn.classList.add('errada');
        }
    });
}
