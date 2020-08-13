/** Ejercicio 00 **/
changeUI("00", value && value === 85);

/** Ejercicio 01 **/
changeUI("01", color && color === "red");

/** Ejercicio 02 **/
changeUI("02", two && two === true);

/** Ejercicio 03 **/
changeUI("03", operation && operation === 4 * 7);

/** Ejercicio 04 **/
changeUI("04", valueA && valueB && valueB === valueA + 5);

/** Ejercicio 05 **/
changeUI("05", name && lastName && text && text === "Hola Maria Diaz!");

/** Ejercicio 06 **/
changeUI(
  "06",
  nameA &&
    lastNameA &&
    textA &&
    textA === "Hola Maria, hemos registrado tu usuario como diaz_maria"
);

/** Ejercicio 07 **/
changeUI(
  "07",
  nameB &&
    salary &&
    textB &&
    textB === "Hola Maria, el saldo de tu cuenta es $35.000,00"
);
/** Ejercicio 08 **/
changeUI(
  "08",
  exercise08(100) === false &&
    exercise08(150) === true &&
    exercise08(50) === false
);
/** Ejercicio 09 **/
changeUI(
  "09",
  exercise09(51) === true && exercise09(50) === true && exercise09(25) === false
);

/** Ejercicio 10 **/
changeUI(
  "10",
  exercise10(80) === false &&
    exercise10(101) === true &&
    exercise10(201) === false &&
    exercise10(199) === true
);

function changeUI(id, validation) {
  if (validation) {
    changeToDone(id);
  } else {
    changeToError(id);
  }
}

function changeToDone(id) {
  var element = document.getElementById(id);
  var newElement = document.createElement("p");
  newElement.className = "task__status task__status--done";
  newElement.innerHTML = "Estado: Completo!";
  element.outerHTML = newElement.outerHTML;
}

function changeToError(id) {
  var element = document.getElementById(id);
  var newElement = document.createElement("p");
  newElement.className = "task__status task__status--error";
  newElement.innerHTML = "Estado: Ocurrio un error...";
  element.outerHTML = newElement.outerHTML;
}
