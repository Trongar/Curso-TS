import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    // crear objetos
    const storage = new Storage();
    const list = new List();
    // conseguir datos de las peliculas
    let pelisStored:any = storage.getData();
    let pelisViewed = document.querySelectorAll(".peli-item");
    // recorrer peliculas mosrtadas
    pelisViewed.forEach(peli=>{

        // seleccionar el botón editar
        let editBtn:any = peli.querySelector(".edit");
        
        // asignar evento click
        editBtn.onclick = function(){
            // conseguir id de la pelicula

            const peliId = parseInt(this.getAttribute("data-id"));

            // quitar botones antiguos
            editBtn.remove();
            let removeBtn:any = peli.querySelector(".delete");
            removeBtn.remove();

            // añadir html bajo el botón
            let peliEditHtml = `
            <div class="editForm">
                <h3 class="title">Editar pelicula</h3>
                <form>
                    <input type="text" class="editedTitle" value=${peli.querySelector(".title")?.innerHTML}>
                    <textarea class="editedDescription">${peli.querySelector(".description")?.innerHTML}</textarea>
                    <input type="submit" class="update" value="Actualizar">
                </form>
            </div>`;

            peli.innerHTML += peliEditHtml;
            
            // selecionar boton actualizar
            let updateBtn:any = peli.querySelector(".update");
            
            // aplicar evento clik
            updateBtn.onclick = function(e:any){
                e.preventDefault();
                
                // buscar indice de la pelicula
                let index = pelisStored.findIndex((peli:any) => peli.id === peliId);
                // alert(index);
                
                // guardar objeto en el indice
                let peliTitle:any = peli.querySelector(".editedTitle");
                // console.log(peliTitle);
                let peliDescription:any = peli.querySelector(".editedDescription");
                pelisStored[index]={
                    id:peliId,
                    title:peliTitle.value,
                    description:peliDescription.value
                };
                
                // actualizar localstorage
                storage.save(pelisStored);
                
                // volver a mostrar el listado
                list.show(pelisStored);
                return false;
            };
        }
    });
}