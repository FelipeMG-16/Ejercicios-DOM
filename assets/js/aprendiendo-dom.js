
//*Tomaremos el valor del parrafo dentro de nuestro HTML, para asignarlo a la variable "parrafos"*/

var parrafos = document.getElementsByClassName('parrafo'); //Aquí ya almacenamos la información del parrafo de nuestro HTML a la variable

console.log(parrafos); //Para mostrar la clase "parrafos" en consola

// Ahora, modificamos el contenido de nuestro párrafo dentro del mismo HTML, usando "[]" para seleccionar el elemento a cambiar

document.getElementsByClassName('parrafo')[0].innerHTML = 'Parrafo cambiado correctamente';

document.getElementById('parrafo2').innerHTML = "Soy el nuevo parrafo 2"; //Otra modificación de parrafo, en este caso con el id "parrafo2"


/*El id del elemento no tiene que repetirse dentro del código, ya que de ser así arrojará muchos errores//
Si utilizamos "getElements" no colocamos el punto dentro de nuestra clase
Si utulizamos "querySelector" debemos colocar el punto antes de la clase
Si tenemos más elementos con la mismca clase, "querySelector" elige el primer elemento
Si queremos afectar más de un elemento, utilizamos "querySelectorAll" y con [] elegimos cual elemeto modificar
Si le colocamos # a nuestra clase usando "querySelect" hacemos la misma función que un "getElementById" */

document.querySelectorAll('.parrafo')[0].textContent = 'Nuevo texto de parrafo';
document.querySelector('#parrafo2').textContent = 'Aqui usamos el símbolo de número';

//Imprimimos en consola los cambios realizados en nuestro HTML
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);