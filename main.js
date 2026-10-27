fetch('https://hp-api.onrender.com/api/characters')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    
    console.log(data);    
    personajes= data
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
    <p> ${personaje.name}</p>
    <img class="imagen" src="${personaje.image}">
    <div class= "tipodospuntos"> 
      <p>House:</p>
      <p>${personaje.house}</p>
    </div>
    <div class= "tipodospuntos"> 
      <p>Patronus:</p>
      <p>${personaje.patronus}</p>
    </div>
    <div class= "tipodospuntos"> 
      <p>Ancestry:</p>
      <p> ${personaje.ancestry}</p>
    </div>
    <div class= "tipodospuntos"> 
      <p>Species:</p>
      <p>${personaje.species}</p>
    </div>
    <ul>
      <p>Wand:</p>
      <li> Madera:  ${personaje.wand.wood}</li>
      <li> Núcleo:  ${personaje.wand.core}</li>
      <li> Longitud:  ${personaje.wand.length}</li>
    </ul>
  </article>
  `
  });
}


