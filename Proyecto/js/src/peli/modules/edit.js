import Storage from "./storage.js";
import List from "./list.js";
export default function () {
    // crear objetos
    const storage = new Storage();
    const list = new List();
    // conseguir datos de las peliculas
    let pelisStored = storage.getData();
    let pelisViewed = document.querySelectorAll(".peli-item");
    // recorrer peliculas mosrtadas
    pelisViewed.forEach(peli => {
        // seleccionar el botón editar
        let editBtn = peli.querySelector(".edit");
        // asignar evento click
        editBtn.onclick = function () {
            // conseguir id de la pelicula
            var _a, _b;
            const peliId = parseInt(this.getAttribute("data-id"));
            // quitar botones antiguos
            editBtn.remove();
            let removeBtn = peli.querySelector(".delete");
            removeBtn.remove();
            // añadir html bajo el botón
            let peliEditHtml = `
            <div class="editForm">
                <h3 class="title">Editar pelicula</h3>
                <form>
                    <input type="text" class="editedTitle" value=${(_a = peli.querySelector(".title")) === null || _a === void 0 ? void 0 : _a.innerHTML}>
                    <textarea class="editedDescription">${(_b = peli.querySelector(".description")) === null || _b === void 0 ? void 0 : _b.innerHTML}</textarea>
                    <input type="submit" class="update" value="Actualizar">
                </form>
            </div>`;
            peli.innerHTML += peliEditHtml;
            // selecionar boton actualizar
            let updateBtn = peli.querySelector(".update");
            // aplicar evento clik
            updateBtn.onclick = function (e) {
                e.preventDefault();
                // buscar indice de la pelicula
                let index = pelisStored.findIndex((peli) => peli.id === peliId);
                // alert(index);
                // guardar objeto en el indice
                let peliTitle = peli.querySelector(".editedTitle");
                // console.log(peliTitle);
                let peliDescription = peli.querySelector(".editedDescription");
                pelisStored[index] = {
                    id: peliId,
                    title: peliTitle.value,
                    description: peliDescription.value
                };
                // actualizar localstorage
                storage.save(pelisStored);
                // volver a mostrar el listado
                list.show(pelisStored);
                return false;
            };
        };
    });
}
