// Operaciones ternarias
// Las operaciones ternarias son secuencias de codigo
// if else, las cuales se encuentran simplificadas
// así evitando que una operación simple ocupe
// mas espacio del que necsita, siendo así mas facil
// de leer con claridad el codigo
let persona = ["Edgar", 20];
// operador clasico
// if (persona[1] >= 18) {
//     console.log("Es mayor de edad");
// }else{
//     console.log("Es menor de edad");
// }


// operador tenario
// console.log((persona[1] >= 18) ? 
// "Es mayor de edad" : 
// "Es menor de edad");



// Diferencias entre == con === y != con !==
// Las principal diferencia entre esto es que
// == solo compara valores, es decir que no toma
// en cuenta el tipo de dato de los factores
// que esta comparando
// a diferencia de ===, que este ultimo compara
// valor y tipo de dato
// la misma logia que se aplica con != y !==
let condicion = 80 === "80";

// console.log(condicion ? "son iguales" : "son distintos");