let nombres = [
    "Edgar",
    "Jorge",
    "Cesar",
    "Gabriela",
    "Connie"
];
// For clasico
for (let i = 0; i < nombres.length; i++) {
    // console.log( nombres[i]);
}
// For of
for (let nombre of nombres) {
    // console.log(nombre);
}
// For in
for (let indice in nombres) {
    // console.log(indice, nombres[indice]);        
}
// For each

// nombres.forEach((nombreActual, indice) => console.log(indice, nombreActual));

// Iterables
// Iterar String
let cadenaTexto = "Esto es una cadena de Texto"
for (let letra of cadenaTexto) {
    // console.log(letra);
}

// Iterar un array
const iterable = nombres[Symbol.iterator]();
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());

// Iterar JSON
let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "Invierno"
}
// Los objetos de JSON no son iterables por lo que
// estos deben ser  convertidos para ser usados en
// for of
// fruta[Symbol.iterator] = function(){
//     let indice = 0;
//     let valores = Object.values(this);
//     return {
//         next(){
//             if (indice >= valores.length) {
//                 return{
//                     done: true,
//                     value: undefined
//                 };
//             }
//             return{
//                 done: false,
//                 value: valores[indice],
//                 indice: indice++
//             }
//         }
//     }
// }



// for (let propiedad of fruta){
//     // console.log(propiedad);
// }

// aunque es mas facil y practico usar for in
for (let indice in fruta) {
    console.log(indice, fruta[indice]);
}