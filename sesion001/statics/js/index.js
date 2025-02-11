// funcion que imprime el valor obtenido en el prompt()
function imprimirNombre() {
  let nombre = prompt("Escribe tu nombre");
  let campo = document.getElementById("nombreUsuario"); // obtener el elemento con el id "nombreUsuario"

  campo.innerText = `Bienvenido ${nombre}`; // modificar el texto actual del elemento "nombreUsuario"
  console.log("nombre"); // debug
}