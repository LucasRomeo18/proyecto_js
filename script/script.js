// crea un svg desde java
        let img = document.createElement('img');
        img.src = '/image/meteocons--dust-wind.svg';
        document.body.appendChild(img);
        document.write('<br>');

//aprendiendo javascript
var nombre;
nombre ='Lucas';
cantidad = 25;
document.write(nombre);
document.write('<br>');
document.write(cantidad);

persona ={nombre: 'Luquitas', edad:'34'};
document.write('<br>');
document.write(persona.nombre);
document.write('<br>');
document.write(persona.nombre +'<br> '+ persona.edad); // concatenaciones
document.write('<br>' +'Nombre: '+ persona.nombre +'<br> '+'Edad: '+ persona.edad); // concatenaciones
document.write('<br>=============================<br>');
document.write('<br>' ,'Nombre: ', persona.nombre ,'<br> ','Edad: ',persona.edad); // concatenaciones
document.write('<br>=============================<br>');

var nombre, edad, telefono, mail; // variables declaradas en una misma linea
nombre = prompt('INGRESE NOMBRE....'); //ventana emergente para datos de usuario
document.write('Nombre: ', nombre)
document.write('<br>=============================<br>');

//constantes
var precio = 100.00;
document.write('Precio: ', precio);
document.write('<br>');
const precio1 = 200.00; //variable como constante, no varia durante la ejecución
document.write('Precio1: ', precio1);
document.write('<br>');

document.write('<br>=============================<br>');

//operadores

var a, b, suma, res, mult, div, resid, poten;
a = parseInt(prompt('Ingrese valor 1...')); // parseint lo pasa a entero y el + funciona como suma y no como concatenador
b = parseInt(prompt('Ingrese valor 2...'));
suma = a + b;
res = a - b;
mult = a * b;
div = a / b;
resid = a % b;
poten = a ** b;
document.write('La suma es: ', suma);
document.write('<br>');
document.write('La diferencia es: ', res);
document.write('<br>');
document.write('La producto es: ', mult);
document.write('<br>');
document.write('La divición es: ', div);
document.write('<br>');
document.write('el residuo es: ', resid);
document.write('<br>');
document.write('La potenciación es: ', poten);
document.write('<br>');


document.write('<br>=============================<br>');

//operadores de asignación
//incremento

var a = 1;
document.write('Valor de A: ', a);
document.write('<br>');
a++; // aumenta el valor en 1
document.write('<br>');
document.write('Valor de A: ', a);
a+=5; //aumenta dependiendo la cantidad que le ponemos
document.write('<br>');
document.write('Valor de A: ', a);

// decremento
a--; // decrementa el valor en 1
document.write('<br>');
document.write('Valor de A: ', a);
a-=5; //decrementa dependiendo la cantidad que le ponemos
document.write('<br>');
document.write('Valor de A: ', a);

//Multiplicación
a*=2; //multiplica dependiendo la cantidad que le ponemos
document.write('<br>');
document.write('Valor de A: ', a);

// divición
a/=2; //divide dependiendo la cantidad que le ponemos
document.write('<br>');
document.write('Valor de A: ', a);

//potenciación
a**=2; //potenciación dependiendo la cantidad que le ponemos
document.write('<br>');
document.write('Valor de A: ', a);


document.write('<br>=============================<br>');

//operadores de comparación


var valor1, valor2;
valor1 = 20;
valor2 = 10;

document.write(valor1 > valor2);
document.write('<br>');
document.write(valor1 < valor2);
document.write('<br>');
document.write(valor1 == valor2);
document.write('<br>');
document.write(valor1 != valor2);
document.write('<br>');
document.write(valor1 <= valor2);
document.write('<br>');
document.write(valor1 >= valor2);

//Funciones matemáticas

var precioA = Math.round(399.54);  // redondea a partir de .5
document.write('precio redondeado:', precioA);
document.write('<br>');

var precioA = Math.ceil(399.54); //redondea sin importar el decimal para arriba
document.write('precio redondeado:', precioA);
document.write('<br>');

var precioA = Math.floor(399.54); //redondea sin importar el decimal para abajo
document.write('precio redondeado:', precioA);
document.write('<br>');

//cadenas de texto

var cadena;
cadena = `esto es texto en una cadena.`;

document.write(`cadena: ` + cadena); 
// se puede dividir la dadena con el br o con el \


//string


var palabra= `Javascript`;
document.write(`La palabra es : `, palabra);
document.write('<br>');
document.write(`Cantidad de letras: `, palabra.length);
document.write('<br>');
document.write(`ver los primeros 4 caracteres del texto: `, palabra.slice(0,4));
document.write('<br>');
document.write(`ver los primeros 4 caracteres del texto: `, palabra.substring(0,5));

var saludo = `Hola a todos los chicos`;
saludo = saludo.replace(`Hola`, `Adios`);
document.write(saludo);
document.write('<br>');


//Poner en MAyusculas
document.write(`Mayusculas: `, palabra.toUpperCase());
document.write('<br>');

//Poner en Minusculas
document.write(`Minusculas: `, palabra.toLowerCase());
document.write('<br>');

//unir texto
var curso = `Curso de `;
document.write(`Unir palabras: `, curso.concat(palabra));
document.write('<br>');

// arrays
var numeros = [];
numeros = [14,34,56,67,33,88,90,2111];// mismos metodos para palabras
document.write('Elementos: ', numeros);
document.write('<br>');
document.write('Elemento número 5: ', numeros[5]);
numeros[0] = 923;


