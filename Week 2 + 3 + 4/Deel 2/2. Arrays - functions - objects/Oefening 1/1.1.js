//oefening 1a
function minimum(a, b) {

    return a < b ? a : b;
}

//controleren waarde a kleiner dan b
//? geeft voorwaarde aan
//a als de voorwaarde 'a < b' waar is
//: scheidingsteken
//b als de voorwaarde 'a < b' niet waar is

//volledig uitgeschreven:
// if (a < b){
//     return a;
// }
// else {
//     return b;
// }

let number1 = 10;
let number2 = 5;
let min = minimum(number1, number2);
console.log("Het minimum van " + number1 + " en " + number2 + " is: " + min);


//oefening 1b
function minimaleB() {
    let array = [-1, 2, 6, 22];

    let max = array[0];
    let min2 = array[0];

    for (i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min2) {
            min2 = array[i];
        }
    }

    console.log("Het minimum is: " + min2);
}
minimaleB();

