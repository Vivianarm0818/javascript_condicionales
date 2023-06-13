let topping = prompt ("¿Qué topping deseas para tu helado? Tenemos tres: Oreo, KitKat, brownie");
let heladoSinTopping = 50;

switch (topping.toLowerCase()) {
    case "oreo":
    heladoSinTopping += 10;
    break;

    case "kitkat":
    heladoSinTopping += 15;
    break;

    case "brownie":
    heladoSinTopping +=20;
    break;

    default:
        alert ("Ese topping no lo tenemos");
}

alert ("El costo del helado es " + heladoSinTopping + "MXN");