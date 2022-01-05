abstract class Coche{

    
    // marca:string;
    // modelo:string;
    // year:number;
    // color:string;
    // arrancado:boolean;

    // constructor(
    //     marca:string = "Renault",
    //     modelo:string = "Clio",
    //     year:number = 2_000,
    //     color:string = "rojo",
    //     arrancado:boolean = false
    // ){
    //     this.marca  = marca;
    //     this.modelo  = modelo;
    //     this.year = year;
    //     this.color = color;
    //     this.arrancado = arrancado;
    // }
    
    constructor(
        public marca:string = "Renault",
        public modelo:string = "Clio",
        private year:number = 2_000,
        private color:string = "rojo",
        public arrancado:boolean = false
    ){}

    public arrancar():void{
        this.arrancado = true;
    }

    public apagar():void{
        this.arrancado = false;
    }
    public set setColor(color:string){
        this.color = color;
    }
    public get getColor():string{
        return this.color;   
    }
    static saludar():string{
        return "Hola que tal";
    }
}

// let miCoche = new Coche();
// console.log(miCoche);

// console.log(Coche.saludar());

class Camioneta extends Coche{
    constructor(
        marca:string = "Renault",
        modelo:string = "Clio",
        year:number = 2_000,
        color:string = "rojo",
        arrancado:boolean = false
        ){
        super();
    }
}


// let miCamioneta = new Camioneta("Jeep", "1990", 2000 ,"negro");
// console.log(miCamioneta);