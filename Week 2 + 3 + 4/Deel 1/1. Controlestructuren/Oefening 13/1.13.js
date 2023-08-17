let aantalLijnen = 7;

if (aantalLijnen >= 0 && aantalLijnen <= 10) {
    for (i = 1; i <= aantalLijnen; i++) {
        let lijn = '';

        // Voeg spaties toe aan de linkerkant van de driehoek
        for (s = 0; s < aantalLijnen - i; s++) {
            lijn += ' ';
        }

        // Voeg asterisken toe aan de linker- en rechterkant van de driehoek
        for (j = 0; j < 2 * i - 1; j++) {
            lijn += '*';
        }

        console.log(lijn);
    }
} else {
    console.log("Niet mogelijk");
}