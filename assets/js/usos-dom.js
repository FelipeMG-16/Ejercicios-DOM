//**DOM Intefaz que conecta HTML con JS para hacer cambios

//Cuando trabajamos con DOM, hacemos referencia dentro del HTML
//Para seleccionar ID usamos "#"
//Para seleccinar una clase usamos "."


//querySelector para seleccionar un elemento por id o clases.

let subtitle = document.querySelector('#subtitle'); //Hacemos referencia al elemento "subtitle" que está dentro de nuestro HTML
let parrafo = document.querySelector('#parrafo'); //Obtenemos el valor del contenido de nuestro "párrafo"

console.log(subtitle);


// Con "text.Content" podemos acceder al valor del elemento HTML
// También podemos cambiar el valor asignando un nuevo valor
console.log(subtitle.textContent);
subtitle.textContent = 'Nuevo valor'; // Usamos "textContent" para escribir en el HTML

// "classList.add" ('mi clase') lo utilizamos para agregar clases al elemento
subtitle.classList.add('red');

// "classList.remove" ('mi clase') lo utilizamos para remover clases al elemento
subtitle.classList.remove('red');

// Creamos una constante para declarar nuestro arreglo
const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Ratón', 'Zorro']

const list = document.querySelector('#list'); // Hacemos referencia al "id" de nuestro HTML, en este caso "list"

animales.push("Otro gato"); //Usamos "push" para agregar otro elemento a nuestro arreglo "animales"

//for.Each se usa en objetos o arreglos, recorre todos los elementos del arreglo (n cantidad de valores)

//funciones anónimas = funciones que no tienen nombre

animales.forEach(function (animal) { //Recorre todo el arreglo con forEach (animal)

    let item = document.createElement('li'); //Creamos un li dentro de nuestra lista (<li>Aquí escribirá el elemento</li>)
    item.textContent = animal; //Asignamos al li un valor del arreglo

    // Agregar un hijo a la lista con el valor de "item"
    list.appendChild(item)

});


//***************  ¿Cómo leer el ForEach? (Explicacín Yanni)*************************
//forEach es como otros ciclos los cuales nos permiten recorrer, arreglos, listas u otros elementos los cuales pueden ser iterados (Entiendase iterado como algo que se puede recorrer por posiciones).
//SINTAXIS  de ForEach:
//NombreDelArreglo.forEach ( function ( CualquierVariableNoDeclarada ) ){
//    Código a ejecutar dentro del ciclo
//}
//Imaginen que "CualquierVariableNoDeclarada" es como un elemento que irá recorriendo cada casilla del arreglo (cada posición del arreglo) por lo que tomará todos los valores desde la posición 1 hasta la n, siendo n la ultima posición del arreglo
//animales.forEach(function(animal){
//    let item = document.createElement("li"); --> Esto nos creará una etiqueta "li" en la lista, es decir, otra opción por así decirlo 
//   item.textContent = animal; --> A esa li le agregará el valor del animal. 
//}); 