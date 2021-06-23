//*Con el evento onload podemos ejecutar acciones justo cuando se han terminado de cargar todos los elementos de la página*/

window.onload = function () {
}

//*Aquí comenzará todo el código una vez que se ejecute "window.onload"*/

let nameInput = document.querySelector('#nameInput'); //Tomamos el valor desde nuestro HTML, en este caso por el valor "nameInput" y se lo asignamos a la variable "let nameInput"


//Almacenaremos todo lo que el usuario escribe.El evento "change" se dispara cuando el usuario da click en cualquier otro lado de la pantalla y hasta ese momento dejará de guardar información.

nameInput.addEventListener('change', function (event) {
    //console.log(nameInput.value);
    console.log(event.target.value);
});


// El evento "keydown" por ejemplo, se dispara cuando el usuario escribe dentro del input, imprimiendo la información con cada tecla que escribe.

nameInput.addEventListener('keydown', function (event) {
    console.log(event.target.value);

});
// Usamos "querySelector" en reemplazo de "getDocument", ya que así tenemos mayor control de la acción enfocandola a un "id" determinado. 

let button = document.querySelector('#button'); //Asignamos a "let button" la información obtenida en el HTML
button.addEventListener('click', event => {  //La información se recopila y se almacena en la variable justo cuando se dispare el evento, en este caso dado por "click", cuando se de click al botón de enviar, el JS recopila la información y la asigna a la variable declarada anteriormente.


    let nameHeader = document.querySelector('#nameH'); //Aquí mostramos la información recibida en la parte del HTML que está identificada como "nameH"
    nameHeader.textContent = nameInput.value;
});