// Strings clasicos
let nombre = 'Edgar';
let apellidos = 'Sánchez';
let profesion = 'Desarrollador Web';
let nya = nombre + ' ' + apellidos + '\n' + profesion;

console.log(nya);

// Template Strings
let plantilla = `${nombre} ${apellidos}
${profesion}`;
console.log(plantilla);

// HTML
// Los estrings con `` nos pueden servir para almacenar sentencias html 
// que posteriormente podremos insertar dentro del DOM con js
function ficha(nombre, apellidos, profesion) {
    let fichaTecnica = `
    <div class = "ficha">
        <h2>${nombre} ${apellidos}</h2>
        <h3>${profesion}</h3>
        <p>Imprime cosas en 3d</p>
    </div>
    `;
    return fichaTecnica
}
// para insertar multiples elementos desde un cosntrucctor debemos
// sobre escribir la bariable que lo almacena sumando el nuevo valor
// mas el anterior para completar sin perder datos
let cajaFicha = document.createElement('section');
cajaFicha.innerHTML += ficha("Edgar", "Sánchez Izquierdo", "desarrolador");
cajaFicha.innerHTML += ficha("Hector", "Trinidad", "Tecnico");
cajaFicha.innerHTML += ficha("Jorge", "Alamilla", "desarrolador");

// document.body.appendChild(cajaFicha);
document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(cajaFicha);
}, false)