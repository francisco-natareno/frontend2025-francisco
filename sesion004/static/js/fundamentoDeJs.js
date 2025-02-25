function renap(edad) {
  // esperar un segundo, para decir si es mayor de edad
  // si es mayor de edad, les da un DPI
  // si no es mayor de edad, los saca del RENAP, FUERA, REJECT
  // return new PROMISE
  // if, resolve : reject

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      // Operador ternario: (condición ? verdadero : falso)
      edad >= 18 ? resolve('Tenga su DPI') : reject('Fuera, usted es menor de edad.');
    }, 1000);
  });
}

function solicitarDPI() {
  // PROMPT, pedir la edad
  // si es mayor de edad. RESOLVE, felicitamos
  // si no es mayor de edad. REJECT. "lo sentimos"

  // .then
  // .catch

  const edadUsuario = parseInt(prompt("Ingresa tu edad"));

  renap(edadUsuario)
  .then((mensaje) => {
    console.log(`FELICITACIONES: ${mensaje}`);
  })
  .catch((mensaje) => {
    console.log(`LO SENTIMOS: ${mensaje}`);
  });
}

function comprarMcdonalds(efectivo) {
  // Si tiene mas de 65
  // si tiene 65, "Tenga su McDonalds"
  // si tiene menos de 65, "Lo siento, no le alcanza para la hamburguesa"
  return new Promise((resolve, reject) => {
      // Operador ternario: (condición ? verdadero : falso)
      efectivo >= 65 ? resolve('Tenga su McDonalds') : reject('Lo siento.. no le alcanza para la hamburguesa');
  });
}

function comprarPepsi(efectivo) {
  return new Promise((resolve, reject) => {
    // Operador ternario: (condición ? verdadero : falso)
    efectivo >= 5 ? resolve('Ten tu Pepsi') : reject('No te alcanza para la Pepsi');
  })
}

function cargaEfectivo() {
  // Preguntar cuanto efectivo tiene
  // Llamar la promesa y ver si se logra comprar una Mac
  // el mensaje o respuesta se imprime en un alert
  const efectivoDisponible = parseInt(prompt("Cuanto efectivo tienes?"));

  comprarMcdonalds(efectivoDisponible)
  .then(res => {
    alert(res)
    let restoDeEfectivo = parseInt(prompt("Cuanto tienes aun?"));

    return comprarPepsi(restoDeEfectivo);
  })
  .then(res => alert(res))
  .catch(err => alert(err))
}

function quienEsUser1() {
  // https://jsonplaceholder.typicode.com/users/1
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
}

