// - isEven(0) geeft true terug
// - isEven(1) geeft false terug
// - isEven(N) geeft isEven(N-2) terug.

function isEven(n){
    if (n === 0){
        return true;
    }
    else if (n === 1){
        return false;
    }
    else{
        return isEven(n-2);
    }
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(5));