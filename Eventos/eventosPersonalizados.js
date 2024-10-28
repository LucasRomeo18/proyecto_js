let audio = document.getElementById(`audio`);
let listacanciones = document.getElementById(`listaCanciones`);


//evento change

listacanciones.addEventListener(`change`, cambiarCancion);

function cambiarCancion(){
    let cancionEleginda = listacanciones.value;
    audio.src = cancionEleginda;
    audio.play();
    let evento = new CustomEvent(`cambioDeCancion`);
    audio.dispatchEvent(evento);
}

audio.addEventListener("cambioDeCancion", mostrarCancion);

function mostrarCancion(){
    console.log(`Cancion Actual: ` + listacanciones.value);
}
