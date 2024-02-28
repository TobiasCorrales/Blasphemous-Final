document.addEventListener("DOMContentLoaded", function() {
    var musicButton = document.getElementById("music");
    var soundEffectsButton = document.getElementById("soundEffects");
    var subtitlesButton = document.getElementById("subtitles");

    musicButton.addEventListener("click", function() {
        toggleMusic();
    });

    soundEffectsButton.addEventListener("click", function() {
        toggleOption(soundEffectsButton);
    });

    subtitlesButton.addEventListener("click", function() {
        toggleOption(subtitlesButton);
    });

    reproducirAudio();

    var configButton = document.getElementById("configButton");
    configButton.addEventListener("click", function() {
        guardarCambiosYVolver();
    });
});

function toggleOption(button) {
    if (button.innerText === "On") {
        button.innerText = "Off";
    } else {
        button.innerText = "On";
    }
}

function toggleMusic() {
    var musicButton = document.getElementById("music");
    var audio = document.getElementById("miAudio");

    if (musicButton.innerText === "On") {
        musicButton.innerText = "Off";
        audio.pause();
    } else {
        musicButton.innerText = "On";
        audio.play();
    }
}

function reproducirAudio() {
    const audio = document.getElementById("miAudio");
    audio.loop = true;
    audio.autoplay = true;
    audio.load();
    audio.play();
}

function guardarCambiosYVolver() {
    window.history.back();
}
