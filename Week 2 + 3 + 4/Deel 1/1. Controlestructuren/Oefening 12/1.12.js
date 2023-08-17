let aantalLijnen = parseInt(prompt("Voer het aantal lijnen voor de omgekeerde driehoek in (0-10):"));

if (aantalLijnen >= 0 && aantalLijnen <= 10) {
    for (i = 1; i <= aantalLijnen; i++) {
        let lijn = '';

        // Voeg spaties toe voor de omgekeerde driehoek
        for (s = 0; s < aantalLijnen - i; s++) {
            lijn += ' ';
        }

        // Voeg asterisken toe voor de omgekeerde driehoek
        for (j = 0; j < i; j++) {
            lijn += '*';
        }

        console.log(lijn);
    }
} else {
    console.log("Niet mogelijk");
}