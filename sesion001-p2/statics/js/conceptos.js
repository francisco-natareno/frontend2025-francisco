// Funcion como Expresion
const suma = function(numero1, numero2) {
  let resultado = numero1 + numero2;

  return resultado;
}

// Funcion de Flecha
const multiplicacion = (numero1, numero2) => {
  let resultado = numero1 * numero2;

  return resultado;
}

const division = (numero1, numero2) => {
  let resultado = numero1 / numero2;

  // comprobar si el resultado es decimal o entero
  if (resultado % 1 != 0) {
    // el resultado es decimal, usar el metodo toFixed() para redondear a 2 posiciones decimales
    return resultado.toFixed(2);
  } else {
    return resultado;
  }
}

const obtenerValorDeDom = function(id) {
  let elemento = parseInt(document.getElementById(id).value);

  return elemento
}

function saludame1() {
  alert("Hola");
}

function saludame2(nombre) {
  alert(`Hola, bienvenido ${nombre}`);
}

// Funcion Declarada
function operacion() {
  let num1 = obtenerValorDeDom("numero1"); // obtener el valor numerico del elemento "numero1"
  let num2 = obtenerValorDeDom("numero2"); // obtener el valor numerico del elemento "numero2"
  let operacionElegida = prompt("Que operacion deseas hacer? \nSuma \nResta \nMultiplicacion \nDivision");
  let resultado;

  const resta = function(numero1, numero2) {
    let resultado = numero1 - numero2;
    
    return resultado;
  }

  // validar si hay informacion ingresada en el prompt
  if (operacionElegida) {
    switch (operacionElegida.toLowerCase()) {
      case 'suma':
        resultado = suma(num1, num2);
        break;
  
      case 'resta':
        resultado = resta(num1, num2);
        break;
  
      case 'multiplicacion':
        resultado = multiplicacion(num1, num2);
        break;
  
      case 'division':
        resultado = division(num1, num2);
        break;
    
      default:
        break;
    }
  
    alert(`El resultado de la operacion ${operacionElegida} es: ${resultado}`);
  } else {
    alert('Debes elegir una operacion valida!');
  }
}

function dimeQuienEres() {
  const yoSoy = 'Yo soy la funcion "Dime Quien Eres"';

  const quienSoy1 = function() {
    console.log("Llamando a quienSoy1")
    alert(yoSoy);
  }

  const quienSoy2 = () => {
    console.log("Llamando a quienSoy2")
    alert(yoSoy);
  }

  quienSoy1();
  quienSoy2();
}