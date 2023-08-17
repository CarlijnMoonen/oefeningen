let aantalLijnen = 7;

for (i = 1; i <= aantalLijnen; i++){
    let lijn = " ";

    for (j = 1; j <= i; j++){
        lijn += "#";
    }

    console.log(lijn);
}