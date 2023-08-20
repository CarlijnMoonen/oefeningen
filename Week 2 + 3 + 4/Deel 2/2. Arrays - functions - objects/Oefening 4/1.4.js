function telChar(woord, symbool){
    let count  = 0;
    for (i = 0; i < woord.length; i++){
        if(woord[i] === symbool){
            count++;
        }
    }
    return count;
}

let woord = "programmeren";
let symbool = "m";
console.log("Het symbool " + symbool + " komt " + telChar(woord, symbool) + " keer voor in het woord " + woord + ".");

function telB(woord){
    return telChar(woord, 'B' && 'b');
}

let zin = "De opleiding programmeren is heel leuk! En bananen zijn niet lekker.";
console.log("De letter 'B' of 'b' komt " + telB(zin) + " voor.");
