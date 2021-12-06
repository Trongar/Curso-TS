let productos = [
    {
        nombre: "Computadora",
        marca: "Asus",
        precio:25000
    },{
        nombre: "Cafetera",
        marca: "Coffy box",
        precio:3000
    },{
        nombre: "Tostadora",
        marca: "BurnOut",
        precio:1200
    },
];

function conseguirProducto(){
    return new Promise ((resolve, reject) => {
        // console.log("Cargando productos...");
        setTimeout(() => {
            resolve(productos);
            // reject(Error("Ha ocurrido un error"));
        }, 3000);
    });
}
function conseguirNombre(){
    return new Promise ((resolve, reject) => {
        // console.log("Cargando nombre...");
        setTimeout(() => {
            resolve("Edgar Ulises Sánchez Izquierdo");
            // reject(Error("Ha ocurrido un error"));
        }, 3000);
    });
}
async function getMisProductos(){
    try {
        console.log("Cargando Información");
        let informacion = await Promise.all([conseguirProducto(),conseguirNombre()]);
        // let misProductos = await conseguirProducto();
        // let miNombre = await conseguirNombre();
        console.log(informacion);
    } catch (error) {
        console.log(error.message);   
    }
}

getMisProductos();