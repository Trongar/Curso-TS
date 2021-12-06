// Las funciones clasicas se declaran de esta forma
// se declara que es una función, su nombre y
// entre parentesis sus parametros
// en los parametros podemos definir un valor por defecto
// este se verá cuando invoquemos el metodo
// pero no le asignemos valor al parametro
function saludo (persona="Edgar"){
    return "hola te mando un saludo "+persona;
}
// console.log(saludo("Gaby"));
// console.log(saludo("Jorge"));
// console.log(saludo("Cesar"));
// console.log(saludo("Erick"));
// console.log(saludo());

// Funciones anonimas
let saludo2 = function(nombre){
    // return "Hola, te mando un saludo "+ nombre;
};
// console.log(saludo2("Carlos"));

// Funciones de flecha
let saludo3 = nombre => "Hola te mando un saludp " + nombre;

// console.log(saludo3("Michael"));


// Las funciones de flecha a pesar de ser mucho mas simples
// que las funciones normales, presentan algunas
// limitaciones, por ejmplo, a una funcion de flecha
// no podemos invocarle el elemento "this" o "super"
// ni como definición de parametro, ni tampoco como
// metodo dentro de su caja
// JSON
let tienda ={
    nombre: "GAME",
    videojuegos:["GTA", "WWE", "fifa"],
    mostrar1: function(){
        console.log(this.nombre);

    },
    mostrar2(){
        this.videojuegos.forEach(juego => {
            console.log(juego);
        });

    },
    mostrar3: () =>{
        console.log(tienda.nombre);
    }
}

// tienda.mostrar1();
// tienda.mostrar2();
// tienda.mostrar3();