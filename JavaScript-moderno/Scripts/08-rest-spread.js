//rest - spread
// spread sirve para llamar todos los elementos dentro de un array
let heroes = ["Batman", "Spiderman", "Superman"];

// Forma clasica
// console.log(heroes[0],heroes[1],heroes[2]);

// Forma spread
// console.log(...heroes);
function mostrarHeroes(heroe1, heroe2){
    console.log(`
    **********Heroes**************
        -${heroe1}
        -${heroe2}
    `)
}

// mostrarHeroes(...heroes);

let superheroes = ["Flash", "Irionman", ...heroes];
// console.log(...superheroes);


// REST sirve para resivir datas indefinidamente en forma de array
// Forma clasica
// function peliculas(pelicula1, pelicula2){
//     console.log(pelicula1)
//     console.log(pelicula2)
// }

// Forma rest

function peliculas(...muchasPeliculas){
    for (const i in muchasPeliculas) {
        if (Object.hasOwnProperty.call(muchasPeliculas, i)) {
            console.log(i, muchasPeliculas[i]);
        }
    }
}
peliculas("VIVO", "LIFE", "Destino Final")