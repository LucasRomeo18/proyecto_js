let datosJSon;
let xhr = new XMLHttpRequest(); //solicita a un archivo json su informacion

xhr.open(`GET`, `personal.json`, false);  // debe terner error en la direccion porque no me muestra nada
xhr.responseType = "json";
xhr.onload = function(){
    if(xhr.status === 200){
        datosJSon = xhr.response;
        let elementoTexto = document.getElementById("nombre");
        elementoTexto.textContent = datosJSon.nombre;
    }
    else{
        //manejar el error
    }
}
xhr.send(); 


//lectura de archivos con fech

pruebaaaaaaa