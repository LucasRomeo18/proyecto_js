//metodo PATCH

fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Nuevo titulo",
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: ", error));


//quedan mas metodos, se encuentran en la documentación