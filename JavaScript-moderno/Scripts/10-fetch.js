fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(datos => {
    console.log(datos[82].title)
})
.catch(error => console.log(error.message));