let texto1 = document.getElementById("mitexto");

function verificacion(event){
    if (event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    };
};

texto1.addEventListener("keydown", verificacion);

texto1.addEventListener("keyup", function(event){
    console.log("Entrada del usuario: " + event.target.value);
});

texto1.addEventListener("keypress", function(event){
    console.log("caracter ingresado: " + event.key);
});