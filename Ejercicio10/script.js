
const programa = prompt("Digita el programa de interés: Course, Carrera, Master");
const beca = prompt ("¿Cuentas con alguna beca? Responde Si o No");

let mensualidad;
let duracion;
let precioTotal;

switch (programa.toLowerCase()) {
  case "course":
    mensualidad = 4999;
    duracion = 2;
    break;
  
    case "carrera":
    mensualidad = 3999;
    duracion = 6;
    break;
  
    case "master":
    mensualidad = 2999;
    duracion = 12;
    break;
  
    default:
    alert("El programa seleccionado no está disponible");
}

if (beca.toLowerCase() == "si") {
  const beca = prompt("Seleccione una de las siguientes becas: Facebook, Google o Jesua");
  
  switch (beca.toLowerCase()) {
    case "facebook":
      mensualidad -= mensualidad * 0.2;
      break;
    case "google":
      mensualidad -= mensualidad * 0.15;
      break;
    case "jesua":
      mensualidad -= mensualidad * 0.5;
      break;
    default:
      alert("La beca seleccionada no es válida.");
    
  }

}

precioTotal = mensualidad * duracion;

alert("El costo mensual es de " + mensualidad + " MXN.");
alert("El costo total del programa es de " + precioTotal + " MXN.");