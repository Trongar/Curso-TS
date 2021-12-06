// Tipos de datos

let texto:string = "Hola mundo";

texto = "hola";

// texto = 3;

let numero:number = 2;
numero = 12.3;
numero = 2,1;
// numero = "1"

let verdadero:boolean = true;

verdadero = false;

// verdadero = 0;   

let normal:any = 121312;
normal = true;
normal = "asta pronto";


let persona:string = "Edgar Ulises";
// persona = undefined;
// persona = null;


let cualquiera:unknown = "Soy string";
cualquiera = true;
cualquiera = 1;

// let miNumero:number = cualquiera;

if (typeof cualquiera === "number") {
    let miNumero:number = cualquiera;
}