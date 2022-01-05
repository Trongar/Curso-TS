import Storage from "./storage.js";
import List from "./list.js";
export default function () {
    // crear los objetos
    const storage = new Storage();
    const list = new List();
    // conseguir elementos del DOM
    let content = document.querySelector("#content");
    let searchBtn = document.querySelector("#search");
    let searchfield = document.querySelector("#searchField");
    searchBtn.onclick = (e) => {
        e.preventDefault();
        // conseguir el texto del campo de busqueda
        let wanted = searchfield.value;
        // conseguir los datos actualizados
        let pelisStored = storage.getData();
        // aplicar filtro
        const newPelis = pelisStored.filter((peli) => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });
        // mostrar peliculas
        if (newPelis.length <= 0) {
            content.innerHTML = "<div><h2>no hay pelis</h2></div>";
        }
        else {
            list.show(newPelis);
        }
        return false;
    };
    // aplicar evento al formulario
}
