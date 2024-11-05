/*axios.get("https://jsonplaceholder.typicode.com/posts")
.then(respuesta => console.log(respuesta.data))
.catch(error => console.log(error))*/


let datos = {
    title :"NUEVO POST",
    body: "MI CONTENIDO"
}

axios.post("https://jsonplaceholder.typicode.com/posts", datos)
.then(respuesta => console.log("EL post fue creado con exito", respuesta.data))
.catch(error => console.log("Error al publicar", error))




let miToken = "Este_es_el_token";

axios.interceptors.request.use((config)=>{
    config.headers.Authorization = "Bearer $(miToken)";
    return config;
},(error)=>{
    return Promise.reject(error);
}
)

axios.interceptors.response.use((respuesta) =>{
    respuesta.data.customField = "Nuevo Campo";
    return respuesta;
},(error)=>{
    return Promise.reject(error);
})

let pedido1 = axios.get("https://api.ejemplo.com/data1");
let pedido2 = axios.get("https://api.ejemplo.com/data2");
let pedido3 = axios.get("https://api.ejemplo.com/data3");

axios.all([pedido1, pedido2, pedido3])
.then(axios.spread((respuesta1, respuesta2, respuesta3)=>{
    //codigo

}))

.catch(error =>{
    //manejar errores
})