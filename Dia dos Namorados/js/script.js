function respostaSim() {
    const msg = document.getElementById("mensagem");
    msg.innerText = "🥰 Eu também quero, momo!";
    msg.style.display = "block";
}

function respostaNao() {
    const msg = document.getElementById("mensagem");
    msg.innerText = "🤡 Acho que você clicou errado";
    msg.style.display = "block";
}

window.addEventListener("click", function tocarMusica() {
    const audio = document.getElementById("musica");
    if (audio.paused) {
        audio.play().catch((e) => {
            console.log("Erro ao tentar tocar a música:", e);
        });
    }
    window.removeEventListener("click", tocarMusica);
});