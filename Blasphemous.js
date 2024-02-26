document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("peregrinacionBtn").addEventListener("click", function() {
        window.location.href = "./formulario_usuario.html";
    });
    document.getElementById("optionsBtn").addEventListener("click", showOptions);
    document.getElementById("extrasBtn").addEventListener("click", showExtras);
    document.getElementById("exitBtn").addEventListener("click", exitGame);
});

function redirectToPeregrinacion() {
    window.location.href = "./formulario_usuario.html"; 
}

function showOptions() {
    console.log("Opciones del juego");
}

function showExtras() {
    console.log("Extras");
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
