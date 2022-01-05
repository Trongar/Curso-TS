import deleteOfList from "./delete.js";
import edit from "./edit.js";
export default class List {
    constructor() {
        this.content = document.querySelector("#content");
    }
    // Plantilla de pelicula
    template(peli) {
        return `<article class="peli-item" id="peli-${peli.id}">
        <h3 class="title">${peli.title}</h3>
        <p class="description">${peli.description}</p>
        <button class="edit" data-id="${peli.id}">Editar</button>
        <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>`;
    }
    // addToList(peli:any, listPelis:any[]){
    //     let peliHTML = this.template(peli);
    //     // añadir pelicula al contenido
    //     this.content.innerHTML += peliHTML;
    //     // mostrar listado
    //     this.show(listPelis)
    // }
    show(pelis) {
        // limpiarcontent
        this.content.innerHTML = "";
        // Recirrer y mostrar los objetos
        pelis.forEach(peli => {
            this.content.innerHTML += this.template(peli);
        });
        // funcionalidad de boton de borrado
        deleteOfList();
        // funcionalidad de boton de editado
        edit();
    }
}
