import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
import Search from "./modules/search.js";
export default class App{
    add:Add;
    list:List;
    storage:Storage;
    constructor() {
        // inicializar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }
    load(){
        // añadir peliculas
        this.add.peliSave();
        // conseguir arreglo de objetos
        const pelis = this.storage.getData();
        // listar peliculas
        // console.log(pelis);
        this.list.show(pelis);
        // buscar peliculas
        Search();
        // console.log("la aplicacion de peliculas esta iniciada");
    }
}