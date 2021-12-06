// Molde
class Coche{
    // El constructor es el metodo por el
    // cual se defienen los atributos de 
    // nuestra clase
    constructor(marca = "Mercedes",
    modelo = "Clase A", 
    color = "Negro", 
    velocidad = 0, 
    year = 2021){
        // Propiedades
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.year = year;
    }
    // Metodos
    // Despues del constructor se declaran los
    // metodos, estos son las funcionalidades de
    // nuestro objeto
    subirVelodcidad(){
        this.velocidad++;
    }
    bajarVelocidad(){
        this.velocidad--;
    }
    // Getters y Setters
    // Estos metodos son para recoger o 
    // asisgnar los valores del objeto
    // setMarca(marca){
    //     this.marca = marca;
    // }
    // getMarca(){
    //     return this.marca;
    // }
    // Metodos set y get
    set asignaMarca(marca){
        this.marca = marca;
        return marca;
    }
    get verMarca(){
        return this.marca;
    }
    // Metodos estaticos
    static saludar(nombre){
        return "Hola " + nombre;
    }
}

// Crear Objeto

const coche = new Coche("Audi", "C4", "Blanco", 23, 2021);

// coche.setMarca("Jeep");
coche.asignaMarca="Toyota";
console.log(coche.marca, coche.modelo, coche.velocidad, "Km/h");
// const miCoche = new Coche();
// console.log(miCoche.marca, miCoche.modelo, miCoche.color, miCoche.velocidad, miCoche.year);