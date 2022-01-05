interface VideoJuego{
    titulo:string;
    categoria:string;
    edad:number;
    duracion?:number;
    lanzado?:boolean;
};

let gta:VideoJuego = { 
    titulo:"GTA V",
    categoria:"Accion",
    edad:18,
    duracion:200,
    lanzado:true
};
console.log(gta)