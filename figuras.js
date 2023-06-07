// Codio del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//codigo del trianulo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//codigo del Circulo

console.group("Circulos");
// Radio
// const radioCirculo = 4;

function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Cirtunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();


function calcularPerimetroCuadrado() {
  const Input = document.getElementById("InputCuadrado");
  const value = Input.value;

  const perimetro = perimetroCuadrado(value);
  const Input_Cuadrade = document.getElementById("Input_Cuadrade");
  Input_Cuadrade.innerText = "[ El perimetro cuadrado es: " + perimetro + " ]";
}

function calcularAreaCuadrado() {
  const Input = document.getElementById("InputCuadrado");
  const value = Input.value;

  const area_Cuadrado = areaCuadrado(value);
  const Input_Cuadrade = document.getElementById("Input_Cuadrade");
  Input_Cuadrade.innerText = "{ El area cuadrada es: " + area_Cuadrado + " ]";
}

//CIRCULO

function calcularDiametroCirculo() {
  const Input = document.getElementById("InputCirculo");
  const value = Input.value;

  const diametro = diametroCirculo(value);
  const Input_Circle = document.getElementById("Input_Circle");
  Input_Circle.innerText = "[ El diametro Circulo es: " + diametro + " ]";
}

function calcularperimetroCirculo() {
  const Input = document.getElementById("InputCirculo");
  const value = Input.value;

  const circulo = perimetroCirculo(value);
  const Input_Circle = document.getElementById("Input_Circle");
  Input_Circle.innerText = "[ El perimetro circulo es: " + circulo + " ]";
}

function calcularAreaCirculo() {
  const Input = document.getElementById("InputCirculo");
  const value = Input.value;

  const area = areaCirculo(value);
  const Input_Circle = document.getElementById("Input_Circle");
  Input_Circle.innerText = "[ El area Circulo es: " + area + " ]";
}

// TRIANGULO

function calcularPerimetroTriangulo() {
  const Input1 = document.getElementById("InputTriangulo1");
  const lado1 = Input1.value;
  const LADO1 = Number(lado1);

  const Input2 = document.getElementById("InputTriangulo2");
  const lado2 = Input2.value;
  const LADO2 = Number(lado2);

  const Input3 = document.getElementById("InputTriangulo3");
  const $base = Input3.value;
  const $BASE = Number($base);
  const triangulo = perimetroTriangulo(LADO1, LADO2, $BASE);
  console.log(triangulo);

  const salida_triangulo = document.getElementById("Input_Triangulo")
  salida_triangulo.innerText = "[ El perimetro del triangulo es: " + triangulo + " ]";
}

function calcularAreaTriangulo() {
  const Input1 = document.getElementById("InputTriangulo1");
  const value1 = Input1.value;
  const Input2 = document.getElementById("InputTriangulo2");
  const value2 = Input2.value;

  const triangulo = areaTriangulo(value1, value2);
  console.log(triangulo);
  const output_area = document.getElementById("Input_Triangulo");
  output_area.innerText = "[ El area del triangulo es: " + triangulo + " ]";
};

