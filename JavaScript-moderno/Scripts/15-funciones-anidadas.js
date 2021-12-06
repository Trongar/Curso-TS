let nombre = "Edgar";
function mostrarNombre() {
    let apellido = "Sánchez";
    function mostrarApellido() {
        return nombre + " " + apellido;        
    }
    return mostrarApellido;
}
console.log(mostrarNombre()())