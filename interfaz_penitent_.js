document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("partida1Btn").addEventListener("click", function() {
      window.location.href = "Cinematica.html";
  });
  document.getElementById("partida2Btn").addEventListener("click", function() {
      window.location.href = "Cinematica.html";
  });
  document.getElementById("partida3Btn").addEventListener("click", function() {
      window.location.href = "Cinematica.html";
  });
});



function startGame1() {
  console.log("Iniciando partida I");
}

function startGame2() {
  console.log("Iniciando parida II");
}

function startGame3() {
    console.log("Iniciando partida III");
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

