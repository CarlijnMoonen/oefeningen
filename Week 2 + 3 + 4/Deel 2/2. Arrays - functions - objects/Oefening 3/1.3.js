// - fibonacci(0) geeft 1 terug
// - fibonacci(1) geeft 1 terug
// - fibonacci(N) geeft fibonacci(N-2) + fibonacci(N-1) terug

function isFibonacci(n){
    if (n === 0 || n === 1){
        return 1;
    }
    else{
        return isFibonacci(n-2) + isFibonacci(n-1);
    }
}

console.log(isFibonacci(0)); // Geeft: 1
console.log(isFibonacci(1)); // Geeft: 1
console.log(isFibonacci(5)); // Geeft: 8 (0, 1, 1, 2, 3, 5, 8)
console.log(isFibonacci(7)); // Geeft: 21 (0, 1, 1, 2, 3, 5, 8, 13, 21)