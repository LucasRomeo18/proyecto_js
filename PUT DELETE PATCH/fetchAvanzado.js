let usuario = "usuario01";
let pass = "123456";
let token = "miToken";

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "GET",
    credentials: "include",
    cache: "only-if-cached",
    redirect:"manual", //nos devuelve el codigo de la redirección
    headers:{
        /*"Authorization": "basic " + btoa(usuario + ":" + pass),  // Autorizacion Basic  se necesitan usuario y pass */
        "Authorization": "Bearer" + token,  // Autorizacion Bearer, funciona con un token, no es necesarios el usuario y pass
        "Content-Type": "application/json"
    }

})
.then(response => {
    if(response.type === "opaqueredirect"){
        let nuevaUbicacion =response.headers.get("Location");
        console-log("redirigiendo a: ", nuevaUbicacion);
    }else{
        return response.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error("Error: ", error));