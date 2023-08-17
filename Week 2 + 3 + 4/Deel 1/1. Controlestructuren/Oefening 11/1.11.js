let aantalLijnen = parseInt(prompt("Voer het aantal lijnen voor de driehoek in (0-10):"));

if (aantalLijnen >= 0 && aantalLijnen <= 10) {
    for (i = 1; i <= aantalLijnen; i++) {
        let lijn = '';

        for (j = 1; j <= i; j++) {
            lijn += '#';
        }

        console.log(lijn);
    }
}
else {
    console.log("Niet mogelijk");
}