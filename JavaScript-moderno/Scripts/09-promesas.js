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
        console.log("Cargando productos...");
        setTimeout(() => {
            resolve(productos);
            // reject(Error("Ha ocurrido un error"));
        }, 500);
    });
}

function productoComprado(){
    return new Promise((resolve, rejecet) => {
        console.log("Haciendo la compra");
        setTimeout(()=>{
            resolve({
                producto: "Computadora Gamer",
                cliente: "Edgar Ulises"
            });
        }, 1000);
    });
}

conseguirProducto()
.then((items) =>{
    console.log("Productos disponibles: ", items);
    return productoComprado();
})
.then(venta => {
    console.log("Producto comprado: ", venta);
})
.catch(error => console.log(error.message))
.finally(()=>console.log("Promesa Finalizada"));