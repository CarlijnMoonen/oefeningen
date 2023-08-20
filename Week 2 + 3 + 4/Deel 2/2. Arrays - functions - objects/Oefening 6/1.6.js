function reverseArray(array){
    let omgedraaideArray = [];

    for (i = array.length - 1; i >= 0; i--){
        omgedraaideArray.push(array[i]);
    }

    return omgedraaideArray;
}

let a = [1, 2, 3];
let b = reverseArray(a);

console.log("Oorspronkelijke array: " + a); //resultaat: [1, 2, 3]
console.log("Omgedraaide array: " + b); //resultaat: [3, 2, 1]