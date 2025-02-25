/**
 * 
 * @param { number } num1 sumando1 de la adicion
 * @param { number } num2 sumando2 de la adcion
 * @returns 
 */
const suma = (num1, num2) => {
  return num1 + num2
}

/**
 * 
 * @param { number } num1 minuendo de la resta
 * @param { number } num2 sustraendo de la resta
 * @returns 
 */
const resta = (num1, num2) => {
  return num1 - num2
}

/**
 * 
 * @param { number } num1 factor1 de la multiplicacion
 * @param { number } num2 factor2 de la multiplicacion
 * @returns 
 */
const multiplicacion = (num1, num2) => num1 * num2;

/**
 * 
 * @param { number } num1 num1 dividendo de la division
 * @param { number } num2 num2 divisor de la division
 * @returns 
 */
const division = (num1, num2) => num1 / num2;

function obtenerInputs() {
  const numero1 = parseInt(document.getElementById('numero1').value);
  const numero2 = parseInt(document.getElementById('numero2').value);

  return [numero1, numero2];
}

/**
 * 
 * @param { number } num1
 * @param { number } num2
 * @param { function } operacionARealizar
 * @returns number
 */
function operar(num1, num2, operacionARealizar) {
  return operacionARealizar(num1, num2);
}

function pintarPantalla(nuevoValor) {
  document.getElementById("operacion-resultado").innerText = nuevoValor;
}


/**
* 
* @param { string } operacionArealizar Esto define el tipo de operacion a realizar
*/
function operacion(operacionArealizar) {
  //const numeros = obtenerInputs()
  //let num1 = numeros[0];
  //let num2 = numeros[1];

  // Destructuring (desestructuracion)
  const [num1, num2] = obtenerInputs();
  let resultado = 0;
  //const resultado = operar(num1, num2, suma);

  switch (operacionArealizar) {
    case 'suma':
      resultado = operar(num1, num2, suma);
      break;

    case 'resta':
      resultado = operar(num1, num2, resta);
      break;

    case 'multiplicacion':
      resultado = operar(num1, num2, multiplicacion);
      break;

    case 'division':
      resultado = operar(num1, num2, division);
      // comprobar si el resultado es decimal o entero
      if (resultado % 1 != 0) {
        // el resultado es decimal, usar el metodo toFixed() para redondear a 2 posiciones decimales
        resultado = resultado.toFixed(2);
      }
      break;
  
    default:
      break;
  }

  pintarPantalla(resultado);
  console.log(resultado);
}