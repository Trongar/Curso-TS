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
// Dentro de JSON se pueden almacenar colecciones
// en forma de objetos, siendo estos una abstracción
// de la vida real
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
// Dentro de un JSON podemos definir un objeto
// darle propiedades, e incluso darle metodos
// los objetos JSON pueden ser manipulados de muchas formas
// se puede cambiar el valor de sus propiedades
// por ejemplo podemos quitarle su valor
// con un objeto null
pelicula.genero = null;
// a su vez, tambien podemos eliminar por completo
// una propiedad usando el prefijo delete
delete pelicula.anio;
// a su vez tambien podemos añadir propiedades nuevas
// lo unico que tenemos que hacer es pasar el nombre
// de la propiedad dentro de corchetes o despues un .
pelicula.pais = "USA";
// peliculas.pais = "USA";
// console.log("titulo" in pelicula);

// tambien podemos recorrer todas las propiedades de
// un objeto JSON con un bucle de for
// declaramos un indice y podemos usarlo para recorrer
for (let propiedades in pelicula) {
    // podemos guardar el indice algual en otra variable
    let datoActual = pelicula[propiedades];
    // tambien podemos comparar las propiedades
    if (datoActual !== null && typeof datoActual !== "function") {
        // console.log(datoActual);
    }

}

// Symbol es una variable para asignar valores unicos
// esto se refiere a que apesar de que do variables
// tengan el mismo valor, estas son reconocidas como distinta
let animal = Symbol("tigre");
let animal2 = Symbol("tigre");

// console.log(animal);
// console.log(animal2);
// console.log(animal == animal2);
// otra opcion que tenemos con symbol es añadir
// propiedades que se llamen igual, pero que tengan
// un valor distinto, ademas de que estas propiedades
// se encuentran oculas, es decir que si la llamamos
// la consola no nos mostrara el nombre de dicha
// propiedad del objeto.
let user = {
    id: 1,
    nombre: "Edgar Ulises",
    web: "Trongar.dev"
};
// para poder añadir la propiedad nueva al objeto
// debemos declararala previamente
let id = Symbol('id');
// con eso listo podemos asignarle un valor
user[id] = 8;
// console.log(user.id, user[id]);


// Concatenacion opcional

// en algunos casos desearemos optener el valor 
// de una propiedad de algun objeto
// dicho objeto o propiedad puede o no existir
// por lo que se puede decir que se definicion
// es ambigua, para solventar esto en JS
// tenemos la concatenacion obcional
// la cual consiste en verificar si la propiedad esta
// definidia o no, para hacer esto solo debemos
// añadir un ? despues da la variable
variable = {}
// console.log(variable.valor?.propiedad);