let contador = 0;

function incrementar(){
    contador++;
    alert(`VALOR: `+ contador);
}


let control = 0;
let password = `acceso01`;

function verificar(){
    let clave = document.getElementById(`clave`).value;
    if(clave != password || clave == ``){
        alert(`clave incorrecta o vacia intente de nuevo`);
        control++;
        if(control >=3){
            alert(`Intentos agotados, acceso bloqueado \ contactar a soporte tecnico`);
        }
    }
    else{
        window.open(`https://www.google.com`);
    }
}



function cambiarcolor(){
    let seleccion = document.getElementById(`select1`);
    document.getElementById(`text1`).value = seleccion.selectedIndex;
    document.getElementById(`text2`).value = seleccion.options[seleccion.selectedIndex].text;
    document.getElementById(`text3`).value = seleccion.options[seleccion.selectedIndex].value;
}