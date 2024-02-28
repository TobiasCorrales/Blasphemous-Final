document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("peregrinacionBtn").addEventListener("click", function() {
        window.location.href = "formulario_usuario.html";
    });
    document.getElementById("optionsBtn").addEventListener("click", function() {
        window.location.href = "options.html"
    });
    document.getElementById("extrasBtn").addEventListener("click", function() {
        window.location.href = "extras.html"
    });
    document.getElementById("exitBtn").addEventListener("click", exitGame);
});

function redirectToPeregrinacion() {
    window.location.href = "formulario_usuario.html"; 
}

function redirectToOpciones () {
    window.location.href = "options.html"
}

function redirectToExtras() {
    window.location.href = "extras.html"
}

function exitGame() {
    console.log("Saliendo del juego");
}

// audio
document.addEventListener("DOMContentLoaded", function(){
    reproducirAudio();
});

function reproducirAudio() {
    const audio = document.getElementById("miAudio");
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
}