//metodos de Arrays
    // cantidad de elementos
    document.write('Cantidad: ', numeros.length());
    document.write('<br>');

    //ultimo elemento
    document.write('ultimo elemento: ', numeros[numeros.length-1]);
    document.write('<br>');

    //tipo texto
    document.write('En string: ', numeros.toString());
    document.write('<br>');

    //unir tipos de arrays
    var letritas = ['a','b','c','d',];
    var numeros2 = [1,2,3,4];

    document.write('Alfanumerico: ', letritas.concat(numeros2));
    document.write('<br>');

    //borrar el ultimo elemento
    numeros.pop;
    document.write(numeros);
    document.write('<br>');

    //agregar como el ultimo elemento
    numeros.push(500);
    document.write(numeros);
    document.write('<br>');

    //eliminar primer elemento
    numeros.shift();
    document.write(numeros);
    document.write('<br>');

    //insertar como primer elemento
    numeros.unshift(1000);
    document.write(numeros);
    document.write('<br>');

    //eliminar elementos a partir de un punto
    numeros.splice(2,3);
    document.write(numeros);
    document.write('<br>');

    //copiar un arrays
    var cantidades = [100,200,300,400,500];
    var copia = cantidades.slice(1,4);
    document.write("Array copia: ", copia);
    document.write('<br>');

    //ordenado alfabeticamente
    var objetos = ["auto", 'botella', 'planeta', 'zorro', 'jugo'];
    document.write(objetos);
    document.write('<br>');
    document.write(objetos.sort());// la funcion sort los ordena alfabeticamente
    document.write('<br>');
    document.write(objetos.reverse());// los trae de manera contraria a como estan en el arrays
    document.write('<br>');


//Condicionales
var uno, dos;
uno = prompt("Ingrese su nombre: ");
dos = prompt("ingrese su edad: ");
dos = parseInt(dos);

    if (uno >=18) {
        document.write("Bienvenido sos mayor!!!!", dos);
    }
    else{
        if (uno < 18){
        document.write(nombre, 'Eres menor de edad perro!!!!');
        }
        else{
            document.write('No ha ingrersado nada.....');
        }
    }

//operadores logicos (and, or)

let contiente, edad;
contiente = prompt(`Ingrese Su continete....`);
edad = prompt(`Ingrese su edad....`);

if (contiente == `America` && edad >=18){ //esto en and
    document.write(`Eres un adulto Americano.`);
}else{
    document.write(`o no eres adulto, o no eres americano.`);
}

let dia, mes, anio;
dia = prompt(`Ingrerse dia...`);
mes = prompt(`Ingrerse mes...`);
anio = prompt(`Ingrerse año...`);

if (mes == 1 || mes == 2 || mes == 3){ //esto es or
    document.write(`Pertenece al primer trimestre!..`);
}else{
    document.write(`No pertenece al primer trimestre`);
}


//switch case

let valor;
valor = parseInt(prompt(`Ingrese valor entre 1 y 3`));

switch (valor) {
    case 1:
        document.write(`Ingreso uno`);
        break;
    case 2:
        document.write(`Ingreso dos.`);
        break;
    case 3:
        document.write(`Ingreso tres.`);
        break;
    default:
        document.write(`no es número valido`);
        break;
}


let color
color = prompt(`Ingrese un color: Rojo, Verde o Azul....`);

switch (color) {
    case `rojo` || `Rojo`:
        document.write(`ingreso rojo.`);
        break;
    case `azul` || `Azul`:
        document.write(`ingreso azul.`);
        break;
    case `verde` || `Verde`:
        document.write(`ingreso verde.`);
        break;
    default:
        document.write(`no ingreso color.`);
        break;
}


//while (es un bucle)

let f = 1;
while (f <= 10) {
    document.write(`vuelta no. `, f);
    document.write(`<br>`);
    f++;
}
document.write(`Fin del bucle`);

let p = 1;
let suma = 0;
let Valor;

while (p <= 5){
    valor = parseInt(prompt(`ingrese valor..`));
    suma  = suma + valor;
    p++;
}
document.write(`La suma es: `, suma, `<br>`);


// do - while

let po;

do {
    po = parseInt(prompt(`ingrese valor 1 para salir....`));
    document.write(`ingreso valor: `, po);
    document.write(`<br>`);
} while ( po != 1);
document.write(`fin del bucle.`);

let usuario, clave, control;
control = 0;
usuario = prompt(`ingrese usuario...`);
clave = prompt(`Ingrese su clave...`);

do {
    if(clave != `1234`){
        clave = prompt(`clave incorrecta\n` + `intente de nuevo`);
        control = 0;
    }
    else{
        control = 1;
    }
} while (control != 1);
document.write(`ACCESO CORRENTO!`);


//for

for ( let y=1; y <= 20; y+=2 ){
    if(f==15){
        document.write(`aqui el valor es: `, y);
        document.write(`<br>`);
    }
}
document.write(`FIN DEL BUCLE`);
document.write(`<br>`);

const frutas = [`manzanas`, `peras`, `uvas`, `naranjas`];
for(let f = 0; f < frutas.length; f++){
    document.write(`Fruta: `, f, ` = `, frutas[f]);
}

// bucle for in

let pala = `Javascript`;

for(let f in palabra){
    document.write(palabra[f]);
    document.write(`<br>`);

}

let pal = `murcielago`;
let vocal = 0;

for (let f in palabra){
    if (pal[f]==`a` || pal[f]==`e` || pal[f]==`i` || pal[f]==`o` || pal[f]==`u`){
        vocal++;
    }
}
document.write(`cantidad de vocales: `, vocal);

//break

