async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                title:titulo,
                body:contenido,
                userId:1,
            }),
        })
        if(!respuesta.ok){
            throw new Error("Error en la solicitud: " + respuesta.statusText);
        }
        let data = await (respuesta.json());
        console.log("Resgistro Creado: " ,data);
    } catch (error) {
        console.error("algo salio mal al crear el registro: ", error);
    }
}

crearPost("Mi titulo de ejemplo", "Contenido de ejemplo")