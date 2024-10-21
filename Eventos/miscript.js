let boton = document.getElementById("boton1");


function mensaje(){
    alert("Boton Presionado!!!")
}
boton.addEventListener("click", mensaje);



function mensaje2(){
    alert(`sun un mouseover`);
}
boton.addEventListener("mouseover", mensaje2);