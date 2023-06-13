

let calificacion = prompt ("Calificanos del 1 al 10");

if (calificacion < 6 && calificacion >=1) {
    alert ("Reprobado");
}

else if (calificacion >= 6 && calificacion <= 8) {
    alert("Regular");
} 

else if (calificacion == 9) {
    alert("Bien");
}

else if (calificacion == 10) {
    alert("Excelente");
}

else {
    alert ("La calificación ingresada no está dentro del rango válido");
}