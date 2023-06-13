
let diaDeLaSemana = prompt ("Ingresa un día de la semana");

switch (diaDeLaSemana.toLowerCase()) {
    
    case "lunes":
      alert ("Hoy es lunes. ¡Ánimo, comienza una nueva semana!");
      break;
    
      case "viernes":
      alert ("Hoy es viernes. ¡Por fin llegó el esperado fin de semana!");
      break;
    
      case "sabado":
    case "sábado":
    case "domingo":
      alert ("Hoy es fin de semana. ¡Disfruta y relájate!");
      break;
    
      default:
      alert ("El día ingresado no es lunes, viernes, sábado ni domingo.");
  }