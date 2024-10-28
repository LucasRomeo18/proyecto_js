const pantalla = document.querySelector('.display');
const numeros = document.querySelectorAll('button');



//Le asigna un evento de click a cada boton
numeros.forEach(boton =>{
    boton.addEventListener('click', function(event){
        let  numero = event.target.value;
        if(pantalla.value === '0'|| numero === 'AC'){
            pantalla.value = '';
        }
        if(numero !== 'AC' && numero !== 'DEL' && numero !== '='){
                pantalla.value += numero;
        }
        if(numero === 'DEL'){
            pantalla.value = pantalla.value.slice(0,-1);
        }
        if(numero === '='){
            pantalla.value = eval(pantalla.value);
        }

        

        
    });
})

 
// esta funcion lo muestra en la consola
//function mostrarConsola(event){
//    let numero = event.target.value;
//    console.log(numero);
//}

