// arrays
let personas:string[] = ['Edgar', 'Jorge', 'Cesar'];
personas.push("Gaby");

// console.log(personas);

let years:number[] = new Array(23, 12, 34, 13);

// console.log(years);

// tuplas

let pelicula:[string, boolean, number] = ["Batman Begins", true, 1990];
// pelicula.push("hola");
// console.log(pelicula);

// enum

enum DatosPersonales{
    nombre = "Edgar",
    dni = 12311231,
    direccion = "Casa 3",
    ciudad = "Jalpa de Méndez"
};

// DatosPersonales.nombre = "Hola";

console.log(DatosPersonales.nombre, DatosPersonales.dni)