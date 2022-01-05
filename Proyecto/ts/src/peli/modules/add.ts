import Storage from "./storage.js";
import List from "./list.js";
export default class Add{
    storage:Storage;
    list:List;
    title:any;
    description:any;
    saveBtn:any;
    // conseguir los elementos del DOM a utilizar
    constructor() {
        // Crea objeto
        this.storage = new Storage();
        this.list = new List();

        // Conseguir los elementos del DOM
        this.title = document.querySelector("#title");
        this.description = document.querySelector("#description");
        this.saveBtn = document.querySelector("#save");
    }
    peliSave(){
        this.saveBtn.onclick = (e:any) => {
            e.preventDefault() ;
            // conseguir datos actualizados
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log (pelis, lastId)
            // datos a guardar
            let title:string = this.title.value;
            let description:string = this.description.value;
            // console.log("Enviaste el formulario", title, description);
            // validación
            if (title == "" || description == "") {
                alert ("Completa correctamente el formulario!!!");
            }else{
                // Crear objeto a guardar
                let peli = {
                    id:lastId++,
                    title,
                    description
                };

                // Añadir al array de objetos
                pelis.push(peli);
                // Guardar Objeo
                this.storage.save(pelis);
                // Actualizar Objeto
                // this.list.addToList(peli, pelis);
                this.list.show(pelis);
            }
            return false;
        }
    }
}