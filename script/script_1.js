// programación orientada a objetos

var auto = {
    marca: `Toyota`,
    modelo: `Corolla`,
    anio: 2023,
    color: `Rojo`,
    tipo: `sedán`,
    radio: [`FM`, `MP4`, `USB`]
}

document.write(`Creacoón objeto Auto`);
document.write(`<br>`);
document.write(`Marca: `, auto.marca);
document.write(`<br>`);
document.write(`Modelo: `, auto.modelo);
document.write(`<br>`);
document.write(`Año: `, auto.anio);
document.write(`<br>`);
document.write(`Color: `, auto.color);
document.write(`<br>`);
document.write(`tipo: `, auto.tipo);
document.write(`<br>`);
document.write(`Radio: `, auto.radio);

// clases

class Persona{
    nombre = `Homero`;
    apellido = `Simpson`;
    direccion = `ave. Siempreviva 742`;
    telefono = 5553472;
    email = `amantedelacomida@aol.com`;

    trabajar(){
        return `trabaja en la planta nuclear`;
    }
    estudiar(){
        return `Escuela primaria de Sprinfield`;
    }
}

const homero = new Persona();  // enlaza los objetos a la clase para no tener que crear una clase para cada objeto
document.write(homero.nombre);  // trae el nombre en este caso seria homero


// clase date

