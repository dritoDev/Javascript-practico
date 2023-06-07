function calcularPrecioConDescuento($_precio, $_descuento) {
  const porcentajePrecioConDescuento = 100 - $_descuento;
  const precionConDescuento = ($_precio * porcentajePrecioConDescuento) / 100;

  return precionConDescuento;
}

const cupon = [
  {
    name: "Cuponvalue",
    Descuento: 15,
  },
  {
    name: "Cuponvalue",
    Descuento: 30,
  },
  {
    name: "Cuponvalue",
    Descuento: 25,
  },
];

function onClickButtonPreceDiscount() {
  const InputPrice = document.getElementById("InputPrice");
  const pricevalue = Number(InputPrice.value);

  const InputCupon = document.getElementById("InputCupon");
  const Descuento = Number(InputCupon.value);

  const PrecioDecuento = calcularPrecioConDescuento(pricevalue, Descuento);

  const result = document.getElementById("_price");
  result.innerText = "El precio con descuento es: $" + PrecioDecuento;
  console.log(PrecioDecuento);
}
