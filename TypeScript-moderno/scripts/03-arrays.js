"use strict";
// arrays
var personas = ['Edgar', 'Jorge', 'Cesar'];
personas.push("Gaby");
// console.log(personas);
var years = new Array(23, 12, 34, 13);
// console.log(years);
// tuplas
var pelicula = ["Batman Begins", true, 1990];
// pelicula.push("hola");
// console.log(pelicula);
// enum
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Edgar";
    DatosPersonales[DatosPersonales["dni"] = 12311231] = "dni";
    DatosPersonales["direccion"] = "Casa 3";
    DatosPersonales["ciudad"] = "Jalpa de M\u00E9ndez";
})(DatosPersonales || (DatosPersonales = {}));
;
// DatosPersonales.nombre = "Hola";
console.log(DatosPersonales.nombre, DatosPersonales.dni);
