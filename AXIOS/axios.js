function obtenerInfo(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(respuesta){
        let listaInformacion = document.getElementById("listaInfo");
        for(let f=0; f<respuesta.data.length; f++){
            let item = document.createElement("li");
            item.innerText = respuesta.data[f].title;
            listaInformacion.appendChild(item);
        }
    })
    .catch(function(error){
        console.log(error);
    })
}