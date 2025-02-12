function imprimirNombre() {
  let nombre = prompt("Dame tu nombre");
  let imprimeMiNombre = document.getElementById("nombreUsuario");

  imprimeMiNombre.innerHTML = `Bievenido ${nombre}`;
}

function concatenacionExtension() {
  let nombreUsuario = prompt("Dame tu nombre");
  // crea otra variable con un saludo

  // En un alert imprime, el nombre, mas el saludo y el numero de caracteres del nombre

  // .length para el nombre
  // \n para un salto de linea
  // concatena con + y con balstik
}

function obtenerElTiempo() {
  // Piensa en 90 como la media de edad de un humano
  /*
    365 days in a year
    52 weeks in a year
    12 months in a year.
    */
  // humantext.innerHTML = "Tu tienes <b>" + x + " dias</b>, <b>" + y + " semanas</b>, and <b>" + z +  " meses</b> todavía.";

  const edadHumano = parseInt(document.getElementById("humanAge").value); // obtener el valor numerico del elemento "humanAge"
  const edadRestante = 90 - edadHumano; // calcular el valor restante en anios segun la media de edad humana
  let textoEdad = document.getElementById("humanText"); // obtener el elemento con el id "humanText"

  let diasEdad = edadRestante * 365; // convertir el valor de la variable edadRestante a su equivalente en dias
  let semanasEdad = edadRestante * 52; // convertir el valor de la variable edadRestante a su equivalente en semanas
  let mesesEdad = edadRestante * 12; // convertir el valor de la variable edadRestante a su equivalente en meses

  // modificar el texto actual del elemento "textoEdad"
  textoEdad.innerHTML = "Tu tienes <b>" + diasEdad + " dias</b>, <b>" + semanasEdad + " semanas</b>, y <b>" + mesesEdad +  " meses</b> todavía.";
}

function calcularIBM() {
  // obten los valores de peso y altura del select list
  let weightType = document.getElementById("peso").value;
  let resultadoIMC = document.getElementById("resultadoIBM"); // obtener el elemento con el id "resultadoIBM"
  const pesoHumano = parseInt(document.getElementById("pesoHumano").value); // obtener el valor numerico del elemento "pesoHumano"
  const alturaHumana = parseFloat(document.getElementById("alturaHumana").value); // obtener el valor numerico del elemento "alturaHumana"
  let valorImc = 0;
  let resultado = "";

  // si es libras opera
  // weight /= 2.20462;
  // usa la formula
  // let IMC = weight /  height ** 2;

  // Operador ternario: (condición ? verdadero : falso)
  valorImc = weightType == "kg" ? pesoHumano / alturaHumana ** 2 : (pesoHumano/2.20462) / alturaHumana ** 2;

  // evalua
  // if BMI > 24.9 =overweight";
  // if BMI < 24.9 && BMI >=18.5 = normal weight";
  // if BMI under 18.5 = underweight"

  if (valorImc > 24.9) {
    resultado = "Tienes Sobrepeso";
  } else if (valorImc < 24.9 && valorImc >= 18.5) {
    resultado = "Tienes un Peso Normal";
  } else {
    resultado = "Estas por debajo del Peso Normal";
  }

  // asigna a resultadoIBM
  resultadoIMC.innerHTML = "Tu IMC es: <b>" + valorImc.toFixed(2) + "</b> " + resultado;
}