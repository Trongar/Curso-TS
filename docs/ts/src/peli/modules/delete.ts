import Storage from "./storage.js";
import List from "./list.js";
export default function (){
    // Crear Objetos
    const storage = new Storage();
    const list = new List();

    // Datos peliculas disponibles
    let pelisStored = storage.getData();
    let pelisViewed = document.querySelectorAll(".peli-item");

    // Recorrer peliculas mostradas
    // console.log(pelisViewed);
    pelisViewed.forEach(peli=>{
        // capturar boton
        let deleteBtn:any = peli.querySelector(".delete");
        // aplicar evento
        deleteBtn.onclick = function(){
            // conseguir id
            const peliId = this.getAttribute('data-id');
            // filtrar array
            const newPelisStored = pelisStored.filter((peli:any) => peli.id !== parseInt(peliId));
            console.log(pelisStored, newPelisStored);
            // Actualizar datos
            storage.save(newPelisStored); 
            // Actualizar vista
            list.show(newPelisStored);  

        } ;
    });
}