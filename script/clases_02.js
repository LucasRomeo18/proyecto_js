class Papel {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

let Papel_A = class{                         //Esta es una clase anonima, toma el mismo nombre que la variable
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

let Papel_B = class Papel_X{                         //Esta es una clase nombrada
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho; 
    }
}