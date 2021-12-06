let frutas = ["Manzana", "Pera", "Naranja", "Sandia"];
// forma clasica
// manzana = frutas[0];
// peras = frutas[1];
// naranja = frutas [2];
// sandia = frutas [3];

// desestructuracón
let [manzana, pera, naranja, sandia] = frutas; 

// desestructurar string
let usuario = "Edgar Ulises Sánchez Izquierdo 9141950396";
let [nombre1, nombre2, apellido1, apellido2, numero] = usuario.split(" ");

// desestructuracion de variables
let lenguaje = "JS", framework, editor = "VSC";