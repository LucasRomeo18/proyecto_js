
//metodo PUT

fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Nuevo titulo",
        body: "Nueda Descripción"
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: ", error));