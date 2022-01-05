function proyectar(constructor:Function) {
    constructor.prototype.hacerProyeccion = function (activar:boolean):void {
        if (activar) {
            console.log("Proyectando Pelicula "+this.title);        
        } else {
            console.log("Cine Cerrado");   
        }
    }
    // console.log("Proyectando la pelicula");
}

@proyectar
class Pelicula {
    constructor(
        public title:string,
        public genero:string,
        public proyectando:boolean
    ) {
        
    }
}

let batman = new Pelicula("Batman", "Accion", true);
(<any>batman).hacerProyeccion(true);