
let elementoAlarma = document.getElementById("textoreloj");
let elementoSonido = document.getElementById("audioalarma");

function comenzarTiempo(){
    let elementoSegundos = document.getElementById("tiempo").value;
    setTimeout(timepocumplido, 1000*elementoSegundos);
}

function timepocumplido(){
    elementoAlarma.style.color = "green";
    elementoSonido.play();
}

function comenzarreloj(){
    setInterval(tictac, 1000);
}
function tictac(){
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = String(tiempoActual.getSeconds()).padStart(2, "0");
    let textohora = hora + `:` + minutos + `:` + segundos;
    elementoAlarma.textContent = textohora;
}