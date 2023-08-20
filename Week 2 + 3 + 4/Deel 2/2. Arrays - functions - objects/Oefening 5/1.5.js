function maakRij(min, max, stap = 1){
    let resultaat = [];

    if (stap > 0){
        for (i = min; i <= max; i += stap){
            resultaat.push(i);
        }
    }
    if (stap < 0){
        for (i = min; i >= max; i += stap){
            resultaat.push(i);
        }
    }

    return resultaat;
}

console.log(maakRij(1, 5, 2)); //resultaat: [1, 3, 5]
console.log(maakRij(3, 8, 1)); //resultaat: [3, 4, 5, 6, 7, 8]
console.log(maakRij(10, 2, -2)); //resultaat: [10, 8, 6, 4, 2]