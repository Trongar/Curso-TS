// tipos de datos de JS
// String
let string = "Esto es un string";
// Las variables que contengan datos con "". '' o ``
// automaticamente seran tomadas como String

// Number
let numero = 14;
let decimal = 1.3;
// Las variables que contenga solo numeros son Number
// pueden ser numeros enteros o con decimales

// Boolean
// Un booleano es un tipo de dato que sirve para decir
// que algo es verdadero o falso, o en leguaje maquina
// 1 o 0
let verdadero = true;
let falso = false;
let uno = Boolean(1);
let cero = Boolean(0);
// las entradas de las variables booleanas son true o false
// verdadero o falso respectivamente
// Js tiene preferencia de Number sobre boolean
// por lo que es importante que si deseamos hacer
// booleanos con 1 o 0 los coloquemos dentro de la funcion
// Boolean(numero);


// Array
// Los Array son colecciones de variables
paises = ['Mexico', 'España', 'Colombia', 'China'];
// Dentro de un array se pueden almacenar mas de 1 variable
// todas las variables almacenadas optienen una cardinalidad
// esta nos sirve para buscar la posicion en la que 
// se encuentra el dato que estamos buscando
// dicha cardinalidad se comienza desde el dato 0
// los array tambien pueden ser vistos como vectores
// gracias a su capacidad de tener n dimensiones

// Null
// las variables Null son objetos nulos o vacios
let vacio = null;
// estas variables no tienen ningun valor, pero
// es importante recalcar que dichas variables estan
// asignadas con un valor vacio
// al ser objetos dentro de JS son reconocidas como tal

// Undefined
// las variables undefined no estan definidas
let indefinido = undefined;
// que una variable no este definida significa que
// esta no tiene ningun valor almacenado, ademas
// dentro de Js que no tiene un tipo asignado
// pero el espacio de memoria si es apartado


// console.log(
//     typeof string,
//     typeof numero, typeof decimal,
//     typeof verdadero, typeof falso, typeof uno, typeof cero,
//     typeof paises, typeof paises[0],
//     typeof vacio,
//     typeof indefinido);

// JSON - JavaScript Object Notation
// Dentro de JSON se pueden almacenar colecciones de datos
let pelicula = {
    titulo: "Space Jam",
    genero: "Animación",
    anio: 1996,
    director: "Nicolas",
    mostrar: function() {
        return `
        *******La Pelicula de la semana*********
        ${this.pelicula} - ${this.genero}
        `;
    }
};
console.log(pelicula.mostrar());
// Dentro de un JSON podemos definir un objeto
// darle propiedades, e incluso darle metodos