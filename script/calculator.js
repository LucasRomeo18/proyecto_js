const pantalla = document.querySelector('.display');
const numeros = document.querySelectorAll('button');



//Le asigna un evento de click a cada boton, compara para ver si esta el cero o si aprto el AC para dejar la pantalla en blanco, si apreto el DEL borrar el ultimo caracter del string y por ultimo evalua lo que se encuentra en la pantalla(en este caso hace las operaciones aritmeticas)
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

