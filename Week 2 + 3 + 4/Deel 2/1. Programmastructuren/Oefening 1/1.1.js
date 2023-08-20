//oefening 1a
function driehoek() {
    let aantalLijnen = 10;

    for (i = 1; i <= aantalLijnen; i++) {
        let lijn = " ";

        for (j = 1; j <= i; j++) {
            lijn += "#";
        }

        console.log(lijn);
    }
}
driehoek();



//oefening 1b
function omgekeerdeDriehoek() {
    let aantalLijnen = 7;

    for (i = 1; i <= aantalLijnen; i++) {
        let lijn = " ";

        // Voeg spaties toe voor de omgekeerde driehoek
        for (s = 0; s < aantalLijnen - i; s++) {
            lijn += ' ';
        }

        // Voeg hekje toe voor de omgekeerde driehoek
        for (j = 0; j < i; j++) {
            lijn += '#';
        }

        console.log(lijn);
    }
}
omgekeerdeDriehoek();



//oefening 1c
function symmetrischeDriehoek(){
    let aantalLijnen = 7;

    for (i = 1; i <= aantalLijnen; i++) {
        let lijn = '';

        // Voeg spaties toe aan de linkerkant van de driehoek
        for (s = 0; s < aantalLijnen - i; s++) {
            lijn += ' ';
        }

        // Voeg hekje toe aan de linker- en rechterkant van de driehoek
        for (j = 0; j < 2 * i - 1; j++) {
            lijn += '#';
        }

        console.log(lijn);
    }
}
symmetrischeDriehoek();