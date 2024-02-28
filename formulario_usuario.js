document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "penitent_.html";
    });
});

function goToPreviousMenu() {
    window.location.href = "Blasphemous.html"
  }

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
