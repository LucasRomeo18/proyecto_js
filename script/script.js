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


