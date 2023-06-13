
let numero1 = prompt ("Ingresa el primer número");
let numero2 = prompt ("Ingresa el segundo número");
let numero3 = prompt ("Ingresa el tercer número");

if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
    alert ("Hay dos números iguales");
}

else if (numero1 > numero2 && numero1 > numero3) {
    alert(numero1 + " es mayor");
} 

else if (numero2 > numero1 && numero2 > numero3) {
    alert (numero2 + " es mayor");
}

else if (numero3 > numero1 && numero3 > numero2) {
    alert (numero3 + " es mayor");
}

