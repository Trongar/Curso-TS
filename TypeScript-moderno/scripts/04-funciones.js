"use strict";
function saludo(nombre) {
    return "Hola ".concat(nombre);
}
function mostrarFecha() {
    console.log("10 / 12 / 2021");
}
function finApp() {
    throw new Error("La aplicacion ya terminó");
}
mostrarFecha();
console.log(saludo("Edgar"));
// finApp();
function mostrarPais(pais, continente) {
    if (pais === void 0) { pais = "Chile"; }
    return pais + " " + continente;
}
console.log(mostrarPais("Mexico"));
console.log(mostrarPais());
