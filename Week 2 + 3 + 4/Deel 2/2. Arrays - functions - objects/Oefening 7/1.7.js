function berekenAfstand(punt1, punt2){
    let deltaX = punt1.x - punt2.x;
    let deltaY = punt1.y - punt2.y;
    let afstand = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    return afstand;
}

let punt1 = {x:1, y:1};
let punt2 = {x:2, y:3};
let afstand = berekenAfstand( punt1, punt2 );
console.log("De afstand tussen punt1 en punt2 is: " + afstand);