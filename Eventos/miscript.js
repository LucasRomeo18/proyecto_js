let boton = document.getElementById("boton1");
let div1 =document.getElementById("div1");
let enlace = document.getElementById("enlace1");


//function mensaje(){
//   alert("Boton Presionado!!!")
//}
//boton.addEventListener("click", mensaje);

function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}

div1.addEventListener("click", mostrarMensaje);


function bloqueoEnlace(event){
    event.preventDefault();
    alert("enlace deshabilitado");
}

enlace.addEventListener("click", bloqueoEnlace);