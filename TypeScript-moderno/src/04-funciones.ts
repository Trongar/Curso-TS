function saludo (nombre:string):string{
    return `Hola ${nombre}`
}


function mostrarFecha():void {
    console.log("10 / 12 / 2021");
}

function finApp():never{
    throw new Error("La aplicacion ya terminó");
}
mostrarFecha();
console.log(saludo("Edgar"));

// finApp();

function mostrarPais(pais:string="Chile", continente?:string) {
    return pais+" "+continente;
}

console.log(mostrarPais("Mexico"));
console.log(mostrarPais());
