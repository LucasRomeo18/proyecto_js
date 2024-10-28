let menu = document.getElementById("mimenu");
let boton = document.getElementById("miboton");

boton.addEventListener('mouseover', function(){
    menu.style.display = 'block';
})

boton.addEventListener('mouseout', function(){
    menu.style.display = 'none';
})

//boton.addEventListener('click', function(){           hace aparecer el submenu
    //menu.style.display = 'block';
//})

//document.addEventListener('mousemove', function(event){
    //console.log('Posición X: ' + event.clientX + ' -Posición Y: ' + event.clientY);
//})