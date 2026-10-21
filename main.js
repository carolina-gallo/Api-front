fetch('https://hp-api.onrender.com/api/characters')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    
    console.log(data);    
    personajes= data.results
    mostrarPersonajes(personajes)
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });


let  personajes = [];


const contenedor = document.getElementById('mainContainer');
const searchInput =document.getElementById('searchInput')



function mostrarPersonajes (listaPersonajes){
    contenedor.innerHTML = '';

listaPersonajes.forEach(personaje => {
    contenedor.innerHTML +=
`
  <article class= "cadaPersonaje">
    <img src="${personaje.image}">
    <h1"> ${personaje.name}</p>
    <p class= "casa"> ${personaje.house}</p>
    <p class= "patronus"> ${personaje.patronus}</p>
    <p class= "sangre"> ${personaje.ancestry}</p>
    <p class= "especie"> ${personaje.species}</p>
    <p class= "varita"> ${personaje.wand}</p>
    <p class= "nombresalternativos"> ${personaje.alternate_names}</p>
  </article>
  `
  });
}


