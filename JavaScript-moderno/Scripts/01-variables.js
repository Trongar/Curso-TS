//EcmaScript 2021 / ES21 / ES.NEXT

// var variables globales

var nombre = "Edgar Ulises Sánchez Izquierdo";

function mostrarNombre() {
    var nombre = 'pepito';
    //     console.log('Dentro: ', nombre);
}
// mostrarNombre();
// console.log('Fuera: ', nombre);

// let variables restringidas en bloques

let pais = 'México';

function mostrarPais() {
    //     console.log(pais);
}

// mostrarPais();

if (pais == 'México') {
    let continente = 'America';
    //     console.log(continente);
}
// // las variables let no son accesibles fuera de su bloque
// // console.log('fuera: ', continente);

for (let contador = 0; contador <= 5; contador++) {
    //     console.log(contador);
}
// La variable contador no ocupa espacio si se delcara con led
// pero esta no sera accesible fuera de su bloque
// console.log('Contador: ', contador);

// const los datos const no pueden ser modificados tras su declaración

const edad = 20;
// console.log(edad);
// const no puede ser modificado
// edad = 21;
// console.log(edad);
const lugarNacimiento = 'Tabásco';
const fechaNacimiento = '2021';
// console.log(lugarNacimiento, fechaNacimiento);