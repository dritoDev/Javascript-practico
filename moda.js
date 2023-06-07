const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

// console.group("lista1");
// console.log(lista1);
// console.groupEnd();

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

Object.entries(lista1Count).sort(function (valorAcumulado1, nuevoValor) {
  valorAcumulado1 - nuevoValor;
});

const lista1Array = Object.entries(lista1Count).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

// console.group("lista1Array")
// console.log(lista1Array)
// console.groupEnd()

const moda = lista1Array[lista1Array.length - 1];

// const Moda = document.getElementById("moda");
// Moda.innerText = "la moda es " + moda;

// console.group("Moda")
// console.log(moda)
// console.groupEnd()
