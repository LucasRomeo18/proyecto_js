//configurar con expressJS el servidor de la app

const express = require("express");
const app = express();

app.set("port", 3000);
app.listen(3000);


//llamer al componente mysql

var mysql = require("mysql");

//establecer los parametros de la conexión

var mi_conection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Pakito1890",
    database: "base_001"
});


//nos conectamos a la base_001
mi_conection.connect();

//agregar nuevo regsitro
mi_conection.query('insert into clientes values (1, "Pedro", 1,123456789, "Calle Primera No 1")', function(error, resultado){
    if(error) throw error;
    console.log(resultado)
});

//realizar consulta a la tabla
mi_conection.query("select * from clientes", function(error, filas){
    if(error) throw error;
    console.log(filas)
});

//modificar registro en la tabla
mi_conection.query('update clientes set direccion = "no tiene" where idCliente = 1', function(error,resultado){
    if(error) throw error;
    console.log(resultado)
});

mi_conection.query("select * from clientes", function(error,filas){
    if(error) throw error;
    console.log(filas)
});


//eliminar registros de la tabla
mi_conection.query("delete from cliente where idClientes = 1", function(error,resultado){
    if(error) throw error;
    console.log(resultado)
});

mi_conection.query("select * from clientes", function(error,filas){
    if(error) throw error;
    console.log(filas)
});

//cerrar conexión a la base_001
mi_conection.end();



// tendria que mostrarme en la consola la informacion que estoy insertando pero me tira un problema la base de datos, que no logro identificar como arreglarlo