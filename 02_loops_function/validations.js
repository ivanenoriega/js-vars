/** Ejercicio 00 **/
changeUI("00", textOut() === "Función ejecutada");
/** Ejercicio 01 **/
changeUI("01", multiply(4) === 8);
/** Ejercicio 02 **/
changeUI("02", concatenate("test", "ing") === "testing");
/** Ejercicio 03 **/
changeUI("03", successor(9) === 10);
/** Ejercicio 04 **/
changeUI("04", successorPlus(5) === 12);
/** Ejercicio 05 **/
changeUI("05", ageCalculator(1990, 2020) === 30);
/** Ejercicio 06 **/
changeUI("06", salaryCalculator(120, 100) === 12000);
/** Ejercicio 07 **/
changeUI("07", commissionCalculator(100) === 90);

// Common functions
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
