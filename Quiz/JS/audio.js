const audio = document.querySelector('.audio audio');
const btnPlay = document.querySelector('.btn-play');
const progressFill = document.querySelector('.progress-fill');
const progressBar = document.querySelector('.progress-bar');
const timeDisplay = document.querySelector('.player-time');

const iconPlay = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const iconPause = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

btnPlay.innerHTML = iconPlay;

btnPlay.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btnPlay.innerHTML = iconPause;
    } else {
        audio.pause();
        btnPlay.innerHTML = iconPlay;
    }
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = pct + '%';
        timeDisplay.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
    }
});

audio.addEventListener('ended', () => {
    btnPlay.innerHTML = iconPlay;
    progressFill.style.width = '0%';
});

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
});

function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return m + ':' + sec;
}
