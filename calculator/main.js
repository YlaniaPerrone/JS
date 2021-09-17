let total;

let valeur1 = parseInt(prompt("Veuillez entrer la première valeur"));
let operation = prompt("Opération (+,-,*,/) ");
let valeur2 = parseInt(prompt("Veuillez entrer la deuxième valeur"));


switch (operation){
    case "+" :
        total = valeur1 + valeur2
        alert(total.toFixed(2) );
        break
    case "-" :
        total = valeur1 - valeur2
        alert(total.toFixed(2) );
        break
    case "*" :
        total = valeur1 * valeur2
        alert(total.toFixed(2) );
        break
    case "/" :
        total = valeur1 / valeur2
        alert(total.toFixed(2) );
        break
}
//
// function addition(value1, oparation, value2) {
//    alert(value1 + value2);
// }
//
// function sustraction(value1, oparation, value2) {
//     return value1 - value1;
// }
//
// function division(value1, oparation, value2) {
//     return value1 / value1;
// }
// function multiplication(value1, oparation, value2) {
//     return value1 * value1;
// }