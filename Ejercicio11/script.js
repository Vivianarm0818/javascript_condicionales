
const tipoVehiculo = prompt ("Digita el tipo de vehículo que tienes: Moto, Coche o Autobús: ");
const distanciaRecorrida = prompt ("Digita la distancia recorrida (solo se permiten valores numéricos): ");
const litros = prompt ("¿Cuántos litros consumiste? digita el valor: ");

let precioPorKilometro;
let litrosExtra;
let pagoTotal;

switch (tipoVehiculo.toLowerCase()) {
  case "coche":
    precioPorKilometro = 0.20;
    break;
  case "moto":
    precioPorKilometro = 0.10;
    break;
  case "autobus":
    precioPorKilometro = 0.5;
    break;
  default:
    alert("Vehículo no válido, por favor verifique los datos ingresados");
}

if (litros <= 100) {
  litrosExtra = 5;
} else {
  litrosExtra = 10;
}

pagoTotal = (precioPorKilometro * distanciaRecorrida) + litrosExtra;

alert ("El total a pagar es: " + pagoTotal + " MXN.");
